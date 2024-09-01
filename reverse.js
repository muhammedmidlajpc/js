function rev(str){
var res = "";
let l = str.length;
for (i = l - 1; i >= 0; i--) {
  res += str[i];
}
return res;
}
console.log(rev("midlaj"));

