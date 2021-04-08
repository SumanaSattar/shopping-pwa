import { Component } from "react";
import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = { 
            email:'',
            password:''
         }
    }
    
    submitHandler = (event)=> {
        event.preventDefault();
        this.setState({email:'',password:''});
     }

   changeHandler = (event) => {
      const {name, value} = event.target;
      this.setState({[name]:value})
  }
    render() { 
        return ( 
        <div className='sign-in'>
            <h2>I already have an Account</h2>
            <span>Sign In with your email and password</span>
            
            <form onSubmit={this.submitHandler}>
                <label>Email</label>
                <input type='email' name='email' value={this.state.email}  required onChange={this.changeHandler} />
                <label>Password</label>
                <input type='password' name='password' value={this.state.password}  required onChange={this.changeHandler} />
                <input type='submit' value='Submit form'>Sign In</input>
            </form>
        </div> );
    }
}
 
export default SignIn ;