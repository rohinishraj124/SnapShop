import React, { useState } from 'react';

const FAQs = () => {
    const faqData = [
        {
            question: "What is SnapShop?",
            answer: "SnapShop is an e-commerce platform offering a wide variety of products with a personalized shopping experience."
        },
        {
            question: "How do I create an account?",
            answer: "You can create an account by clicking on the 'Login' button on the top right of the homepage and click on create account after that fill the required details."
        },
        {
            question: "What payment methods do you accept?",
            answer: "Initially we accept only cash on delivery. In future we will add more payment methods."
        },

    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="bg-gray-50 text-gray-700">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                <div className="container mx-auto py-16 px-5 text-center">
                    <h1 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-wide drop-shadow-md">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-md sm:text-lg max-w-3xl mx-auto font-light">
                        Here are answers to some of the most frequently asked questions about SnapShop.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto py-12 px-5">
                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-5">
                            <div 
                                className="flex items-center justify-between mb-3 cursor-pointer" 
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                <span className="text-xl text-gray-600">{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQs;
