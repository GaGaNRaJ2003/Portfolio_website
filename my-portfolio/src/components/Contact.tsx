import './styles/ContactSection.css'

const ContactSection = () =>{
    return (

        <section className="contact-section">
            <h2 className="section-title">Get in Touch</h2>

            <p className="contact-description">
                Feel free to reach out to me for collaboration, project ideas, or just a tech chat! <br></br><br />
                Made with passion and love ❤️ by Gagan
            </p>

            <div className="contact-details">
                <p><strong>Email:</strong> <a href="mailto:gagan22183@iiitd.ac.in">gagan22183@iiitd.ac.in</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/GaGaNRaJ2003" target="_blank" rel="noreferrer">GaGaNRaJ2003</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gagan-raj-singh-52861a247/" target="_blank" rel="noreferrer">Gagan Raj Singh</a></p>
            </div>
        </section>
    )
}

export default ContactSection