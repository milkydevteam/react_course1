function loadAvatar(file) {
  let avatar = localStorage.getItem('avatar');
  if (avatar) {
    document.getElementById("avatar").setAttribute("src", avatar);
  }

  if (file) {
    var reader = new FileReader();
    reader.onload = (event) => {
        let url = event.target.result;
        document.getElementById("avatar").setAttribute("src", url);
        localStorage.setItem("avatar", url);
    }
    reader.readAsDataURL(file);
  }
}

function loadData() {
  const group = document.querySelectorAll(".form__group input");
  group.forEach(e => {
    const id = e.id;
    const value = localStorage.getItem(id);
    e.value = value;
  })
}