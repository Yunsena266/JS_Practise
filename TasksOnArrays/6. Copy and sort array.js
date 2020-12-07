function compare (a,b) {
	if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
function copySorted(arr) {
   let NewArr = [];
      for (let i = 0; i < arr.length; i++) {
        NewArr[i] = arr[i];

      }
      return (NewArr.sort(compare))
}
let arr = [1,4,9];
let Arr = copySorted(arr);
console.log(Arr);