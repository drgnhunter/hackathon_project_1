//user registration
document.getElementById("userRegBtn").addEventListener("click",()=>{
    const nodeList = document.querySelectorAll("div#userReg div input");

    const newUserArray = Array.from(nodeList);

    const userObj = {};

    var f = new FormData();

    newUserArray.forEach((typedValue)=>{

        userObj[typedValue.getAttribute("data-key")] = typedValue.value;
        
        // f.append(typedValue.getAttribute("data-key"),typedValue.value);
        console.log(typedValue.value);
    })

    f.append("newUserLoginObj",JSON.stringify(userObj));

    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
        if(r.readyState == 4){
            var t = r.responseText;
            alert(t);
        }
    };

    r.open("POST","server/userRegProcess.php",true);
    r.send(f);

})


document.querySelectorAll("div.passwordDiv .toggle-password").forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const passwordInput = eyeIcon.previousElementSibling;
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
});

