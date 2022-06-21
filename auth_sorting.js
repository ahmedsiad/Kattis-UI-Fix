let heading = document.querySelectorAll(document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr"))[0]

// add three new categories to sort the problems by

let auth_acc = document.createElement("th")
auth_acc.className="table-item-autofit"
let auth_acc_a = document.createElement("a")
auth_acc_a.innerHTML="Author's Accepted"
// check to see if the tab is already sorting
if (window.location.href.includes("order=-authacc")){
    auth_acc_a.href="?order=%2Bauthacc"
} else {
    auth_acc_a.href="?order=-authacc"
}
auth_acc.appendChild(auth_acc_a)
heading.appendChild(auth_acc)

