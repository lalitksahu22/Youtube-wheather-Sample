import React,{Component} from 'react';
import MessagesList from './MessagesList';
//import {sendToDialogflow} from '../dialogflow';
import axios from 'axios';
import {connect} from 'react-redux';
import {videoFromChat,setSelectedVideo} from '../actions';
import {chatbotapi} from '../../config';

class Chatbot extends Component{
    constructor(props){
        super(props);
        this.closeChat=this.closeChat.bind(this);
        this.msgsent=this.msgsent.bind(this);
        this.state={openchat:false,messageslist:[]};
    }
    componentDidMount(){

    }
    closeChat(){
        this.setState({openchat:false});
       // this.setState({"messageslist":[]})
        console.log("closechat called");
    }
    msgsent(e){
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode==13 && e.target.value != ""){
            let query=e.target.value;
            this.setState({messageslist:[...this.state.messageslist,{self:true,content:query}]});
            axios.get(`${chatbotapi}/getresponse?querytext=${query}`)
            .then(
                restext=>
                 {
                 if(restext.data.payload){
                     
                    this.props.videoFromChat(restext.data.payload)
                    this.props.setSelectedVideo(restext.data.payload[0])
                 }
                 else if(restext.data.specificsong>=0){
                     
                    this.props.setSelectedVideo(this.props.videolist[restext.data.specificsong])
                 }
                 this.setState({messageslist:[...this.state.messageslist,{self:false,content:restext.data.msg || restext.data}]});
                
                
            }
            ).catch(err=>
            {   console.log(err)
                this.setState({messageslist:[...this.state.messageslist,{self:false,content:"not connected"}]});
            })
            e.target.value="";
        }
    }
    componentDidUpdate(){
        if(this.scrollchatref)
            this.scrollchatref.scrollTop=this.scrollchatref.scrollHeight-this.scrollchatref.clientHeight;
    }
    render(){
        return(
           this.state.openchat?( 
           <div className="chatboat">
                <div className="row chatheader d-flex justify-content-between align-items-center">
                    <div >YChatBoat</div>
                    <div onClick={this.closeChat} className="cross">&#10006;</div>
                </div>
                <div ref={(elem)=>{this.scrollchatref=elem;}} className="row chatbody">
                    <MessagesList messageslist={this.state.messageslist}/>
                </div>
                <div className="row">
                    <input onKeyDown={this.msgsent} className="chattext" type="text"/>
                </div>
            </div>):
            (<div onClick={()=>{this.setState({openchat:true});}} className="row chatfloat">
            <div className="col-sm-7">YChatBoat</div>
        </div>)
        )
    }
}
var mapstatetoprops=({videolist})=>({videolist})
export default connect(mapstatetoprops,{videoFromChat,setSelectedVideo})(Chatbot);