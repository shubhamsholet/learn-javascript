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




//  array in accending and deaccending order

var array = [4, 3, 5, 7, 88, 55, 22, 44, 2, 1]

// var array = ['4', '3', '5', '7', '88', '55', '22', '44', '2', '1']

// if it is an array format of string

// convert it into number





for (let i = 0; i <= array.length; i++) {


    for (let j = 0; j < array.length - 1 - i; j++) {

        //         if (array[j] > array[j + 1]) for accending 

        // for deaccending

        if (array[j] < array[j + 1]) {

            var temp = array[j]

            array[j] = array[j + 1]

            array[j + 1] = temp

        }

    }
}
console.log(array)
