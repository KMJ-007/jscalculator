import React, { Component } from 'react'

var cell=document.getElementById("cell") 
var result=0;

//display function
function display(n){
    //only run if evaluation is remaining
    if(result){
        console.log(result);
        if((n=='+') || (n=='-') ||(n=='*') || (n=='/')){
            result=0;
        }
        else{
            ac();
            result=0;
        }
    }//end of if
    // else{
    //     cell.value.concat(n);
    // }
}

//Ac function
function ac(){
    cell.value=" "
}

//calculation function
function calc(val){
    cell.value=eval(val);
    result=1;
}
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <div className="display">
        <input type="text" id="cell" value=" "  readOnly/>
      </div>
                <button
                id="clear"
                className='jumbo-ac'
                onClick={ac}
                value="AC"
                >
                    AC
                </button>
                <button
                id="divide"
                className='oprator'
                onClick={display(this.value)}

                value="/"
                >
                    /
                </button>
                <button
                id="multiply"
                className='oprator'
                onClick={display(this.value)}

                value="X"
                >
                    X
                </button>
                <button
                id="seven"
                onClick={display(this.value)}

                value="seven"
                >
                    7
                </button>
                <button
                id="eigth"
                onClick={display(this.value)}

                value="8"
                >
                    8
                </button>
                <button
                id="nine"
                onClick={display(this.value)}

                value="9"
                >
                    9
                </button>
                <button
                id="substraction"
                className='oprator'
                onClick={display(this.value)}

                value="-"
                >
                    -
                </button>
                <button
                id="four"
                onClick={display(this.value)}

                value="4"
                >
                    4
                </button>
                <button
                id="five"
                onClick={display(this.value)}

                value="5"
                >
                    5
                </button>
                <button
                id="six"
                onClick={display(this.value)}

                value="6"
                >
                    6
                </button>
                <button
                id="addition"
                className='oprator'
                onClick={display(this.value)}

                value="+"
                >
                    +
                </button>
                <button
                id="one"
                onClick={display(this.value)}

                value="1"
                >
                    1
                </button>
                <button
                id="two"
                onClick={display(this.value)}

                value="2"
                >
                    2
                </button>
                <button
                id="three"
                onClick={display(this.value)}

                value="3"
                >
                    3
                </button>
                <button
                id="equal"
                className='equal'
                onClick={display(this.value)}

                value="="
                >
                    =
                </button>
                <button
                id="zero"
                className='jumbo'
                onClick={display(this.value)}

                value="0"
                >
                    0
                </button>
                <button
                id="decimal"
                onClick={display(this.value)}

                value="."
                >
                    .
                </button>
            </div>
        )
    }
}
