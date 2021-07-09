const postFormData = async(url, data) => {
 const res =  await fetch(url,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
})
.then((res) => res)
.catch((err) => {
   console.log("Could not post data");
})
return res
}

export default postFormData;