export interface NodemailerConfigModel {
  defaults: { from: string };
  footer: () => string;
  templateDir: any;
  transport: { dkim: { privateKey: string; domainName: string; keySelector: string }; port: number; auth: { pass: string; user: string }; host: string; tls: { rejectUnauthorized: boolean }; secure: boolean }
}
