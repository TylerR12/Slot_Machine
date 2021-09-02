  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB2Lv_mM0tZD87v-mHnJ-cHZswFG_0p1xc",
    authDomain: "slotmachine-5f804.firebaseapp.com",
    projectId: "slotmachine-5f804",
    storageBucket: "slotmachine-5f804.appspot.com",
    messagingSenderId: "211573462281",
    appId: "1:211573462281:web:492b21bc3897741be4afd8",
    measurementId: "G-7N1Q8PW45Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var credits;


var random1;
var random2;
var random3;

var value1;
var value2;
var value3;


function load(){
    firebase.database().ref('currentcredit').child("credit").on('value',(snap)=>{
        console.log(snap.val());
        document.getElementById("credit").value = snap.val();
      });
}

function add(){
    var screen = document.getElementById("addon");
    screen.style.display = "table";

}

function submitA(){
    var amount = document.getElementById("addAmount").value;
    amount = parseInt(amount);

    var screen = document.getElementById("addon");
    screen.style.display = "none";
    console.log("Transfer Successful! You added $" + amount);

    var currentCredit = document.getElementById("credit").value;
    currentCredit = parseInt(currentCredit);
    document.getElementById("credit").value = currentCredit + amount;
    
    firebase.database().ref("currentcredit").set({credit: currentCredit + amount});
}

function spin(){
    bets();
    generateNum();
    // display1();
    // display2();
    // display3();
    winnings();


}

function generateNum(){
    random1 = Math.floor(Math.random() * 101);
    random2 = Math.floor(Math.random() * 101);
    random3 = Math.floor(Math.random() * 101);

    // generating random number for first value
    if(random1 <= 29){
        value1 = "cherry";
        console.log(value1);
        console.log(random1);
    }
    if(random1 >= 30 && random1 <= 59){
        value1 = "heart";
        console.log(value1);
        console.log(random1);
    }
    if(random1 >= 60 && random1 <= 74){
        value1 = "bar";
        console.log(value1);
        console.log(random1);
    }
    if(random1 >= 75 && random1 <= 84){
        value1 = "watermelon";
        console.log(value1);
        console.log(random1);
    }
    if(random1 >= 85 && random1 <= 94){
        value1 = "seven";
        console.log(value1);
        console.log(random1);
    }
    if(random1 >= 95 && random1 <= 100){
        value1 = "blazing7";
        console.log(value1);
        console.log(random1);
    }

    display1(value1);


    // generating random number for second value
    if(random2 <= 29){
        value2 = "cherry";
        console.log(value2);
        console.log(random2);
    }
    if(random2 >= 30 && random2 <= 59){
        value2 = "heart";
        console.log(value2);
        console.log(random2);
    }
    if(random2 >= 60 && random2 <= 74){
        value2 = "bar";
        console.log(value2);
        console.log(random2);
    }
    if(random2 >= 75 && random2 <= 84){
        value2 = "watermelon";
        console.log(value2);
        console.log(random2);
    }
    if(random2 >= 85 && random2 <= 94){
        value2 = "seven";
        console.log(value2);
        console.log(random2);
    }
    if(random2 >= 95 && random2 <= 100){
        value2 = "blazing7";
        console.log(value2);
        console.log(random2);
    }

    display2(value2);

    // generating random number for third value
    if(random3 <= 29){
        value3 = "cherry";
        console.log(value3);
        console.log(random3);
    }
    if(random3 >= 30 && random3 <= 59){
        value3 = "heart";
        console.log(value3);
        console.log(random3);
    }
    if(random3 >= 60 && random3 <= 74){
        value3 = "bar";
        console.log(value3);
        console.log(random3);
    }
    if(random3 >= 75 && random3 <= 84){
        value3 = "watermelon";
        console.log(value3);
        console.log(random3);
    }
    if(random3 >= 85 && random3 <= 94){
        value3 = "seven";
        console.log(value3);
        console.log(random3);
    }
    if(random3 >= 95 && random3 <= 100){
        value3 = "blazing7";
        console.log(value3);
        console.log(random3);
    }

    display3(value3);

}


