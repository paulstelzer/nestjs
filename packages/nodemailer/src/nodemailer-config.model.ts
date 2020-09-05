import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface NodemailerConfigModel {
  defaults: { from: string };
  footer: () => string;
  templateDir: any;
  transport: SMTPTransport | SMTPTransport.Options | string
}
