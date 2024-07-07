/*so tang dan */
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
/*tao bang*/
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var drops = this.el.find(".drop");
    // Evento
    drops.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var Accordion = new Accordion($("#accordion"), false);
});
/*random don hang*/
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = "$";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

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
/*nut bam*/
const secTion = document.querySelector(".car-bd"),
  dkiBtn = document.querySelector(".dangkyxe"),
  dongyBtn = document.querySelector("#dongy-xe"),
  popup6 = document.querySelector("#pu1"),
  popup7 = document.querySelector("#pu2"),
  popupcf = document.querySelector("#pucf"),
  clssBtn = document.querySelectorAll(".dong-popup");
console.log(secTion);
//   closeBtn = document.querySelectorAll(".dong-popup");

clssBtn.forEach((clBtn) => {
  clBtn.addEventListener("click", () => {
    secTion.classList.remove("car-show-popup");
    popup6.classList.remove("car-show-popup");
    popup7.classList.remove("car-show-popup");
    popupcf.classList.remove("car-show-popup");
  });
});
const tendki = document.getElementById("ten-dki"),
  diachidki = document.getElementById("diachi-dki"),
  emaildki = document.getElementById("email-dki"),
  sdtki = document.getElementById("sodienthoai-dki"),
  ghichudki = document.getElementById("ghichu-dki"),
  tenxedki = document.getElementById("tenxe-dki"),
  giaxedki = document.getElementById("giaxe-dki"),
  mauxedki = document.getElementById("mauxe-dki");

