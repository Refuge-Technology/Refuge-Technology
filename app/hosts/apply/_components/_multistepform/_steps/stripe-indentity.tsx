import error from 'next/error';
import React, { useEffect } from 'react';
import Stripe from 'stripe';

const StripeIdentitySample: React.FC = () => {
  useEffect(() => {
    const initializeStripe = async () => {
      // Set your publishable key: remember to change this to your live publishable key in production
      // Find your keys here: https://dashboard.stripe.com/apikeys
      try {
        const response = await fetch('/config');
        const { publishableKey } = await response.json();
        const stripe = new Stripe(publishableKey);

        const verifyButton = document.getElementById('verify-button') as HTMLButtonElement | null;

        if (verifyButton) {
          verifyButton.addEventListener('click', async () => {
	try {
	// Create the VerificationSession on the server.
	const response = await fetch('/create-verification-session', {
		method: 'POST',
	});
	const { client_secret } = await response.json();

	// Open the modal on the client.
	if (!error) {
		window.location.href = '/submitted.html';
	} else {
		alert((error as any).message);
	}
} catch (e: any) {
	alert(e.message);
}
          });
        }
      } catch (error) {
        console.error('Failed to initialize Stripe:', error);
      }
    };

    initializeStripe();
  }, []);

  return (
    <div className="sr-root">
      <div className="sr-main">
        <section className="container">
          <div>
            <h1>Verify your identity to book</h1>
            <h4>Get ready to take a photo of your ID and a selfie</h4>

            <button id="verify-button">Verify me</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StripeIdentitySample;
