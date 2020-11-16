let arr = [];
for (let i = 0; i < 20; i++) {
  {  
    if ( i = 0) {
      arr[i,1] = 'x';

    } else
    {
      arr[i,1] = arr[i - 1,1] + "x";
    }
  

  }
   
}

console.log(arr)



