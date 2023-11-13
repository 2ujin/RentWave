import React, { useEffect, useState } from 'react';
import Monthly from './Monthly'
import '../ComponentStyling/RentalsStyling.css';
import { useParams } from 'react-router-dom';
import { AddpropertyRents, MonthlyInterest, MonthlyCapital, GetMonthlyInterestExpense, GetMonthlyCapitalRepayments,GetMonthlyRents } from '../ApiServices/rental';


function Rentals({ propertyId }) {
   
    const [showForm, setShowForm] = useState(false);
    const [formValues, setFormValues] = useState({
        startPeriod: '',
        endPeriod: '',
        rentalIncome: '',      
        loanInterest: '',
        capitalRepayment: ''
    });

    const params = useParams();
    const [showAllowableExpenses,SetAllowableExpenses] = useState([]);
    const [showDisallowableExpenses,SetDisallowableExpenses] = useState([]);    
    const [showRentalIncome,SetRentalIncome] = useState([]);
    const [showInterestExpense,SetRentalExpense] = useState([]);    
    const [showCapitalRepayment,SetCapitalRepayment] = useState([]);


    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    function reverseDate(date) {
        const parts = date.split('-');
        return [parts[2], parts[1], parts[0]].join('-');
      }

 
      const handleSubmit = async (event) => {
        event.preventDefault();
        const startperiod = event.target.elements.startPeriod.value;
        const endperiod = event.target.elements.endPeriod.value;
        
        const startPeriodreverse = reverseDate(startperiod);
        const endPeriodreverse = reverseDate(endperiod)
        
        const MonthlyRentals = {
            startDate:startPeriodreverse,
            endDate:endPeriodreverse,  
            PropertyID:params.id,
            Rental:event.target.elements.rentalIncome.value            
        }
    
        const InterestRepayment = {
            startDate:startPeriodreverse,
            endDate:endPeriodreverse, 
            PropertyID:params.id,
            InterestPayable: event.target.elements.loanInterest.value,
        }
    
        const CapitalRepayment = {
            startDate:startPeriodreverse,
            endDate:endPeriodreverse, 
            PropertyID:params.id,
            CapitalRepayment:event.target.elements.capitalRepayment.value
        }
         
        try {
            const rentalResponse = await AddpropertyRents(MonthlyRentals);
            const interestResponse = await MonthlyInterest(InterestRepayment);
            const capitalResponse = await MonthlyCapital(CapitalRepayment);
    
            if (rentalResponse.status === 201) {
                SetRentalIncome((prevRents) => [...prevRents, rentalResponse.data]);
            } else {
                console.log(rentalResponse.error);
            }
    
            if (interestResponse.status === 201) {
                SetRentalExpense((prevExpenses) => [...prevExpenses, interestResponse.data]);
            } else {
                console.log(interestResponse.error);
            }
    
            if (capitalResponse.status === 201) {
                SetCapitalRepayment((prevRepayments) => [...prevRepayments, capitalResponse.data]);
            } else {
                console.log(capitalResponse.error);
            }
        } catch (error) {
            console.error(error);
        }

        //        setFormValues({
        //     startPeriod: '',
        //     endPeriod: '',
        //     rentalIncome: '',
        //     loanInterest: '',
        //     capitalRepayment: ''
        // });

        // setShowForm(false);
    }


    useEffect(() => { 
        
        fetchMonthlyData()
        
    }, []);

    async function fetchMonthlyData() {

        try {          
             
            
            const id = params.id;        

            const GetMonthlyRentals = await GetMonthlyRents(id);            
            const propertyInterestExpense = await GetMonthlyInterestExpense(id);
            const getPropertyCapitalrepayment = await GetMonthlyCapitalRepayments(id);

            SetRentalIncome(GetMonthlyRentals);
            SetRentalExpense(propertyInterestExpense);
            SetCapitalRepayment(getPropertyCapitalrepayment);


        } catch (error) {
            console.error(error);
        }
    }  

    return (

        <div >        

        <div className='page'>
        
        <div className='rental-summary'>
            <h1>Rental Summary</h1>  
        </div>


            <button className='add-month-button' onClick={() => setShowForm(true)}>Add Month</button>
           
           
            {showForm && (
                <form className='form-submit' onSubmit={handleSubmit}>           
                                   
                    <div  className='inputname'>     
                    <label className='inputlabel'>Start period: </label>                                      
                    <input className='inputbar' type="date" name="startPeriod" value={formValues.startPeriod} onChange={handleChange} />
                    </div>                    
                    
                    <div className='inputname'>
                    <label  className='inputlabel'>End period:</label>
                    <input className='inputbar' type="date" name="endPeriod" value={formValues.endPeriod} onChange={handleChange} />
                    </div>
                    
                    <div className='inputname'>
                    <label className='inputlabel'>Rental income for the month:</label>
                    <input className='inputbarvalue' type="number" name="rentalIncome" value={formValues.rentalIncome} onChange={handleChange} />
                    </div>

                    <div className='inputname'>                   
                    <label className='inputlabel'>Loan Interest: </label>
                    <input type="number" name="loanInterest" value={formValues.loanInterest} onChange={handleChange} />
                    </div>

                    <div className='inputname'>
                    <label className='inputlabel'>Capital Repayment: </label>
                    <input  type="number" name="capitalRepayment" value={formValues.capitalRepayment} onChange={handleChange} />
                   </div>

                    <input type="submit" value="Submit" />
                </form>
            )}
            
            
            <div>
            <Monthly 
                        showAllowableExpenses={showAllowableExpenses} 
                        SetAllowableExpenses={SetAllowableExpenses}
                        showDisallowableExpenses={showDisallowableExpenses} 
                         SetDisallowableExpenses={SetDisallowableExpenses}
                        showRentalIncome={showRentalIncome} 
                        SetRentalIncome={SetRentalIncome}
                        showInterestExpense={showInterestExpense} 
                        SetRentalExpense={SetRentalExpense}
                        showCapitalRepayment={showCapitalRepayment} 
                        SetCapitalRepayment={SetCapitalRepayment}
                />
                </div>
            </div>
        </div>
    )
}

export default Rentals;