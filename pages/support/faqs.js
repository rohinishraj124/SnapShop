import React, { useState } from 'react';

const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 dark:bg-gray-800">
            <div
                className="flex items-center justify-between mb-3 cursor-pointer"
                onClick={onToggle}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.question}`}
                onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
            >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{faq.question}</h3>
                <span className="text-xl text-gray-600 dark:text-gray-400">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <p
                    id={`faq-answer-${faq.question}`}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-all duration-300"
                >
                    {faq.answer}
                </p>
            )}
        </div>
    );
};

const FAQs = () => {
    const faqData = [
        {
            question: 'What is SnapShop?',
            answer:
                'SnapShop is an e-commerce platform offering a wide variety of products with a personalized shopping experience.',
        },
        {
            question: 'How do I create an account?',
            answer:
                "You can create an account by clicking on the 'Login' button on the top right of the homepage and clicking on 'Create Account'. Fill in the required details to get started.",
        },
        {
            question: 'What payment methods do you accept?',
            answer:
                'Initially, we accept only cash on delivery. In the future, we will add more payment methods.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
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
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => toggleAnswer(index)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQs;
