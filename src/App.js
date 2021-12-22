import React, { Component } from "react";
import "./App.css";
// import Buttons from './Buttons'
import Header from "./Header";
import Footer from "./Footer";
var count=0;
var result = 0;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
    };
    this.hanldeClick = this.hanldeClick.bind(this);
    this.ac = this.ac.bind(this);
    this.calc = this.calc.bind(this);
    this.search=this.search.bind(this);
    // var wholeStr=this.state.value
  }
   search(val){
    if (val == "." ){
      document.getElementById("decimal").disabled = true; 
      count+=1;
    }else if(val == "+" ||
    val == "-" ||
    val == "*" ||
    val == "/" && count == 0){
      document.getElementById("decimal").disabled = false; 
      count=0;
    }
    // else if(/[0-9]/.test(val)){
    //   document.getElementById("decimal").disabled = false; 
    // }
  }
  hanldeClick(e) {
    //if calculation is done,clear value state for new calculation if not then keep the state as it is
    // if( !(e.target.value == "+" ||
    // e.target.value == "-" ||
    // e.target.value == "*" ||
    // e.target.value == "/")){
      this.search(e.target.value);
    // }
  // const operators=/[+-*/]/;
    
    
    // this.setState({
    //   value:"",
    // })
    if (result) {
      if(this.state.value.includes())
      if (
        e.target.value == "+" ||
        e.target.value == "-" ||
        e.target.value == "*" ||
        e.target.value == "/"
      ) {
        result = 0;
      } //end of if
      else {
        this.ac();
        result = 0;
      }
    } //end of if
    let s = this.state.value;
    if (e.target.value == "." && s.charAt(s.length - 1) == ".") {
      
      this.setState({
        value: s,
      });
    } //end of if
    else if(e.target.value == "+" ||
    e.target.value == "-" ||
    e.target.value == "*" ||
    e.target.value == "/"){
      
    }
    else {
      if(this.state.value=="0"){
        this.setState({
          value:e.target.value
        })
      }
      else{

        this.setState({
        value: this.state.value + e.target.value,
      });
    }
    } //end of else
  }
  ac() {
    this.setState({
      value: "0",
      
    });
    count=0;
    document.getElementById("decimal").disabled = false; 
  }
  calc() {
    // console.log(this.state.value[(this.state.value).length-1])
    // console.log(this.state.value.slice(-1))
    // var str=[this.state.value]
    // console.log(str)
    this.setState({
      value: eval(this.state.value),
    });
  //   // console.log(parseInt(this.state.value))
  //   console.log(parseFloat(this.state.value)) 
  //   console.log(parseFloat(this.state.value)<=0) 
  //   result = 1;
  //   if (parseInt(this.state.value)<=0){
  //     console.log("i am in the roundung statement")
  //     let round=parseFloat(this.state.value).toFixed(4);
  //     let roundText=round.toString(2);
  //     console.log(roundText);
  //     this.setState({
  //       value:roundText,
  //     });
  // }
}
  render() {
    console.log(this.state.value)
    return (
      <>
        <Header />
        <div className="calculator">
          {/* <Buttons/> */}

          <div>
            <div className="display" id="main-display">
              <input type="text" id="display" value={this.state.value} readOnly />
            </div>
            <button
              id="clear"
              className="jumbo-ac"
              onClick={this.ac}
              value="AC"
            >
              AC
            </button>
            <button
              id="divide"
              className="oprator"
              onClick={this.hanldeClick}
              value="/"
            >
              /
            </button>
            <button
              id="multiply"
              className="oprator"
              onClick={this.hanldeClick}
              value="*"
            >
              X
            </button>
            <button id="seven" onClick={this.hanldeClick} value="7">
              7
            </button>
            <button id="eight" onClick={this.hanldeClick} value="8">
              8
            </button>
            <button id="nine" onClick={this.hanldeClick} value="9">
              9
            </button>
            <button
              id="subtract"
              className="oprator"
              onClick={this.hanldeClick}
              value="-"
            >
              -
            </button>
            <button id="four" onClick={this.hanldeClick} value="4">
              4
            </button>
            <button id="five" onClick={this.hanldeClick} value="5">
              5
            </button>
            <button id="six" onClick={this.hanldeClick} value="6">
              6
            </button>
            <button
              id="add"
              className="oprator"
              onClick={this.hanldeClick}
              value="+"
            >
              +
            </button>
            <button id="one" onClick={this.hanldeClick} value="1">
              1
            </button>
            <button id="two" onClick={this.hanldeClick} value="2">
              2
            </button>
            <button id="three" onClick={this.hanldeClick} value="3">
              3
            </button>
            <button id="equals" className="equal" onClick={this.calc} value="=">
              =
            </button>
            <button
              id="zero"
              className="jumbo"
              onClick={this.hanldeClick}
              value="0"
            >
              0
            </button>
            <button id="decimal" onClick={this.hanldeClick} value=".">
              .
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
