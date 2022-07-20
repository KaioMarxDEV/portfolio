import { Dialog } from "@headlessui/react";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from 'zod';

const newEmailFormValidationSchema = z.object({
  name: z.string().min(1, 'Please Type your name'),
  email: z.string().email('Please type your best email'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Say something like your favorite song or even a job opportunity is open')
})

type INewEmailiFormFields = z.infer<typeof newEmailFormValidationSchema>

interface Props {
  modalStatus: boolean;
  handleModalClose: () => void;
}

export function ModalForm({ modalStatus, handleModalClose }: Props) {
  const { register, handleSubmit, reset } = useForm<INewEmailiFormFields>({
    resolver: zodResolver(newEmailFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });

  async function handleFormSend({email, message, name, subject}: INewEmailiFormFields) {
    const newEmail = {
      user_id: 'dFSLX9Xitm8MW0XN5',
      template_id: 'contact_form',
      service_id: 'service_2ln1lsa',
      contact_number: Math.random() * 100000 | 0,
      user_name:name,
      user_email:email,
      message
    }

    // Email api call here
    try {
      await axios({
        method: "post",
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
        data: newEmail,
        headers: {
          'content-type': 'multipart/form-data'
        },
      }).then(
        () => toast.success(
          'Your email is sent! 🤝', 
          {
            position:"top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
      )
    } catch (e) {
      toast.error('Sorry, an error occurred, try again.', {
        position:"top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }

    reset()
    handleModalClose()
  }
  
  return (
    <Dialog
      open={modalStatus}
      onClose={handleModalClose}
    >
      <div className="fixed inset-y-1/4 sm:top-0 z-10 inset-x-0">
        <div className="px-4 sm:mt-12 sm:mx-auto sm:max-w-xl">
          <div className="bg-gradient-to-r from-[#ED4264] to-[#FFEDBC] p-1 rounded-md">
            <form autoCorrect="off" autoComplete="off" onSubmit={handleSubmit(handleFormSend)} className="p-4 bg-gradient-to-l from-gray-900 to-gray-500 rounded-md sm:flex sm:items-center sm:flex-col">
              {/* Title Form Here */}
              <div className="flex items-center justify-between">
                <h3 className="text-3xl text-gray-100 font-semibold ">
                  Drop me a Line
                </h3>
                <button onClick={handleModalClose} className="rounded-full sm:ml-20">
                  <X className="text-3xl text-gray-100 font-semibold"/>
                </button>
              </div>
              {/* Form inputs here */}
              <div className="mt-5 flex flex-col gap-4 max-w-xs">
                <div>
                  <input
                    autoFocus={true}
                    {...register('name', {required: true})}
                    className="mx-4 sm:mx-0 py-2 text-gray-100 text-lg sm:text-base overflow-auto border-b focus:border-b-white border-b-orange-300 bg-transparent placeholder:text-gray-300 outline-none" 
                    placeholder="Name...*" 
                  />
                </div>
                <div>
                  <input 
                    {...register('email', {required: true})}
                    className="mx-4 sm:mx-0 py-2 text-gray-100 text-lg sm:text-base overflow-auto border-b focus:border-b-white border-b-orange-300 bg-transparent placeholder:text-gray-300 outline-none" 
                    placeholder="Email...*" 
                  />
                </div>
                <div>
                  <input
                    {...register('subject')}
                    className="mx-4 sm:mx-0 py-2 text-gray-100 text-lg sm:text-base overflow-auto border-b focus:border-b-white border-b-orange-300 bg-transparent placeholder:text-gray-300 outline-none" 
                    placeholder="Subject..." 
                  />
                </div>
                <div>
                  <textarea
                    {...register('message', {required: true})}
                    className="mx-4 sm:mx-0 flex-1 flex py-2 resize-none h-20 text-gray-100 text-lg sm:text-base overflow-auto border-b focus:border-b-white border-b-orange-300 bg-transparent placeholder:text-gray-300 outline-none"
                    placeholder="Please Enter your message...*"
                  />
                </div>
              </div>
              {/* Submit Button Here */}
              <div className="flex flex-row justify-center sm:flex sm:w-full">
                <button 
                  className="flex items-center justify-center rounded-full shadow-lg shadow-gray-600 active:shadow-none active:translate-y-2 transition mt-8 w-1/2 px-8 py-3 cursor-pointer font-semibold text-center border-4 border-my-blue bg-my-blue active:bg-my-blue/75 active:text-gray-200 text-gray-100"
                  type="submit" 
                >
                  <strong className="whitespace-nowrap">
                    Send Message
                  </strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  )
}