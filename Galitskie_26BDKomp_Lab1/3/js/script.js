
function sumNumbersWithDigit(d) 
{
    let sum = 0;
    for (let i = 100; i < 1000; i++) 
    {
        let numberStr = i.toString();
        if (numberStr.includes(d.toString())) 
        {
            sum += i;
        }
    }

    return sum;
};
function IntTest(num)
{
    num = Number.parseInt(num)
    if(Number.isInteger(num) &&  num <= 9 && num >= 0 )
    {
        return num;
    }else 
    {
        return inputNum(num)
    }
    function inputNum(num)
    {
        num = prompt("Введіть цифру повторно")
        return IntTest(num)
    };
};
function Test(input)
{
   return /^[0-9]$/.test(input);
}
let d = parseInt(prompt("Введіть цифру d (від 0 до 9):"));
d = IntTest(d);
let result = sumNumbersWithDigit(d);
console.log("Сума трицифрових чисел, що містять цифру", d, ":", result);
