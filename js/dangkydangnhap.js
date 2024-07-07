const slct = document.getElementById("options");
slct.addEventListener("click", () => {
  slct.classList.toggle("open");
});
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = "~!";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
function random_avt(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var items = [
  "../AUDI/avt/avt (1).png",
  "../AUDI/avt/avt (2).png",
  "../AUDI/avt/avt (3).png",
  "../AUDI/avt/avt (4).png",
  "../AUDI/avt/avt (5).png",
  "../AUDI/avt/avt (6).png",
];

/*============nut bam=========*/
const dn = document.querySelector(".dn"),
  dk = document.querySelector(".dk"),
  popup3 = document.querySelector("#signinus"),
  popup4 = document.querySelector("#signinad"),
  popup5 = document.querySelector("#sign-up");

console.log(popup5);
/*=======goi localStorage========*/
const localAccounts = JSON.parse(localStorage.getItem("accounts"));
const localLogins = JSON.parse(localStorage.getItem("logins"));
/*sai dung*/
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

/*========DANG KY================*/
function checkdangky() {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  var name = "người dùng chưa định danh";
  var email = "email chưa định danh";
  var ngaysinh = "1999-01-01";
  var tttk = `<i class="ri-close-circle-fill" style="color: red"></i>`;
  var avtSrc = random_avt(items);
  var id = generateString(4);
  var index = 0;
  var chucvu = document.getElementById("options").value;
  var user = document.forms["dangkyaccform"]["username"].value;
  var pass = document.forms["dangkyaccform"]["pass"].value;
  var pass2 = document.forms["dangkyaccform"]["pass2"].value;
  var usernone;
  for (let account of accounts) {
    if (user == account.user) {
      setError(
        document.forms["dangkyaccform"]["username"],
        "Tài khoản đã tồn tại! "
      );
      usernone = user;
      showToast(faildangkymsg);
      return false;
    }
  }
  if (user == "") {
    setError(
      document.forms["dangkyaccform"]["username"],
      "Tài khoản không được để trống! "
    );
  } else {
    setSuccess(document.forms["dangkyaccform"]["username"]);
  }
  if (pass == "") {
    setError(
      document.forms["dangkyaccform"]["pass"],
      "Mật khẩu không được để trống! "
    );
  } else if (pass.length < 8) {
    setError(
      document.forms["dangkyaccform"]["pass"],
      "Mật khẩu 8 ký tự trở lên! "
    );
  } else {
    setSuccess(document.forms["dangkyaccform"]["pass"]);
  }
  if (pass2 != pass) {
    setError(
      document.forms["dangkyaccform"]["pass2"],
      "Mật khẩu nhập lại không khớp!"
    );
  } else {
    setSuccess(document.forms["dangkyaccform"]["pass2"]);
  }
  for (let account of accounts) {
    if (account.index == index) {
      index++;
    }
  }
  if (
    user == usernone ||
    user == "" ||
    pass == "" ||
    pass.length < 8 ||
    pass2 != pass
  ) {
    showToast(faildangkymsg);
    return false;
  } else {
    showToast(successdangkymsg);
    setTimeout(vaotrangdangnhap, 5000);
    accounts.push({
      name,
      email,
      avtSrc,
      ngaysinh,
      chucvu: chucvu,
      user: user,
      pass: pass,
      index: index,
      id: id,
      tttk: tttk,
    });
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
  dk.classList.add("sign__up");
  popup5.classList.add("sign__up");
}

/*=================DANG NHAP==========*/
function checkdangnhap() {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  let logins = localStorage.getItem("logins")
    ? JSON.parse(localStorage.getItem("logins"))
    : [];
  let accessAcs = localStorage.getItem("accessAcs")
    ? JSON.parse(localStorage.getItem("accessAcs"))
    : [];
  var user = document.forms["dangnhapform"]["username"].value;
  var pass = document.forms["dangnhapform"]["pass"].value;
  var chucvu = document.getElementById("options").value;
  var usernone;
  if (user == "" && pass == "") {
    showToast(faildangnhapmsg);
    return false;
  }
  if (pass == "") {
    showToast(faildangnhapmsg);
    return false;
  }
  if (user == "") {
    showToast(faildangnhapmsg);
    return false;
  }
  for (let account of accounts) {
    if (user == account.user) {
      usernone = account.user;
    }
  }
  if (user != usernone) {
    showToast(faildangnhapmsg);
    return false;
  }
  for (let account of accounts) {
    // console.log(account.user);
    if (
      user == account.user &&
      pass == account.pass &&
      chucvu == "khachhang" &&
      account.chucvu == "khachhang"
    ) {
      showToast(successdangnhapmsg);
      setTimeout(home, 5000);
      setSuccess(document.forms["dangnhapform"]["username"]);
      setSuccess(document.forms["dangnhapform"]["pass"]);
      console.log("dung het");
      logins.push({
        user: user,
        pass: pass,
      });
      localStorage.setItem("logins", JSON.stringify(logins));
      accessAcs.push({
        user: user,
      });
      localStorage.setItem("accessAcs", JSON.stringify(accessAcs));
      dn.classList.add("login");
      popup3.classList.add("login");
      return true;
    }
    if (
      user == account.user &&
      pass == account.pass &&
      chucvu == "quanly" &&
      account.chucvu == "quanly"
    ) {
      showToast(successdangnhapmsg);
      setTimeout(admin, 5000);

      setSuccess(document.forms["dangnhapform"]["username"]);
      setSuccess(document.forms["dangnhapform"]["pass"]);
      console.log("dung het");
      logins.push({
        user: user,
        pass: pass,
      });
      localStorage.setItem("logins", JSON.stringify(logins));
      dn.classList.add("login");
      popup4.classList.add("login");
      return true;
    }
    if (
      user == account.user &&
      pass == account.pass &&
      chucvu != account.chucvu
    ) {
      showToast(faildangnhapmsg);
      setSuccess(document.forms["dangnhapform"]["username"]);
      setError(document.forms["dangnhapform"]["pass"], "Sai chức vụ!");
      console.log("sai chuc vu");
      return false;
    }

    if (user == account.user && pass != account.pass) {
      showToast(faildangnhapmsg);

      setSuccess(document.forms["dangnhapform"]["username"]);
      setError(document.forms["dangnhapform"]["pass"], "Sai mật khẩu!");
      console.log("sai mk");
      return false;
    }
  }
}
let successdangkymsg = `<i class="ri-checkbox-circle-line"></i> Đăng ký thành công`;
let successdangnhapmsg = `<i class="ri-checkbox-circle-line"></i> Đăng nhập thành công`;
let successpassmsg = `<i class="ri-checkbox-circle-line"></i> Yêu cầu thành công`;

let faildangkymsg = `<i class="ri-error-warning-line"></i> Đăng ký không thành công`;
let faildangnhapmsg = `<i class="ri-error-warning-line"></i> Đăng nhập không thành công`;
let failpassmsg = `<i class="ri-error-warning-line"></i> Yêu cầu không thành công`;
let toastBox = document.getElementById("toastBox");
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");

  if (msg == faildangkymsg) {
    toast.innerHTML = faildangkymsg;
    toastBox.appendChild(toast);
    if (faildangkymsg.includes("Đăng ký không thành công")) {
      toast.classList.add("faildangkymsg");
    }
    setTimeout(() => {
      toast.classList.remove("faildangkymsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successdangkymsg) {
      toast.innerHTML = successdangkymsg;
      toastBox.appendChild(toast);
      if (successdangkymsg.includes("Đăng ký thành công")) {
        toast.classList.add("successdangkymsg");
      }
      setTimeout(() => {
        toast.classList.remove("successdangkymsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
  if (msg == faildangnhapmsg) {
    toast.innerHTML = faildangnhapmsg;
    toastBox.appendChild(toast);
    if (faildangnhapmsg.includes("Đăng nhập không thành công")) {
      toast.classList.add("faildangnhapmsg");
    }
    setTimeout(() => {
      toast.classList.remove("faildangnhapmsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successdangnhapmsg) {
      toast.innerHTML = successdangnhapmsg;
      toastBox.appendChild(toast);
      if (successdangnhapmsg.includes("Đăng nhập thành công")) {
        toast.classList.add("successdangnhapmsg");
      }
      setTimeout(() => {
        toast.classList.remove("successdangnhapmsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
  if (msg == failpassmsg) {
    toast.innerHTML = failpassmsg;
    toastBox.appendChild(toast);
    if (failpassmsg.includes("Yêu cầu không thành công")) {
      toast.classList.add("failpassmsg");
    }
    setTimeout(() => {
      toast.classList.remove("failpassmsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successpassmsg) {
      toast.innerHTML = successpassmsg;
      toastBox.appendChild(toast);
      if (successpassmsg.includes("Yêu cầu thành công")) {
        toast.classList.add("successpassmsg");
      }
      setTimeout(() => {
        toast.classList.remove("successpassmsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
}
function home() {
  window.location = "../index.html";
}
function admin() {
  window.location = "../html/admin.html";
}
function vaotrangdangnhap() {
  window.location = "../html/dangnhap.html";
}
function reload() {
  window.location.reload();
}
const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");

const password = document.querySelector("#pass");
const pass2 = document.querySelector("#pass2");
togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon

  this.classList.toggle("ri-eye-line");
  this.classList.toggle("ri-eye-off-line");
});

togglePassword2.addEventListener("click", function () {
  // toggle the type attribute
  const type = pass2.getAttribute("type") === "password" ? "text" : "password";
  pass2.setAttribute("type", type);

  // toggle the icon

  this.classList.toggle("ri-eye-line");
  this.classList.toggle("ri-eye-off-line");
});
