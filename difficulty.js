
// add the difficulty back into kattis

let container = document.getElementsByClassName("attribute_list-book")[0]

let diff = document.createElement("div")
diff.setAttribute("class","attribute_list-item")
let s = document.createElement("span")
s.className="attribute_list-label"
s.innerHTML="Difficulty"
diff.appendChild(s)
container.appendChild(diff)