/*dangkyxe*/
function checkdangkyxe() {
  let logins = localStorage.getItem("logins")
    ? JSON.parse(localStorage.getItem("logins"))
    : [];
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  var user;
  var pass;
  for (let login of logins) {
    user = login.user;
    pass = login.pass;
  }
  var giaxe = document.querySelector(".car-price").innerText;
  console.log(giaxe);
  var idthiscar = document.querySelector("#car-loader").value;
  var carName;
  var carPrice;
  var carKind;
  listcar.map((car) => {
    if (car.idcar == idthiscar) {
      carName = car.namecar;
      carPrice = car.pricecar;
      carKind = car.seriescar;
    }
  });
  var carIMGsrc = document.getElementsByClassName("image-colos")[0].src;
  console.log(carIMGsrc);
  var carColor = document.getElementsByClassName("ten-color")[0].innerText;
  var name = document.forms["dangkyxeform"]["name"].value;
  var address = document.forms["dangkyxeform"]["address"].value;
  var phone = document.forms["dangkyxeform"]["number"].value;
  var kiemTraDT = isNaN(phone);
  var email = document.forms["dangkyxeform"]["email"].value;
  var note = document.forms["dangkyxeform"]["note"].value;
  var acong = email.indexOf("@");
  var daucham = email.lastIndexOf(".");
  var madonhang = generateString(5);
  var index = 0;

  if (name == "") {
    setError(
      document.forms["dangkyxeform"]["name"],
      "Họ tên không được để trống"
    );
  } else if (name.length < 2 || name.length > 25) {
    setError(
      document.forms["dangkyxeform"]["name"],
      "Họ tên phải lớn hơn 2 và nhỏ hơn 25 ký tự"
    );
  } else {
    setSuccess(document.forms["dangkyxeform"]["name"]);
  }
  if (address == "") {
    setError(
      document.forms["dangkyxeform"]["address"],
      "Địa chỉ không được để trống"
    );
  } else {
    setSuccess(document.forms["dangkyxeform"]["address"]);
  }
  if (email == "") {
    setError(
      document.forms["dangkyxeform"]["email"],
      "Email không được để trống"
    );
  } else if (acong < 1 || daucham < acong + 2 || daucham + 2 > email.length) {
    setError(
      document.forms["dangkyxeform"]["email"],
      "Email không đúng định dạng"
    );
  } else {
    setSuccess(document.forms["dangkyxeform"]["email"]);
  }
  if (phone == "") {
    setError(
      document.forms["dangkyxeform"]["number"],
      "Số điện thoại không được để trống"
    );
  } else if (phone.length != 10) {
    // alert("Điện thoại định dạng 10 số");
    setError(
      document.forms["dangkyxeform"]["number"],
      "Điện thoại định dạng 10 số"
    );
  } else if (kiemTraDT == true) {
    // alert("Điện thoại phải ở định dạng số");
    setError(
      document.forms["dangkyxeform"]["number"],
      "Điện thoại phải ở định dạng số"
    );
  } else {
    setSuccess(document.forms["dangkyxeform"]["number"]);
  }
  for (let order of orders) {
    if (order.index == index) {
      index++;
    }
  }
  if (
    name == "" ||
    name.length < 2 ||
    name.length > 25 ||
    kiemTraDT == true ||
    phone.length != 10 ||
    phone == "" ||
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > email.length ||
    email == "" ||
    address == ""
  ) {
    showToast(faildkixemsg);
    return false;
  }
  if (localStorage.getItem("logins") === null) {
    showToast(faildkixemsg);
    secTion.classList.add("car-show-popup");
    popup6.classList.add("car-show-popup");
    // alert("Vui long dang nhap");
    // window.location = "../html/dangnhap.html";
  } else {
    if (
      (name && email && phone && address && note) ||
      (name && email && phone && address && !note)
    ) {
      secTion.classList.add("car-show-popup");
      popupcf.classList.add("car-show-popup");
      tendki.innerHTML = document.forms["dangkyxeform"]["name"].value;
      diachidki.innerHTML = document.forms["dangkyxeform"]["address"].value;
      emaildki.innerHTML = document.forms["dangkyxeform"]["email"].value;
      sdtki.innerHTML = document.forms["dangkyxeform"]["number"].value;
      ghichudki.innerHTML = document.forms["dangkyxeform"]["note"].value;
      tenxedki.innerHTML = carName;
      giaxedki.innerHTML = giaxe + ` VND`;
      mauxedki.innerHTML = carKind;

      clssBtn.forEach((clBtn) => {
        clBtn.addEventListener("click", () => {
          window.location.reload();
        });
      });
      dongyBtn.addEventListener("click", () => {
        if (typeof Storage !== "undefined") {
          let order = {
            user: user,
            pass: pass,
            name: name,
            address: address,
            email: email,
            phone: phone,
            note: note,
            carIMGsrc,
            carName,
            carPrice,
            carKind,
            carColor,
            index: index,
            madonhang: madonhang,
            thongtindonhang: 1,
          };

          if (JSON.parse(localStorage.getItem("orders")) === null) {
            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));
            showToast(successdkixemsg);
            secTion.classList.add("car-show-popup");
            popupcf.classList.remove("car-show-popup");
            popup7.classList.add("car-show-popup");
          } else {
            let orders = localStorage.getItem("orders")
              ? JSON.parse(localStorage.getItem("orders"))
              : [];

            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));
            showToast(successdkixemsg);
            secTion.classList.add("car-show-popup");
            popupcf.classList.remove("car-show-popup");
            popup7.classList.add("car-show-popup");
          }
        } else {
          alert("LocalStorage is not working on your browser");
        }
      });
    }
  }
}
const like_btn = document.querySelector(".like-btn");

