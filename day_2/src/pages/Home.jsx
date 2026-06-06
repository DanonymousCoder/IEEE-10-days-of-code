import '../index.css'
import HeroSection from '../components/HeroSection'
import SkillsPreview from '../components/SkillsPreview';

function Home() {

    return (
        <div className="container">
            <HeroSection />
            <SkillsPreview />
        </div>
    )
}

export default Home;