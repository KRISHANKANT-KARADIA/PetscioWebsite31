
import "./PetSlider.css";

import dog1 from "../../assets/about/PetSliderone.svg";
import dog2 from "../../assets/about/PetSlider2.svg";
import dog3 from "../../assets/about/PetSlider3.svg";
import dog4 from "../../assets/about/PetSlider4.svg";
import dog5 from "../../assets/about/PetSliderone.svg";
import dog6 from "../../assets/about/PetSlider2.svg";
import dog7 from "../../assets/about/PetSlider3.svg";
import dog8 from "../../assets/about/PetSlider4.svg";

const PetSliders = () => {
    const images = [
        { src: dog1, offset: "14px" },
        { src: dog2, offset: "130px" },
        { src: dog3, offset: "-94px" },
        { src: dog4, offset: "82px" },
        { src: dog5, offset: "-52px" },
        { src: dog6, offset: "150px" },
        { src: dog7, offset: "-51px" },
        { src: dog8, offset: "100px" },
    ];

    return (
        <div className="pet-slider-wrapper">
            <div className="pet-slider-track">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="pet-slide"
                        style={{ transform: `translateY(${item.offset})` }}
                    >
                        <img src={item.src} alt={`dog${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetSliders;

