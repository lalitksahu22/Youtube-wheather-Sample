import React,{Component} from 'react'
import {connect} from 'react-redux'
//import { Carousel } from 'react-responsive-carousel';
//import { Carousel } from 'react-bootstrap'
import Slider from "react-slick";


 class Corrusalapp extends Component{
     constructor(props){
        super(props);
        this.getimglist=this.getimglist.bind(this);
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
    }
     getimglist(){
         return this.props.videolist.map((item)=>{
             var url=item.snippet.thumbnails.high.url
             return(<div className="col-sm-offset-3 col-sm-6 ">
                 <img  src={url} />
                 </div>)
            
            })
     }

    render(){
       
        return(

            <Slider {...this.settings}>

            {this.getimglist()}


            </Slider>

        )
    }
}
var mapStateToProps=({videolist})=>({videolist})
export default connect(mapStateToProps,null)(Corrusalapp);