// problem: create an array containing different types of teas.

const teas =["Green tea", "black tea", "oolong tea", "white tea", "Herbal tea"]

// problem: add "chamomile tea" to the existing list of teas

teas.push("chamile tea");

//problem:remove "oolong tea" from the list of teas
const index = teas.indexOf("oolong tea");
if (index >-1 ){
    teas.splice(index, 1);
}

// problem: filter the list to only include teas that are  caffeinated.
const caffinatedTeas = teas.filter((tea)=> tea!=="Herbal tea");

//problem: use a far loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++){
    console.log(teas[i]);
}

//problem: use a for loop to count how many teas are caffeinated (excluding) "Herbal tea"

let count = 0;
for (let i = 0; i < teas.length; i++){
    if(teas[i] !== "Herbal tea"){
        count++;
    }
}
//problem: use a for loop to find the tea name with the most characters

let longestTea = "";
for (let i = 0; i < teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
//problem: use a for loop to reverse the order of teas in the array

const reversedTeas = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedTeas.push(teas[i]);
}
console.log(teas); 

