
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in.component';
import './authentication.style.scss'

const Authentication = () => {

  return (
    <div className='auth-container'>

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
