'use client';

import { useState, useRef } from 'react';
import axios from 'axios';
import date from 'date-and-time';
import {
  FormControl,
  Button,
  FormLabel,
} from '@chakra-ui/react'

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const sendData = async () => {
    try {
      if (name !== null && email !== null && message !== null) {
        const formattedName = encodeURIComponent(name)
        const formattedEmail = encodeURIComponent(email)
        const formattedMessage = encodeURIComponent(message)
        const URL = `name=${formattedName}&email=${formattedEmail}&message=${formattedMessage}`;
        const results = await axios.post("/.netlify/functions/sendData/?" + URL);
        console.log(results);
        setFormSubmitted(true)
      }

    } catch (error) {
      console.log(error)
      setFormFailed(true)
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      sendData()
    } catch (error) {
    }
  }

  // const reset = () => {
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  //   setFormSubmitted(false);
  //   setFormFailed(false);
  // }

  console.log(`Email: `, email);
  console.log(`Name: `, name);
  console.log(`Message: `, message);


  const now = new Date();
  date.format(now, 'MMM DD YYYY');



  return (
    <div className="flex flex-col border rounded-lg p-4">
      {!formSubmitted && formFailed ? (
        <div className="flex justify-center">
          <h1 className="text-white font-bold shadow-red-900 shadow-xl text-lg bg-red mb-4 rounded-lg p-2">Form not submitted. Please try again. </h1>
        </div>
      ) : null}
      {formSubmitted ? (
        <div className="alert alert-success flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Submitted!</div>
      ) : (
        <form
          ref={form}
          id="myForm"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <FormControl>
            <FormLabel
              css={{
                fontSize: "30px",
                textAlign: "center",
                marginBottom: "10px"
              }}
            >Contact Form</FormLabel>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <input
                id="name"
                type="name"
                className="bg-white text-black w-3/4 rounded-md"
                name="user_name"
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
              <input
                id="email"
                type='email'
                className="bg-white text-black w-3/4 rounded-md"
                name="user_email"
                placeholder="E-Mail"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <div className="w-full flex justify-center">
                <textarea
                  className="bg-white text-black w-3/4 rounded-md"
                  id="message"
                  placeholder="Message"
                  name="user_message"
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="flex mt-2 gap-4 justify-center">
                <Button
                  className="bg-blue p-2 px-4 rounded-xl"
                  id="btn"
                  value="send"
                  type="submit"
                > Send </Button>
              </div>
            </div>

          </FormControl>
        </form>
      )}
    </div>
  )
}

export default ContactForm;
