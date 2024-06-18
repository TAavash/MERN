const titleElement = document.getElementById("title");
console.log(titleElement);

const contentElements = document.getElementsByClassName("content");
console.log(contentElements[0].textContent);
console.log(contentElements[0].innerHTML);

const paragraphElement = document.querySelector(".content");
paragraphElement.innerHTML = "This is <strong>modified</strong> paragraph.";
