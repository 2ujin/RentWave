import React, { useEffect, useState } from 'react';
import Rentals from './rentals';
import { GetPropertysummary } from '../ApiServices/propertylanding'
import { useParams } from 'react-router-dom';
import '../ComponentStyling/summaryStyling.css';


function Summary(){
    const [propertysummary, setpropertysummary] = useState([])
   
    const params = useParams();

    async function fetchPropertySummary(id) {
        const property = await GetPropertysummary(id);
        setpropertysummary(property);
    }

    useEffect(() => {        
        const id = params.id;
        fetchPropertySummary(id);
    }, [params.id]);
    
    return (
        <div> 
        
        <div className='summary'>
            {<h1>Summary for {propertysummary.PropertyName}</h1>}           
        </div>
       
        <div>    
            <Rentals propertyId={params.id}/>
        </div>
        
        </div>
    )
}

export default Summary;

