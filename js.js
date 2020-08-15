function F_big(){
   /* document.getElementById("facebook_bar").innerHTML="<style> #facebook_bar{width:50px;background:url(\"big.png\");} </style>";*/
    document.getElementById("facebook_bar").style.width='60px';
    document.getElementById("facebook_bar").style.height="60px";
    document.getElementById("facebook_bar").style.background='url("facebook_big.jpg")';
}
function F_small(){
   /* document.getElementById("facebook_bar").innerHTML="<style>#facebook_bar{url(\"download.jpg\")}</style>";*/
    document.getElementById("facebook_bar").style.width='50px';
    document.getElementById("facebook_bar").style.height="50px";
    document.getElementById("facebook_bar").style.background='url("download.jpg")';
}


function W_big(){
    document.getElementById("whats_bar").style.width='60px';
    document.getElementById("whats_bar").style.height='60px';
    document.getElementById("whats_bar").style.background='url("whats-big.png")'
   
}
function W_small(){
    document.getElementById("whats_bar").style.width='50px';
    document.getElementById("whats_bar").style.height='50px';
    document.getElementById("whats_bar").style.background='url("whats-small.png")';
}
function facebook_account(){
    window.open("https://www.facebook.com/mostafa.elsaprout/",'_blank');
}
/*********************************my status************* */
var status=document.getElementById("is_online");
var isonline=true;
if(isonline==true){
status.style.backgroundColor='#0F0';}
else{status.style.backgroundColor='#F00';}
/*********************************** **********************/