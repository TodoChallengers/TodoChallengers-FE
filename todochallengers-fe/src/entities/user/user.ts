export interface User {
  id? : number;
  input_id : string;
  input_password: string;
  name : string;
  profile? : string;
  birth? : Date;
  friends?: [number],
}
