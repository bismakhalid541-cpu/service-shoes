import React from "react";
import "./FAQS.scss";
const FAQS = () => {
  return (
    <div className="fa-question">
      <h1>FAQs</h1>
      <div className="question-1">
        <ul>
          <li>Do I need to set up an account to place an order?</li>
          <li>
            You can shop at SERVIS.PK either by registering with us or using a
            guest account at checkout. <br></br>
            Creating an account on SERVIS.PK gives you access to the following
            benefits:
          </li>
          <li>
            Manage your account details, track your order status and review past
            purchases
          </li>
          <li>
            Request exchanges directly from your account (Read our Exchange
            Policy for further details or contact our Customer Support center)
          </li>
        </ul>
      </div>
      <div className="question-2">
        <ul>
            <li>How do I place an order?</li>
            <li>Orders can be placed while navigating our website as a registered user or even as a guest user. On any product page, select your size, choose the quantity you wish to purchase, and then press the “Add to Cart” button. This will open up your shopping cart where you may choose to continue shopping or head on to checkout.</li>
        </ul>
      </div>
      <div className="question-3">
        <ul>
            <li>Can I find the same collection on the site and in store?</li>
            <li>The collection on our site is only one small part of the choices offered in our stores. To know our selection of products better, we recommend you to visit our stores. You will find the best offers and benefit from time-to-time promotions. To find the SERVIS store nearest to your premise, please proceed to the store locator. Whereas, export products are available online only</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQS;
