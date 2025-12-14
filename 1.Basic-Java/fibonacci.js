var n = prompt("Insert a number");
fibonacciGenerator(n);

function fibonacciGenerator(n)
{
    var output = [];
    var keep ;
    if (n == 1)
    {
        output = [0];
        console.log (output);
    } else if (n == 2)
    {

      output = [0,1];
        console.log (output);

    } else 
    {
        output = [0,1];
        
         for (var i = 0; i <= n; i++)
        {
            keep = output[i] + output[i+1];
            output.push(keep);

        }
         console.log(output);
    }

    
}