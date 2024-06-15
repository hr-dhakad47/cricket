import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CountryList() {
  const [countryList, setCountryList] = useState([])
  

  useEffect(()=>
  {
    axios.get("https://api.cricapi.com/v1/countries?apikey=1ac07ea2-b129-44be-95af-ca87a4863054&offset=0").
    then((res)=>{
      return res.data.data
    }).then((list)=>{
      setCountryList(list);
    }).catch((err)=>
    {
      console.log(err)
    })
  },[])

  return (
    <div>
        <h1 className='text-center py-1'>Country List</h1>
        <div id='country-box'>
            {
              countryList.map((country)=>{
                return(
                  <div className="country-card">
                <img src={country.genericFlag}
                className='country-flag' />
                <h3 className='mt-3'>{country.name}</h3>
              </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default CountryList