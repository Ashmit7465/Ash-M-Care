import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>

        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue ? Want to send a feedback about a beta feature ? Let us know.
         </p>

         <form action="#" className='space-y-8'>
         <div>
            <label className='form_label' htmlFor="name">
              Your Full Name:
            </label>

            <input type="name" name="name" id="name" placeholder='Enter your name' className='form_input mt-1 hover:border-black/100'/>
          </div>

          <div>
            <label className='form_label' htmlFor="email">
              Your Email:
            </label>

            <input type="email" name="email" id="email" placeholder='Enter your email' className='form_input mt-1 hover:border-black/100'/>
          </div>

          <div>
            <label className='form_label' htmlFor="subject">
              Your Subject:
            </label>

            <input type="text" name="subject" id="subject" placeholder='Enter your Subject' className='form_input mt-1 hover:border-black/100'/>
          </div>

          <div>
            <label className='sm-col-span-2' htmlFor="message">
              Your Message:
            </label>

            <textarea
            rows="6"
            type="text"
            name="message" id="Message" placeholder='Leave a comment' className='form_input mt-1 hover:border-black/100'/>
          </div>

          <button type='submit' className='btn rounded sm:w-full rounded-lg hover:bg-black/100'>Submit Feedback</button>
         </form>
      </div>
    </section>
  )
}

export default Contact