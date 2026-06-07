import '../index.css'
import goatedMe from '../assets/goated_me.jpg'

function HeroSection() {

    return (
        <div className="hero">

            <div className="right">
        
                <div className="top">
                    <h1 className="hd">
                        Building the
                        future of the
                        web, <span>one
                        commit at a
                        time.</span>
                    </h1>
                    <p>
                                I am a Software Engineer specializing in the architecture of high-performance,
                                distributed systems. My journey in technology is driven by a profound obsession with
                                system efficiency and the elegant simplicity of clean code. With over a decade of
                                experience navigating complex software ecosystems, I've dedicated my career to
                                building resilient backends that scale horizontally without compromising on latency.
                    </p>
                </div>

                <div className="bottom">
                    <a href='/projects'>View Projects</a>
                    <a className='no-bg' href='/contact'>Contact Me</a>
                </div>
            </div>


            <div className="left">
                <img src={goatedMe} alt="Goated me" />
            </div>
        </div>
    )
}

export default HeroSection;