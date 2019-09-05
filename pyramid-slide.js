const rangeElem = document.getElementById("range");
const rangeValue = document.getElementById("range-value");
const brickType = document.getElementById("brick-type");

const drawPyramid = function() {
    height = rangeElem.value;
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    // change the displayed range value as it's changed by the user
    rangeValue.innerHTML = rangeElem.value;

    // for each row....
    for (let row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        // build up a string for this row
        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp;";
            rowStr += spaceChar;
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += brickType.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

//when the brick type is changed, redraw the pyramid with that brick type
brickType.onchange = drawPyramid;

//when the height is changed, redraw the pyramid with that height
rangeElem.oninput = drawPyramid;
