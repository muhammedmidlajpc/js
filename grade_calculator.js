const prompt = require("prompt-sync")();
const m1 = parseFloat(prompt("enter your mark1::"));
// const m2 = parseInt(prompt("enter your mark2::"));
// const m3 = parseInt(prompt("enter your mark3::"));

// if (m1 > m2)
// {
//     if (m2 > m3)
//         var l = m1;
//     else
//         var l = m3;
// }
// else if (m2 > m3)
//     var l = m2;
// else
//     var l = m3;

// if (m1 < m2)
//      {
//         if (m2 < m3)
//             var s = m1;
//             else
//             var s = m3;
//         }
// else if (m2 < m3)
//     var s = m2;
//     else
//     var s = m3;

//     console.log(l);
//     console.log(s);

if (m1 >= 90 && m1 <= 100) console.log("A+");
else if (m1 >= 80 && m1 < 90) console.log("A");
else if (m1 >= 70 && m1 < 80) console.log("B+");
else if (m1 >= 60 && m1 < 70) console.log("B");
else if (m1 >= 50 && m1 < 60) console.log("C");
else if (m1 < 50 && m1 >= 0) console.log("F");
else if (m1 > 100 || m1 < 0) {
  console.log("invalid mark::");
}
