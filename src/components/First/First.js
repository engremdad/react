import React,{Component} from 'react'
class First extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Email: {this.props.email}</p>
                <p>Address: {this.props.phone}</p>
            </div>
            
        );
    }
}
export default First