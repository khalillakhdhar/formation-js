function divisiblite(x)
{
    let u=x%10; // unité
    // x=810
    // x%100 => 10 10/10=>1 => disaine =>(x%100) 
    //x%100
    let d=Math.floor((x%100)/10)
    let c=Math.floor(x/100)
    somme=c+d+u;
    if(somme%3==0)
        console.log(x+" est divisible par 3")
    else
    console.log(x+ " n'est pas divisible par 3")
}
divisiblite(321)
divisiblite(322)
divisiblite(187)
