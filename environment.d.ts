export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: string;

      POSTGRES_HOSTNAME: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PORT: string;
      PGDATA: string;

      WAIT_HOSTS: string;
      WAIT_HOSTS_TIMEOUT: string;
      WAIT_SLEEP_INTERVAL: string;
      WAIT_HOST_CONNECT_TIMEOUT: string;
    }
  }
}
