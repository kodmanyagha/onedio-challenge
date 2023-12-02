declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;

      NODE_ENV: string;
      LOG_LEVEL: string;
      DB_CONNECTION: string;
      DB_DATABASE: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: string;
    }
  }
  type Nullable<T> = T | null;
}

export {};
