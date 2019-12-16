import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import './signup.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
               displayName:'',
               email:'',
               password:'',
               confirmPassword:''  
        }
    }
    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({[name]:value})
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passsword dont match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(err){
            console.log(err)
        }
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Signup with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" label="displayName" name="displayName" value={displayName} onChange={this.handleChange}/>
                    <FormInput type="email" label="email" name="email" value={email} onChange={this.handleChange}/>
                    <FormInput type="password" label="password" name="password" value={password} onChange={this.handleChange}/>
                    <FormInput type="password" label="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={this.handleChange}/>

                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp
