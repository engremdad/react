import React,{Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:11,
            color:'black'
        };
    }
    decrease = () =>{        
        this.setState({
            count:this.state.count-1
        })
        this.chnageStyle();
    }
    increas = () =>{
        this.setState({
            count:this.state.count+1
        })
       this.chnageStyle();
    }
    chnageStyle = () =>{
        console.log(this.state.count);
        if(this.state.count<=10){
            this.setState({
                color:'blue'
            })            
        }
        else if(this.state.count>10){
            this.setState({
                color:'red'
            })            
        }
        else{
            this.setState({
                color:'black'
            })       
        }
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>
                    <span onClick={this.decrease}>-</span>
                    { this.state.count }
                    <span onClick={this.increas}>+</span>
                </h1>
            </div>
        )
    }
}
export default Counter