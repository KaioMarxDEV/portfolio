import axios from 'axios';
import { FormEvent, useState } from "react";
export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  async function handleSubmit(e: FormEvent) {    
    e.preventDefault()
  
    const newEmail = {
      user_id: 'dFSLX9Xitm8MW0XN5',
      template_id: 'contact_form',
      service_id: 'service_2ln1lsa',
      contact_number: Math.random() * 100000 | 0,
      user_name:name,
      user_email:email,
      message
    }


    try {
      await axios({
        method: "post",
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
        data: newEmail,
        headers: {
          'content-type': 'multipart/form-data'
        },
      }).then(() => alert('Your email is sent!'))
    } catch (e) {
      console.log(`Tivemos um Erro ${e}`)
    }
  }

  return (
    <div className="my-24 max-w-full backdrop-blur-md drop-shadow-md rounded-lg flex flex-col items-center justify-center py-28">
      <div className="max-w-[40rem] flex flex-col items-center">
        <strong className="text-4xl text-center leading-6 block">
          Interested{' '} 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>
            working
          </span>{' '}
          with me?
        </strong>
        <span className="mt-4 text-xl text-center block">
          On the lookout for a fast learner developer that shows passion in their work? 
           {"I'd"} love to hear from you!
        </span>
        <button onClick={() => {}} className="mt-8 w-1/2 px-8 py-3 cursor-pointer rounded-3xl font-semibold text-center text-my-blue border border-my-blue hover:bg-my-blue hover:text-white transition">
          Email Me
        </button>
      </div>
    </div>
  )
}