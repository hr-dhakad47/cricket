import axios from "axios";

export const currentMatch = async ()=>
{
    try{
       let res = await axios.get("https://api.cricapi.com/v1/currentMatches?apikey=1ac07ea2-b129-44be-95af-ca87a4863054&offset=0")
             
       return res.data.data

    }

    catch(err)
    {
        return err
    }
}