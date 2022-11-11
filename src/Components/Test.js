
import React,{Component} from "react"
class Test extends React.Component{
constructor(props){
super(props)

this.state={value:"Hello React"}
this.handleChange=this.handleChange.bind(this)
}
handleChange=(e)=>{
    this.setState({value:e.target.value})
}
render(){
    return (
<div>
<h2>Welcome to the test</h2>
<input defaultValue={this.state.value} onChange={this.handleChange}/>
<h2>{this.state.value}</h2>
</div>
)
}
}
export default Test;