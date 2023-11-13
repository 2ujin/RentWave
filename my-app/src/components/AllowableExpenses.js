import {AddpropertyAllowableExpense, GetMonthlyAllowableExpenses} from '../ApiServices/AddExpenses';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AllowableExpenses({ 
    itemId,
    showAllowableExpenses, SetAllowableExpenses, 
})
{

    const params = useParams();
    const [showForm, setShowForm] = useState(false);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [dateIncurred, setDateIncurred] = useState('');
    

    useEffect(() => { 
        
        fetchAllowableExpenses()
        
    }, []);

    async function fetchAllowableExpenses(){
        try {            
            const id = params.id;   
            const DBallowableExpenses = await GetMonthlyAllowableExpenses(id)
            SetAllowableExpenses(DBallowableExpenses)
        } catch (error) {
            console.error(error);
        }

    }


    function reverseDate(date) {
        const parts = date.split('-');
        return [parts[2], parts[1], parts[0]].join('-');
      }

    // async function SendExpense(expensedata){
    //     try {
    //         const recordexpense = await 
           
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }     
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const AllowableExpenseDate = reverseDate(e.target.elements.dateIncurred.value)
        const id = params.id;
    
        const allowableExpense = {
            allowableExpenseDescription:e.target.elements.description.value,
            allowableExpenseAmount:e.target.elements.amount.value,
            expenseIncurred:AllowableExpenseDate,
            periodId: itemId,
            propertyID: id
        }       
    
        try {
            const responseExpenses = await AddpropertyAllowableExpense(allowableExpense)
                        
            if(responseExpenses.status === 201){
                SetAllowableExpenses((prev)=>[...prev,responseExpenses.data] )
            } else {
                console.log(responseExpenses.error)
            }  
        } catch (error) {
            console.log(error)
        }      
    };    

    return (
        <div>

            <h1>allowableExpenses</h1>
            {showAllowableExpenses.map((expense) => {
                if(expense.PeriodId === itemId){
            return (
                
                <div key={expense.id}>
                    <ul>
                        <li>
                            {expense.Description} cost {expense.Amount}
                        </li>

                    </ul>
                </div>
            )}

        })}


            <button onClick={() => setShowForm(!showForm)}>Add Allowable Expense</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Description:
                        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Amount:
                        <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    </label>
                    <label>
                        Date Incurred:
                        <input type="date" name="dateIncurred" value={dateIncurred} onChange={e => setDateIncurred(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            )}
        </div>
    );
}

export default AllowableExpenses;