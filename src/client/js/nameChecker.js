function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
   /*  let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]*/
 
    if(!inputText){
        alert("please enter a Text")
    }
 /*   if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }*/
}

export { checkForName }
