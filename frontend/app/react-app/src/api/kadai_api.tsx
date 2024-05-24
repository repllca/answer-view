export const getKadaiList = async () =>{
    const res = await fetch('127.0.0.1:8000/myapp/', {
        method: 'GET',
        
      });
      console.log(res)
      return await res.json();
};