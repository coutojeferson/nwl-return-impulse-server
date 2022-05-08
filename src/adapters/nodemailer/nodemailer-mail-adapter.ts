import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "16adcd66ea5b60",
    pass: "c26bea8084aab7"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Jeferson Couto <coutojefersonn@gmail.com>',
    subject,
    html: body,
  })
  };
}