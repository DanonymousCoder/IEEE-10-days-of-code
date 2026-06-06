import '../index.css'




const technicalArsenal = [
    {'name': 'JavaScript', 'level': 'intermediate'},
    {'name': 'Python', 'level': 'Intermediate'},
    {'name': 'Java', 'level': 'Beginner'}
]

function SkillsPreview() {

    return (
        <div className="skills-section">
            <h1 className="skills-head">
                Technical Arsenal
            </h1>

            <div className="skill-cards">
                {technicalArsenal.map((elem, index) => {
                    <div className="skill-card" id={index}>
                        <p className="skill-name">{elem.name}</p>
                        <p className="skill-level">{elem.level}</p>
                    </div>
                })}
            </div>

            
        </div>
    )
}

export default SkillsPreview;