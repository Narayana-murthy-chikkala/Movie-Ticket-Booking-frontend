import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16);
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted;
  };

  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length > 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!cardNumber || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    if (!expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Please enter a valid expiry date (MM/YY)';
    }
    if (!cvv || !/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Payment successful!', {
        position: 'top-right',
        autoClose: 2000,
        onClose: () => navigate('/'),
      });
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(formatCardNumber(value));
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value;
    setExpiry(formatExpiry(value));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvv(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-25 sm:pt-4 p-4 sm:p-6 font-sans">
      <div className="rounded-2xl shadow-2xl flex flex-col sm:flex-row max-w-4xl w-full">
        {/* Left Section - Booking Summary */}
        <div className="w-full sm:w-1/3 bg-gray-900 text-white p-6 sm:p-8 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Booking Summary</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Movie: Salaar</h3>
              <p className="text-xs sm:text-sm">Cinema: Cityplex Cinemas</p>
              <p className="text-xs sm:text-sm">Date: July 27, 2025</p>
              <p className="text-xs sm:text-sm">Time: 8:30 AM</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm">Seats: B1, B2, B3</p>
              <p className="text-xs sm:text-sm">Ticket Price: $49.00 x 3</p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xs sm:text-sm">Subtotal: $147.00</p>
              <p className="text-xs sm:text-sm">Service Fee: $3.50</p>
              <p className="text-lg sm:text-xl font-bold mt-2">Total: $150.50</p>
            </div>
          </div>
        </div>

        {/* Right Section - Payment Form */}
        <div className="w-full sm:w-2/3 bg-white p-6 sm:p-8 rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">Payment Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-black">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full p-2 sm:p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block text-xs sm:text-sm font-medium text-black">Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="mt-1 block w-full p-2 sm:p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                />
                {errors.expiry && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.expiry}</p>}
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-xs sm:text-sm font-medium text-black">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="123"
                  maxLength="4"
                  className="mt-1 block w-full p-2 sm:p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                />
                {errors.cvv && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-black">Cardholder Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="John Doe"
                className="mt-1 block w-full p-2 sm:p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
              />
              {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-lg hover:bg-red-700 transition duration-200 text-sm sm:text-base"
            >
              Pay $150.50
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-4 text-center">
            Secured by 256-bit SSL encryption
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Payment;