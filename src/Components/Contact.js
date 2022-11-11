import {IoLocationOutline} from "react-icons/io5"
import {MdEmail} from "react-icons/md"
import { useRef } from "react"
import { FaPhoneAlt } from "react-icons/fa"
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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.436865589689!2d49.947750550921796!3d40.39917187926585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630fe8f39b49%3A0x331cf816d099a591!2zNTUgQsmZaHJ1eiBOdXJpeWV2LCBRYXJhw6d1eHVyLCBBesmZcmJheWNhbg!5e0!3m2!1saz!2s!4v1664724747879!5m2!1saz!2s" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className="container pt-5 text-center">
<div className="row">
<div className="col-lg-6">
<h2 className="mb-4">Contact Me</h2>
<div className="contact-info">
<ul className="nav">
<li> <div className="address"><MdEmail fontSize={24} />  <a>  &nbsp; Email:memmedovturqay871@gmail.com</a></div></li>
<li><div className="address"> <FaPhoneAlt fontSize={24}/> &nbsp; Phone: +994(70)5110677</div></li>
<li> <div className="address"> <IoLocationOutline fontSize={24}/>&nbsp; Address:Behruz Nuriyev 55/57</div></li>
</ul>
</div>
</div>
<div className="col-lg-6">
<h2 className="mb-4">Contact Form</h2>
<form ref={form}  onSubmit={sendEmail}>
 <div className="row">
<div className="col-lg-6">
<label className="mb-3"></label>
<input className="form-control" name="name" placeholder="Your Name*" required/>
<label className="mb-3"></label>
<input className="form-control" name="phone" placeholder="Phone number*" />
</div>
<div className="col-lg-6">
<label className=" mb-3"></label>
<input className="form-control" name="email" placeholder="Email*" required/>
<label className=" mb-3"></label>
<input className="form-control" name="subject" placeholder="Subject*" required/>
</div>
</div>
<label className=" mb-3"></label>
<textarea placeholder="Your Message ..." className="form-control mb-3" rows="5"></textarea>
<button type="submit" className="submit-btn mt-5">Send Message</button>
</form>
</div>
</div>
</div>
</section>
    )
}
export default Contact;