import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      calculated: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.ac = this.ac.bind(this);
    this.calc = this.calc.bind(this);
  }
 
  handleClick(e) {
    //for checking decimal disable if it is pressed 
    if (e.target.value == ".") {
      document.getElementById("decimal").disabled = true;
    }
    //if any oprators pressed then it should not be disabled
     else if (
      e.target.value == "+" ||
      e.target.value == "-" ||
      e.target.value == "*" ||
      e.target.value == "/"
    ) {
      document.getElementById("decimal").disabled = false;
    }

    let s = this.state.value;

    //for checking conscutive oprators and taking last oerator in the considration
    if (
      e.target.value == "+" ||
      e.target.value == "*" ||
      e.target.value == "/"
    ) {
      if (
        s.charAt(s.length - 1) == "+" ||
        s.charAt(s.length - 1) == "-" ||
        s.charAt(s.length - 1) == "*" ||
        s.charAt(s.length - 1) == "/"
      ) {
        s = s.replace(s.charAt(s.length - 1), "");
        if (
          s.charAt(s.length - 1) == "+" ||
          s.charAt(s.length - 1) == "-" ||
          s.charAt(s.length - 1) == "*" ||
          s.charAt(s.length - 1) == "/"
        ) {
          s = s.replace(s.charAt(s.length - 1), "");
        }
      }
      s += e.target.value;
      this.setState({
        value: s,
        calculated: false,
      });
    }
    //not to start a number with zero prefix like 01 02 0456.........
     else {
      if (this.state.value == "0") {
        this.setState({
          value: e.target.value,
          calculated:false
        });
      }
      //if the calculation is done(calculated==true) then when user press a new number a calculation should start with new number not a old number
       else if (
        (e.target.value == "0" ||
          e.target.value == "1" ||
          e.target.value == "2" ||
          e.target.value == "3" ||
          e.target.value == "4" ||
          e.target.value == "5" ||
          e.target.value == "6" ||
          e.target.value == "7" ||
          e.target.value == "8" ||
          e.target.value == "9") &&
        this.state.calculated == true
      ) {
        this.setState({
          value: e.target.value,
          calculated: false,
        });
      }
      //if the calculation is done and user press any operator it should continue with the old answer
      else if (
        e.target.value == "+" ||
        e.target.value == "-" ||
        e.target.value == "*" ||
        e.target.value == "/"
      ) {
        this.setState({
          value: this.state.value + e.target.value,
        });
      } 
      // if any condition is not fulfilled then it should continue adding the value in current string
      else {
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
    document.getElementById("decimal").disabled = false;
  }
  calc() {
    let answer = eval(this.state.value);
    let finalAnswer = answer.toString();
    this.setState({
      value: finalAnswer,
      calculated: true,
    });
  }
  render() {
    return (
      <>
        <Header />
        <div className="calculator">
          <div>
            <div className="display" id="main-display">
              <input
                type="text"
                id="display"
                value={this.state.value}
                readOnly
              />
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
              onClick={this.handleClick}
              value="/"
            >
              /
            </button>
            <button
              id="multiply"
              className="oprator"
              onClick={this.handleClick}
              value="*"
            >
              X
            </button>
            <button id="seven" onClick={this.handleClick} value="7">
              7
            </button>
            <button id="eight" onClick={this.handleClick} value="8">
              8
            </button>
            <button id="nine" onClick={this.handleClick} value="9">
              9
            </button>
            <button
              id="subtract"
              className="oprator"
              onClick={this.handleClick}
              value="-"
            >
              -
            </button>
            <button id="four" onClick={this.handleClick} value="4">
              4
            </button>
            <button id="five" onClick={this.handleClick} value="5">
              5
            </button>
            <button id="six" onClick={this.handleClick} value="6">
              6
            </button>
            <button
              id="add"
              className="oprator"
              onClick={this.handleClick}
              value="+"
            >
              +
            </button>
            <button id="one" onClick={this.handleClick} value="1">
              1
            </button>
            <button id="two" onClick={this.handleClick} value="2">
              2
            </button>
            <button id="three" onClick={this.handleClick} value="3">
              3
            </button>
            <button id="equals" className="equal" onClick={this.calc} value="=">
              =
            </button>
            <button
              id="zero"
              className="jumbo"
              onClick={this.handleClick}
              value="0"
            >
              0
            </button>
            <button id="decimal" onClick={this.handleClick} value=".">
              .
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
