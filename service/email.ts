import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  title: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASSWORD,
  },
});

export async function sendEmail({ from, title, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[Blog] ${title}`,
    from,
    html: `
    <h1>${title}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람:${from}</P>
    `,
  };

  return transporter.sendMail(mailData);
}
