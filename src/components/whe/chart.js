import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
var Chart= (props)=>{
    return(
    <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
    </Sparklines>
    );
}
export default Chart;