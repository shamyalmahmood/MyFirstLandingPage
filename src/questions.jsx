import React, { useState } from 'react';

function Questions() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (faqId) => {
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <div id="faq" className="container">
            <h2 className="text-5xl max-w-2xl leading-normal sm:font-semibold">FAQs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
                {faqs.map((faq, index) => (
                    <div key={index} className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                        <dt
                            className="justify-between items-center flex cursor-pointer"
                            aria-controls={`faq${index}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p className="font-semibold text-gray-800 text-lg">{faq.question}</p>
                            <i
                                className={`fa-solid fa-chevron-up transform transition-transform ${
                                    openFaq === index ? '' : '-rotate-180'
                                }`}
                            />
                        </dt>
                        <dd
                            id={`faq${index}`}
                            className={`font-light text-gray-500 text-lg mt-6 ${openFaq === index ? 'block' : 'hidden'}`}
                        >
                            <p>{faq.answer}</p>
                        </dd>
                    </div>
                ))}
            </div>
        </div>
    );
}

const faqs = [
    {
        question: "Is ToDesktop For Me?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill."
    },
    {
        question: "Can I try ToDesktop without buying?",
        answer: "Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the “Run” button. This allows you to test the app on your own computer to ensure it performs to your expectations."
    },
    {
        question: "Do you collect or store data about my customers?",
        answer: "No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests."
    },
    {
        question: "Does ToDesktop work with sites built with ___?",
        answer: "If you’re noticing a trend here, that’s because ToDesktop works with sites built with any technology stack. If it works in your browser it will work as a ToDesktop app."
    },
    {
        question: "I want to use ToDesktop to convert multiple web apps, is there a bulk discount available?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill."
    },
    {
        question: "What features are on the product roadmap?",
        answer: "If you have any suggestions, we’d love to hear! Please send us an email at support@todesktop.com or send us a message."
    },
    {
        question: "How does ToDesktop work under the hood?",
        answer: "It can help to think of ToDesktop as a custom web browser dedicated to your web app or website. It shows a live version of your site or web app at all times, just like a web browser. There is no toolbar or address bar or refresh buttons but it behaves and functions just like a web browser. This means you don’t need to do anything to your existing site, it will just work. If your site works in Google Chrome then it is compatible with ToDesktop."
    },
    {
        question: "Will my app work offline?",
        answer: "Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser."
    },
    {
        question: "Which version of Electron/Chromium is used?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill."
    },
    {
        question: "What support do you offer?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill."
    },
    {
        question: "How does my app get updated?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill."
    }
];
export default Questions;