let regionName = "Asia";
let population = "200000"; 
const api_Url = "https://restcountries.com/v3.1/all";
let totalPopulation;
let regionBased_Contry = [];
let populationBased_Contry = [];
let getDetails = [];
let dollerBased_Country = [];
let request=new XMLHttpRequest();
request.open('Get',api_Url);
// ***Start fetch contry using region***
const fetchCountryUsingRegion = (region) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {
                if(elm.continents[0] == region){
                    regionBased_Contry.push(elm.name.common);            
                }
            });
            console.log(regionBased_Contry);   
        }
    };
    request.send();    
}
//fetchCountryUsingRegion(regionName);
// ***End fetch contry using region***

// ***Start fetch contry using population***
const fetchCountryUsingPopulation = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {                
                if(elm.population < count){                   
                    populationBased_Contry.push(elm.name.common);                    
                }
            });   
            console.log(populationBased_Contry);
        }
    };
    request.send();    
}
//fetchCountryUsingPopulation(population);
// ***End fetch contry using population***


// ***Start fetchDetails***
const fetchDetails = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.forEach(elm => {                
                let objData = {};
                objData.name = elm.name.common;
                objData.flag = elm.flag;
                objData.capital = elm.capital;
                getDetails.push(objData);
            });   
            console.log(getDetails);
        }
    };
    request.send();    
}
//fetchDetails();
// ***End fetchDetails***


// ***Start getPopulation***
const getPopulation = (count) => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            totalPopulation = data.reduce((sum,elm) => {                              
                return sum+elm.population ;
            },0); 
            
            console.log(totalPopulation);
        }
    };
    request.send();    
}
//getPopulation(population);
// ***End getPopulation***

// ***Start getPopulation***
const fetchCountryUsingDoller = () => {
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            data.filter(elm => {                
                if(typeof(elm.currencies) != "undefined" && elm.currencies.hasOwnProperty("USD")){                 
                    dollerBased_Country.push(elm.name.common);
                }                           
            });   
            console.log(dollerBased_Country);
        }
    };
    request.send();    
}
fetchCountryUsingDoller();
// ***End getPopulation***
