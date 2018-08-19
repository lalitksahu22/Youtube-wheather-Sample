import React,{Component} from 'react';

export default class Message extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let styleclass=this.props.msg.self?"row-reverse":"row";
        let s1=this.props.msg.self?"selfmsg":"rcvmsg";

        return(
           <div className={"row d-flex "} style={{flexDirection:styleclass}}>
              <div className={s1}>
                  {this.props.msg.content}
              </div>
            </div>
        )
    }
}