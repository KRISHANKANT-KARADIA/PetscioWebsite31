
import HeroSection from '../pages/herosectionpages/HeroSection'
import FeatureSection from '../pages/FeatureSection/FeatureSection'
import Testimonials from '../pages/Testimonials/Testimonials'


function Home() {
    return (
        <>
            <div className='container mx-auto'>
                <HeroSection />
                <FeatureSection />
                <Testimonials />
            </div>
        </>
    )
}

export default Home
