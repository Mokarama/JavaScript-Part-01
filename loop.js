
/*let names = ["Shimu", "Saima", "Shanta", "Sumaya", "Sweety"];
for (i = 0; i <= names.length; i = i + 1) {
  console.log(names[i]);
}

let numbers= [23, 34, 56, 78, 50, 60];
for(i = 0; i<= numbers.length; i = i + 1){
    console.log(numbers[i]);
}*/


// ----For loop-----
// let i =3;
for(let i = 0; i<=5; i=i += 2){
    console.log(i);
}

// -----short-----
// for(i=0; i<=5; i++)
// for(i=0; i<=5; i+=5)


// 1-100 sum
/*Let num = 40;
for (i = 1; i <= 10; i = i +=5) {
    console.log((num = num + i));
  num  += i;
}
console.log(num);*/




/*for(let i=0; i<=10; i=i+1){
    if(i==4 || i==5){
        continue;
    }

    console.log(i);
}*/


// for(let i=0; i<=10; i=i+1){
//     if(i==6 || i==9){
//         continue;
//     }
//     console.log(i)
// }

// for(let i=0; i<=10; i=i+1){
//     if(i==4 || i==7){
//         continue;
//     }
//     console.log(i)
// }

for(let i=0; i<=50; i=i+1){
    if(i==30){
        break;
    }
    console.log(i)
}
