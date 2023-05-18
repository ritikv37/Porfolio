// -------------------nav-----------------------
let navmenu = document.getElementById("navmenu")

navmenu.addEventListener("click", () => {
    let ul = document.getElementById("ul");
    let close = document.getElementById("nav-close");
    let open = document.getElementById("nav-open");
    ul.classList.toggle("close")
    close.classList.toggle("h")
    open.classList.toggle("h")
})


// ----------------contact validation-----------------

function validate() {

    let name_val = document.getElementById("inp-n")
    let mail_val = document.getElementById("inp-e")
    let sub_val = document.getElementById("inp-s")
    let text_val = document.getElementById("inp-t")
    let name_err = document.getElementById("name-err")
    let mail_err = document.getElementById("email-err")
    let sub_err = document.getElementById("sub-err")
    let text_err = document.getElementById("text-err")
    let sub_msg = document.getElementById("final-sub")

    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    let flag = true;

    if (name_val.value.trim() == "") {
        name_err.style.display = "block";

        flag = false;
    }
    else {
        name_err.style.display = "none";

    }

    if (sub_val.value.trim() == "") {
        sub_err.style.display = "block";
        flag = false;
    }
    else {
        sub_err.style.display = "none";

    }

    if (text_val.value.trim() == "") {
        text_err.style.display = "block";
        flag = false;
    }
    else {
        text_err.style.display = "none";

    }

    if (mail_val.value.trim() == "") {
        mail_err.style.display = "block";
        flag = false;
    } else if (!mail_val.value.match(email_regex)) {
        mail_err.style.display = "block";
        flag = false;
    }
    else {
        mail_err.style.display = "none";
    }
    if (flag == true) {
        sub_msg.innerHTML = "We will reach you soon!"
    }


    console.log(flag)
    return flag;
}


const cursorr = document.querySelector(".cursor")

document.addEventListener('mousemove', (e) =>{
    
    var a = e.pageX -460
    var b = e.pageY -220
    cursorr.style.left =  a + "px"
    cursorr.style.top = b + "px"
    console.log(e.pageX)
    console.log(e.pageY)
    cursorr.style.display="block"
})