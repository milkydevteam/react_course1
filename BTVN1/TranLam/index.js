window.onload = function() {
  let saved = localStorage.getItem("description");
  if (saved) document.getElementById("description").innerHTML = saved;
};

function saveToLocalstorage() {
  let saved = document.getElementById("description").innerHTML;
  if (localStorage.getItem("description")) {
    localStorage["description"] = saved;
  } else {
    localStorage.setItem("description", saved);
  }
}

function editItem(element) {
  let projectName = element.previousElementSibling;
  let projectDes = element.parentElement.nextElementSibling;
  let linkNode = element.parentElement.parentElement.lastElementChild;
  projectName.setAttribute("contenteditable", "true");
  projectName.style["border"] = "1px solid lightgray";
  projectDes.setAttribute("contenteditable", "true");
  projectDes.style["border"] = "1px solid lightgray";
  linkNode.setAttribute("contenteditable", "true");
  linkNode.style["border"] = "1px solid lightgray";
}

function saveItem(element) {
  let projectName = element.previousElementSibling.previousElementSibling;
  let projectDes = element.parentElement.nextElementSibling;
  projectName.removeAttribute("contenteditable");
  projectName.style["border"] = "1px solid white";
  projectDes.removeAttribute("contenteditable");
  projectDes.style["border"] = "1px solid white";
  let linkNode = element.parentElement.parentElement.lastElementChild;
  linkNode.removeAttribute("contenteditable");
  linkNode.style["border"] = "1px solid white";
  let link = linkNode.textContent;
  linkNode.innerHTML = "VISIT SITE &gt;";
  linkNode.href = link;
  saveToLocalstorage();
}

function addDetails() {
  let container =
    '<article class="des-article"><div><header class="header-project">EDIT PROJECT TITLE</header><button class="edit-button" onclick="editItem(event.target)">Edit</button><button class="save-button" onclick="saveItem(event.target)">Save</button><button class="delete-button" onclick="deleteItem(event.target)">Delete</button></div><article class="article-project">EDIT PROJECT DESCRIPTION</article><br /><a class="site" href="https://www.google.com.vn/" target="blank">EDIT LINK PROJECT</a></article>';
  let fragment = new DOMParser().parseFromString(container, "text/html").body
    .childNodes[0];
  document.getElementById("inner-des").appendChild(fragment);
  saveToLocalstorage();
}

function deleteItem(element) {
  let desArticle = element.parentElement.parentElement;
  desArticle.style["display"] = "none";
  saveToLocalstorage();
}

function changeAvatar(event) {
  let value = event.target.files[0];
  let url = URL.createObjectURL(value);
  document.getElementById("avatar").src = url;
}
