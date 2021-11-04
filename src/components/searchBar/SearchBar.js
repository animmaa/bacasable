import React,{useState,useEffect} from 'react';
import axios, { Axios } from "axios"
import Alert from "../Alert";

import { v4 as uuidv4 } from "uuid";


const SearchBar = ({onHandle}) =>{
    const [dataProducts,setDataProducts] = useState([])
    const [query, setQuery] = useState("");
    const [details, setDetails] = useState([]);
    const [alert, setAlert] = useState("");

    //  const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${query}&sort_by=unique_scans_n&page_size=20&page=50&sort_by=unique_scans_n&json=true` // alergen 
    
    //const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=allergens&tag_contains_0=does_not_contain&tag_0=${query}&additives=without&page_size=60&&page=3&json=true`

    useEffect (async () => {
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=true`; // By product name
        
        const apiResponse = await axios(url);
       
        // if (query !== ""){
        //     console.log(apiResponse.data)
            
        // }


            
            setDataProducts(apiResponse.data.products)
            setDetails(apiResponse.data.products)
            onHandle(dataProducts)

            // }else{
            //     setAlert("Please fill the form to find products suggestions")
            // }
       
        
        

    },[query]);

    // onChange input value get value
    const onChange = e => {
        setQuery(e.target.value)
    };

    // on click get data with conditions
    const onSubmit = e => {
        e.preventDefault();
        if ( query == ""){
            setAlert("Please fill the form to find products suggestions")

        }
        
       
    };

    return (

    <div className="data-container">
        <form 
            onSubmit={onSubmit} 
            className="search-form">
            {alert !== "" && <Alert alert={alert} />}
            
            <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="on"
                placeholder="dietary requirement"
            />
            <input 
                type="submit" 
                value="Find products" 

            />

        </form>

            {/* <div className="recipes">
            {details !== [] &&
            details.map(info => 
            <InfoDetails key={uuidv4()} ingredients={info} />)}
            </div> */}

    </div>

    );
    
};

export default SearchBar;