function display1(return1){
    if(return1 == "cherry"){
        document.getElementById("cherry1").style.display = "flex";
        document.getElementById("heart1").style.display = "none";
        document.getElementById("bar1").style.display = "none";
        document.getElementById("seven1").style.display = "none";
        document.getElementById("tri1").style.display = "none";
        document.getElementById("watermelon1").style.display = "none";
    }
    if(return1 == "heart"){
        document.getElementById("heart1").style.display = "flex";
        document.getElementById("bar1").style.display = "none";
        document.getElementById("seven1").style.display = "none";
        document.getElementById("tri1").style.display = "none";
        document.getElementById("cherry1").style.display = "none";
        document.getElementById("watermelon1").style.display = "none";

    }
    if(return1 == "bar"){
        document.getElementById("bar1").style.display = "flex";
        document.getElementById("seven1").style.display = "none";
        document.getElementById("tri1").style.display = "none";
        document.getElementById("heart1").style.display = "none";
        document.getElementById("cherry1").style.display = "none";
        document.getElementById("watermelon1").style.display = "none";

    }
    if(return1 == "watermelon"){
        document.getElementById("watermelon1").style.display = "flex";
        document.getElementById("bar1").style.display = "none";
        document.getElementById("seven1").style.display = "none";
        document.getElementById("tri1").style.display = "none";
        document.getElementById("heart1").style.display = "none";
        document.getElementById("cherry1").style.display = "none";

    }
    if(return1 == "seven"){
        document.getElementById("seven1").style.display = "flex";
        document.getElementById("tri1").style.display = "none";
        document.getElementById("bar1").style.display = "none";
        document.getElementById("heart1").style.display = "none";
        document.getElementById("cherry1").style.display = "none";
        document.getElementById("watermelon1").style.display = "none";

    }
    if(return1 == "blazing7"){
        document.getElementById("seven1").style.display = "none";
        document.getElementById("tri1").style.display = "flex";
        document.getElementById("heart1").style.display = "none";
        document.getElementById("bar1").style.display = "none";
        document.getElementById("cherry1").style.display = "none";
        document.getElementById("watermelon1").style.display = "none";

    }
}
function display2(return2){
    if(return2 == "cherry"){
        document.getElementById("cherry2").style.display = "flex";
        document.getElementById("heart2").style.display = "none";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("seven2").style.display = "none";
        document.getElementById("tri2").style.display = "none";
        document.getElementById("watermelon2").style.display = "none";

    }
    if(return2 == "heart"){
        document.getElementById("heart2").style.display = "flex";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("seven2").style.display = "none";
        document.getElementById("tri2").style.display = "none";
        document.getElementById("cherry2").style.display = "none";
        document.getElementById("watermelon2").style.display = "none";

    }
    if(return2 == "bar"){
        document.getElementById("bar2").style.display = "flex";
        document.getElementById("seven2").style.display = "none";
        document.getElementById("tri2").style.display = "none";
        document.getElementById("heart2").style.display = "none";
        document.getElementById("cherry2").style.display = "none";
        document.getElementById("watermelon2").style.display = "none";

    }
    if(return2 == "watermelon"){
        document.getElementById("watermelon2").style.display = "flex";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("seven2").style.display = "none";
        document.getElementById("tri2").style.display = "none";
        document.getElementById("heart2").style.display = "none";
        document.getElementById("cherry2").style.display = "none";
    }
    if(return2 == "seven"){
        document.getElementById("seven2").style.display = "flex";
        document.getElementById("tri2").style.display = "none";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("heart2").style.display = "none";
        document.getElementById("cherry2").style.display = "none";
        document.getElementById("watermelon2").style.display = "none";

    }
    if(return2 == "blazing7"){
        document.getElementById("seven2").style.display = "none";
        document.getElementById("tri2").style.display = "flex";
        document.getElementById("bar2").style.display = "none";
        document.getElementById("heart2").style.display = "none";
        document.getElementById("cherry2").style.display = "none";
        document.getElementById("watermelon2").style.display = "none";

    }

}
function display3(return3){
    if(return3 == "cherry"){
        document.getElementById("cherry3").style.display = "flex";
        document.getElementById("heart3").style.display = "none";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("seven3").style.display = "none";
        document.getElementById("tri3").style.display = "none";
        document.getElementById("watermelon3").style.display = "none";

    }
    if(return3 == "heart"){
        document.getElementById("heart3").style.display = "flex";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("seven3").style.display = "none";
        document.getElementById("tri3").style.display = "none";
        document.getElementById("cherry3").style.display = "none";
        document.getElementById("watermelon3").style.display = "none";

    }
    if(return3 == "bar"){
        document.getElementById("bar3").style.display = "flex";
        document.getElementById("seven3").style.display = "none";
        document.getElementById("tri3").style.display = "none";
        document.getElementById("heart3").style.display = "none";
        document.getElementById("cherry3").style.display = "none";
        document.getElementById("watermelon3").style.display = "none";

    }
    if(return3 == "watermelon"){
        document.getElementById("watermelon3").style.display = "flex";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("seven3").style.display = "none";
        document.getElementById("tri3").style.display = "none";
        document.getElementById("heart3").style.display = "none";
        document.getElementById("cherry3").style.display = "none";
    }
    if(return3 == "seven"){
        document.getElementById("seven3").style.display = "flex";
        document.getElementById("tri3").style.display = "none";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("heart3").style.display = "none";
        document.getElementById("cherry3").style.display = "none";
        document.getElementById("watermelon3").style.display = "none";

    }
    if(return3 == "blazing7"){
        document.getElementById("seven3").style.display = "none";
        document.getElementById("tri3").style.display = "flex";
        document.getElementById("bar3").style.display = "none";
        document.getElementById("heart3").style.display = "none";
        document.getElementById("cherry3").style.display = "none";
        document.getElementById("watermelon3").style.display = "none";

    }

}


