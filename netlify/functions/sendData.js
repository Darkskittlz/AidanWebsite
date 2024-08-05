require('dotenv').config()
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);



exports.handler = async function(event, context, callback) {
  try {
    console.log('event', event);
    const firstName = event.queryStringParameters.firstName
    const lastName = event.queryStringParameters.lastName
    const email = event.queryStringParameters.email
    const yourMessage = event.queryStringParameters.yourMessage
    const email2 = "aidanpaulmedia@gmail.com"

    const payload = {
      to: `${firstName} <${email}>`,
      dynamicTemplateData: {
        firstName: `Hello ${firstName}`,
        lastName: `Hello ${lastName}`,
        email: `${email}`,
        yourMessage: `${yourMessage}`
      }
    }

    const payload2 = {
      to: `Aidan <${email2}>`,
      dynamicTemplateData: {
        greeting: `Hello Aidan. New Email from ${email}`,
        mood: `${mood}`,
        message: `${message}`
      }
    }

    await mail.send({
      from: 'Aidan Paul <noreply@darkmeowproductions.com>',
      replyTo: "noreply@darkmeowproductions.com",
      templateId: 'd-47d6eb1077a44a25a07c0ea21fecbb78',
      personalizations: [payload, payload2]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email Sent!' }),
    };
  } catch (error) {
    console.log(error.response.body);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'ERROR SENDING EMAIL' }),
    };
  }
}
