// import React from 'react'
// import Image from 'next/image'
// import { FaCheck } from 'react-icons/fa6'
// import FoodCategory from '../foodcatagery/page'



// function Hero() {
//   return (
//     <>
//     <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
//         {/* Heading */}
//         <div className='text-white w-full md:w-[50%]'>
//   <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
//     Its Quick & Amusing!
//   </h1>

//   <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

//     <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
//   </h1>

//   <p className='text-[10px] md:text-[16px] font-normal'>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
//   </p>

//   <div className='flex flex-col md:flex-row items-center md:items-start'>

//   <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
//     See More
//   </button>
//   </div>
// </div>

//         {/* Image */}

//         <div className='mt-[50px] md:mt-0 '>   
//             <Image 
//                 src="/food1.png"
//                 alt='Hero Image'
//                 width={700}
//                 height={500}
//                 className=''
//             />

//         </div>
//     </section>
//         <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]">
      

//       {/* Image */}




//       {/* Heading */}
//       <div className="text-white w-full md:w-[50%]">
//         <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
//           About us
//         </h1>

//         <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
//           <span className="text-[#FF9F0D]">We</span> Create the best foody
//           product
//         </h1>

//         <p className="text-[10px] md:text-[16px] font-normal">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
//           augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
//           sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
//           consequat.
//         </p>

//         <ul>
//           <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
//             <span className="mr-[10px]">
//               <FaCheck />
//             </span>{" "}
//             Lacus nisi, et ac dapibus sit eu velit in consequat.
//           </li>
//           <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
//             <span className="mr-[10px]">
//               <FaCheck />
//             </span>{" "}
//             Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
//           </li>
//           <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
//             <span className="mr-[10px]">
//               <FaCheck />
//             </span>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit
//           </li>
//         </ul>

//         <div className="flex flex-col md:flex-row items-center md:items-start">
//           <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
//             See More
//           </button>
//         </div>
//       </div>
//       <div className="mt-[50px] md:mt-0 ">
//         <Image src="/about1.png" alt="Hero Image" className="" width={336} height={536} />
//         <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
//           <Image src="/food2.png" width={40} height={40}  alt="Hero Image" className="mr-[16px] pt-[40px] w-[40px]" />
//           <Image src="/food3"  width={40} height={40} alt="Hero Image" className="pt-[40px] w-[40px]" />
//         </div>
//       </div>
//     </section>
//     <FoodCategory/>
//     </>
//   )
// }

// export default Hero

// import ProductCard from '../../components/Product/ProductCard';
// import { Product } from '../../types/product';

// const products: Product[] = [
//   { id: '1', name: 'Product 1', price: 29.99, image: '/food1.png' },
//   { id: '2', name: 'Product 2', price: 19.99, image: '/food2.png' },
//   // Add more products here
// ];export default function HomePage() {
//   return (
//     <main className="grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </main>
//   );
// }




// 'use client'

// import { useCart } from 'react-use-cart';
// import { useState } from 'react';export default function CheckoutPage() {
//   const { cartTotal, items } = useCart();
//   const [isProcessing, setIsProcessing] = useState(false);  const handleCheckout = async () => {
//     setIsProcessing(true);
//     // Simulate checkout process (e.g., call an API or payment service)
//     setTimeout(() => {
//       setIsProcessing(false);
//       alert('Order placed successfully!');
//     }, 2000);
//   };  return (
//     <div>
//       <h2>Checkout</h2>
//       <div>
//         {items.map((item) => (
//           <div key={item.id} className="flex justify-between">
//             <p>{item.name} x {item.quantity}</p>
//             <p>${item.price} * {item.quantity}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between">
//         <p>Total: ${cartTotal}</p>
//       </div>
//       <button
//         onClick={handleCheckout}
//         disabled={isProcessing}
//         className={`mt-96 bg-blue-500 text-white px-4 py-2 rounded ${isProcessing ? 'bg-gray-400' : ''}`}
//       >
//         {isProcessing ? 'Processing...' : 'Place Order'}
//       </button>
//     </div>
//   );
// }



























