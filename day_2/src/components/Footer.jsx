function Footer() {

    const footerLinks = [
        { 'name': 'GitHub', 'link': '' },
        { 'name': 'LinkedIn', 'link': '' },
        { 'name': 'Twitter', 'link': '' }
    ]

    return (
        <>
            <footer>
                <p className="left">© 2024 Software Engineer. Built with Precision.</p>

                <ul className="footer-links">
                    {footerLinks.map(elem => (
                        <li key={elem.name}>
                            <a href={elem.link} target="_blank" rel="noopener noreferrer">
                                {elem.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    )
}


export default Footer;