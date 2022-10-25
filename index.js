let num1=Math.floor(Math.random()*1000);
let num2=Math.floor(Math.random()*1000);
document.getElementById('num1').innerText=num1;
document.getElementById('num2').innerText=num2;
/**生成四个随机的1-1000则整数 */
let answerA=Math.floor(Math.random()*1000)+1;
let answerB=Math.floor(Math.random()*1000)+1;
let answerC=Math.floor(Math.random()*1000)+1;
let answerD=Math.floor(Math.random()*1000)+1;
let answer=num1+num2;

/*生成1-4的随机数，使答案随机出现在ABCD里 */
let a=Math.floor(Math.random()*4+1)
choose();
function choose()
{
        if(a==1){
            answerA=answer;
        }
        else if(a==2){
            answerB=answer;
        }
        else if(a==3){
            answerC=answer;
        }
        else{
            answerD=answer;
        }
}
document.getElementById('cA').innerHTML=answerA;
document.getElementById('cB').innerHTML=answerB;
document.getElementById('cC').innerHTML=answerC;
document.getElementById('cD').innerHTML=answerD;
function judgeA()
{
    if(a==1){
        document.getElementById('rst').innerHTML="答对了!"
    }
    else if(answerA==answer)
    {
        document.getElementById('rst').innerHTML="答对了!"
    }
    else{
        document.getElementById('rst').innerHTML="答错了：-))";
    }
}
function judgeB()
{
    if(a==2){
        document.getElementById('rst').innerHTML="答对了!"
    }
    else if(answerB==answer)
    {
        document.getElementById('rst').innerHTML="答对了!"
    }
    else{
        document.getElementById('rst').innerHTML="答错了!：-))"
    }
}
function judgeC()
{
    if(a==3){
        document.getElementById('rst').innerHTML="答对了!"
    }
    else if(answerC==answer)
    {
        document.getElementById('rst').innerHTML="答对了!"
    }
    else{
        document.getElementById('rst').innerHTML="答错了!：-))"
    }
}
function judgeD()
{
    if(a==4){
        document.getElementById('rst').innerHTML="答对了!"
    }
    else if(answerD==answer)
    {
        document.getElementById('rst').innerHTML="答对了!"
    }
    else{
        document.getElementById('rst').innerHTML="答错了!：-))"
    }
}
//--------------------------------------猜数--------------------------------------------------------
let guessnum=Math.floor(Math.random()*100+1)/*生成一个1-100的随机整数 */
let countspan=document.querySelector("#count");
let guess=document.querySelector("#guess");
let countnum=0;
let num=document.querySelector("#input");
let reset=document.querySelector("#reset");
let reset2=document.querySelector("#reset2");

guess.onclick=function(){
    countnum+=1;
    countspan.innerHTML=countnum;
    let userin=num.value;
    if(userin>guessnum){
        document.getElementById('result').innerHTML="猜高了";
    }
    else if(userin==guessnum){
        document.getElementById('result').innerHTML="猜对了";
    }
    else{
        document.getElementById('result').innerHTML="猜低了！";
    }
}
reset.onclick=function(){
    location.reload();
}
reset2.onclick=function(){
    location.reload();
}