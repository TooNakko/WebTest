
var but=document.getElementById("check");
but.onclick=f1;
but.onmouseover=f2;
but.onmouseout=f3;

function f1(){
    var _1=document.getElementById("textone");
    var _2=document.getElementById("texttwo");
    var name=document.getElementById("name");
    var per=document.getElementsByClassName("percentage");
    var a=_1.value;
    var b=_2.value;
    if (a.length==0 || b.length==0) alert('hay nhap day du ten cua hai nguoi uwu');
    else{
    name.innerHTML=a+' <br/><br/><b>SUKI</b><br/> '+b+ '<br/><br/><b> FOR</b>:';
    x=Math.random();
    var y=x*100;
    Y=parseInt(y);
    per[0].innerHTML=Y+" %";
    }
    



}
 function f2(){
     var x=document.getElementById("check");
    x.innerHTML="Let's check!!";
 }
function f3(){
    var y=document.getElementById("check");
    y.innerHTML="Check!";
}



