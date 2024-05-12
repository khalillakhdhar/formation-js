/*
imc =poids/taille²
interpretation:
si imc<18 maigre
sinon si imc =<25 : idéale
sinon surpoids

*/
var poids=80;
var taille=1.87;
function calcule(poids,taille)
{
    return Math.round(poids/(taille*taille)); // la virgule est longue
    //poids/Math.floor(taille)
}
imc=calcule(poids,taille); // appel de la fonction
if(imc<18)
    {
        console.log("votre imc "+imc+" est : maigre" );
    }
else if(imc<=25)
    {
        console.log("votre imc "+imc+" est : idéale");
    }
else
    {
        console.log("votre imc "+imc+" est en: surpoid");
    }
