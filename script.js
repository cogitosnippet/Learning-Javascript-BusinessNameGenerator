console.log("Business Name Generator");




let random_adjective;
let random_shopname;
let random_another_word;
let business_name;


// Generating random adjective
let random_number = Math.random();
if(random_number<0.4){
  random_adjective = "Crazy";
}
else if(random_number>0.4 && random_number<0.7){
  random_adjective = "Fire";
}
else{
  random_adjective = "Amazing";
}

// Generating random shop name
random_number = Math.random();
if(random_number<0.6){
  random_shopname = "Engine";
}
else if(random_number>0.6 && random_number<0.7){
  random_shopname = "Food";
}
else{
  random_shopname = "Garments";
}


// Generating random another word

random_number = Math.random();
if(random_number<0.3){
  random_another_word = "Bros";
}
else if(random_number>0.3 && random_number<0.5){
  random_another_word = "Limited";
}
else{
  random_another_word = "Hub";
}

business_name = `${random_adjective} ${random_shopname} ${random_another_word}`;

console.log(business_name);
