import React, {Component} from 'react'

class SignUp extends Component {
    state={
        email: '',
        confirmEmail:'',
        password:'',
        confirmPassword:''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('hitting submit handle')
        const signUpCall = this.props.signUp(this.state);
        signUpCall.then((data) => {
            console.log(data , 'sign up data')
        })
    };


   render(){
       console.log(this.state)
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <input type='text' name="email" placeholder='Email' onChange={this.handleChange} value={this.state.email}/>
                   <input type='text' name="confirmEmail" placeholder='Confirm Email' onChange={this.handleChange} value={this.state.confirmEmail}/>
                   <input type='password' name="password" placeholder='Password (8 character minimum)' onChange={this.handleChange} value={this.state.password}/>
                   <input type='password' name="confirmPassword" placeholder='Confirm Password' onChange={this.handleChange} value={this.state.confirmPassword}/>
                   <button type='submit'>Submit</button>
               </form>
           </div>
       )
   }
}

export default SignUp