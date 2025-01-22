
import {MdEmail} from "react-icons/md"
import { useRef } from "react"
import { BsWhatsapp } from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import swal from "sweetalert"
import { GrLocation } from "react-icons/gr";
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
<section id="contact" className="mt-5 pt-5">
<h2 className="mb-4">Contact Me</h2>
<h4>Get In Touch</h4>

<div className="container contact_container">
<div className="contact_options">
<article>
<MdEmail  className="contact_icon"/>
    <h5>Email</h5>
    <h6>memmedovturqay871@gmail.com</h6>
    </article>

    <article>
<BsWhatsapp className="contact_icon" />
    <h5>WhatsApp</h5>
    <h6>+994705110677</h6>
    </article>
    <article>
<HiOutlineLocationMarker className="contact_icon text-white"/>
    <h5>Address</h5>
    <h6>Rizvan Teymurov 63, Baku</h6>
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
<label className=""></label>
{/* <input className="form-control" name="subject" placeholder="Subject*" required/> */}
{/* <label className=" mb-3"></label> */}
<textarea placeholder="Your Message ..." className="form-control" rows="7"></textarea>
<div className="text-center">
<button type="submit" className="submit-btn">Send Message</button>
</div>

</form>
</div>
</div>
</section>
    )
}
export default Contact;