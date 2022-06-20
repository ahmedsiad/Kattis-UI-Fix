
// add the difficulty back into kattis


let container = document.getElementsByClassName("attribute_list-book")[0]

let diff = document.createElement("div")
diff.setAttribute("class","attribute_list-item")
let s = document.createElement("span")
s.className="attribute_list-label"
s.innerHTML="Difficulty"
diff.appendChild(s)


// use binary search to get the problem difficulty
const prob_name = document.querySelectorAll(".book-page-heading")[0]
let low = 0
let high = 34
let mid  = math.floor((low+high)/2)

let url = "https://open.kattis.com/problems?page="

// check to see if the problem is on the page
let req = await fetch("https://open.kattis.com/problems?page=0");
let raw = await req.text();
let page = new DOMParser().parseFromString(raw, "text/html");
console.log(page)
let probs = page.querySelectorAll(".difficulty_number")
console.log(probs)
container.appendChild(diff)
