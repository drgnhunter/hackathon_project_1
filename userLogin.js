//user login
document.getElementById("userLoginBtn").addEventListener("click", (event) => {

    const nodeList = document.querySelectorAll("div#userLogin div input");

    const newUserArray = Array.from(nodeList);

    const userObj = {};

    var f = new FormData();

    newUserArray.forEach((tag) => {

        if (tag.type === "checkbox") {
            console.log("This is a checkbox")
            userObj[tag.getAttribute("data-checkBox")] = tag.checked ? true : false ;
        } else {
            console.log("This isn't a checkbox")
            userObj[tag.getAttribute("data-key")] = tag.value;

            // f.append(typedValue.getAttribute("data-key"),typedValue.value);
            console.log(tag.value);
        }


    })

    f.append("oldUserLoginObj", JSON.stringify(userObj));

    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
        }
    };

    r.open("POST", "server/userLoginProcess.php", true);
    r.send(f);
});

//password Visibility
document.querySelector("div#userLogin div div").addEventListener("click", () => {
    alert("HI");
    const passwordTags = document.querySelectorAll("div#userLogin div input");

    passwordTags.forEach((tag) => {
        tag.type = tag.type === "text" ? "password" : "text";
    });
});
