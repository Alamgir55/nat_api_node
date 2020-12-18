/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51HynF1BuKxpdJ4lsOgZ8FmEbG6xjUCAOYc2qn4q7isrOQARykZHy8ygDJIfS4rZ9fCm7YAyfzDKfm582JYTpa31g00NLpiiLf7');
    try {
        // 1) Get checkout session from API
        const session = await axios(
            `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);
    
        // 2) Create checkout form + change credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch(err) {
        console.log(err);
        showAlert('error', err);
    }
};