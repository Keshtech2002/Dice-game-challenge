
var randomNumber1= Math.floor(Math.random() * 6) + 1;

var leftImage= document.getElementsByClassName('img1')[0];

if (randomNumber1===1) {
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice1.png');
} else if (randomNumber1===2){
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice2.png');
} else if (randomNumber1===3) {
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice3.png');
} else if (randomNumber1===4) {
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice4.png');
} else if (randomNumber1===5) {
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice5.png');
} else if (randomNumber1===6) {
    leftImage.setAttribute('src', '/Dicee Challenge Trial/images/dice6.png');
}


var randomNumber2= Math.floor(Math.random() * 6) + 1;

var rightImage= document.getElementsByClassName('img2')[0];

switch (randomNumber2){
    case 1:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice1.png');
        break;
    case 4:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice2.png');
        break;
    case 3:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice3.png');
        break;
    case 4:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice4.png');
        break;
    case 5:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice5.png');
        break;
    default:
        rightImage.setAttribute('src', '/Dicee Challenge Trial/images/dice6.png');
        
}

var heading= document.querySelector('h1');

if (randomNumber1>randomNumber2){
    heading.innerHTML="Player 1 wins!";
} else if (randomNumber2>randomNumber1) {
    heading.innerHTML="Player 2 wins!";
} else {
    heading.innerHTML="Draw";
}