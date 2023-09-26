// ID section
// Get paragrapg ID; add span with tan class and "This is new tan text"

document.getElementById("firstPara").
innerHTML += " <span class=\"tan\"> This is new tan text.</span>";

// Tag Name Section
// Get all images, change width to 250px

let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

//Class Name Section
//Set med-blue spans to: #3C5E73
//Set lt-blue spans to: #7C9EA6

let ltBlueSpans = document.getElementsByClassName("light-blue");

let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

