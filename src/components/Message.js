import React,{Component} from 'react';

export default class Message extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let styleclass=this.props.msg.self?"col-sm-offset-8 selfmsg":"col-sm-6 rcvmsg";
        return(
           <div className="row">
              <div className={styleclass}>
                  {this.props.msg.content}
              </div>
            </div>
        )
    }
}