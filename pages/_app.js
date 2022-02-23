import '../styles/globals.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AppContext from '../components/Context/AppContext.js';
import UserContext from '../components/Context/UserContext.js';
import {Cart} from '../components/Context/CartContext.js';

const stripePromise = loadStripe("pk_test_51KMnt1IT6p7sbPTq5EkTgeuAS6jmehcLgaDJlnJkFfDPOokS07I3oaxXPLri97hyWAebEoBnax0i8Xi8tBuZPQsO00pV8GD2go");

function MyApp({ Component, pageProps }) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:process.env.publishableKey,
  };
  return (
    <Elements stripe={stripePromise} >
      <AppContext>
        <UserContext>
          <Cart>
        <Component {...pageProps} />
        </Cart>
        </UserContext>
      </AppContext>

  </Elements>
  )
}

export default MyApp
