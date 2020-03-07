function setEditableTextOnClick(){
    let elements = document.getElementsByClassName("editable-text");
    for(let i = 0; i < elements.length; i++){
        let editableArea = elements[i];
        let body = editableArea.getElementsByTagName("p")[0];
        body.addEventListener("click", (event) => {
            var editbox = editableArea.getElementsByTagName("textarea")[0];
            var submitButton = editableArea.getElementsByTagName("button")[0];
            var string = body.innerHTML.replace(/<br>/g, '\n');
            editbox.innerHTML = string;
            body.style.display = "none";
            editbox.style.display = "block";
            submitButton.style.display = "block";
            submitButton.addEventListener("click", () => {
                let submitText = editbox.value.replace(/\n/g, "<br>");
                body.innerHTML = submitText;
                window.localStorage.setItem("info"+i, submitText);
                body.style.display = "block";
                editbox.style.display = "none";
                submitButton.style.display = "none";
            })
        })
    }
    window.localStorage.setItem("nb_info", elements.length);
}

setEditableTextOnClick();