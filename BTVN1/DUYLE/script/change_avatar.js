function changeAvatar() {
  var browser = document.getElementById("file");
  browser.click();
  browser.onchange = () => {
    if (browser.files && browser.files[0]) {
      let file = browser.files[0];
      loadAvatar(file);
    }
  };
}
