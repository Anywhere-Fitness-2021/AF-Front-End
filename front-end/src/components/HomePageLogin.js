import React, {useState, useEffect} from "react"
import './App.css';
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from './Home';


const schema = Yup.object().shape({
  FirstName: Yup.string().required("user is required").min(5,"must add 5 characters"),
   LastName: Yup.string().required("password is required").min(5,"must add 5 characters"),
})




function App() {
const [errors, setErrors] = useState({ FirstName: "", LastName:"", Terms:"", Total:"",})
  const [formState, setFormState] = useState({ FirstName: "", LastName:"",  Terms: false, Total:"", })
    const [disabled, setDisabled] = useState(true)
    
   
//check
const change = event => {
  const {checked,value,name,type} = event.target
   const valueTouse = type ==="checkbox" ? checked : value
    setFormState({ ...formState, [name]: valueTouse })
     setFormErrors(name, valueTouse)
  };
//check
//add a new function for errors (5)
const setFormErrors = (name, value) => {
  Yup.reach(schema,name).validate(value).then(() => setErrors({...errors,[name]:""}) )
   .catch( err => setErrors({...errors, [name] : err.errors[0] }))
 } // the callback happens in a change durring a particular input




const submit = event => {
  event.preventDefault()
   const newUser = {user: formState.user.trim(), user2: formState.Terms,  }
    axios.post("https://reqres.in/api/users", newUser)
     .then(res =>{
/// (7) 
       setFormErrors({FirstName: "", LastName:"",})
})
         .catch(err => {
 })
}


    useEffect(() => {
      schema.isValid(formState).then( vaild => setDisabled(!vaild))
},     [formState])



  return (


<div className="App">  
   <header className="App-header">
    <div> 
      <div style = {{ color: "red"}} > 
        <div> {errors.FirstName}</div>  <div> {errors.LastName}</div>
         </div> 
          <form onSubmit={submit}>
           <h1>Login</h1> 
            <label>  

   User
   <input  onChange ={change}  checked={formState} name = "FirstName" type="text" placeholder="username"  value={formState.user} />
     </label>
       <label>
         Password
          <input  onChange ={change} name = "LastName" type="password"    placeholder="password"  value={formState.user2} />
            </label>
              <button className = "Submit" disabled={disabled}> Submit</button> 
                </form>
                  Don't have an account? <a href="https://reactjs.org" > Sign up     </a>
                   </div>
                    <Router> 
                      <Link to="/Home"><button> To Skip </button>    </Link>
                       <Route  exact path="/Home" component={Home}/>  
                        </Router>
                         </header>
                          </div>
       
  
  )
}

export default App;

