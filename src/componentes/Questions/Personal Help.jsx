import React, { useState } from 'react';

function Linkbuttons({ buttons, onChange }) {
  const [selectedOption, setSelectedOption] = useState(buttons[0]);

  const handleChange = (button) => {
    setSelectedOption(button);
    onChange(button);
  };

  return (
    <div className='mb-20'>
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

function PersonalHelp() {
  const Buttons = ['Common Questions', 'PayPal Help Guides', 'Payments & Transfers', 'Disputes & Limitations', 'My Account', 'My Wallet', 'Login & Security', 'Seller Tools'];
  const [selectedButton, setSelectedButton] = useState('Common Questions');

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
         
          {selectedButton === 'Common Questions' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">Common Questions</h2>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I open a case with a seller?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>I forgot my password. How do I reset it?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why is my payment on hold or unavailable?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>I want my money back. Can I cancel a payment?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why am I receiving emails from PayPal when I don't have an account??</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I report an unauthorised transaction or account activity?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why is the paymnet I sent pending? Can I cancel it?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I request a refund?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why was my paymnet declined?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I change the name on my PayPal account?</a>
            </div>
          )}
          {selectedButton === 'PayPal Help Guides' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">PayPal Help Guides</h2>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I set up a PayPal account? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What are the fees associated with using PayPal?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I link my bank account or credit/debit card to my PayPal account?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What should I do if I forgot my PayPal password?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I send money to someone using PayPal?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What is PayPal Buyer Protection, and how does it work?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I withdraw funds from my PayPal account to my bank account?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How can I resolve a dispute or claim on PayPal if I've encountered a problem with a transaction?</a>
            </div>
          )}
          {selectedButton === 'Payments & Transfers' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">Payments & Transfers</h2>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Can I cancel an eCheque payment?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why is the payment I sent pending or unclaimed? Can I cancel it?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why is my money being held in reserve?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How can I release my payment(s) on hold?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Why is my payment on hold or unavailable?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I accept or deny a partial refund?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Where is my refund?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>PayPal error messages when trying to transfer money?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What can I do if I sent a payment to the wrong person?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What are the cross-border fees when selling internationally?</a>
            </div>
          )}
          {selectedButton === 'Disputes & Limitations' && (
            <div  className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">Disputes & Limitations</h2>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How do I open a dispute on PayPal?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What should I do if I received an item that doesn't match the seller's description? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'> Can I dispute a PayPal transaction if I never received the item I paid for?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What is PayPal Buyer Protection, and how does it apply to disputes? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>How long does it take for PayPal to resolve a dispute? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Can I escalate a dispute to a claim if the seller doesn't respond? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>What happens if PayPal finds the seller at fault in a dispute? </a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Can I appeal PayPal's decision if my dispute is closed in favor of the seller?</a>
              <a href="#" className='text-sm font-semibold  hover:underline text-textcolor'>Are there any limitations on filing disputes or claims with PayPal?</a>
            </div>
          )}
          {selectedButton === 'My Account' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">My Account</h2>
              <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I update my personal information on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I change the primary email address associated with my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I verify my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What should I do if I forgot my PayPal password?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is it possible to change my PayPal account type from personal to business?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I add or remove a bank account or credit card from my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I view my transaction history on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I set up notifications for account activity on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What security measures does PayPal offer to protect my account?</a>
            </div>
          )}
          {selectedButton === 'My Wallet' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">My Wallet</h2>
              <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I add funds to my PayPal wallet?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I transfer money from my PayPal wallet to my bank account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I check the balance in my PayPal wallet?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a fee for transferring money from my PayPal wallet to a bank account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What payment methods can I use to fund my PayPal wallet?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I set a preferred payment method in my PayPal wallet?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I use my PayPal wallet to make purchases online?</a>

              
            </div>
          )}
          {selectedButton === 'Login & Security' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">Login & Security</h2>
              <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I create a strong password for my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What should I do if I suspect unauthorized activity on my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I enable two-factor authentication for added security on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I change my PayPal account password?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is it safe to use public Wi-Fi networks for accessing my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What should I do if I receive a suspicious email or message claiming to be from PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I update my security questions and answers on PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I use biometric authentication (such as fingerprint or face recognition) to access my PayPal account?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What measures does PayPal take to protect my account from phishing and other cyber threats?</a>
            </div>
          )}
          {selectedButton === 'Seller Tools' && (
            <div className='flex flex-col gap-3 '>
              <h2 className="text-xl font-semibold mb-2">Seller Tools</h2>
              <a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I set up PayPal Checkout on my website?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I customize the PayPal button on my website?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What is PayPal Business and how can it help me manage my sales?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I create and send invoices through PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Is there a way to set up recurring payments for my customers using PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How can I integrate PayPal with my e-commerce platform?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>What reporting tools does PayPal offer for tracking sales and transactions?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>Can I accept payments in multiple currencies with PayPal?</a>
<a href="#" className='text-sm font-semibold hover:underline text-textcolor'>How do I create and manage subscription plans for my customers?</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PersonalHelp;