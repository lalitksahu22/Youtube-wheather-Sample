import React,{Component} from 'react';
import {connect} from 'react-redux';

import Chart from './chart';
import Map from './map'


export default class Item extends Component{
render(){
        const data=this.props.data;
        const name=data.city.name;
        const temp=data.list.map(d=>d.main.temp);
        const pressure=data.list.map(d=>d.main.pressure);
        return ( 
        <tbody>
        <tr>
            <td><Map lat={data.city.coord.lat} lng={data.city.coord.lon}/></td>
            <td>
                <Chart data={temp} color="red"/>    
            </td>
            <td>
                <Chart data={pressure} color="green"/>
            </td>
        </tr>
        </tbody>
    
         )
     }
}
