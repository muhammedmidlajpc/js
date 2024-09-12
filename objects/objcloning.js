//clonning

//reference copy

// const car={colour:"black",model:"bmw",parts:{tyre:4,door:4}}
// const newcar=car
// newcar.colour="red"
// newcar.parts.door=3
// console.log(newcar,car);

//shallow copy

// const car={colour:"black",model:"bmw",parts:{tyre:4,door:4}}
// const newcar={...car} //... is spread oprtr
// newcar.colour="blue"
// newcar.parts.tyre=2
// console.log(newcar,car);

//deep copy

// const car={colour:"black",model:"bmw",parts:{tyre:4,door:4}}
// const strcar=JSON.stringify(car)
// const newcar=JSON.parse(strcar)
// newcar.colour="green"
// newcar.parts.tyre=3
// console.log(newcar,car);

//array clonning

//reference copy

// const car=[color="black",model="bmw",[door=4,tyre=4]]
// const newcar=car
// newcar[0]="blue"
// newcar[2][0]=3
// console.log(newcar,car);

//shallow copy

// const car=[color="black",model="bmw",[door=4,tyre=4]]
// const newcar=[...car]
// newcar[0]="blue"
// newcar[2][1]=5
// console.log(newcar,car);

//deep copy
// const car = [(color = "black"), (model = "bmw"), [(door = 4), (tyre = 4)]];
// const strcar = JSON.stringify(car);
// const newcar = JSON.parse(strcar);
// newcar[0] = "blue";
// newcar[2][1] = 3;
// console.log(newcar, car);
