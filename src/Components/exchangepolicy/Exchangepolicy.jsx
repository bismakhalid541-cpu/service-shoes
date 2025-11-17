import React from 'react'
import './Exchangepolicy.scss';
const Exchangepolicy = () => {
  return (
    <div>
        <div className="exchange-info">
        <h1>EXCHANGE AND CLAIM POLICY</h1>
        <h3>CUSTOMER CARE</h3>
        <h3>via Call: +92 111-737-847</h3>
        <h3>via e-mail: customercare@servis.com</h3>
        <h3>Operational Days: Monday – Saturday</h3>
        <h3>Operational Hours: 9:00 AM – 6:00 PM</h3>
        <h3>Response Time: 24 – 48 Working Hours (excluding holidays)</h3>
      </div>
      <div className="exchange-section">
        <h2>EXCHANGE</h2>
        <ul>
          <li>For exchange - contact customer care within 48 hours.</li>
          <li>Exchange only within 30 days of purchase.</li>
          <li>Items must be unused, original packaging with all tags.</li>
          <li>Store manager may refuse exchange if conditions not met.</li>
          <li>Difference in cash if replaced item value exceeds original.</li>
          <li>No return/refund/exchange for sale items.</li>
          <li>Company's decision regarding exchange is final.</li>
        </ul>
      </div>

      <div className="claim-section">
        <h2>CLAIMS</h2>
        <ul>
          <li>Call customer service on +92 111-737-847 for claims.</li>
          <li>Defective items claims within 30 days of purchase.</li>
          <li>Original cash receipt is required for product claim.</li>
          <li>Company's decision regarding claims is final.</li>
        </ul>
      </div>
    </div>
  )
}

export default Exchangepolicy