'use client';

import { FormEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await axios.post('/__forms.html', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Use 'multipart/form-data' for FormData
        }
      });
      // Success handling
      setFormSubmitted(true);
    } catch (error) {
      // Error handling
      setFormFailed(true);
    }
  }

  return (
    <div className="flex flex-col border rounded-lg p-4">
      {!formSubmitted && formFailed ? (
        <div className="flex justify-center">
          <h1 className="text-white font-bold shadow-red-900 shadow-xl text-lg bg-red mb-4 rounded-lg p-2">Form not submitted. Please try again. </h1>
        </div>
      ) : null}
      {formSubmitted ? (
        <div className="alert alert-success"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Submitted!</div>
      ) : (
        <form name="ContactForm" action="/Success" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor="firstName">
              First Name:
            </label> <br />
            <input className="bg-white w-full rounded-md text-black" type="text" name="firstName" id="firstname" key="firstname" />
            <br />
            <label htmlFor="lastName">
              Last Name:
            </label> <br />
            <input className="bg-white w-full rounded-md text-black" type="text" name="lastName" id="lastName" key="lastName" />
          </p>
          <p>
            <label htmlFor="youremail">
              Your Email:
            </label> <br />
            <input className="bg-white w-full rounded-md text-black" type="email" name="email" id="email" key="email" />
          </p>
          <p>
            <label htmlFor="message">
              Message:
            </label> <br />
            <input className="bg-white w-full rounded-md text-black mb-4" name="message" id="message" type="text" key="message"></input>
          </p>
          <p>
            <button
              className="w-full flex justify-center bg-blue rounded-lg p-2"
              id="btn"
              value="send"
              type="submit"
            > Send </button>
          </p>
        </form>
      )}
    </div>
  )
}

export default ContactForm;
