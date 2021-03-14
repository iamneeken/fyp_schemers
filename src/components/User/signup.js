export const goto_signup= (url,btn,btn2) => {
    // url= windows.location.href
    url = url.split("#");
    var check = url[url.length-1];
    console.log(check)
    console.log(url.length)
    if (check === "register"){
        // document.getElementById("sign-up-btn").click();
        btn.click()
    }
    else{
        btn2.click()
    }
}
export default {goto_signup}