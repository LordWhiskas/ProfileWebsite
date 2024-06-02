"use client";

import React, { useState } from 'react';
const PaymentFormPage = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleInputChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Card Number:", cardNumber);
        // Здесь можно добавить логику для обработки отправки данных
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl mb-6">Payment Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-lg mb-2">Вывести 100 рублей</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={cardNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentFormPage;
