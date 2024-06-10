import { Kadai } from "../types";

export const getKadaiList = async () =>{
    const res = await fetch('http://127.0.0.1:8000/myapp/test/', {
        method: 'GET',
      });
      return await res.json();
};
export const getTestList = async () =>{
    const res = await fetch('http://127.0.0.1:8000/myapp/kadai/', {
        method: 'GET',
      });
      return await res.json();
};



export const postKadai = async(data:Kadai) => {
  try{
    const response = await fetch("'http://127.0.0.1:8000/myapp/test/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  
  return await response.json(); // レスポンスをJSON形式で解析して返す
  
  }catch (error){
    console.error('There was a problem with your fetch operation:', error);
  }
 

};