const models = require('../Models/Models.js')


async function addProperty(request,response) {
    try {     
        const data = await models.addProperty(request.body)          
        response.status(201).send(data)
        
    } catch (error) {
        console.log(error)
        response.status(500).send(error)
    }
}

async function getPropertyListing(request,response){
    try {       
        const listing = await models.getPropertyListing()
        response.send(listing)        
    } catch (error) {
        response.status(500).send(err)
    }
}

async function getPropertyDetails(request, response) {
    try {
        const params = request.params;      
        const data = await models.getPropertyName(params.id);
        response.send(data)      
        } catch (error) {
        response.status(500).send(error);
        }
    }

///controllers for posting rental income,interest expense,loan repayment

 async function recordRentalIncome(request,response){
        try {
            const PropertyID = request.params    
            const data = await models.addRentalIncome(PropertyID,request.body)
            response.send(data)
        } catch (error) {
        response.status(500).send(error)
        }
    }

 async function recordInterestExpense(request,response){
    try {
        const PropertyID = request.params    
        const data = await models.addInterestExpense(PropertyID,request.body)
        response.send(data)

    } catch (error) {
    response.status(500).send(error)
    }
 }

 async function recordCapitalRepayment(request,response){
    try {
        const PropertyID = request.params    
        const data = await models.addCapitalRepayment(PropertyID,request.body)
        response.send(data)

    } catch (error) {
    response.status(500).send(error)
    }
 }

////controllers for getting rental income, interest expense and loan repayment


async function getPropertyMonthlyRents(request,response){
    try {    
        const PropertyID = request.params  
        const MonthlyRents = await models.getPropertyMonthlyRentals(PropertyID.id)
        response.send(MonthlyRents)        
    } catch (error) {
        response.status(500).send(error)
    }
}

async function getMonthlyInterest(request,response){
    try {       
        const PropertyID = request.params         
        const MonthlyInterestExpense = await models.getPropertyMonthlyInterestExpense(PropertyID.id)
        response.send(MonthlyInterestExpense)        
    } catch (error) {
        response.status(500).send(error)
    }
}

async function getMonthlyCapitalRepayments(request,response){
    try {    
        const PropertyID = request.params    
        const MonthlyInterestExpense = await models.getPropertyCapitalrepayments(PropertyID.id)
        response.send(MonthlyInterestExpense)        
    } catch (error) {
        response.status(500).send(error)
    }
}


///controllers for posting allowable and disallowable expense

async function recordAllowableExpense(request,response){
    try {  
        const dataExpenses = await models.addAllowableExpense(request.body)
        response.send(dataExpenses)
    } catch (error) {
        response.status(500).send(error)
    }
}

async function recordDisallowableExpense(request,response){
    try {   
        const data = await models.addDisallowableExpense(request.body)
        response.send(data)
    } catch (error) {
        response.status(500).send(error)
    }
}

///controllers for getting allowable and disallowable expense

async function getPropertyAllowableExpenses(request,response){
    try {       
        const PropertyID = request.params      
        const MonthlyAllowableExpenses = await models.getAllowableExpenses(PropertyID.id)
        response.send(MonthlyAllowableExpenses)        
    } catch (error) {
        response.status(500).send(error)
    }
}

async function getPropertyDisallowableExpenses(request,response){
    try {       
        const PropertyID = request.params         
        const MonthlyDisallowableExpenses = await models.getDisallowableExpenses(PropertyID.id)
        response.send(MonthlyDisallowableExpenses)        
    } catch (error) {
        response.status(500).send(error)
    }
}



module.exports = {recordDisallowableExpense,recordAllowableExpense,getPropertyMonthlyRents,
                getMonthlyCapitalRepayments,recordInterestExpense,recordCapitalRepayment,addProperty, 
                getPropertyListing,getPropertyDetails,recordRentalIncome,getMonthlyInterest,
                getPropertyDisallowableExpenses,getPropertyAllowableExpenses }