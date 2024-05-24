export const getKadaiList = async () =>{
    const res = await fetch('http://127.0.0.1:8000/myapp/test/', {
        method: 'GET',
      });
      return await res.json();
};