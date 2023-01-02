// 0.1
// const fruitList = ["apple", "banana", "tomato"];

// let parentUl = document.getElementById("ulList")

// for (i in fruitList){
//     const newChild = document.createElement('li')
//     newChild.innerHTML = fruitList[i]
//     parentUl.appendChild(newChild)
// }


// 0.2
// const imageSrc = "https://crocoder.dev/icon.png";
// const div = document.querySelector("div")
// const img = document.createElement("img")
// img.src = imageSrc
// div.appendChild(img)

// 0.3

// const listOfUl = document.querySelectorAll("ul")
// listOfUl.forEach((list) => {
// const miniList = list.querySelectorAll("li")
// miniList[0].innerHTML = "first"
// miniList[miniList.length - 1].innerHTML = "last"
// document.getElementById("myText").value})

// 1

// let input = document.getElementById("input")
// let button = document.getElementById("button")

// button.addEventListener("click", () => {
//     const data = input.value;
//     document.querySelector("h2").innerText = data
// })

// 2

// let button = document.getElementById("count")
// let paragraph = document.getElementById("para")
// let numOfPress = 0
// button.addEventListener("click", () => {
//     numOfPress ++
//     paragraph.innerText = numOfPress
// })

// 4

// window.onload = () => {
//     const texts = ["Text 1", "Text 2", "Text 3"];
//     const randomIndex = Math.floor(Math.random() * texts.length);
//     document.getElementById("my-text").innerText = texts[randomIndex];
//   };

// 5

// let text = document.getElementById("input-box")
// let button = document.getElementById("button")

// button.addEventListener("click", () => {
//     if (text.value === ""){
//         alert("plesae write smth")
//     }
// })

// 6 

// const helloButton = document.getElementById("hello");
//       helloButton.addEventListener("click", () => {
//         console.log("hello");
//       });
// const goodbyeButton = document.getElementById("goodbye");
//       goodbyeButton.addEventListener("click", () => {
//         console.log("goodbye");
//       });

// 7
// const addToDo = document.getElementById("button");
// addToDo.addEventListener("click", () => {
//     if (document.getElementById("input-box").value !== ""){
//     let msg = document.getElementById("input-box").value;
//     let htmlCode = `<li> ${msg} <input type="checkbox"> </li>`;
//     document.querySelector("ul").insertAdjacentHTML("beforeend", htmlCode);
//     document.getElementById("input-box").value = ""}
// });
