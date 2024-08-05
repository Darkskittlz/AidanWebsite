'use client';

import { FormEvent } from 'react';
import { useState } from 'react';

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let urlEncodedData = '';
    const entries = formData.entries();
    for (let pair = entries.next(); !pair.done; pair = entries.next()) {
      const [key, value] = pair.value;
      if (urlEncodedData !== '') {
        urlEncodedData += '&';
      }
      urlEncodedData += encodeURIComponent(key) + '=' + encodeURIComponent(value as string);
    }
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncodedData
    });
    // Success & error handling should come here
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col border rounded-lg p-4">
      {formSubmitted ? (
        <p>Form submitted successfully! Thank you.</p>
      ) : (
        <form name="ContactForm" action="/" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
          <input className="text-black" type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="firstName">
              First Name:
            </label> <br />
            <input className="bg-white text-black" type="text" name="firstName" id="firstname" key="firstname" />
            <br />
            <label htmlFor="lastName">
              Last Name:
            </label> <br />
            <input className="bg-white text-black" type="text" name="lastName" id="lastName" key="lastName" />
          </p>
          <p>
            <label htmlFor="youremail">
              Your Email:
            </label> <br />
            <input className="bg-white text-black" type="email" name="email" id="email" key="email" />
          </p>
          <p>
            <label htmlFor="message">
              Message:
            </label> <br />
            <input className="bg-white text-black mb-4" name="message" id="message" type="text" key="message"></input>
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
