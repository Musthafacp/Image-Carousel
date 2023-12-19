import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
// class Carousel extends Component {
//    images = {images}
// }

// export default Carousel;

// import React, { Component } from 'react'

export default class Carousel extends Component {
    constructor(){
        super()
        this.state = {
            index : 0
        }
    }

    GoingForward =()=>{
        this.setState(()=>{
          return{
            index : (this.state.index != images.length-1)? (this.state.index+1) : (0)
          }
        })

      }

    GoingBack = () =>{
        this.setState(()=>{
            return{
                index:(this.state.index != 0) ? (this.state.index -1) : (images.length-1)
            }
        })
    }

  images = {images}
  render() {
    return (
      <>
        <div className="main">
        <ArrowBackIosIcon  className="Arrow" sx={{ fontSize: 60 }} onClick = {this.GoingBack} />

        <img src={images[this.state.index].img} alt="" />

        <div className="titles">
            <h2 className="title">{images[this.state.index].title}</h2>
            <h2 className="subtitle">{images[this.state.index].subtitle}</h2>
        </div>

        <ArrowForwardIosIcon className="Arrow" onClick={this.GoingForward} sx={{ fontSize: 60 }} />

        </div>
      </>
    )
  }
}
