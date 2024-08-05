'use client';

import { FormEvent } from 'react';

export function ContactForm() {
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    const urlEncodedData = new URLSearchParams(formDataObject).toString();
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncodedData
    });
    // Success & error handling should come here
  };
  // Rest of your component code remains the same

  return (
    <div className="flex flex-col border rounded-lg p-4">
      <form name="contact" action="/success" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
        <input className="text-black" type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="firstName">
            First Name:
          </label> <br />
          <input className="bg-white" type="text" name="firstname" id="firstname" key="firstname" />
          <br />
          <label htmlFor="lastName">
            Last Name:
          </label> <br />
          <input className="bg-white" type="text" name="lastName" id="lastName" key="lastName" />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input className="bg-white" type="email" name="email" id="youremail" key="email" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea className="bg-white" name="message" id="yourMessage" key="message"></textarea>
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
    </div>
  )
}

export default ContactForm;
