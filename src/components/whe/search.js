import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchwheather} from '../../actions/action_whe'

class Search extends Component {
  constructor(props){
    super(props);
    this.state={"term":''};
  }
  onTermChange(event){
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
 
    return (
      <div>
        <input className="search-bar" name="term" value={this.state.term} onChange={this.onTermChange.bind(this)}/>
        <button onClick={()=>{this.props.fetchwheather(this.state.term);this.setState({"term":''})}}> search</button>
      </div>
    );
  }
}

export default connect(null,{fetchwheather})(Search);
