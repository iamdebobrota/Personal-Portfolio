import React, { useContext } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import contact from '../../img/contact.svg'
// import linkedin from '../../img/linkedin.png'
// import github from '../../img/github.svg';
// import gmail from '../../img/gmail.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { useForm, ValidationError } from '@formspree/react';
import { CgMail } from 'react-icons/cg';
import { BsLinkedin } from 'react-icons/bs';


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();
  // const [done, setDone] = useState(false)


  const [state, handleSubmit] = useForm("xwkyadvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_gugqc0e",
  //       "template_m5udu2c",
  //       form.current,
  //       "VLwg1ltOWvnCYAiK_"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact_main" style={{ color: darkMode ? 'white' : '' }} id="contact">
      <div className="heding_cont">
      <span style={{ color: darkMode ? 'white' : '' }} className='get_touch'>Get in Touch
        <span className="contact"> Contact </span> me</span>
      </div>
<div className="contact_flex">



        <img src={contact} alt="msg" className="massge_img" />

      <div className="contact-form" >

        <div className="c-right">
          
          <div className="up_cont">
            <BsFillTelephoneFill />
            <p>+91 9733423697</p>
          </div>
          <div>
            <HiOutlineMail className="md" />
            <p>iamdebobrota@gmail.com</p>
          </div>
            <div>
              <BsGithub/>
              <p>https://github.com/iamdebobrota</p>
            </div>


          {/* <form ref={form} onSubmit={handleSubmit} action="https://formspree.io/f/xwkyadvj" method="POST"> */}



          <div className="con_img">
            <a href='https://www.linkedin.com/in/debobrota-haldar-3340651aa/'
             target="_blank" rel="noopener noreferrer" className="linkdin">
              <BsLinkedin/>
              <p>LinkedIn</p>
            </a>
            <a href='https://github.com/iamdebobrota' target="_blank" rel="noopener noreferrer" className="git_con">

              <BsGithub/>
              <p>GitHub</p>
            </a>
            <a href='https://github.com/iamdebobrota' target="_blank" rel="noopener noreferrer" className="git_con gmail">
              <CgMail/>
              <p>Gmail</p>
            </a>

          </div>

          {/* <input type="text" className="user" name="Email" id="email" placeholder="Name"/>
     

          <input className="user" placeholder="Email"
            id="email"
            type="email" 
            name="email"
            />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

          <textarea className="user" placeholder="Message"  id="message" name="message"/>
     
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          <submit value="Send" className="button_s" type="submit" disabled={state.submitting}>Send</submit>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
          {/* </form> */}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>

          <ContactForm />
        </div>
      </div>

      </div>
    </div>
  );
};

export default Contact;



// import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwkyadvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      {/* <input type="text" className="user" name="Email" id="email" placeholder="Name"/>*/}

      <input
        id="email"
        type="email"
        name="email"
        className="user"
        placeholder="Email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}

      />
      <textarea
        id="message"
        name="message"
        className="user"
        placeholder="Messages"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="button_su">
        Submit
      </button>
    </form>
  );
}

