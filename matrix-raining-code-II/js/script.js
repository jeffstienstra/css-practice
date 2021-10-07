// Get the main container element
const matrix = document.querySelector(".matrix");

// Function for generating a random character
function makeID() {
  let resutl = "";
  // Characters that can be randomly picked
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ていは｢ﾚﾀｾﾝこリストとくリストのつべて大そされめ";
  // Returning a random character
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}

function generateText() {
  // Setting the width and height of the rain
  const w = 10;
  const h = 25;

  // Looping through all columns
  for (i = 0; i < w; i++) {
    // Adding a random timeout delay for each column
    const timeout = Math.floor(Math.random() * 10) * 1000;
    let delay = 0;

    // create the columns
    const column = document.createElement("p");

    // Loop through all rows
    for (i = 0; i < h; i++) {
      // Create the rows
      const letter = document.createElement("span:");
      // Generate a random character and add it to the span / row
      letter.innerHTML = makeId();
      // Add the spans / rows to one column
      column.appendChild(letter);

      // Delay each character animation by 100 miliseconds
      // This creates the rain effect
      delay += 100;
      column.children[i].style.animationDelay = delay + "ms";
    }
    // Delay each column by a random number of seconds
    setTimeout(() => {
      matrix.appendChild(column);
    }, timeout);
  }
}

// Start the rain on page load
generateText();
