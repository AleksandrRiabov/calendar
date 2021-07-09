const checkPercents = (arr) => {
   let count = 0
   arr.forEach(time => {
      if (!time.available){
         count +=1;
      }
   });
   if (count === 0){
      return 0
   } else if (count <= arr.length / 4){
      return 25
   } else if (count > arr.length / 4 && count <= arr.length / 2){
      return 50
   } else if ( count > arr.length / 2 && count !== arr.length){
      return 75
   } else if  (count === arr.length){
      return 100
   }
   
}


export default checkPercents;