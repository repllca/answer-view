import { Kadai } from "../types";
import { Login } from "../types";
import { Registar } from "../types";
import requests from "../Requests";
export const getKadaiList = async () =>{
    const res = await fetch('http://localhost:8000/myapp/kadai/list/', {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      return await res.json();
};
export const getTestList = async () =>{
    const res = await fetch('http://localhost:8000/myapp/kadai/list/', {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      return await res.json();
};
// export const getUser = async () => {
//   const res = await fetch(,)
// }


export const postKadai = async(data:Kadai) => {
  try{
    console.log(requests.kadai_endpoint)
    const userJson = localStorage.getItem("user");
        if (!userJson) {
            throw new Error("User not found in localStorage");
        }
    const user=JSON.parse(userJson);
    console.log(requests.kadai_endpoint)
    const url = requests.kadai_endpoint;
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
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

export const postLogin = async(data:Login) =>{
  console.log("データのなかみ",data)
  try{
    const response = await fetch(requests.login_endpoint,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    console.log("responseの中身")
    console.log(response)
    if (!response.ok){
      throw new Error("network response not ok")
    }
    const responseData = await response.json();
    console.log(responseData
    )
    console.log(responseData.user)
    
    if (responseData.access) {
            localStorage.setItem('access_token', responseData.access);
            localStorage.setItem('user', JSON.stringify(responseData.user));
        }


    return responseData;

  }catch (error){
    console.error("ログイン情報が違うんじゃない？？",error)
  }
};


export const postRegistar = async(data:Registar) =>{
  console.log("データのなかみ",data)
  try{
    const response = await fetch(requests.registar_endpoint,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    console.log("responseの中身")
    console.log(response)
    if (!response.ok){
      throw new Error("network response not ok")
    }

    const responseData = await response.json();
    console.log(responseData)
    console.log(responseData.user)
    
    if (responseData.access) {
            localStorage.setItem('access_token', responseData.access);
            localStorage.setItem('user', JSON.stringify(responseData.user));
        }else{
          console.log("なかったよ")
        }
    return responseData;
  }catch (error){
    console.error("ログイン情報が違うんじゃない？？",error)
  }
};