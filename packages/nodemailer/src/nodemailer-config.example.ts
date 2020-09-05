import {NodemailerConfigModel} from '../lib';

const mailerExampleConfig: NodemailerConfigModel = {
  transport: {
    host: '',
    port: 465,
    secure: true,
    auth: {
      user: '',
      pass: ''
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    },
    dkim: {
      domainName: '',
      keySelector: '',
      privateKey: ''
    }
  },
  defaults: {
    from: 'CUSTOM NAME <noreply@example.org>',
  },
  templateDir: null,
  footer: () => addFooter()
};

const addFooter = () => {
  return 'Custom Footer'
}
