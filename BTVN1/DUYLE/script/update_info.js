function update_info() {
  const group = document.querySelectorAll(".form__group input");
  group.forEach(e => {
    const id = e.id;
    const value = e.value;
    localStorage.setItem(id,value)
  })
}

function add_more_info() {
  var div = document.createElement("div");
  div.className = "form__group field"
  var input = document.createElement("input");
  input.type = "input";
  input.className = "form__field";
  input.placeholder = "something here"
  div.appendChild(input);
  
  var element = document.getElementById("right-header");
  element.appendChild(div);
}