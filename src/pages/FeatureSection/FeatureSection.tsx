
import m from "../../assets/m1.svg";
import m2 from "../../assets/m2.svg";
import m3 from "../../assets/m3.svg";
import m4 from "../../assets/m4.svg";
import mobile from "../../assets/mobile.svg";


const FeatureSection = () => {
    return (
        // <section className="bg-gradient-to-r from-[#f2efff] to-[#fef8ec] py-24">
        <section className="py-24">
            <div className="container mx-auto px-2">
                {/* Title */}
                <div className="flex justify-center pb-20">
                    <h1 className="lg:text-[50px] lg:font-[700] text-[40px] font-[700] font-playfair text-center">Match. Chat. Connect.</h1>
                </div>

                {/* 3-column layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col items-center lg:items-start lg:space-y-30 space-y-10">
                        <div className="max-w-[360px] text-center lg:text-left">
                            <img src={m} alt="App Preview" className="featureImag mx-auto lg:mx-0" />
                            <h5 className="font-bold text-lg mt-3 font-[600] text-[25px] text-[#343B4C]">Lorem ipsum dolor sit</h5>
                            <p className="text-[15px] font-[400] text-[#343B4C99] mt-2 text-sm">
                                Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
                            </p>
                        </div>

                        <div className="max-w-[360px] text-center lg:text-left">
                            <img src={m2} alt="App Preview" className="featureImag mx-auto lg:mx-0" />
                            <h5 className="font-bold text-lg mt-3 font-[600] text-[25px] text-[#343B4C]">Sit amet consectetur</h5>
                            <p className="text-[15px] font-[400] text-[#343B4C99] mt-2 text-sm">
                                Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img src={mobile} alt="App Preview" className="w-full h-[737px]" />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center lg:items-start lg:space-y-30 space-y-10">
                        <div className="max-w-[360px] text-center lg:text-left">
                            <img src={m3} alt="App Preview" className="featureImag mx-auto lg:mx-0" />
                            <h5 className="font-bold text-lg mt-3 font-[600] text-[25px] text-[#343B4C]">Onsectetur adipiscing elit</h5>
                            <p className="text-[15px] font-[400] text-[#343B4C99] mt-2 text-sm">
                                Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
                            </p>
                        </div>

                        <div className="max-w-[360px] text-center lg:text-left">
                            <img src={m4} alt="App Preview" className="featureImag mx-auto lg:mx-0" />
                            <h5 className="font-bold text-lg mt-3 font-[600] text-[25px] text-[#343B4C]">Amet id fringilla arcu</h5>
                            <p className="text-[15px] font-[400] text-[#343B4C99] mt-2 text-sm">
                                Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FeatureSection;
