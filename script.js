// 1. THE FUNCTION (The function is called countApples and it takes one parameter, basket)
function countApples(basket) {
    let total = 0;

    // 2. THE LOOP (using for loop to go through each item in the basket)
    for (let i = 0; i < basket.length; i++) {
        total = total + 1; 
        console.log("Checking item number " + (i + 1));
    }

    // 4. CONTROL FLOW (Using an if statement to decide what to do based on the total)
    if (total >= 5) {
        console.log("Success! You have " + total + " apples. Time to bake!");
    } else {
        console.log("Not enough apples. You only have " + total + ".");
    }
}

let myBasket = ["Apple", "Apple", "Apple", "Apple", "Apple"];
countApples(myBasket);
