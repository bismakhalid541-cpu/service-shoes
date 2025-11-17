import React from 'react'
import './Dilevery.scss'
const Dilevery = () => {
  return (
    <div>
         <div className="dilevery-section">
            <h1>DELIVERY AND SHIPPING INFOMATION</h1>
            <div className="shipping">
                <h2>SHIPPING</h2>
                <ul>
                    <li>
                        Shipping charges of Rs. 149 will be applied. Nationwide COD is available!
                    </li>
                    <li>The parcel will be sent through a registered courier company.</li>
                </ul>
            </div>
            <div className="Dilevery">
                <h2>DILEVERY</h2>
                <ul>
                    <li>All deliveries are subject to stock availability and confirmation of payment.</li>
                    <li>The Company shall deliver the product purchased within 5-7 working days.</li>
                    <li>Order delivery time is 5 to 7 working days. It can be delayed up to 10 working days due to the sale. Weekends and gazetted holidays are not included.</li>
                    <li>Customers must pay before receiving the parcel due to security concerns.</li>
                    <li>A signature will be required upon delivery of the goods.</li>
                    <li>Customers can call +92 111-737-847 for order tracking.</li>
                </ul>
            </div>
            <div className="General">
                <h2>GENERALS</h2>
                <ul>
                    <li>Payment can only be made by COD.</li>
                    <li>All prices are quoted in PKR (Pakistani Rupees) and include sales tax where applicable.</li>
                    <li>Confirmation of the order via web or email is not a guarantee of delivery.</li>
                    <li>The company can cancel the order anytime without prior notice to the customer.</li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Dilevery