import AboutBio from '../components/AboutBio.jsx'
import HeroSection from '../components/HeroSection.jsx';
import SkillsPreview from '../components/SkillsPreview.jsx';
import '../index.css'

function Home() {

    return (
        <div className="container">
            <HeroSection />
            <SkillsPreview />
        </div>
    )
}

export default Home;