import React from 'react';
//import styles from './style/test.css'

export default class Demo extends React.Component{
    render(){
        return(
            <div  className={`container-fluid`}>
        <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>   
        <div style={{backgroundColor:"yellow"}} className="row ">
        <div style={{backgroundColor:"blue"}}  className="col-3 "><h2>1</h2><h2>2</h2></div>
        <div style={{backgroundColor:"red"}} className="col-3 "><h7>1</h7></div>
         
        </div>
        <div style={{backgroundColor:"yellow"}} className="row">
        <div style={{backgroundColor:"red"}} className="col-3"><h1>1</h1><br/><h1>2</h1></div>
        <div style={{backgroundColor:"blue"}} className="col-3">1</div>
        
        </div>
         </div>
        )
    }
}