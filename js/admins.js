let accounts = localStorage.getItem("accounts")
  ? JSON.parse(localStorage.getItem("accounts"))
  : [];
let logins = localStorage.getItem("logins")
  ? JSON.parse(localStorage.getItem("logins"))
  : [];
let orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];
/*dang xuat*/
function dangxuat() {
  localStorage.removeItem("logins");
  window.location = "../index.html";
}

//*ACtiVE  LINK

// let toggle = document.querySelector(".admin-toggle");
let menutoggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".admin-navigation");
let main = document.querySelector(".admin-main");
menutoggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

const tabs = document.querySelectorAll(".tab_item");
const panes = document.querySelectorAll(".tab_pane");
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".tab_item.active").classList.remove("active");
    document.querySelector(".tab_pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

const admin_avt = document.querySelector("#avt-admin-img");
var user;
var pass;
for (let login of logins) {
  user = login.user;
  pass = login.pass;
}

for (let account of accounts) {
  if (user == account.user) {
    admin_avt.src = account.avtSrc;
  }
}
