import React from "react"
import { Kadai } from "../types"
// interface Props{
//     name:string;
//     age:number;
//   }

const KadaiProps:  React.FC<Kadai> = (props) => {
    return(
      <div>
        <p>名前:{props.kadai}</p>
        <p></p>
      </div>
    )
}

export default KadaiProps