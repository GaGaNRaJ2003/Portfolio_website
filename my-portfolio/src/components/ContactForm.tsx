import {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import './styles/ContactForm.css'

const ContactForm = () =>{
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status,setstatus] = useState<'idle' | 'sent' | 'error'>('idle')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e:React.FormEvent)=>{
        e.preventDefault();

        if(!formRef.current) return;

        emailjs.sendForm(
            'service_bn14xnr',
            'template_7r3qp0y',
            formRef.current,
            'GJqgw-w-0T8oM-CMT'
        ).then(()=> {
            setstatus('sent');
            setName('');
            setEmail('');
            setMessage('');
        },
        ()=> setstatus('error'))
    };

    return (
        <section className="contact-form-section">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <input type="text" name='user_name' placeholder='Your Name' required value={name} onChange={e => setName(e.target.value)} />
                <input type="email" name='user_email' placeholder='Your Email' required value={email} onChange={e => setEmail(e.target.value)} />
                <textarea name="message" placeholder='Your Message' rows={5} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button type='submit'>
                    Send Message
                </button>
                {status === 'sent' && <p className="status success">Message sent successfully!</p>}
                {status === 'error' && <p className="status error">Something went wrong. Try again!</p>}
            </form>
        </section>
    )
}

export default ContactForm;
