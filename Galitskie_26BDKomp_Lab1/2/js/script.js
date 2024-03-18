function calculateDistance(x0, y0, x1, y1) 
{
    let distanceA = Math.sqrt(Math.pow(x0, 2) + Math.pow(y0, 2));
    let distanceB = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    if (distanceA > distanceB) 
    {
        return "Точка А є найбільш віддаленою від початку координат.";
    } 
    else if (distanceB > distanceA) 
    {
        return "Точка В є найбільш віддаленою від початку координат.";
    } if(distanceA = distanceB)
    {
        return "Обидві точки мають однакову відстань від початку координат.";
    } 
};
function IntTest(num)
{
    num = Number.parseInt(num)
    if(Number.isInteger(num))
    {
        return num;
    }else
    {
        return inputNum(num)
    }
    function inputNum(num)
    {
        num = prompt("Введіть координату повторно")
        return IntTest(num)
    };
};

let x0 = prompt("Введіть координату x для точки А:");
x0 = IntTest(x0)
let y0 = prompt("Введіть координату y для точки А:");
y0 = IntTest(y0)
let x1 = prompt("Введіть координату x для точки В:");
x1 = IntTest(x1)
let y1 = prompt("Введіть координату y для точки В:");
y1 = IntTest(y1)
console.log(calculateDistance(x0, y0, x1, y1));
