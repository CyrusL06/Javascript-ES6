//FizzBuzz Challenge
//1, prints number from 1-100;
//2. if num has 3 is multiple by 3 Fizz
//3. if num multiple 5 print Buzz
//4. if both print FizzBuzz
 
//

var output = [];

// for (var i = 0; i < output.length; i ++)
// {
//     if (output[i] % 3 == 0 && output[i] == 5)
//     {
//         console.log("FizzBuzz"+ output[i]);
//     } else if (output[i] % 3 == 0)
//     {
//         console.log("Fizz"+ output[i]);
//     }else if (output[i] % 5 == 0)
//     {
//         console.log("Buzz"+ output[i]);
//     }
// }

//Add the 1-100 of this 
fizzBuzz();
var counter = 0;
function fizzBuzz()
{
    for(var i = 1; i < 100; i++)
    {
        output.push(i);
        // console.log(output);

     if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz" + i);
    } else if (i % 3 == 0)
    {
        console.log("Fizz"+ i);
    }else if (i % 5 == 0)
    {
        console.log("Buzz"+ i);
    }
    }

}