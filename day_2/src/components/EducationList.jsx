function EducationList() {
    const educationList = [
        {
            'name': 'Abesan Muslim Community College',
            'degree': 'Science',
            'duration': '2019-2025',
            'about': "Specialized in Distributed Systems and Artificial Intelligence. Conducted research on consensus algorithms in high-latency network environments and explored the intersection of neural networks and predictive system scaling.",
            'courseworks': ['Scratch', 'Generation Of computers']
        }
    ]

    return (
        <section className="education-section">
            <div className="education-head">
                <h1>Academic Foundation</h1>
                <hr />
            </div>

            <div className="education-lists">
                {
                    educationList.map((elem, index) => (
                        <div className="school-card" key={index} id={index}>
                            <div className="top">
                                <div className='from'>
                                    <h4 className="uni">{elem.name}</h4>
                                    <p className="degree">{elem.degree}</p>
                                </div>
                                <p className="duration">{elem.duration}</p>
                            </div>

                            <div className="bottom">
                                <p className="about">
                                    {elem.about}
                                </p>

                                <div className="courseworks">
                                    {
                                        elem.courseworks.map((coursework, index) => (
                                            <p className="coursework" key={index}>{coursework}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}

export default EducationList;