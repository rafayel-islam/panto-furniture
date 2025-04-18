import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const paymentOptions = [
  { value: 'bkash', label: 'bKash' },
  { value: 'nagad', label: 'Nagad' },
  { value: 'rocket', label: 'Rocket' },
];

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = (value) => {
    setPaymentMethod(value);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed with payment:', paymentMethod);
    
  };

  return (
    <div className="container max-w-2xl px-4 py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <textarea
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Custom Dropdown */}
        <div>
          <label className="block mb-1">Select Payment Method</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {paymentMethod ? paymentOptions.find((opt) => opt.value === paymentMethod)?.label : '-- Select --'}
              <FaChevronDown className="text-gray-500" />
            </button>

            {dropdownOpen && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-md">
                {paymentOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`px-4 py-2 cursor-pointer hover:bg-amber-600 hover:text-white ${
                      paymentMethod === option.value ? 'bg-amber-100' : ''
                    }`}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white rounded bg-primary hover:bg-amber-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
