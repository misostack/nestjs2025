import { IConfiguration } from './interfaces/configuration.interface';

export class Configuration {
  private static CONFIGURATION: IConfiguration = {
    DATABASE: {
      URL:
        process.env.DATABASE_URL ||
        'postgres://postgres:123456@localhost:5432/nestjs2025',
      QUERY_LOGGING: process.env.DATABASE_QUERY_LOGGING === 'true',
      TABLE_PREFIX: process.env.DATABASE_TABLE_PREFIX || 'jsbase',
    },
  };

  public static current(): IConfiguration {
    return Configuration.CONFIGURATION;
  }
}
