const profile = document.querySelector(".profile");
const tttk = document.querySelector(".tttk");
console.log(tttk);
const accounton = document.querySelector(".account");
const loichao = document.querySelector(".userlg");
const huyBtn = document.querySelectorAll(".huy-don-hang"),
  sectionOD = document.querySelector(".usbd"),
  xuly = document.querySelector("#xu-ly"),
  popup9 = document.querySelector("#pu9");
let accounts = localStorage.getItem("accounts")
  ? JSON.parse(localStorage.getItem("accounts"))
  : [];
let logins = localStorage.getItem("logins")
  ? JSON.parse(localStorage.getItem("logins"))
  : [];
let orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];
let whitelists = localStorage.getItem("whitelists")
  ? JSON.parse(localStorage.getItem("whitelists"))
  : [];
let successeditmsg = `<i class="ri-checkbox-circle-line"></i> Sửa thành công`;
let faileditmsg = `<i class="ri-error-warning-line"></i> Sửa không thành công, vui lòng điền đầy đủ thông tin`;
let arlertmsg = `<i class="ri-alert-fill"></i></i> Hãy cập nhật thông tin tài khoản để bảo mật`;
let faildkixemsg = `<i class="ri-error-warning-line"></i> Đăng ký xe không thành công`;
let successdkixemsg = `<i class="ri-checkbox-circle-line"></i> Đăng ký xe thành công`;
let toastBoxus = document.getElementById("toastBox");
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  if (msg == arlertmsg) {
    toast.innerHTML = arlertmsg;
    toastBoxus.appendChild(toast);
    if (arlertmsg.includes("Hãy cập nhật thông tin tài khoản để bảo mật")) {
      toast.classList.add("arlertmsg");
    }
    setTimeout(() => {
      toast.classList.remove("arlertmsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  }
  if (msg == faileditmsg) {
    toast.innerHTML = faileditmsg;
    toastBoxus.appendChild(toast);
    if (faileditmsg.includes("Sửa không thành công")) {
      toast.classList.add("faileditmsg");
    }
    setTimeout(() => {
      toast.classList.remove("faileditmsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successeditmsg) {
      toast.innerHTML = successeditmsg;
      toastBoxus.appendChild(toast);
      if (successeditmsg.includes("Sửa thành công")) {
        toast.classList.add("successeditmsg");
      }
      setTimeout(() => {
        toast.classList.remove("successeditmsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
  if (msg == faildkixemsg) {
    toast.innerHTML = faildkixemsg;
    toastBoxus.appendChild(toast);
    if (faildkixemsg.includes("Đăng ký xe không thành công")) {
      toast.classList.add("faildkixemsg");
    }
    setTimeout(() => {
      toast.classList.remove("faildkixemsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successdkixemsg) {
      toast.innerHTML = successdkixemsg;
      toastBoxus.appendChild(toast);
      if (successdkixemsg.includes("Đăng ký xe thành công")) {
        toast.classList.add("successdkixemsg");
      }
      setTimeout(() => {
        toast.classList.remove("successdkixemsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
}
function logintk() {
  var lguser;
  var acuser;
  for (let login of logins) {
    lguser = login.user;
  }

  // console.log(cfuser);
  for (let account of accounts) {
    if (lguser == account.user) {
      acuser = account.user;
    }
  }
  if (lguser === acuser) {
    for (let account of accounts) {
      if (
        lguser == account.user &&
        account.tttk ==
          `<i class="ri-close-circle-fill" style="color: red"></i>`
      ) {
        showToast(arlertmsg);
        profile.classList.add("on");
        accounton.classList.add("on");
        tttk.classList.add("on");
        loichao.innerHTML = "XIN CHÀO, " + lguser;
      }
      if (
        lguser == account.user &&
        account.tttk !=
          `<i class="ri-close-circle-fill" style="color: red"></i>`
      ) {
        profile.classList.add("on");
        accounton.classList.add("on");
        loichao.innerHTML = "XIN CHÀO, " + lguser;
      }
    }
  }
}

const tblOdr = document.getElementById("user-ord");

/*user con tainer*/
const uscon = document.getElementById("userCon");
const usertk = document.getElementById("user-user-edit");

function render() {
  /*check login === account*/
  var cfuser;
  var cfauser;
  for (let login of logins) {
    cfuser = login.user;
    cfpass = login.pass;
  }

  // console.log(cfuser);
  for (let account of accounts) {
    if (cfuser == account.user) {
      cfauser = account.user;
    }
  }
  if (cfauser === cfuser) {
    for (let account of accounts) {
      if (cfuser == account.user && account.chucvu == "khachhang") {
        usertk.innerHTML = account.user;
        let userCon = `<div class="item2">
            <div class="user-img">
              <div class="pro5">
                <img class="border" src="../AUDI/border.png" alt="" />
                <div class="box"></div>
                <img
                  class="img"
                  src="${account.avtSrc}"
                  alt=""
                  id="img-avt-user"
                />
              </div>
            </div>
            </div>
            <div class="item1">
            <div class="item-tag">Tai khoan</div>
            <label class="tai-khoan">${account.user}</label>
            </div>
            <div class="item3">
            <div class="item-tag">Mat khau</div>
            <label class="mat-khau">**************</label>
            </div>
            <div class="item6">
            <div class="item-tag">Ho va ten</div>
            <label class="ho-ten" style="text-transform: capitalize;">${account.name}</label>
            </div>
            <div class="item7">
            <div class="item-tag">Email</div>
            <label class="e-mail">${account.email}</label>
            </div>
            <div class="item8">
            <div class="item-tag">Ngày sinh</div>
            <label class="ngay-sinh">${account.ngaysinh}</label>
            </div>
            <div class="item10"><button class="doi-mk" onclick="thayMatkhau('${account.id}')" type="button">
            Đổi mật khẩu
            </button></div>
            <div class="item9"><button class="sua-thong-tin" onclick="thayData('${account.id}')" type="button">
            Sửa thông tin
            </button></div>
            <div class="item5">
            <button class="dang-xuat" onclick="dangxuatus()" type="button">Đăng xuất</button>
            </div>`;
        uscon.innerHTML = userCon;
      }
      if (cfuser == account.user && account.chucvu == "quanly") {
        usertk.innerHTML = account.user;
        let userCon = `<div class="item2">
            <div class="user-img">
              <div class="pro5">
                <img class="border" src="../AUDI/border.png" alt="" />
                <div class="box"></div>
                <img
                  class="img"
                  src="${account.avtSrc}"
                  alt=""
                  id="img-avt-user"
                />
              </div>
            </div>
            </div>
            <div class="item1">
            <div class="item-tag">Tai khoan</div>
            <label class="tai-khoan">${account.user}</label>
            </div>
            <div class="item3">
            <div class="item-tag">Mat khau</div>
            <label class="mat-khau">**************</label>
            </div>
            <div class="item6">
            <div class="item-tag">Ho va ten</div>
            <label class="ho-ten" style="text-transform: capitalize;">${account.name}</label>
            </div>
            <div class="item7">
            <div class="item-tag">Email</div>
            <label class="e-mail">${account.email}</label>
            </div>
            <div class="item8">
            <div class="item-tag">Ngày sinh</div>
            <label class="ngay-sinh">${account.ngaysinh}</label>
            </div>
            <div class="item10"><button class="doi-mk" onclick="thayMatkhau('${account.id}')" type="button">
            Đổi mật khẩu
            </button></div>
            <div class="item9"><button class="sua-thong-tin" onclick="thayData('${account.id}')" type="button">
            Sửa thông tin
            </button></div>
            <div class="item5">
            <button class="truycapadmin" onclick="truycapadmin()" type="button">Truy cập với tư cách quản lý</button>
            </div>`;
        uscon.innerHTML = userCon;
      }
    }
  }
}
function thayMatkhau(id) {
  document.getElementById("index-user").value = id;
  console.log(document.getElementById("index-user").value);
  section.classList.add("changeps");
  popup10.classList.add("changeps");
}

function doimatkhau() {
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
  let index = document.getElementById("index-user").value;
  var pass1 = document.getElementById("pass1-user-edit").value;
  var pass2 = document.getElementById("pass2-user-edit").value;
  var repass2 = document.getElementById("repass2-user-edit").value;
  accounts.map((data) => {
    if (index == data.id) {
      if (pass1 != data.pass) {
        setError(
          document.getElementById("pass1-user-edit"),
          "Mật khẩu cũ không đúng!"
        );
        return false;
      }
      if (pass2 == "") {
        setSuccess(document.getElementById("pass1-user-edit"));

        setError(
          document.getElementById("pass2-user-edit"),
          "Mật khẩu mới không được để trống!"
        );
        return false;
      }
      if (pass2.length < 8) {
        setSuccess(document.getElementById("pass1-user-edit"));

        setError(
          document.getElementById("pass2-user-edit"),
          "Mật khẩu mới phải lớn hơn 8 ký tự!"
        );
        return false;
      } else if (pass2 != repass2) {
        setSuccess(document.getElementById("pass1-user-edit"));

        setSuccess(document.getElementById("pass2-user-edit"));
        setError(
          document.getElementById("repass2-user-edit"),
          "Mật khẩu nhập lại không đúng!"
        );
        return false;
      } else {
        setSuccess(document.getElementById("pass1-user-edit"));
        setSuccess(document.getElementById("pass2-user-edit"));
        setSuccess(document.getElementById("repass2-user-edit"));
        data.pass = pass2;
        localStorage.setItem("accounts", JSON.stringify(accounts));
      }
    }
  });

  section.classList.remove("changeps");
  section.classList.add("changepssc");
  popup11.classList.add("changepssc");
}
const inputFileUS = document.querySelector("#file-us"),
  imgAreaUS = document.querySelector("#img-us");
inputFileUS.addEventListener("change", function () {
  const image = this.files[0];
  // console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMGUS = imgAreaUS.querySelectorAll("img");
    allIMGUS.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgAreaUS.appendChild(img);
    imgAreaUS.classList.add("active");
    imgAreaUS.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
function thayData(id) {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  document.getElementById("index-user").value = id;
  console.log(document.getElementById("index-user").value);
  accounts.map((data) => {
    if (data.id == id) {
      document.querySelector("#name-user-edit").value = data.name;
      document.querySelector("#email-user-edit").value = data.email;
      document.querySelector("#born-user-edit").value = data.ngaysinh;
      document.querySelector("#img-us").classList.add("active");
      document.querySelector("#anh-us").src = data.avtSrc;
      document.querySelector("#img-us").dataset.img = data.avtSrc.substring(
        12,
        data.avtSrc.length
      );
    }
  });

  section.classList.add("edit");
  popup1.classList.add("edit");
}
function doinguoidung() {
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
  let index = document.getElementById("index-user").value;
  var born_edit = document.getElementById("born-user-edit").value;
  var name_edit = document.getElementById("name-user-edit").value;
  var email_edit = document.getElementById("email-user-edit").value;
  var avt = document.querySelector("#img-us").dataset.img;
  var acong = email_edit.indexOf("@");
  var daucham = email_edit.lastIndexOf(".");
  var born = new Date(born_edit);
  var now = new Date();
  var year = now.getFullYear() - born.getFullYear();
  if (name_edit == "") {
    setError(
      document.getElementById("name-user-edit"),
      "Họ tên không được để trống!"
    );
  } else if (name_edit.length < 2 || name_edit.length > 25) {
    setError(
      document.getElementById("name-user-edit"),
      "Họ tên phải lớn hơn 2 và nhỏ hơn 25 ký tự"
    );
  } else {
    setSuccess(document.getElementById("name-user-edit"));
  }
  if (email_edit == "") {
    setError(
      document.getElementById("email-user-edit"),
      "Email không được để trống"
    );
  } else if (
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > email_edit.length
  ) {
    setError(
      document.getElementById("email-user-edit"),
      "Email không đúng định dạng"
    );
  } else {
    setSuccess(document.getElementById("email-user-edit"));
  }
  if (born_edit == "") {
    console.log(year);
    setError(document.getElementById("born-user-edit"), "Không được để trống");
  } else if (year < 18) {
    console.log(year);
    setError(
      document.getElementById("born-user-edit"),
      "Tuổi lớn hơn 18 tuổi!"
    );
  } else if (year == 18 && born.getMonth() > now.getMonth()) {
    console.log(year);
    setError(
      document.getElementById("born-user-edit"),
      "Tuổi lớn hơn 18 tuổi!"
    );
  } else if (
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear()
  ) {
    setError(document.getElementById("born-user-edit"), "Tuổi không hợp lệ!");
  } else {
    setSuccess(document.getElementById("born-user-edit"));
  }
  if (
    avt == "" ||
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear() ||
    (year == 18 && born.getMonth() > now.getMonth()) ||
    year < 18 ||
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > email_edit.length ||
    email_edit == "" ||
    born_edit == "" ||
    name_edit.length < 2 ||
    name_edit.length > 25 ||
    name_edit == ""
  ) {
    showToast(faileditmsg);
    return false;
  } else {
    showToast(successeditmsg);
    accounts.map((data) => {
      if (data.id == index) {
        data.name = name_edit;
        data.email = email_edit;
        data.ngaysinh = born_edit;
        data.tttk = `<i class="ri-checkbox-circle-fill" style="color: green"></i>`;
        data.avtSrc = `../audi/avt/${avt}`;
      }
    });
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }

  window.location.reload();
}
function vaotranguser() {
  window.location = "../html/user.html";
}
const section = document.querySelector(".usbd"),
  suaBtn = document.querySelector(".sua-thong-tin"),
  doimkBtn = document.querySelector(".doi-mk"),
  popup1 = document.querySelector("#pu1"),
  popup10 = document.querySelector("#pu10"),
  popup11 = document.querySelector("#pu11"),
  popup2 = document.querySelector("#pu2"),
  logOutBtn = document.querySelector(".dang-xuat"),
  clsBtn = document.querySelectorAll(".dong-popup");

clsBtn.forEach((clBtn) => {
  clBtn.addEventListener("click", () => {
    section.classList.remove("edit");
    section.classList.remove("logout");
    sectionOD.classList.remove("huy-order");
    popup9.classList.remove("huy-order");
    popup10.classList.remove("changeps");
  });
});

function renderListOD() {
  var user;
  var pass;
  for (let login of logins) {
    user = login.user;
    pass = login.pass;
  }

  let tableData = `
<thead>
<tr>
  <td>STT</td>
  <td>Mã đơn hàng</td>
  <td>Họ tên</td>
  <td>Mẫu xe</td>
  <td>Tên xe</td>
  <td>Ảnh</td>
  <td>Giá</td>
  <td>Thông tin liên hệ</td>
  <td>Hành động</td>
  <td>Trạng thái</td>
  <td>Note</td>

</tr>
</thead>
`;
  let ordUser;
  for (let order of orders) {
    if (user == order.user) {
      ordUser = order.user;
      // console.log(ordUser);
    }
  }
  var index = 0;
  if (user === ordUser) {
    for (let order of orders) {
      var gia = formatCash(String(`${order.carPrice}`));
      if (user == order.user && order.thongtindonhang == 1) {
        orderUSID = index;
        index++;
        tableData += `  <tbody>
      <tr>
        <td>${index}</td>
        <td id="madonhang">${order.madonhang}</td>

        <td id="name">${order.name}</td>
        <td id="mauxe">${order.carKind}</td>
        <td id="tenxe">${order.carName}</td>
        <td id="imgxe"><img src="${order.carIMGsrc}"  /></td>
        <td id="pricexe">${gia}</td>
        <td>
        <div id="addr">
        ${order.address}
        </div>
        <div id="email">
        ${order.email}
        </div>
        <div id="phone">
        ${order.phone}
        </div>
        </td>
        <td>
          <button class="huy-don-hang" id="huy-don" onclick="huydon('${order.madonhang}')" type="button" >Hủy</button>
        </td>
        <td>
        <button class="chuathanhtoan" id="huy-don" type="button" >Chưa thanh toán</button>
      </td>
        <td>${order.note}</td>
      </tr>
    </tbody>`;
      } else if (user == order.user && order.thongtindonhang == 0) {
        index++;
        tableData += `  <tbody>
      <tr>
        <td>${index}</td>
        <td id="madonhang">${order.madonhang}</td>
    
        <td id="name">${order.name}</td>
        <td id="mauxe">${order.carKind}</td>
        <td id="tenxe">${order.carName}</td>
        <td id="imgxe"><img src="${order.carIMGsrc}"  /></td>
        <td id="pricexe">${gia}</td>
        <td>
        <div id="addr">
        ${order.address}
        </div>
        <div id="email">
        ${order.email}
        </div>
        <div id="phone">
        ${order.phone}
        </div>
        </td>
       
        <td>
         
        </td>
        <td>
        <button class="xu-ly" id="xu-ly" style="display:inline-block " type="button">
          Đang xử lý yêu cầu hủy
        </button>
      </td>
        <td>${order.note}</td>
      </tr>
    </tbody>`;
      } else if (user == order.user && order.thongtindonhang == 2) {
        index++;
        tableData += `  <tbody>
      <tr>
        <td>${index}</td>
        <td id="madonhang">${order.madonhang}</td>
    
        <td id="name">${order.name}</td>
        <td id="mauxe">${order.carKind}</td>
        <td id="tenxe">${order.carName}</td>
        <td id="imgxe"><img src="${order.carIMGsrc}"  /></td>
        <td id="pricexe">${gia}</td>
        <td>
        <div id="addr">
        ${order.address}
        </div>
        <div id="email">
        ${order.email}
        </div>
        <div id="phone">
        ${order.phone}
        </div>
        </td>
        <td>
        <button class="xem-don-hang" id="xem-don" type="button">Xem</button>
      </td>
        <td>
        <button id="hoan-thanh"
        class="dahoanthanh" >Đã thanh toán</button>
        </td>
        <td>${order.note}</td>
      </tr>
    </tbody>`;
      }
    }
    tblOdr.innerHTML = tableData;
  } else {
    tableData += ` <tbody>
        <tr>
        <td colspan="11"style="font-size:20px; font-weight:bold; height: 80px">
        Không có đơn đăng ký nào!
          </td>
        </tr>
      </tbody>`;
    tblOdr.innerHTML = tableData;
  }
}
function huydon(madonhang) {
  JSON.parse(localStorage.getItem("orders")).map((data) => {
    if (data.madonhang == madonhang) {
      document.getElementById("index").value = data.madonhang;
    }
  });

  sectionOD.classList.add("huy-order");
  popup9.classList.add("huy-order");
}

function yeuCau() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  var mdh = document.getElementById("index").value;
  orders.map((data) => {
    if (data.madonhang == mdh) {
      data.thongtindonhang = 0;
    }
  });
  localStorage.setItem("orders", JSON.stringify(orders));
  renderListOD();
  // tblOdr.innerHTML = tableData;
  window.location.reload();
}
function dangxuat() {
  localStorage.removeItem("logins");
  window.location = "../html/dangnhap.html";
}
function truycapadmin() {
  window.location = "../html/admin.html";
}
function dangxuatus() {
  section.classList.add("logout");
  popup2.classList.add("logout");
}

const userWhitelist = document.querySelector(".uswl");
console.log(userWhitelist);
function renderWhiteList() {
  var user;
  for (let login of logins) {
    user = login.user;
  }
  let carWl = ``;
  let uswl;
  for (let whitelist of whitelists) {
    if (user == whitelist.user) {
      uswl = whitelist.user;
    }
  }
  if (user === uswl) {
    for (let whitelist of whitelists) {
      var giaxe = formatCash(String(`${whitelist.carPrice}`));
      if (user == whitelist.user) {
        carWl += `
        <div class="wlcar">
            <div class="img-car-wl">
              <img
                src="${whitelist.carPic}"
                alt=""
                width="400px"
                class="wlimg"
              />
            </div>
            <div class="wlnamecar">${whitelist.carName}</div>
            <div class="wlpricecar">${giaxe} VND</div>
            <div class="wlseries">${whitelist.carKind}</div>
            <button
              onclick="Car('${whitelist.idthiscar}')"
              class="truycap"
            >
              Truy cập
            </button>
          </div>
        `;
      }
    }
    userWhitelist.innerHTML = carWl;
  } else {
    carWl += `Bạn chưa thích sản phẩm nào`;
    userWhitelist.innerHTML = carWl;
  }
}
