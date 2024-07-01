import internal from "stream";

export interface Kadai {
    title:string;
    question:string;
    answer:string;
    author:string;
    question_id?:number
}

export interface Post {
    "kadai": string;
}
export interface Login{
    username:string;
    password:string;
    email?:string;
}

export interface Registar {
    username : string;
    password1 : string;
    password2 : string;
    email : string;
    school_name : string; 
}
export interface SignIn {
    "username": string;
    "password1":string;
    "password2":string;
    "email":string;
    "school":string;
}

export interface Test {
    id?: number;
    owner?: string;
    title?: string;
    description?: string;
}


// export interface HomeContentEntity {
//     id: string,
//     date: string,
//     evaluation: string,
//   };
  
