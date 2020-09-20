for (let i = 0; i < 25; i++){
    if (i !== 1) {
        console.log(`I am ${i} strange loops`);
    } else {
        console.log(`I am ${i} strange loop`);
    }
};



function whileLoop(num){

    while (num > 0) {
        console.log(`This will stop in ... ${num}`);
        num -= 1;
    }
    console.log(`Done!`)
}

let i = 0;

function incrementVariable() {
    i = i + 1;
    return i;
  }

function doWhileLoop(int){
    if(int !== 0){
        do {
            console.log("I run once regardless");
          } while (incrementVariable() < int);
    }
}

