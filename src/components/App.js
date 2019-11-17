import React,{ Component } from 'react';
import First from './First/First';
//import Counter from './counter/Counter';
class App extends Component{
  state = {
    person:[
      {name:'emdad',email:'php.emdad@gmail.com',phone:'01719303317'},
      {name:'shohan',email:'perdad@gmail.com',phone:'werwe'},
      {name:'wrwe',email:'phwerdad@gmail.com',phone:'wer'}
    ]
  }
  render(){
    return (
      <div className="App">
        { this.state.person.map((pname,index)=>{
            return <First key={index} name={pname.name} email={pname.email} phone={pname.phone} />
        })}
          <First name={this.state.person[0].name} email={this.state.person[0].email} phone={this.state.person[0].phone}/>
          <First name={this.state.person[1].name} email={this.state.person[1].email} phone={this.state.person[1].phone}/>
          {/* <Counter/> */}
      </div>
    );
  }
}

export default App;
