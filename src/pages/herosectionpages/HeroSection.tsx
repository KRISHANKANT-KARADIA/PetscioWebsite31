import right from "../../assets/right2.svg";
import left from "../../assets/left.svg";

function HeroSection() {
    return (
        <>


            <section className="relative w-full flex flex-col justify-center overflow-hidden container mx-auto">
                <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-yellow-50 before:via-purple-100 before:to-indigo-300 lg:before:h-[93%] before:w-full before:z-[-1] " />





                <div className="container mx-auto px-6 mt-20 md:mt-25 lg:mt-50 ">

                    <div className="textpart">
                        <div className="text-center mb-0">
                            <h1 className="text-[45px]  md:text-5xl lg:text-[90px] font-playfair font-bold text-customText leading-tight">
                                Your pet can’t swipe <br /> but it has you.
                            </h1>
                            <p className="mt-7 mx-auto text-customText font-lexend text-[17px] leading-[35px]">
                                Neque, eros commodo, nascetur ullamcorper vitae. Tristique ut venenatis, volutpat <br />
                                lorem ut faucibus mauris, quisque.
                            </p>
                            <button className="mt-8 px-6 py-5 bg-gradient-to-r from-[#8761FC] to-[#4E46F6] text-white rounded-3xl shadow-md hover:shadow-lg transition DOWNLOAD_text">
                                DOWNLOAD APP
                            </button>


                        </div>
                    </div>

                    {/* Bottom Illustration Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between mt-15 space-y-10 md:space-y-0">
                        {/* Left Image */}
                        <div className="flex justify-center md:justify-start md:w-1/2">
                            <img src={right}
                                alt="Man with dog"
                                className="w-full md:w-96 lg:w-[650px]"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end md:w-1/2">

                            <img src={left}
                                alt="Dog with sword"
                                className="w-full md:w-96 lg:w-[550px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
