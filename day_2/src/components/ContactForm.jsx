function ContactForm() {

    return (

        <div className="contact-section">
            <div className="contact-head">
                <h2>Get in touch</h2>
                <p>Have a project in mind or want to chat about software engineering? Drop me a
message below.</p>
            </div>

            <form action="#">
                <div className="user-details">
                    <div className="name">
                        <label htmlFor="name">Fullname</label>
                        <input type="text" placeholder="John Doe"/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="john@example.com"/>
                    </div>
                </div>

                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Subject of the message"/>
                </div>

                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea name="msg" id="msg" placeholder="Your message here..."></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;