function renderLikeBtn() {
  let whitelists = localStorage.getItem("whitelists")
    ? JSON.parse(localStorage.getItem("whitelists"))
    : [];
  var carname = document.querySelector(".car-name").innerText;
  var cfuser;
  let likebtn = `
      <div class="like btn" onclick="likebtn()"><i class="ri-heart-3-fill"></i></div>`;
  var myt;
  for (let login of logins) {
    cfuser = login.user;
  }

  for (let whitelist of whitelists) {
    myt = whitelist.mayeuthich;
  }
  let wluser;
  for (let whitelist of whitelists) {
    if (cfuser == whitelist.user) {
      wluser = whitelist.user;
    }
  }
  if (cfuser == wluser) {
    for (let whitelist of whitelists) {
      if (
        cfuser == whitelist.user &&
        myt == whitelist.mayeuthich &&
        carname == whitelist.carName
      ) {
        likebtn += ` <div class="like btn active" onclick="unlikebtn('${whitelist.mayeuthich}')">
        <i class="ri-heart-3-fill"></i>
        </div>`;
      } else if (cfuser == whitelist.user && carname == whitelist.carName) {
        likebtn += ` <div class="like btn active" onclick="unlikebtn('${whitelist.mayeuthich}')">
        <i class="ri-heart-3-fill"></i>
        </div>`;
      }
    }
    like_btn.innerHTML = likebtn;
  } else {
    likebtn += `<div class="like btn" onclick="likebtn()"><i class="ri-heart-3-fill"></i></div>`;

    like_btn.innerHTML = likebtn;
  }
}

/*doan nay la them vao danh sach yeu thich*/
const like = document.getElementById("like");
const unlike = document.getElementsByClassName("like.active");
const toastBox = document.getElementById("toastBox");
let likemsg = `<i class="ri-heart-3-fill"></i> Đã thêm vào danh sách yêu thích`;
let unlikemsg = `<i class="ri-heart-3-line"></i> Đã xóa khỏi danh sách yêu thích`;
function likebtn() {
  if (localStorage.getItem("logins") === null) {
    secTion.classList.add("car-show-popup");
    popup6.classList.add("car-show-popup");
  } else {
    //doan nay de hien thi toát
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = likemsg;
    toastBox.appendChild(toast);
    if (likemsg.includes("thêm")) {
      toast.classList.add("like");
    }
    setTimeout(() => {
      toast.classList.remove("like");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
    //doan nay code de addlist
    let logins = localStorage.getItem("logins")
      ? JSON.parse(localStorage.getItem("logins"))
      : [];
    let whitelists = localStorage.getItem("whitelists")
      ? JSON.parse(localStorage.getItem("whitelists"))
      : [];
    let listcar = localStorage.getItem("listcar")
      ? JSON.parse(localStorage.getItem("listcar"))
      : [];
    var user;
    var pass;
    for (let login of logins) {
      user = login.user;
      pass = login.pass;
    }
    var carName;
    var carPrice;
    var carKind;
    var carPic;
    // var btn = document.querySelector(".like.btn");
    var idthiscar = document.querySelector("#car-loader").value;
    listcar.map((car) => {
      if (car.idcar == idthiscar) {
        carPic = car.img2car;
        carName = car.namecar;
        carKind = car.seriescar;
        carPrice = car.pricecar;
      }
    });

    var mayeuthich = generateString(3);
    var index = 0;
    for (let whitelist of whitelists) {
      if (whitelist.index == index) {
        index++;
      }
    }
    let whitelist = {
      idthiscar,
      carKind,
      carName,
      carPic,
      carPrice,
      user: user,
      mayeuthich: mayeuthich,
      index: index,
    };
    if (JSON.parse(localStorage.getItem("whitelists")) === null) {
      whitelists.push(whitelist);
      localStorage.setItem("whitelists", JSON.stringify(whitelists));
    } else {
      let whitelists = localStorage.getItem("whitelists")
        ? JSON.parse(localStorage.getItem("whitelists"))
        : [];
      whitelists.push(whitelist);
      localStorage.setItem("whitelists", JSON.stringify(whitelists));
    }
  }
  renderLikeBtn();
}
function unlikebtn(mayeuthich) {
  let whitelists = [];
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = unlikemsg;
  toastBox.appendChild(toast);
  if (unlikemsg.includes("xóa")) {
    toast.classList.add("unlike");
  }
  setTimeout(() => {
    toast.classList.remove("unlike");
  }, 5000);
  setTimeout(() => {
    toast.remove();
  }, 5200);

  JSON.parse(localStorage.getItem("whitelists")).map((data) => {
    if (data.mayeuthich != mayeuthich) {
      whitelists.push(data);
    }
  });
  localStorage.setItem("whitelists", JSON.stringify(whitelists));
  renderLikeBtn();
}
