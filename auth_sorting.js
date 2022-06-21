let heading = document.querySelectorAll("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr")[0]

// add three new categories to sort the problems by


// check to see if the user is logged in
let logged_in = document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr > th:nth-child(2) > a")
if (logged_in.innerHTML==="Solved"){
    let auth_tot = document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr > th:nth-child(8)")
    let auth_tot_a = document.createElement("a")
    auth_tot_a.innerHTML="Authors"
// check to see if the tab is already sorting
    if (window.location.href.includes("order=-authtot")){
        auth_tot_a.href="?order=%2Bauthtot"
    } else {
        auth_tot_a.href="?order=-authtot"
    }

    auth_tot.appendChild(auth_tot_a)


    let auth_acc = document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr > th:nth-child(9)")
    let auth_acc_a = document.createElement("a")
    auth_acc_a.innerHTML="Auth Acc."
// check to see if the tab is already sorting
    if (window.location.href.includes("order=-authacc")){
        auth_acc_a.href="?order=%2Bauthacc"
    } else {
        auth_acc_a.href="?order=-authacc"
    }
    auth_acc.appendChild(auth_acc_a)
} else {
    let auth_tot = document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr > th:nth-child(7)")
    let auth_tot_a = document.createElement("a")
    auth_tot_a.innerHTML="Authors"
// check to see if the tab is already sorting
    if (window.location.href.includes("order=-authtot")){
        auth_tot_a.href="?order=%2Bauthtot"
    } else {
        auth_tot_a.href="?order=-authtot"
    }

    auth_tot.appendChild(auth_tot_a)


    let auth_acc = document.querySelector("body > main > div.l-report_grid > article > div > div.table-container > div > table > thead > tr > th:nth-child(8)")
    let auth_acc_a = document.createElement("a")
    auth_acc_a.innerHTML="Auth Acc."
// check to see if the tab is already sorting
    if (window.location.href.includes("order=-authacc")){
        auth_acc_a.href="?order=%2Bauthacc"
    } else {
        auth_acc_a.href="?order=-authacc"
    }
    auth_acc.appendChild(auth_acc_a)
}


let auth_rat = document.createElement("th")
auth_rat.className="table-item-autofit"
let auth_rat_a = document.createElement("a")
auth_rat_a.innerHTML="Auth Rat."
// check to see if the tab is already sorting
if (window.location.href.includes("order=-authrat")){
    auth_rat_a.href="?order=%2Bauthrat"
} else {
    auth_rat_a.href="?order=-authrat"
}
auth_rat.appendChild(auth_rat_a)
heading.appendChild(auth_rat)


