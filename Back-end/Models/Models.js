const schema = require('../Server/dbmodels')

async function addProperty(property) {
    try {
        const data = await schema.Propertylisting.create({PropertyName:property.name})
        return data.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

async function getPropertyListing() {
    try {
         const data = await schema.Propertylisting.findAll({})
         return data
    } catch (error) {
        console.log(error)  
        throw error 
    }
}

////models for the summary page

async function getPropertyName(id){
    try {        
        const data = await schema.Propertylisting.findOne({ where: { ID: id } });
        return data.dataValues;

    } catch (error) {
    
        throw error
    }
}

///models for adding rental income and interest and capital 

async function addRentalIncome(PropertyID,propertydata){
    try {     
           
        const rentalData = await schema.RentalIncome.create({
            StartPeriod: propertydata.startDate,
            EndPeriod: propertydata.endDate,       
            Rental: propertydata.Rental,
            PropertyID:propertydata.PropertyID
        })
        
        return rentalData.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

async function addInterestExpense(PropertyID,propertydata){
    try {     
           
        const InterestExpenseData = await schema.InterestExpense.create({
            StartPeriod: propertydata.startDate,
            EndPeriod: propertydata.endDate,       
            InterestExpense: propertydata.InterestPayable,
            PropertyID:propertydata.PropertyID
        })
        
        return InterestExpenseData.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

async function addCapitalRepayment(PropertyID,propertydata){
    try {     
          
        const CapitalRepaymentData = await schema.CapitalRepayments.create({
            StartPeriod: propertydata.startDate,
            EndPeriod: propertydata.endDate,       
            CapitalRepaid: propertydata.CapitalRepayment,
            PropertyID:propertydata.PropertyID
        })
                
        return CapitalRepaymentData.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

///models for getting the rental income, interest and capital 

async function getPropertyMonthlyRentals(id){
    try {    

        const data = await schema.RentalIncome.findAll({ where: { PropertyID: id } });
        
        return data.map(item => item.dataValues);
    } catch (error) {    
        throw error
    }
}

async function getPropertyMonthlyInterestExpense(id){
    try {       
       
        const data = await schema.InterestExpense.findAll({ where: { PropertyID: id } });
        return data.map(item => item.dataValues);
    } catch (error) {    
        throw error
    }
}

async function getPropertyCapitalrepayments(id){
    try {        
        const data = await schema.CapitalRepayments.findAll({ where: { PropertyID: id } });
        return data.map(item => item.dataValues);
    } catch (error) {    
        throw error
    }
}

//models for posting allowable and disallowable expenses

async function addAllowableExpense(data){
    try {     
           
        const expenseData = await schema.AllowableExpenses.create({
            Description: data.allowableExpenseDescription,
            Amount:data.allowableExpenseAmount,
            PeriodId: data.periodId,
            PropertyID:data.propertyID,
            DateIncurred: data.expenseIncurred,       
            
        })    
        
        return expenseData.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

async function getAllowableExpenses(id){
    try {     
         
        const data = await schema.AllowableExpenses.findAll({ where: { PropertyID: id } });
        return data.map(item => item.dataValues);
    } catch (error) {    
        throw error
    }
}

async function addDisallowableExpense(data){
    try {        
           
        const expenseData = await schema.DisallowableExpenses.create({
            Description: data.disallowableExpenseDescription,
            Amount:data.disallowableExpenseAmount,
            PeriodId: data.PeriodId,
            PropertyID:data.propertyID,
            DateIncurred: data.expenseIncurred,  
        })
        
        return expenseData.dataValues
        
    } catch (error) {
        console.log(error)
    }
}

async function getDisallowableExpenses(id){
    try {        
        const data = await schema.DisallowableExpenses.findAll({ where: { PropertyID: id } });
        return data.map(item => item.dataValues);
    } catch (error) {    
        throw error
    }
}


module.exports = {getPropertyCapitalrepayments,getPropertyMonthlyInterestExpense,
                getPropertyMonthlyRentals,addCapitalRepayment,addProperty, 
                getPropertyListing, getPropertyName, addRentalIncome, addInterestExpense,
                addAllowableExpense,addDisallowableExpense,getAllowableExpenses,getDisallowableExpenses     
            
            }

