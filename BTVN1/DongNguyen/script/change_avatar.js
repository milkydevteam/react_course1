function changeAvatar(){
    var browser = document.createElement("input");
    browser.setAttribute("type", "file");
    browser.click();
    browser.onchange = () => {
        if (browser.files && browser.files[0]){
            let file = browser.files[0];
            loadAvatar(file);
        }
    }
}

