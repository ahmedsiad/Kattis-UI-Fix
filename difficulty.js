
// add the difficulty back into kattis


const container = document.getElementsByClassName("attribute_list-book")[0];

const diff = document.createElement("div");
diff.setAttribute("class","attribute_list-item");
const s = document.createElement("span");
s.className="attribute_list-label";
s.innerHTML="Difficulty";
diff.appendChild(s);


// use binary search to get the problem difficulty
const prob_name = document.querySelectorAll(".book-page-heading")[0].innerHTML;
const s2 = document.createElement("span");
s2.className="difficulty_number";
async function search(){


    let low = 0;
    let high = 34;
    let mid  = Math.floor((low+high)/2);
    let url_final = "https://open.kattis.com/problems?page=";
    while (high>low){
        const url = url_final + mid.toString();

        const req = await fetch(url);
        const raw =  await req.text();
        const page = new DOMParser().parseFromString(raw, "text/html");
        const probs = page.querySelectorAll("body > main > div.l-report_grid > article > div > div.table-container > div > table > tbody > tr > td:nth-child(1) > a");
        const probs_diff = page.querySelectorAll(".difficulty_number");

        // check to see if the page is correct

        if ( prob_name >  probs[probs.length-1].innerHTML){
            low = mid+1;
            mid =Math.floor((low+high)/2);
        } else if (prob_name <  probs[0].innerHTML){
            high=mid-1;
            mid = Math.floor((low+high)/2);
        } else {
            url_final += mid.toString();
            break;
        }
    }
    if (url_final === "https://open.kattis.com/problems?page="){
        url_final += mid.toString();
    }
    const req = await fetch(url_final);
    const raw =  await req.text();
    const page = new DOMParser().parseFromString(raw, "text/html");
    const probs = page.querySelectorAll("body > main > div.l-report_grid > article > div > div.table-container > div > table > tbody > tr > td:nth-child(1) > a");

    const probs_diff = page.querySelectorAll(".difficulty_number");


    for (let i = 0; i < probs.length;i++){
        if (probs[i].innerHTML===prob_name){
            s2.innerHTML = probs_diff[i].innerHTML;
            const diff_num = s2.innerHTML;

            const s3 = document.createElement("span");
            if (diff_num < "2.8"){
                s2.className = "difficulty_number difficulty_number-problems_table difficulty_easy";
                s3.innerHTML="easy";
            } else if (diff_num < "5.5"){
                s2.className="difficulty_number difficulty_number-problems_table difficulty_medium";
                s3.innerHTML="medium";
            } else {
                s2.className="difficulty_number difficulty_number-problems_table difficulty_hard";
                s3.innerHTML="hard";
            }
            diff.appendChild(s2);
            diff.appendChild(s3);
            break
        }
    }

}


search();
container.appendChild(diff);
