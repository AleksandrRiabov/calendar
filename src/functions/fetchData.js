const fetchData = async(url) => {
   try{
      const res = await fetch(url)
        const data = await res.json();
      return data
   } catch{
      console.log("Cant fetch");
      return []
   }	
}

export default fetchData;