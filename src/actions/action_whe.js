import axios from 'axios';
export const FETCH_WHEATHER="fetchwheather";
const API_KEY="e41e515cdd677ff2cc73d3bf396c9131";
export function fetchwheather(city){
    const url=`http://api.openweathermap.org/data/2.5/forecast?q=${city},india&appid=${API_KEY}`;
    const req=axios.get(url);
    console.log("in action");
    console.log(req);
    return({
        type:FETCH_WHEATHER,
        payload:req
    })

   
}