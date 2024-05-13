import {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';

import './sign-in.style.scss';

const defautFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defautFormFields);
  const {email, password} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  const geogleSignIn = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defautFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong PassWord');
          break;
        case 'auth/invalid-credential':
          alert('Invalid Credential');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an Account?</h2>
      <span>Sign In with your Email and Password</span>
      <form onSubmit={handleSubmit}>
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

        <div className='buttons-container'>
          <Button button_type='default' type='submit'>
            Sign In
          </Button>
          <Button type="button" button_type='google' onClick={geogleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
