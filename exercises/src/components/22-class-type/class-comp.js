import { Component } from "react";



export default class ClassComp extends Component{

    constructor(props){ //propslari burada karsiliyoruz

        super(props);

        this.state = {
            message: "Hello world",
            hours:18,
            minute: 36
        }
    }

    componentDidMount(){
        console.log("Ilk giriste calisir. (Render)");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("re-render durumunda calisir");

        if(prevState.hours !== this.state.hours) {
            console.log("Hour was changed");
        }
        if(prevState.minute !== this.state.minute) {
            console.log("Minute was changed");
        }
    }

    componentWillUnmount(){
        console.log("Component unmount oldugunda calisir");
    }

    render(){
        return(
        <div>
<h1>{this.state.message}</h1>
<h2>{this.state.hours}:{this.state.minute}</h2>

<button onClick={()=> this.setState({hours:19})}>Set hour</button>
<button onClick={()=> this.setState({minute:55})}>Set Minute</button>
        </div>)
        
    }
}