function winnings(){
    var winnings = document.getElementById("winnings").value;
    winnings = parseInt(winnings);

    if(value1 == "cherry" && value2 == "cherry" && value3 == "cherry"){
        alert("You Win - three cherries");
        document.getElementById("winnings").value = 100;
        winnings = 100;
    }
    
    else if(value1 == "heart" && value2 == "heart" && value3 == "heart"){
        alert("You Win - three hearts");
        document.getElementById("winnings").value = 150;
        winnings = 150;

    }
    
    else if(value1 == "bar" && value2 == "bar" && value3 == "bar"){
        alert("You Win - three bars");
        document.getElementById("winnings").value = 200;
        winnings = 200;

    }
    
    else if(value1 == "watermelon" && value2 == "watermelon" && value3 == "watermelon"){
        alert("You Win - three watermelons");
        document.getElementById("winnings").value = 250;
        winnings = 250;


    }
    
    else if(value1 == "seven" && value2 == "seven" && value3 == "seven"){
        alert("You Win - three sevens");
        document.getElementById("winnings").value = 300;
        winnings = 300;

    }
    
    else if(value1 == "blazing7" && value2 == "blazing7" && value3 == "blazing7"){
        alert("You Win - three blazing sevens");
        document.getElementById("winnings").value = 350;
        winnings = 350;

    }
    else{
        document.getElementById("winnings").value = 0;
        winnings = 0;
        
    }
    var currentCredit = document.getElementById("credit").value;
    currentCredit = parseInt(currentCredit);
    //document.getElementById("credit").value = currentCredit + winnings;
    

    
    firebase.database().ref("currentcredit").set({credit: (currentCredit + winnings)});
    //console.log(currentCredit);

}

function bets(){
    var bets = document.getElementById("bets").value;
    bets = parseInt(bets);

    var currentCredit = document.getElementById("credit").value;
    currentCredit = parseInt(currentCredit);

    if( (currentCredit - bets ) < 0){
        alert("cannot afford");
        window.location.reload();
    }
    else{
        document.getElementById("credit").value = currentCredit - bets;
        console.log(currentCredit - bets);
        
    }
}