import {DynamicModule, Module} from '@nestjs/common';
import {NodemailerService} from './nodemailer.service';
import {NodemailerConfigModel} from './nodemailer-config.model';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class NodemailerCoreModule {
  static forRoot(config: NodemailerConfigModel): DynamicModule {
    const MailerConfig = {
      name: 'MAILER_CONFIG',
      provide: 'MAILER_CONFIG',
      useValue: config
    };

    return {
      module: NodemailerCoreModule,
      providers: [
        MailerConfig,
        NodemailerService,
      ],
      exports: [
        MailerConfig,
        NodemailerService,
      ],
    };
  }
}
