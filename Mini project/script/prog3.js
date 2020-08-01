var quoate=["Love For All, Hatred For None.",
 "Engage the mind and soul with classic quotations featuring authors from the ages, with wit, wisdom, and words that inspire.",]
function newQuate(){
    var randomNumber=Math.floor(Math.random()*(quoate.length));
   document.getElementById('Quotedisplay').innerHTML=quoate[randomNumber];
   console.log("hi");
}