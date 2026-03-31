

function Faq() {
    const faqs = [
        {
            q: "What is Tailwind CSS?",
            a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magni enim nulla pariatur autem sit ullam harum, quae distinctio vel ipsam labore ipsa. Sapiente, quos deleniti temporibus porro blanditiis aliquid. ",
        },
        {
            q: "Is this FAQ built with JavaScript?",
            a: "No, this accordion uses only Tailwind CSS and the peer selector — no JS or React state is required.",
        },
        {
            q: "Can multiple questions stay open?",
            a: "Yes! You can open as many FAQs as you want, because each accordion works independently.",
        },
        {
            q: "Is it responsive?",
            a: "Absolutely — the design automatically adjusts to mobile, tablet, and desktop using Tailwind breakpoints.",
        },
        {
            q: "What is Tailwind CSS?",
            a: "Tailwind CSS is a utility-first CSS framework that helps you design modern UIs directly in your markup.",
        },
        {
            q: "Is this FAQ built with JavaScript?",
            a: "No, this accordion uses only Tailwind CSS and the peer selector — no JS or React state is required.",
        },
        {
            q: "Can multiple questions stay open?",
            a: "Yes! You can open as many FAQs as you want, because each accordion works independently.",
        },
        {
            q: "Is it responsive?",
            a: "Absolutely — the design automatically adjusts to mobile, tablet, and desktop using Tailwind breakpoints.",
        },
    ];

    return (
        <div className="container mx-auto xl:px-40 px-4 lg:mt-24 md:mt-16 mb-20">
            <h2 className="font-Lexend text-[45px] lg:text-[64px] font-[500] text-[#1D2538] mb-10">
                FAQs
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="bg-white/90 border border-gray-200 rounded-2xl shadow-[0_6px_7px_rgba(119,65,234,0.2)] hover:shadow-md transition-all duration-300"
                    >
                        {/* Accordion using details-summary — pure HTML + Tailwind */}
                        <details className="group rounded-xl open:shadow-md open:bg-white/100">
                            <summary className="flex cursor-pointer items-center justify-between lg:p-6 p-4 list-none">
                                <h3 className="text-[18px] lg:text-[22px] font-[600] text-[#1D2538]">
                                    {faq.q}
                                </h3>

                                {/* Chevron rotation */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-[#7741EA] transition-transform duration-300 group-open:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <div className="px-6 pb-5 text-gray-700 text-[15px] font-[300] leading-relaxed transition-all duration-300">
                                {faq.a}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
