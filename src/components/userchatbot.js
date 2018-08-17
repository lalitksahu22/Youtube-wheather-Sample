import React,{Component} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

export default class UserChatbot extends Component{
    constructor(props){
        super(props);
        this.state = {
            messageList: []
          };
          this.handleNewUserMessage=this.handleNewUserMessage.bind(this);
    }
    handleNewUserMessage(query) {
        
        if (query.length > 0) {
            
            axios.get(`http://localhost:3000/getresponse?querytext=${query}`)
            .then(
                restext=>
            {   
                addResponseMessage(restext.data);
            }
            ).catch(err=>
            {
              addResponseMessage('not connected');
            })
             
            }
      }


  
      render() {
        return (<div >
          <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="YChat"
          subtitle=""
        />
        </div>)
      }
}