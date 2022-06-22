const sort = document.createElement("div");

sort.className="strip-item-secondary";

const name = document.createElement("strong");
name.className = "contest-filter-head";

name.innerHTML = "Sort By:";

sort.appendChild(name);

const auth_tot = document.createElement("div");
const auth_tot_a = document.createElement("a");
auth_tot_a.innerHTML="Authors";
auth_tot.className="extra-button";
if (window.location.href.includes("order=-authtot")){
    auth_tot_a.href="?order=%2Bauthtot";
} else {
    auth_tot_a.href="?order=-authtot";
}
auth_tot.appendChild(auth_tot_a);
sort.appendChild(auth_tot);

const auth_acc = document.createElement("div");
const auth_acc_a = document.createElement("a");
auth_acc_a.innerHTML="Auth Acc.";
auth_acc.className="extra-button";
if (window.location.href.includes("order=-authacc")){
    auth_acc_a.href="?order=%2Bauthacc";
} else {
    auth_acc_a.href="?order=-authacc";
}
auth_acc.appendChild(auth_acc_a);
sort.appendChild(auth_acc);

const auth_rat = document.createElement("div");
const auth_rat_a = document.createElement("a");
auth_rat_a.innerHTML="Auth Rat.";
auth_rat.className="extra-button";
if (window.location.href.includes("order=-authrat")){
    auth_rat_a.href="?order=%2Bauthrat";
} else {
    auth_rat_a.href="?order=-authrat";
}
auth_rat.appendChild(auth_rat_a);
sort.appendChild(auth_rat);

const block = document.querySelector("body > main > div.l-report_grid > div");
block.appendChild(sort);
