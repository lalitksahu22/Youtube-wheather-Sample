import React from 'react';

var seat=(props)=>{
    console.log("mani")
    console.log(props.availability_array)
if(props.availability_array==null || props.availability_array.length==0){
    return null;
}
var list=props.availability_array.map((a)=>{
    return(
    <tr>
        <td>{a.date}</td>
        <td>{a.status}</td>
      </tr>
    )
})
console.log(list);
    
return (
    
    <div>
        <h2>Trainname</h2>:{props.trainname}
        <h2>Fare</h2>:{props.fare}

        <table>
        <tr>
        <th>Date</th>
        <th>Seat Availability</th>
        </tr>
        {list}
    </table>
  </div>
)
}
export default seat;