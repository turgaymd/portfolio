
import {MdEmail} from "react-icons/md"
import { useRef } from "react"
import { BsWhatsapp } from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import emailjs from '@emailjs/browser';
import swal from "sweetalert"
const Contact=()=>{

    const form=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_kktvl24', 'template_qlewx5f', form.current, 'wIZ861omrA8UV6ipT')
      .then((result) => {
          swal("Message sent successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
<section id="contact" className="mt-4 mb-5">
<h5>Get In Touch</h5>
<h2 className="mb-4">Contact Me</h2>
<div className="container contact_container">
<div className="contact_options">
<article>
<MdEmail  className="contact_icon"/>
    <h5>Email</h5>
    <h6>memmedovturqay871@gmail.com</h6>
    <a href="mailto: memmedovturqay871@gmail.com" target="_blank">  Send a message </a>
    </article>
    <article>
<RiMessengerLine className="contact_icon"/>
    <h5>Messenger</h5>
    <h6>Turqay Memmedov</h6>
    <a href="https://www.messenger.com/t/100000953835462" target="_blank">  Send a message </a>
    </article>
    <article>
<BsWhatsapp className="contact_icon" />
    <h5>WhatsApp</h5>
    <h6>+994705110677</h6>
    <a href="https://api.whatsapp.com/send?phone=994705110677" target="_blank">  Send a message </a>
    </article>
</div>
<div>
<form ref={form}  onSubmit={sendEmail}>
{/* <label className="mb-3"></label> */}
<input className="form-control" name="name" placeholder="Your Name*" required/>
{/* <label className="mb-3"></label> */}
<input className="form-control" name="phone" placeholder="Phone number*" />
{/* <label className=" mb-3"></label> */}
<input className="form-control" name="email" placeholder="Email*" required/>
<label className=" mb-3"></label>
{/* <input className="form-control" name="subject" placeholder="Subject*" required/> */}
{/* <label className=" mb-3"></label> */}
<textarea placeholder="Your Message ..." className="form-control" rows="7"></textarea>
<button type="submit" className="submit-btn">Send Message</button>
</form>
</div>
</div>
</section>
    )
}
export default Contact;