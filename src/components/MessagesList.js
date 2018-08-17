import React,{Component} from 'react';
import Message from './Message';

export default class MessagesList extends Component{
    constructor(props){
        super(props);
        
    }

    getmessageslist(){
        return (this.props.messageslist.map(
            msg=>(
                <div>
                    <Message msg={msg}/>
                </div>
            )
        ))
    }
    
    render(){
        return(
           <div>
              {this.getmessageslist()}
            </div>
        )
    }
}