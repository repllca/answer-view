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
  
