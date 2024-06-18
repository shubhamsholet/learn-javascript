// paramid  left side 

function paramid(levelORheight) {

    for (let i = 0; i <= levelORheight; i++) 

        for reverse just reverse the loop
    //    for (let i = levelORheight; i >= 1; i--)
    {

        var element = '';

        // for center paramid 

        for (let h = 0; h <= levelORheight - i; h++) {
            element += ' '
        }


           // for right paramid  just double the space

     //   for (let h = 0 ; h <= (levelORheight -i)*2; h++) {
     //       element += ' '
     //   }

        

        for (let j = 0; j < (2 * i - 1); j++) {
            element += '*'
        }


        // for right paramid 


        console.log(element)
    }
}

paramid(5);




let arr1 = [9, 5, 7, 6, 1, 3, 0];
let arr2 = ["9", "5", "7", "6", "1", "3", "0"];
let arr3 = [9, "5", 7, "6", 1, "3", 0];
// console.table(arr3);

for (let i = 0; i < arr3.length; i++) {
  //   arr3[i] = parseInt(arr3[i]); //for descending
  //   console.log(arr3);
  for (let j = 0; j < arr3.length - 1 - i; j++) {
    arr3[i] = parseInt(arr3[i]); //for ascending

    if (arr3[j] > arr3[j + 1]) {
      var temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}

// console.log(arr1);
// console.log(arr2);
console.table(arr3);
