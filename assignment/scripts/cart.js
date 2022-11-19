console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//1. 
let basket= [ 1, 4, 5];

function addItem(Item) { 
basket.push(Item);
return true;
}


console.log(addItem('cherry'));

console.log(basket);



//2. 



function listItems(basket){
    for (i=0 ; i<basket.length ; i++){ 
    console.log(basket[i])
    } 
return basket;
}

console.log(basket);


//3. 

function empty(){
    return basket = [];
}
console.log(empty());





