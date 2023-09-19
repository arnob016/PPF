/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react';
import {useState, useRef} from 'react';
import emailjs  from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import Giscus from '@giscus/react';
import {motion} from "framer-motion";
import {styles} from '../styles'
import { slideIn } from '../utils/motion';

//template_qgyhcxi
//service_6j0rrc1
//OzT8cySUU0aXWs20P

const Contact = () => {
 const formRef = useRef();
 const  [form, setForm] = useState({
  name: '',
  email: '',
  message: '',
 });
 
 const [loading, setLoading] = useState(false);

 const handleChange = (e) => {

  const {name, value} = e.target;
  setForm({...form, [name]: value});
 }


 
 const handleSubmit = (e) => {
  e.preventDefault();

  // Check if any field is empty
  if (!form.name || !form.email || !form.message) {
    alert("Please fill in all fields.");
    return;
  }

  setLoading(true);

  emailjs
    .send(
      'service_6j0rrc1',
      'template_qgyhcxi', 
      {
        from_name: form.name,
        to_name: "Arnob",
        from_email: form.email,
        to_email: "arnobdey008@gmail.com",
        message: form.message,
      },
      'OzT8cySUU0aXWs20P'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Something went wrong. 😔");
      }
    );
};

 
  return (
    <div className='flex flex-col gap-6 overflow-hidden lg:gap-0 lg:flex-row lg:justify-between'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className = "flex-[0.5] bg-black-100 p-8 rounded-2xl">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Let&apos;s get in touch!</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] -mb-6">Contact me</h3>

          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'>
            <label className='flex flex-col'>
                <span className='mb-3 font-medium text-white'>Your Name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Enter your name.'
                className='px-6 py-3 font-medium border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'/>
            </label>
            
            <label className='flex flex-col'>
                <span className='mb-3 font-medium text-white'>Your Email</span>
                <input
                type='text'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Enter your email.'
                className='px-6 py-3 font-medium border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'/>
            </label>
            
            <label className='flex flex-col'>
                <span className='mb-3 font-medium text-white'>Message</span>
                <textarea
                type='text'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Leave me a message.'
                className='px-6 py-3 -mb-2 font-medium border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'/>
            </label>
            <button
            type='submit'
            className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl'>


              {loading ? 'Sending...':'Send'}
              
            </button>
            


          </form>

        </motion.div>
        <div className='overflow-hidden lg:flex-[0.45] flex items-center'>
          <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className = "items-center justify-center w-full h-auto p-6 bg-black-100 rounded-2xl ">

            <div className='flex flex-col items-center gap-4 p-4'>
              <div className='font-extrabold text-white font'>Did you like my portfolio?</div>
              <div className='font-extrabold text-white font'>Leave a comment and reaction </div>

          <div className='w-full max-w-5xl'>
          <Giscus
      id="comments"
      repo="arnob016/PPF"
      repoId="R_kgDOKLcLmg"
      category="General"
      categoryId="DIC_kwDOKLcLms4CZbVb"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="purple_dark"
      lang="en"
      loading="lazy"
    />
          </div>
            </div>
          </motion.div>
        </div>

      </div>
  )
}

export default SectionWrapper(Contact, "contact");