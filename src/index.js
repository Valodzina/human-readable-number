module.exports = function toReadable (number) {
  
let mas = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let m= ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred"];
if (number<=19)
return mas[number];
let fir;
let sec;
let thir;

fir = number%10;
sec= Math.trunc(number/10);

if (number<100)
{
    if(fir===0)
    return m[sec-2];
    return m[sec-2]+" "+mas[fir];
}
sec = sec%10;
thir= Math.trunc(number/100);
if(fir===0 && sec===0)
    return  mas[thir]+" "+m[8];

    if(fir!==0 && sec===0)
    return  mas[thir]+" "+m[8]+" "+mas[fir];

    if(fir!==0 && sec===1)
    return  mas[thir]+" "+m[8]+" "+mas[fir+10];
    if(fir===0 && sec===1)
    return  mas[thir]+" "+m[8]+" "+mas[10];

    if(fir===0 && sec!==0)
    return  mas[thir]+" "+m[8]+ " " + m[sec-2];   
    if(fir!==0 && sec!==0)
    return  mas[thir]+" "+m[8]+ " " + m[sec-2] +" "+mas[fir];     




return ;
}
