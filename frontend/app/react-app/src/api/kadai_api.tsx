import { Kadai } from "../types";
import { Login } from "../types";
import { Registar } from "../types";
import requests from "../Requests";
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
    console.log(requests.kadai_endpoint)
    const userJson = localStorage.getItem("user");
        if (!userJson) {
            throw new Error("User not found in localStorage");
        }
    const user=JSON.parse(userJson);
    console.log(requests.kadai_endpoint)
    const url = requests.kadai_endpoint + user.pk;
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
    
    if (responseData.key) {
            localStorage.setItem('access_token', responseData.key);
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
    return await response.json();
  }catch (error){
    console.error("ログイン情報が違うんじゃない？？",error)
  }
};