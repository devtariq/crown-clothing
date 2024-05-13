import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import Button from "../button/button.component";

import './sign-up.style.scss'

const defautFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {

	const [formFields, setFormFields] = useState(defautFormFields);
	const {displayName, email, password, confirmPassword} = formFields;

	console.log(formFields);

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}

  const resetFormFields = () => {
    setFormFields(defautFormFields);
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert('PassWord do not Match');
      return;
    }
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('User Creation failed. Email Already In Use');
      }else{
         console.log('User Creation facing an Error', error);
      }
    }
  }


	return (
    <div className='sign-up-container'>
      <h2>Don't have an Account?</h2>
      <span>Sign Up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          onChange={handleChange}
          type='text'
          name='displayName'
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          onChange={handleChange}
          type='email'
          name='email'
          value={email}
          required
        />
        <FormInput
          label='Password'
          onChange={handleChange}
          type='password'
          name='password'
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          onChange={handleChange}
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
        />
        <Button button_type="default" type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;