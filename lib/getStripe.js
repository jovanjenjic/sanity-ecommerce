import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51NHTjvJw33UDuwX3aDHzFXItWfsNekHLn5XeyHVKnQz5dUX878RypamrnFQCZ5zjZzdW26Tcgq0tys52aOcukZQq00PT36AMFw");
  }

  return stripePromise;
}

export default getStripe;