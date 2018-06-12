import React,{Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import {fetchVideoList} from '../actions'
class SearchBar extends Component{
    //AIzaSyBnNG9DTuyDu3AJVYh4vXwOKr8A8h2QtJk
    constructor(props){
        super(props);
        this.state={term:''};
        this.changeTerm=this.changeTerm.bind(this);
        }
        temp=_.debounce(()=>{this.props.fetchVideoList(this.state.term)},500);
    changeTerm(event){
        //console.log("called")
        this.setState({[event.target.name]:event.target.value});
        //var temp=_.debounce(()=>{this.props.fetchVideoList(this.state.term)},10000);
       this. temp();


    }
    render(){
        return(
        <div className="search-bar">
            <input name="term" value={this.state.term} onChange={this.changeTerm}/>
        </div>
        )
    }
}
export default connect(null,{fetchVideoList})(SearchBar)