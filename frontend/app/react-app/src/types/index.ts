import internal from "stream";
import { ListFormat } from "typescript";

export interface Kadai {
    title:string;
    answer:string;
    owner?:string;
    description:string;
    date:string;

}

export interface Post {
    "kadai": string;
}
export interface Login{
    username:string;
    password:string;
    email?:string;
}
export interface Kadailist{
    count : number;
    next?:number;
    previous? : number;
    results:nitani[];
}

export interface nitani{
    owner:string;
    title:string;
    date:string;
    id:number;
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
  
