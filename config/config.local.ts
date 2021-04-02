import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize:{
      dialect: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: 'root',
      port: 3306,
      database: 'it777',
    }
  };
  return config;
};
