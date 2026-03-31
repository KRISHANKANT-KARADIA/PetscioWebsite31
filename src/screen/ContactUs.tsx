

function ContactUs() {
    return (
        <>
            <div className="container mx-auto xl:px-40 lg:mt-25 md:mt-12 px-4 lg:mb-40">
                <div className="mb-8 lg:mb-20">

                    <h2 className="font-Lexend lg:mt-35 mt-25 xl:font-[500]  text-[45px] leading-[36px] tracking-[-0.02em] text-[#1D2538]
                                   sm:text-[60px] sm:leading-[55px]
                                   md:text-[60px] md:leading-[60px]
                                   lg:text-[64px] lg:leading-[60px]
                                   xl:text-[64px] xl:leading-[60px] "
                    >
                        Contact Us
                    </h2>

                </div>



                <div className="bg-[#7741EA40] lg:p-25 p-5 mb-15 rounded-2xl shadow-md">
                    <form className="space-y-6">
                        {/* Name Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-[18px] font-[500] text-gray-800 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="w-full px-4 py-3 border-none rounded-lg bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-[18px] font-[500] text-gray-800 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="w-full px-4 py-3 border-none rounded-lg bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>

                        {/* Contact Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-[18px] font-[500] text-gray-800 mb-1">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Contact Number"
                                    className="w-full px-4 py-3 border-none rounded-lg bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-[18px] font-[500] text-gray-800 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 border-none rounded-lg bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>

                        {/* Query Description */}
                        <div>
                            <label className="block text-sm text-[18px] font-[500] text-gray-800 mb-1">
                                Query Description
                            </label>
                            <textarea
                                // rows="7"
                                placeholder="Enter"
                                className="w-full px-4 py-2 border-none rounded-lg bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs


