import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import coma from "../../assets/coma.svg";
import user1 from "../../assets/face.jpg";

const testimonials = [
    {
        name: "Judy Roseless",
        role: "Marketing Head at ROM.",
        textBold:
            "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
        image: user1,
    },
    {
        name: "Judy Roseless",
        role: "Marketing Head at ROM.",
        textBold:
            "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
        image: user1,
    },
    {
        name: "Judy Roseless",
        role: "Marketing Head at ROM.",
        textBold:
            "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
        image: user1,
    },
    {
        name: "Judy Roseless",
        role: "Marketing Head at ROM.",
        textBold:
            "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
        image: user1,
    },
    {
        name: "Judy Roseless",
        role: "Marketing Head at ROM.",
        textBold:
            "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
        image: user1,
    },

];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-[#7741EA40] to-[#ccb7f7] py-20 px-2">
            <div className="text-center mb-12">
                <h2 className="md:text-4xl people mb-5">
                    People’s thoughts
                </h2>
                <p className="tracking-widest uppercase peoplepp" >
                    See what are others saying
                </p>
            </div>

            <div className="lg:max-w-[90%] max-w-[100%] mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1440: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-2xl shadow-md lg:p-15  lg:ps-20 ps-15 p-10 h-full flex flex-col justify-between mb-10">
                                <div>
                                    <img src={coma} alt="Quote" className="w-8 lg:mb-4 absolute lg:left-8 left-6" />
                                    <h3 className="mb-2 quote_text">
                                        {item.textBold}
                                    </h3>
                                    <p className="quote_textp">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="flex items-center mt-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-15 h-15 rounded-5 mr-3"
                                    />
                                    <div>
                                        <p className="tt">
                                            {item.name}
                                        </p>
                                        <p className="ttt">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
