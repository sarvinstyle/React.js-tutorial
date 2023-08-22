import './App.css';

function App() {
 return (
   <div>
     <User name="sarvin2" age={43} email="salam@sarvinsyle.ir" />
     <User name="ali" age={20} email="none"/>
     <User name="sara" age={22} email="---" />

     <Job salary={10000000000} position="Developer" company="google" />
     <Job salary={1005000000} position="Senior Developer" company="youtube" />

  </div> 

 )
}

const GetName = (name) => {
  return name
}
// //props
// const props = {
//   name : "sarvin",
//   age : 43, 
//   email : "salam@sarvinstyle.ir"
// }

const Job =(props) =>{
  return <div>
     {props.salary} , {props.position} , {props.company}
  </div>
}



//Componnet
const User = (props)=>{
  return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h2>{props.email}</h2>
  </div>
  )
}
export default App;
