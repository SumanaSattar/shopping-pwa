import { Component } from "react";
import FormInput from '../form-input.component/form-input.component'
import CustomButton from '../custome-button/custome-button.component.jsx'
import './sign-in.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utilis'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            email:'',
            password:''
         }
    }
    
  handleSubmit(event) {
      event.preventDefault();
  }  

   handleChange(event) {
      const {value, name} = event.target;
      this.setState({[name]:value})
  }
    render() { 
        return ( 
        <div className='sign-in'>
            <h2>I already have an Account</h2>
            <span>Sign In with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                
                <FormInput type='email' name='email' value={this.state.email}  required handleChange={this.handleChange} label="email"/>
               
                <FormInput type='password' name='password' value={this.state.password}  required handleChange={this.handleChange} label="password"/>
    
               <CustomButton type='submit'>Sign In</CustomButton>
               <CustomButton onClick={signInWithGoogle}>{' '}Sign In With Google{' '}</CustomButton>
            </form>
        </div> );
    }
}
 
export default SignIn ;