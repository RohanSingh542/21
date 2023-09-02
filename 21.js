var card=document.getElementById('cards');
var total=document.getElementById('total');
var message=document.getElementById('message');
var ctotal=document.getElementById('ctotal');

var pcard=[];
var sum=0;
var csum=0;
var win=false;
var game=true;
var startBut=false;
// var player=prompt('Enter Player name')
// var amount=prompt('Enter the amount')

function getrandom(){
    random=Math.floor(Math.random()*13+1);
    if(random>10)
    {
        return 10;
    }
    else if(random==1)
    {
        return 11;
    }
    else{
        return random;
    }
}
function start(){
    var num1=getrandom();
    var num2=getrandom();
    var num3=getrandom();
    var num4=getrandom();
    sum=num1+num2;
    cSum=num3+num4;
    pcard=[num1,num2];
    startBut=true;
    render(); 
      
}
function render(){
    card.innerHTML='Cards : ';
    for(var i=0;i<pcard.length;i++)
    {
        card.innerHTML += `  ${pcard[i]}   `;
    }
    total.innerHTML=` Total: ${sum}`;
    ctotal.innerHTML=`Computer Total: ${cSum}`;
    if(sum<21)
    {
        message.innerHTML='Do you want new card';
    }
    else if(sum==21 && cSum<sum){
        amount=amount*2;
        message.innerHTML=` Congrats ${player} You won ${amount} `;
        win=true;
    }
    else{
        message.innerHTML=`Sorry ${player} you lost the ${amount}`;
        game=false;
    }
}
function newCard(){
    if(win==false && game==true && startBut==true)
    {
        var num=getrandom();
        pcard.push(num);
        sum=sum+num;

        while(cSum<19)
        {
            var cnum=getrandom();
            cSum+=cnum;
        }

        render();
        if(sum>21)
        {
            winner();
        }
        
    }
}
function winner(){
    
    if(startBut==true)
    {
        while(cSum<17 && cSum>sum)
        {
            var cnum=getrandom();
            cSum+=cnum;
        }
        ctotal.innerHTML=`Computers Total:  ${cSum}`
        if(sum>21|| (cSum<21 && cSum>sum))
        {
            message.innerHTML=`Sorry ${player} you lost the ${amount}`
        }
        else if(sum==cSum)
        {
            message.innerHTML=`It's a tie game.`
        }
        else{
            message.innerHTML=` Congrats ${player} You won ${amount} `
        }
        game=false;
    }
    
}
