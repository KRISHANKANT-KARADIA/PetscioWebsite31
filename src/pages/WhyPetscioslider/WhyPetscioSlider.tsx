
import '../WhyPetscioslider/WhyPetscioSlider.css'

import dog0 from "../../assets/WhyPetscioSlider/w-0.jpg";
import dog1 from "../../assets/WhyPetscioSlider/w1.svg";
import dog2 from "../../assets/WhyPetscioSlider/w2.jpg";

const WhyPetscioSlider = () => {
    const images = [
        { src: dog0, offset: "0px" },
        { src: dog1, offset: "0px" },
        { src: dog2, offset: "0px" },
        { src: dog0, offset: "0px" },
        { src: dog1, offset: "0px" },
        { src: dog2, offset: "0px" },
        { src: dog0, offset: "0px" },
        { src: dog1, offset: "0px" },
    ]

    return (
        <div className="WhyPetscioSlider">
            <div className="WhyPetscioSlider_pet-slider-track">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="WhyPetscioSlider_pet-slider-track_pet-slide"
                        style={{ transform: `translateY(${item.offset})` }}
                    >
                        <img src={item.src} alt={`dog${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyPetscioSlider;




