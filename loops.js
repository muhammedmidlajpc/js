// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// let i = 1;
// while(i<=5)
// {
//     console.log('&');
//     i++;
// }
// do{
//     console.log('$');
//     i++;
// }while(i<=5)

let row = 5;
// for (let i = 1; i <= row; i++) {
//   let str = "";
//   for (let j = 1; j <= row; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
// for (let i = 1; i <= row; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
// for (let i = 1; i <= row; i++) {
//   let str = "";
//   for (let s = row; s >= i; s--) {
//     str += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }
//hollow
// for (i = 1; i <= 5; i++) {
//   let str = "";
//   for (j = 1; j <= 5; j++) {
//     if (j === 1 || j === 5 || i === 1 || i === 5) {
//       str += "* ";
//     } else str += "  ";
//   }
//   console.log(str);
// }
//z
// for (i = 1; i <= 5; i++) {
//     let str = "";
//     for (j = 1; j <= 5; j++) {
//       if (i===1 || i===5 || j===5-i+1) {
//         str += "* ";
//       } else str += "  ";
//     }
//     console.log(str);
//   }

//cross
// for (i = 1; i <= 5; i++) {
//   let str = "";
//   for (j = 1; j <= 5; j++) {
//     if (i===1 || i===5 || j===5-i+1 || j===i) {
//       str += "* ";
//     } else str += "  ";
//   }
//   console.log(str);
// }

//butterfly
for (i = 1; i <= row; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  for (s = 1; s <= (row*2)-(i * 2); s++) {
      str += " ";
  }
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
for (i = 4; i >= 1; i--) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  for (s = 1; s <= (row*2)-(i * 2); s++) {
      str += " ";
  }
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
