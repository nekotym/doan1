const gioithieutabs1 = document.querySelector(".gt-tab1");
const gioithieutabs2 = document.querySelector(".gt-tab2");

const tuyendungcontents = document.querySelector(".tuyendung-contents");
const tintuccontents = document.querySelector(".tintuc-contents");
const gttabcontenttd = document.querySelector(".gt-tab_content-td");
const gttabcontenttt = document.querySelector(".gt-tab_content-tt");
const pane_td = gttabcontenttd.querySelectorAll(".tab_pane-td");
const pane_tt = gttabcontenttt.querySelectorAll(".tab_pane-tt");

gioithieutabs1.addEventListener("click", () => {
  gioithieutabs1.classList.add("active");
  tuyendungcontents.classList.add("active");
  gioithieutabs2.classList.remove("active");
  tintuccontents.classList.remove("active");
  gttabcontenttd.classList.add("active");
  gttabcontenttt.classList.remove("active");
});
gioithieutabs2.addEventListener("click", () => {
  gioithieutabs2.classList.add("active");
  tintuccontents.classList.add("active");
  tuyendungcontents.classList.remove("active");
  gioithieutabs1.classList.remove("active");
  gttabcontenttd.classList.remove("active");
  gttabcontenttt.classList.add("active");
});

const tuyendungtabs = document.querySelectorAll(".td-tab");
const tintuctabs = document.querySelectorAll(".tt-tab");

tuyendungtabs.forEach((tab, index) => {
  const pant_tds = pane_td[index];
  tab.onclick = function () {
    document.querySelector(".td-tab.active").classList.remove("active");
    document.querySelector(".tab_pane-td.active").classList.remove("active");
    this.classList.add("active");
    pant_tds.classList.add("active");
  };
});
tintuctabs.forEach((tab, index) => {
  const pane_tts = pane_tt[index];
  tab.onclick = function () {
    document.querySelector(".tt-tab.active").classList.remove("active");
    document.querySelector(".tab_pane-tt.active").classList.remove("active");
    this.classList.add("active");
    pane_tts.classList.add("active");
  };
});
