const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rajat97533@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}.`
    })
}

const byeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rajat97533@gmail.com',
        subject: 'Goodbye',
        text: `Sad to see you go ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    byeEmail
}