import React,{Component} from 'react';
import Message from './Message';

export default class MessagesList extends Component{
    constructor(props){
        super(props);
        
    }

    getmessageslist(){
        return (this.props.messageslist.map(
            msg=>(
                
                    <Message msg={msg}/>
               
            )
        ))
    }
    
    render(){
        return(
           <div style={{width:"100%"}}>
              {this.getmessageslist()}
            </div>
        )
    }
}