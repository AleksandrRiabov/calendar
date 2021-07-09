const sendDeleteReq = async(url, data) => {
   const res =  await fetch(url,
  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify(data)
  })
  .then((res) => res)
  .catch((err) => {
     console.log("Could not delete data");
  })
  return res
  }
  
  export default sendDeleteReq;