'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Checkout = () => {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);

  type CartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };

  type Address = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    company: string;
    country: "" | typeof countries[number]; // Allowing empty string along with the country values
    city: string;
    zipCode: string;
    address1: string;
    address2: string;
  };
  
  // Shipping and billing address state
  const [shippingAddress, setShippingAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    country: '' as keyof typeof cities,
    city: '',
    zipCode: '',
    address1: '',
    address2: ''
  });

  const [billingAddress, setBillingAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    country: '' as keyof typeof cities,
    city: '',
    zipCode: '',
    address1: '',
    address2: ''
  });

  const [sameAsShipping, setSameAsShipping] = useState(false);

  // Example data for country and city selection
  const countries = [ 'Pakistan', 'United States', 'Canada', 'United Kingdom'] as const;
  const cities = {
    'Pakistan': ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Leeds']
  };

  useEffect(() => {
    // Get cart and discount from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = JSON.parse(urlParams.get('cart') || '[]');
    const discountData = parseFloat(urlParams.get('discount') || '0');

    setCart(cartData);
    setDiscount(discountData);
  }, []);

  // Calculate cart subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate shipping charge (example fixed value)
  const shippingCharge = 10.0;

  // Calculate total amount
  const totalAmount = subtotal + shippingCharge - discount;

  // Handle place order
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // You can redirect to a confirmation page or reset the cart here
    router.push('/');
  };

  // Handle shipping address change
  const handleShippingAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle billing address change
  const handleBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Toggle the billing address checkbox
  const handleSameAsShippingToggle = () => {
    setSameAsShipping(!sameAsShipping);
    if (!sameAsShipping) {
      setBillingAddress(shippingAddress);
    } else {
      setBillingAddress({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        country: '' ,
        city: '',
        zipCode: '',
        address1: '',
        address2: ''
      });
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6 px-4 md:px-[20px] py-[20px]">
      <h2 className="font-bold text-xl md:text-2xl mb-4">Checkout</h2>

      {/* Shipping Address Form */}
      <div className="w-full border p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">Shipping Address</h3>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={shippingAddress.email}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Email Address"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={shippingAddress.phoneNumber}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={shippingAddress.company}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Company"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Country</label>
              <select
                name="country"
                value={shippingAddress.country}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">City</label>
              <select
                name="city"
                value={shippingAddress.city}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                disabled={!shippingAddress.country}
              >
                <option value="">Select City</option>
                {shippingAddress.country && cities[shippingAddress.country]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={shippingAddress.zipCode}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Address Line 1</label>
              <input
                type="text"
                name="address1"
                value={shippingAddress.address1}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Address Line 1"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Address Line 2</label>
              <input
                type="text"
                name="address2"
                value={shippingAddress.address2}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Address Line 2"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Billing Address Checkbox */}
      <div className="flex items-center space-x-2 mb-6">
        <input
          type="checkbox"
          id="sameAsShipping"
          checked={sameAsShipping}
          onChange={handleSameAsShippingToggle}
          className="h-4 w-4"
        />
        <label htmlFor="sameAsShipping" className="text-sm font-semibold">
          Billing Address same as Shipping Address
        </label>
      </div>

      {/* Billing Address Form */}
      {!sameAsShipping && (
        <div className="w-full border p-4 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-4">Billing Address</h3>
          <form className="space-y-4">
            {/* Similar inputs as for shipping address */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingAddress.firstName}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={billingAddress.lastName}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={billingAddress.email}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={billingAddress.phoneNumber}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={billingAddress.company}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Company"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Country</label>
                <select
                  name="country"
                  value={billingAddress.country}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">City</label>
                <select
                  name="city"
                  value={billingAddress.city}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  disabled={!billingAddress.country}
                >
                  <option value="">Select City</option>
                  {billingAddress.country && cities[billingAddress.country]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={billingAddress.zipCode}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Address Line 1</label>
                <input
                  type="text"
                  name="address1"
                  value={billingAddress.address1}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Address Line 1"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Address Line 2</label>
                <input
                  type="text"
                  name="address2"
                  value={billingAddress.address2}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Total and Order Summary */}
      <div className="w-full border p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal</span>
            <span>{subtotal.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping</span>
            <span>{shippingCharge.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Discount</span>
            <span>-{discount.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{totalAmount.toFixed(2)} USD</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-[#FF9F0D] text-white text-lg font-semibold rounded-md"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
