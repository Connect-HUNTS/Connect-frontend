declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    AUTH_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    BOT_USERNAME: string;
    BOT_TOKEN: string;
  }
}
