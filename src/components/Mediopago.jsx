import Image from 'next/image';
const GoogleImg = require('@/../public/img/googleimg.png');

const PaymentButtons = () => {
    return (
      <div className="flex space-x-4">
        {/* Botón PayPal */}
        <button className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
          <img 
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png" 
            alt="PayPal" 
            className="w-8 h-8 mr-2"
          />
        </button>
  
        {/* Botón Tarjeta de Crédito */}
        <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" 
            alt="Credit Card" 
            className="w-10 h-6 mr-2"
          />
        </button>
  
        {/* Botón Google Pay */}
        <button className="flex items-center hover:bg-gray-700 text-white py-2 px-4 rounded bg-gray-800 transition">
          <img 
            src= 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg'
            alt="Google Pay" 
            className="w-14 h-8 mr-2"
          />
        </button>
      </div>
    );
  };
  
  export default PaymentButtons;
  