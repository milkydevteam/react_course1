function loadAvatar(file){
    if (file) {
        var reader = new FileReader();
        reader.onload = (event) => {
            let url = event.target.result;
            document.getElementById("avatar").setAttribute("src", url);
            window.localStorage.setItem("avatar", url);
        }
        reader.readAsDataURL(file);
    }
}

function firstLoadAvatar(){
    let url = window.localStorage.getItem("avatar");
    if (url) {
        document.getElementById("avatar").setAttribute("src", url);
    }
}

function firstLoadInfo(){
    let nbInfo = window.localStorage.getItem("nb_info");
    if (nbInfo) {
        for(let i = 0; i < nbInfo; i++){
            let data = window.localStorage.getItem("info"+i);
            if (data) document.getElementById("info"+i).innerHTML = data;
        }
    }
}