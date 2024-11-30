import React from "react";

function DonationForm() {
  return (
    <section className="donation-form">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#9a0606]"></div>
        <span className="flex-shrink mx-4 text-black-800">Detalles de la donación</span>
        <div className="flex-grow border-t border-[#9a0606]"></div>
      </div>

      {/* Script de Stripe para el botón de compra */}
      <script
        async
        src="https://js.stripe.com/v3/buy-button.js"
      ></script>

      {/* Botón de Stripe */}
      <div className="flex justify-center p-4">
        <stripe-buy-button
          buy-button-id="buy_btn_1QQdLi2LPC07Oo6o1s1dhrJ3"
          publishable-key="pk_live_51QBo682LPC07Oo6oXRfQDaf4BiqlkGEFVYyRzggwIqJ0SbvNzcYdhP3awan2NXfMMzzXWgGZFhdnB3NRXuPsHetJ00q6tn5dkF"
        ></stripe-buy-button>
      </div>
    </section>
  );
}

export default DonationForm;
