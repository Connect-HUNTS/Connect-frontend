export interface Options {
  bot_id: string;
  request_access?: boolean;
  lang?: string;
}

export interface Data {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  username: string;
  // I think there could be other properties too
}

export type Callback = (dataOrFalse: Data | false) => void;
