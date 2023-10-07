//Define the placeholder where the text will be write in thanks to his id.
let placeholder = document.getElementById("text-reveal");
//Stock all of the sentences pieces in an array.
let words = ["Hi!", "I'm Fulton Browne"];
//Initialize the index at the first element of the previously created array.
let index = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function type(word){
    let i = 0;
		//Set the interval that makes the writing animation.
    let writing = setInterval(()=>{
				//Add the letter at the i index of the current word in the placeholder.
        placeholder.innerHTML += word.charAt(i);
        i ++;
				//If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
        if(i>=word.length){
            clearInterval(writing);
            setTimeout(erase, 1000);
        }
    }, 75)

}

async function erase(){
	//Set the interval that makes the deleting animation.
    if((index>=words.length-1)){
                /* document.getElementById("desctext").style.visibility = "visible" */
                element = document.querySelector('.fade-container');
                document.getElementById("desctext1").classList.toggle('active');
                await sleep(500)
                document.getElementById("buttons").classList.toggle('active')
                return
            }
    let deleting = setInterval(() => {
				//Pop off the last character of the previously written sentence.
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
				//If no one single letter remains, the deleting animation interval stops.
        if(placeholder.innerHTML.length <= 0){
            clearInterval(deleting);
						//The index var increases by 1, the writing animation is about to start with the next sentence.
            index++;
						//If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.

            type(words[index])
        }


    }, 25);

}

//Start the whole animation.
type(words[index]);