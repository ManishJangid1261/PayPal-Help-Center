import React, { useState } from 'react';

function Linkbuttons({ buttons, onChange }) {
  const [selectedOption, setSelectedOption] = useState(buttons[0]);

  const handleChange = (button) => {
    setSelectedOption(button);
    onChange(button);
  };

  return (
    <div className='mb-20 w-full'>
      <div className='flex flex-col items-start w-full'>
        {buttons.map((button, index) => (
          <button
            key={index} 
            className={`py-2 text-sm xl:text-start text-center px-2 w-72 sm:w-96  xl:w-48 ${
              selectedOption === button
                ? 'xl:border-l-2 border-x-2 xl:border-r-0 border-bgcolor text-bglite font-bold bg-blue-100'
                : 'hover:bg-gray-100 font-semibold opacity-80'
            }`}
            onClick={() => handleChange(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BusinessHelp(){

    const Buttons = [ 'Payment Solutions', 'Merchant Services', 'Dispute Resolution', 'Fraud Prevention','Business Analytics','Integration Support'];
    const [selectedButton, setSelectedButton] = useState('Payment Solutions');
  
    const handleButtonClick = (clickedButton) => {
      setSelectedButton(clickedButton);
    };
  
    return (
      <div className='mt-20 xl:flex-row flex-col justify-center items-center  flex xl:w-3/4 xl:justify-evenly'>
        <div>
          <Linkbuttons buttons={Buttons} onChange={handleButtonClick} />
        </div>
        {selectedButton && (
          <div className=" text-black pl-6">
           
            {selectedButton === 'Payment Solutions' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Payment Solutions</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I set up PayPal Checkout on my website?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I customize the PayPal button on my website?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What is PayPal Business and how can it help me manage my sales?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I create and send invoices through PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a way to set up recurring payments for my customers using PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I integrate PayPal with my e-commerce platform?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What reporting tools does PayPal offer for tracking sales and transactions?</a>

              </div>
            )}
            {selectedButton === 'Merchant Services' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Merchant Services</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I open a merchant account with PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the fees associated with PayPal's merchant services?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I set up and manage PayPal Here for in-person payments?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What options are available for accepting international payments with PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I use PayPal for subscription-based billing for my customers?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I access and manage my merchant reports on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What tools does PayPal offer for managing inventory and orders?</a>

              </div>
            )}
            {selectedButton === 'Dispute Resolution' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Dispute Resolution</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I handle a customer dispute on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are PayPal's policies regarding chargebacks?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I respond to a chargeback request?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I prevent chargebacks and disputes on my PayPal transactions?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How does PayPal help resolve disputes between buyers and sellers?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What should I do if a customer claims they did not receive their order?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a way to appeal a decision made on a dispute?</a>

              </div>
            )}
            {selectedButton === 'Fraud Prevention' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Fraud Prevention</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How does PayPal protect my business from fraudulent transactions?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What security measures are in place to prevent unauthorized access to my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I identify and avoid phishing attempts targeting my business?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the recommended practices for securely accepting online payments with PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How does PayPal handle suspicious or unusual account activities?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I set up additional security measures for my PayPal business account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What resources are available to educate myself and my team about online security best practices?</a>

              </div>
            )}
            {selectedButton === 'Business Analytics' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Business Analytics</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I access and interpret my PayPal business analytics?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What key performance indicators (KPIs) should I track for my online business using PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I export my transaction data and business reports from PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What insights can I gain from analyzing my sales and revenue trends on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there tools available to help me optimize my business operations based on PayPal data?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I use PayPal analytics to understand my customers' purchasing behaviors?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What customization options are available for generating reports and analytics on PayPal?</a>
              </div>
            )}
            {selectedButton === 'Integration Support' && (
              <div className='flex flex-col gap-3 '>
                <h2 className="text-xl font-semibold mb-2">Integration Support</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I integrate PayPal with my e-commerce platform?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What APIs does PayPal offer for developers to integrate with their applications?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there SDKs available for integrating PayPal into mobile applications?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I customize the PayPal payment experience for my website or app?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I test and troubleshoot my PayPal integration during development?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What documentation and resources are available for developers integrating with PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there dedicated support available for developers integrating PayPal into their systems?</a>
              </div>
            )}
    
          </div>
        )}
      </div>
    );
  }