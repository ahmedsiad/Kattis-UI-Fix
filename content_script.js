const wrapper = document.getElementsByClassName("l-book")[0];
const userElem = document.getElementsByClassName("profile_menu-item")[1];

if (window.location.href.split("/").length === 5 && userElem !== undefined) {
    const problemID = window.location.href.split("/").pop();

    const userLink = userElem.href + "/submissions/" + problemID;

    const container = document.createElement("div");
    container.className = "my-container";

    const submitButton = document.createElement("a");
    submitButton.className = "extra-button submit";
    submitButton.innerHTML = "My Submissions";
    submitButton.href = userLink;

    const statisticsButton = document.createElement("a");
    statisticsButton.className = "extra-button statistics";
    statisticsButton.innerHTML = "Statistics";

    const toggleButton = document.createElement("a");
    toggleButton.className = "extra-button toggle";
    toggleButton.innerHTML = "Toggle Editor";

    toggleButton.addEventListener("click", function() {
        const article = document.getElementById("instructions");
        const editor = article.nextElementSibling;
        const styles = getComputedStyle(editor);
        console.log(styles.display);
        if (styles.display === "none") {
            editor.style = "display:block;";
            article.style="max-width:700px;";
        }
        else {
            editor.style = "display:none;";
            article.style="max-width:1900px;";
        }
    });

    const staturl = window.location.href + "/statistics";
    statisticsButton.href = staturl;

    container.appendChild(submitButton);
    container.appendChild(statisticsButton);
    container.appendChild(toggleButton);

    wrapper.insertBefore(container, wrapper.children[0]);

}

