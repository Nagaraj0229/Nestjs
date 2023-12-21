/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mongodb", // Use 'mongodb' instead of 'mysql'
        host: "localhost",
        port: 27017, // Default MongoDB port
        database: "test",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
