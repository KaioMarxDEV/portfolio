import { useState } from 'react';
import { ModalForm } from '../ModalForm';

export function Contact() {
  const [modalStatus, setModalStatus] = useState(false);

  function handleModalOpen() {
    setModalStatus(true)
  }
  
  function handleModalClose() {
    setModalStatus(false)
  }

  return (
    <>
      <div className="pt-12 border border-white flex flex-col items-center backdrop-blur-md rounded-lg">
        <div className="w-full px-4 sm:px-6 sm:max-w-[40rem]">
          <div className='flex flex-col items-center'>
            <strong className="text-2xl text-center leading-6 block">
              Interested{' '} 
              <span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>
                working
              </span>{' '}
              with me?
            </strong>
            <span className="mt-4 text-xl text-center block">
              On the lookout for a fast learner developer that shows passion in their work?{' '} 
              {"I'd"} love to hear from you!
            </span>
              <button  onClick={handleModalOpen} className=" shadow-lg shadow-gray-600 active:shadow-none active:translate-y-2 transition mt-8 w-1/2 px-8 py-3 cursor-pointer rounded-full font-semibold text-center border-4 border-my-blue bg-my-blue active:bg-my-blue/75 active:text-gray-200 text-gray-100">
                Email Me
              </button>
          </div>
        </div>
        <footer className='mt-20 flex items-center flex-col'>
          <span className='sm:text-sm'>
            Built using Next.js, React and Coffee ☕😜
          </span>
          <span className='sm:text-sm'>kaiomarxdev.com © 2022</span>
        </footer>
      </div>
      <ModalForm modalStatus={modalStatus} handleModalClose={handleModalClose} />
    </>
  )
}