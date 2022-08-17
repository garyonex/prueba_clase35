import nodemailer from 'nodemailer'

const Transporter = nodemailer.createTransport({
    host:'smtp-relay.sendinblue.com',
    port:587,
    auth: {
        user: 'garyssteven11@gmail.com',
        pass: 'w8Z9Jk6bLB2Hd1xA'
    }
})
export default Transporter