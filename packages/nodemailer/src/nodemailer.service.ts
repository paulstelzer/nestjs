import {Inject, Injectable} from '@nestjs/common';
import {createTransport, SendMailOptions, SentMessageInfo, Transporter} from 'nodemailer';
import {NodemailerConfigModel} from './nodemailer-config.model';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class NodemailerService {

  private transporter: Transporter;

  constructor(
    @Inject('MAILER_CONFIG') private readonly config: NodemailerConfigModel
  ) {
    if ((!config.transport) || (Object.keys(config.transport).length < 1)) {
      throw new Error('Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance');
    }

    this.setupTransporter(this.config.transport, this.config.defaults, this.config.templateDir);
  }

  private setupTransporter(transport: SMTPTransport | SMTPTransport.Options | string, defaults?: SMTPTransport.Options, templateDir?: string): void {
    this.transporter = createTransport(transport, defaults);
  }

  public async sendMailWithOptions(sendMailOptions: SendMailOptions): Promise<SentMessageInfo> {
    return await this.transporter.sendMail(sendMailOptions);
  }

  public async sendMail(to, subject, html, from = this.config.defaults.from): Promise<{success: boolean; data?: SentMessageInfo; error?: any }> {
    const sendMailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: html + this.config.footer() // HTML body content
    };
    try {
      const data = await this.transporter.sendMail(sendMailOptions);
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error
      }
    }
  }

}
