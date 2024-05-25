import React from "react"
import { Kadai } from "../types"
// interface Props{
//     name:string;
//     age:number;
//   }

const KadaiProps:  React.FC<Kadai> = (props) => {
    return(
      <div>
        <h1>props.title</h1>
        <p>props.question</p>
        <p>props.answer</p>
        <p>props.author</p>
        <p>props.question_id</p>

      </div>
    )
}

export default KadaiProps