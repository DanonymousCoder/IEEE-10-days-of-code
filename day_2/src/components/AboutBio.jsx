import '../index.css'
import goatedMe from "../assets/goated_me.jpg"

function AboutBio() {

    return (
        <div className="about">
            <div className="left">
                <img src={goatedMe} alt="Goated me" />
            </div>

            <div className="right">
                <div className="top">
                    <h6>About me</h6>
                    <h2>Software Developer</h2>
                </div>

                <div className="bottom">
                    <p>
                        I am a Software Engineer specializing in the architecture of high-performance,
                        distributed systems. My journey in technology is driven by a profound obsession with
                        system efficiency and the elegant simplicity of clean code. With over a decade of
                        experience navigating complex software ecosystems, I've dedicated my career to
                        building resilient backends that scale horizontally without compromising on latency.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutBio;