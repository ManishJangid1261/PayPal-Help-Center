import React, { useState } from 'react';

function Linkbuttons({ buttons, onChange }) {
  const [selectedOption, setSelectedOption] = useState(buttons[0]);

  const handleChange = (button) => {
    setSelectedOption(button);
    onChange(button);
  };

  return (
    <div className='mb-20'>
      <div className='flex flex-col items-start'>
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

export default function TechnicalHelp(){

    const Buttons = [ 'API Integration Assistance', 'SDK Usage Guidance', 'Sandbox Environment Setup', 'Webhooks Configuration Support','SSL Certificate Installation Help','Instant Payment Notification Troubleshooting','REST API Endpoint Reference']; 
    const [selectedButton, setSelectedButton] = useState('API Integration Assistance');
  
    const handleButtonClick = (clickedButton) => {
      setSelectedButton(clickedButton);
    };
  
    return (
      <div className='mt-20 xl:flex-row flex-col justify-center items-center  flex xl:w-3/4 xl:justify-evenly'>
        <div>
          <Linkbuttons buttons={Buttons} onChange={handleButtonClick} />
        </div>
        {selectedButton && (
          <div className=" text-black pl-6 xl:-mt-40">
           
            {selectedButton === 'API Integration Assistance' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">API Integration Assistance</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I authenticate API requests to PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the different API endpoints available for PayPal integration?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I retrieve transaction details using PayPal APIs?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I handle refunds and cancellations programmatically?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the best practices for error handling with PayPal API requests?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I implement recurring payments using PayPal APIs?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a rate limit or throttling mechanism for API requests to PayPal?</a>
  

              </div>
            )}
            {selectedButton === 'SDK Usage Guidance' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">SDK Usage Guidance</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I install and configure the PayPal SDK in my development environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the differences between the various PayPal SDKs (e.g., JavaScript, PHP, Python)?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I customize the PayPal SDK integration to match my application's requirements?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I handle user authentication and authorization with the PayPal SDK?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there code examples or sample projects available for using the PayPal SDK?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I handle errors and exceptions gracefully when using the PayPal SDK?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What SDK version should I use for integrating PayPal into my application?</a>

              </div>
            )}
            {selectedButton === 'Sandbox Environment Setup' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">Sandbox Environment Setup</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I create a sandbox account for testing PayPal integration?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the differences between sandbox and live environments in PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I simulate different payment scenarios in the PayPal sandbox environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I obtain API credentials for accessing the sandbox environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a way to reset or clear data in the sandbox environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What limitations or restrictions apply to testing in the PayPal sandbox?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I switch between sandbox and live modes in my application?</a>

              </div>
            )}
            {selectedButton === 'Webhooks Configuration Support' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">Webhooks Configuration Support</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are webhooks and how do they work in PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I set up and configure webhooks for receiving PayPal notifications?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What events and triggers can I subscribe to with PayPal webhooks?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I test webhooks in the PayPal sandbox environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I secure and authenticate incoming webhook notifications?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the best practices for handling webhook payloads and processing?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there any known issues or common pitfalls with PayPal webhooks?</a>

              </div>
            )}
            {selectedButton === 'SSL Certificate Installation Help' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">SSL Certificate Installation Help</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Why is SSL/TLS encryption important for PayPal integration?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I obtain and install an SSL certificate for my website or server?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the requirements for SSL/TLS encryption when using PayPal APIs?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I use free SSL certificates for securing my PayPal integration?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I verify that SSL/TLS encryption is properly configured for my domain?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there any tools or services available for testing SSL/TLS configuration?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What should I do if I encounter SSL/TLS-related errors during PayPal integration?</a>
              </div>
            )}
            {selectedButton === 'Instant Payment Notification Troubleshooting' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">Instant Payment Notification Troubleshooting</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What is Instant Payment Notification (IPN) and how does it work?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I configure my PayPal account to receive IPN notifications?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I test IPN notifications in the PayPal sandbox environment?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What data is included in an IPN message sent by PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I troubleshoot and debug IPN-related issues?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are common reasons for IPN delivery failures?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there any security considerations when handling IPN messages?</a>
              </div>
            )}
            {selectedButton === 'REST API Endpoint Reference' && (
              <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-2">REST API Endpoint Reference</h2>
                <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What is the base URL for accessing PayPal's REST API?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I authenticate requests to the PayPal REST API?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What are the main categories of resources available through the PayPal REST API?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I retrieve transaction details using the REST API?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I create and manage payments using the PayPal REST API?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What endpoints are available for managing subscriptions and recurring payments?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Are there API endpoints for managing disputes, refunds, and chargebacks?</a>
              </div>
            )}
    
          </div>
        )}
      </div>
    );
  }