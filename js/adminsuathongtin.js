const tableOrder = document.getElementById("table-order");
const tableCancel = document.getElementById("table-cancel");
const tableTT = document.getElementById("table-thanhtoan");
const tableUSTK = document.getElementById("table-nguoidung");
const tableADTK = document.getElementById("table-admin");
const tableSetting = document.getElementById("table-caidat");
const number_dki = document.getElementById("nb-dki");
const number_huy = document.getElementById("nb-huy");
const nutsua = document.getElementById("update-car-btn");
const nutthem = document.getElementById("add-car-btn");
const nutthemnv = document.getElementById("add-nv-btn");
const nutsuanv = document.getElementById("update-nv-btn");
const titlethemnv = document.getElementById("them-nv-title");
const titlesuanv = document.getElementById("sua-nv-title");
const titlethem = document.getElementById("them-car-title");
const titlesua = document.getElementById("sua-car-title");
const number_hoanthanh = document.getElementById("nb-hoanthanh");
const tableNV = document.getElementById("table-nhanvien");

//ham hien thi thong bao
let successmsg = `<i class="ri-checkbox-circle-line"></i> Thêm thành công`;
let successeditmsg = `<i class="ri-checkbox-circle-line"></i> Sửa thành công`;

let failmsg = `<i class="ri-error-warning-line"></i> Thêm không thành công, vui lòng điền đầy đủ thông tin`;
let faileditmsg = `<i class="ri-error-warning-line"></i> Sửa không thành công, vui lòng điền đầy đủ thông tin`;

let toastBox = document.getElementById("toastBox");
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");

  if (msg == failmsg) {
    toast.innerHTML = failmsg;
    toastBox.appendChild(toast);
    if (failmsg.includes("Thêm không thành công")) {
      toast.classList.add("failmsg");
    }
    setTimeout(() => {
      toast.classList.remove("failmsg");
    }, 5000);
    setTimeout(() => {
      toast.remove();
    }, 5200);
  } else {
    if (msg == successmsg) {
      toast.innerHTML = successmsg;
      toastBox.appendChild(toast);
      if (successmsg.includes("Thêm thành công")) {
        toast.classList.add("successmsg");
      }
      setTimeout(() => {
        toast.classList.remove("successmsg");
      }, 5000);
      setTimeout(() => {
        toast.remove();
      }, 5200);
    }
  }
  if (msg == faileditmsg) {
    toast.innerHTML = faileditmsg;
    toastBox.appendChild(toast);
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
      toastBox.appendChild(toast);
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
}
let listcar = localStorage.getItem("listcar")
  ? JSON.parse(localStorage.getItem("listcar"))
  : [];
let listNV = localStorage.getItem("listNV")
  ? JSON.parse(localStorage.getItem("listNV"))
  : [];
let xedabanvaxeconlai = localStorage.getItem("xedabanvaxeconlai")
  ? JSON.parse(localStorage.getItem("xedabanvaxeconlai"))
  : [];
const section = document.querySelector(".adm"), // themBtn = document.querySelector("#addnew"),
  suaBtn = document.querySelectorAll(".sua-thong-tin"),
  xoaBtn = document.querySelectorAll(".xoa"),
  popuped = document.querySelector("#pued"),
  popupedc = document.querySelector("#puedc"),
  popup2 = document.querySelector("#pu2"),
  popup3 = document.querySelector("#pu3"),
  popupht = document.querySelector("#puht"),
  logOutBtn = document.querySelector(".dang-xuat"),
  popupdel = document.querySelector("#pucfdel"),
  popupdelnv = document.querySelector("#pucfdelnv"),
  popupnv = document.querySelector("#punhanvien"),
  clsBtn = document.querySelectorAll(".dong-popup");
const tbcd = document.getElementById("table-caidat");
//Ham sinh ky tu ngau nhien
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
//ham format gia tien
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
//nut dang xuat
logOutBtn.addEventListener("click", () => {
  section.classList.add("admin");
  popup2.classList.add("admin");
});
//nut dong
clsBtn.forEach((clBtn) => {
  clBtn.addEventListener("click", () => {
    section.classList.remove("admin");
    popuped.classList.remove("admin");
    popup2.classList.remove("admin");
    popup3.classList.remove("admin");
    popupht.classList.remove("admin");
    popupedc.classList.remove("admin");
    popupdel.classList.remove("admin");
    popupdelnv.classList.remove("admin");

    popupnv.classList.remove("admin");
  });
});
//============ĐƠN HÀNG==========
//ham xoa
function deleteOD() {
  let orders = [];
  let mdh = document.getElementById("index").value;
  JSON.parse(localStorage.getItem("orders")).map((data) => {
    if (data.madonhang != mdh) {
      orders.push(data);
    }
  });
  localStorage.setItem("orders", JSON.stringify(orders));
  renderListCC();
}
function xoaslt(madonhang) {
  JSON.parse(localStorage.getItem("orders")).map((data) => {
    if (data.madonhang == madonhang) {
      console.log(madonhang);
      document.getElementById("index").value = data.madonhang;
    }
  });
  section.classList.add("admin");
  popup3.classList.add("admin");
}
//ham sua
function editOD(madonhang) {
  JSON.parse(localStorage.getItem("orders")).map((data) => {
    if (data.madonhang == madonhang) {
      console.log(madonhang);
      document.getElementById("index").value = data.madonhang;
      document.querySelector("#name-edit").value = data.name;
      document.querySelector("#address-edit").value = data.address;
      document.querySelector("#mail-edit").value = data.email;
      document.querySelector("#phone-edit").value = data.phone;
      document.querySelector("#note-edit").value = data.note;
    }
  });
  section.classList.add("admin");
  popuped.classList.add("admin");
}
function changeData() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  let mdh = document.getElementById("index").value;
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
  var name_edit = document.querySelector("#name-edit").value;
  var address_edit = document.querySelector("#address-edit").value;
  var email_edit = document.querySelector("#mail-edit").value;
  var phone_edit = document.querySelector("#phone-edit").value;
  var note_edit = document.querySelector("#note-edit").value;
  var acong = email_edit.indexOf("@");
  var kiemTraDT = isNaN(phone_edit);
  var daucham = email_edit.lastIndexOf(".");
  if (name_edit == "") {
    setError(document.querySelector("#name-edit"), "Tên không được để trống!");
    return false;
  } else if (name_edit.length < 2 || name_edit.length > 25) {
    setError(
      document.querySelector("#name-edit"),
      "Họ tên phải lớn hơn 2 và nhỏ hơn 25 ký tự"
    );
    return false;
  } else {
    setSuccess(document.querySelector("#name-edit"));
  }
  if (address_edit == "") {
    setError(
      document.querySelector("#address-edit"),
      "Địa chỉ không được để trống"
    );
    return false;
  } else {
    setSuccess(document.querySelector("#address-edit"));
  }
  if (email_edit == "") {
    setError(document.querySelector("#mail-edit"), "Email không được để trống");
    return false;
  } else if (
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > email_edit.length
  ) {
    setError(
      document.querySelector("#mail-edit"),
      "Email không đúng định dạng"
    );
    return false;
  } else {
    setSuccess(document.querySelector("#mail-edit"));
  }
  if (phone_edit == "") {
    setError(
      document.querySelector("#phone-edit"),
      "Số điện thoại không được để trống"
    );
    return false;
  } else if (kiemTraDT == true) {
    setError(
      document.querySelector("#phone-edit"),
      "Điện thoại phải ở định dạng số"
    );
    return false;
  } else if (phone_edit.length != 10) {
    setError(
      document.querySelector("#phone-edit"),
      "Số điện thoại định dạng 10 số"
    );
    return false;
  } else {
    setSuccess(document.querySelector("#phone-edit"));
  }
  orders.map((data) => {
    if (data.madonhang == mdh) {
      data.name = name_edit;
      data.address = address_edit;
      data.email = email_edit;
      data.phone = phone_edit;
      data.note = note_edit;
      data.thongtindonhang = 1;
    }
  });
  localStorage.setItem("orders", JSON.stringify(orders));
  popuped.classList.remove("admin");
  const inputcontrol = document.querySelectorAll(".input-control.success");
  inputcontrol.forEach((ipct) => {
    ipct.classList.remove("success");
  });
  renderList();
}
//ham thanh toan
function hoanthanh(madonhang) {
  JSON.parse(localStorage.getItem("orders")).map((data) => {
    if (data.madonhang == madonhang) {
      console.log(madonhang);
      document.getElementById("index").value = data.madonhang;
    }
  });
  section.classList.add("admin");
  popupht.classList.add("admin");
}
function dathanhtoan() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  let mdh = document.getElementById("index").value;
  var nameCar;
  var seriesCar;
  orders.map((data) => {
    if (data.madonhang == mdh) {
      data.thongtindonhang = 2;
      nameCar = data.carName;
      seriesCar = data.carKind;
    }
  });
  listcar.map((car) => {
    if (car.namecar == nameCar) {
      car.slx--;
      car.sldb++;
    }
  });

  localStorage.setItem("listcar", JSON.stringify(listcar));
  localStorage.setItem("orders", JSON.stringify(orders));
  renderList();
  renderListCP();
  slxdb();
  renderKHO();
}
//ham render danh sach don hang
function renderList() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
  let tableData = ``;
  tableData += `<thead>
                <tr>
                <td >STT</td>
                <td>Mã đơn hàng</td>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Mẫu xe</td>
                <td>Tên xe</td>
                <td>Ảnh</td>
                <td>Giá</td>
                <td>Địa chỉ</td>
                <td>Email</td>
                <td>Số điện thoại</td>
                <td>Note</td>
                <td>Hành động</td>
                <td>Thanh toán</td>
                </tr>
                </thead>`;
  var index = 0;
  var count = 0;
  for (let order of orders) {
    var giaxe = formatCash(String(`${order.carPrice}`));
    if (order.thongtindonhang == 1) {
      count++;
    }
    number_dki.innerHTML = count;
    if (order.thongtindonhang == 1) {
      index++;
      tableData += `  <tbody>
        <tr>
        <td>${index}</td>
        <td>${order.madonhang}</td>
        <td>${order.user}</td>
        <td>${order.name}</td>
        <td>${order.carKind}</td>
        <td>${order.carName}</td>
        <td><img src="${order.carIMGsrc}"  ></td>
        <td>${giaxe}</td>
        <td>${order.address}</td>
        <td>${order.email}</td>
        <td>${order.phone}</td>
        <td>${order.note}</td>
        <td>
        <button id="sua-thong-tin"
        style="width: 40px"
        class="sua-thong-tin" onclick="editOD('${order.madonhang}')" >Edit </button>
        </td>
        <td>
        <button id="hoan-thanh"
        style="width: 40px"
        class="hoanthanh" onclick="hoanthanh('${order.madonhang}')" ><i class="ri-check-double-line"></i> </button>
        </td>
      </tr>
    </tbody>`;
    }
  }
  if (count == 0) {
    tableData += ` <tbody>
        <tr>
        <td colspan="13"style="font-size:20px; font-weight:bold; height: 80px">
        Không có đơn đăng ký nào!
          </td>
        </tr>
      </tbody>`;
  }
  tableOrder.innerHTML = tableData;
}
//ham render danh sach don yeu cau huy
function renderListCC() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];

  let tableData = ``;
  tableData += `<thead>
                <tr>
                <td >STT</td>
                <td>Mã đơn hàng</td>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Mẫu xe</td>
                <td>Tên xe</td>
                <td>Ảnh</td>
                <td>Giá</td>
                <td>Địa chỉ</td>
                <td>Email</td>
                <td>Số điện thoại</td>
                <td>Note</td>
                <td>Hành động</td>
                </tr>
                </thead>`;
  var index = 0;
  var count = 0;
  for (let order of orders) {
    var giaxe = formatCash(String(`${order.carPrice}`));
    if (order.thongtindonhang == 0) {
      count++;
    }
    number_huy.innerHTML = count;
    if (order.thongtindonhang == 0) {
      index++;
      tableData += `  <tbody>
        <tr>
        <td>${index}</td>
        <td>${order.madonhang}</td>
        <td>${order.user}</td>
        <td>${order.name}</td>
        <td>${order.carKind}</td>
        <td>${order.carName}</td>
        <td><img src="${order.carIMGsrc}"  ></td>
        <td>${giaxe}</td>
        <td>${order.address}</td>
        <td>${order.email}</td>
        <td>${order.phone}</td>
        <td>${order.note}</td>
        <td>
        <button class="xoa" style="width: 60px" onclick="xoaslt('${order.madonhang}')" >Xóa </button>
        </td>
      </tr>
    </tbody>`;
    }
  }
  if (count == 0) {
    tableData += ` <tbody>
        <tr>
        <td colspan="12"style="font-size:20px; font-weight:bold; height: 80px">
        Không có yêu cầu hủy nào!
          </td>
        </tr>
      </tbody>`;
  }
  tableCancel.innerHTML = tableData;
}
//ham render danh sach don da thanh toan
function renderListCP() {
  let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];

  let tableData = ``;
  tableData += `<thead>
                <tr>
                <td>STT</td>
                <td>Mã đơn hàng</td>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Mẫu xe</td>
                <td>Tên xe</td>
                <td>Ảnh</td>
                <td>Giá</td>
                <td>Địa chỉ</td>
                <td>Email</td>
                <td>Số điện thoại</td>
                <td>Note</td>
                </tr>
                </thead>`;
  var index = 0;
  var count = 0;
  for (let order of orders) {
    var giaxe = formatCash(String(`${order.carPrice}`));
    if (order.thongtindonhang == 2) {
      count++;
    }
    number_hoanthanh.innerHTML = count;
    if (order.thongtindonhang == 2) {
      index++;
      tableData += `  <tbody>
        <tr>
        <td>${index}</td>
        <td>${order.madonhang}</td>
        <td>${order.user}</td>
        <td>${order.name}</td>
        <td>${order.carKind}</td>
        <td>${order.carName}</td>
        <td><img src="${order.carIMGsrc}"  ></td>
        <td>${giaxe}</td>
        <td>${order.address}</td>
        <td>${order.email}</td>
        <td>${order.phone}</td>
        <td>${order.note}</td>
      
      </tr>
    </tbody>`;
    }
  }
  if (count == 0) {
    tableData += ` <tbody>
        <tr>
        <td colspan="11"style="font-size:20px; font-weight:bold; height: 80px">
        Không có đơn hoàn thành nào!
          </td>
        </tr>
      </tbody>`;
  }
  tableTT.innerHTML = tableData;
  chart();
}
/*tai khoan*/
//ham render danh sach tai khoan nguoi dung
function renderListAccount() {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  let tableData = ``;
  tableData += `<thead>
                <tr>
                <td>STT</td>
                <td>ID</td>
                <td>Avatar</td>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>Ngày sinh</td>
                <td>Mật khẩu</td>
                <td>Đã xác minh</td>
                </tr>
                </thead>`;
  var index = 0;
  var count = 0;
  for (let account of accounts) {
    count++;
    if (account.chucvu == "khachhang") {
      index++;
      tableData += `  <tbody>
      <tr>
      <td>${index}</td>
      <td>${account.id}</td>
      <td><img style="border-radius:50%" src="${account.avtSrc}" width="100px"></td>
      <td>${account.user}</td>
      <td>${account.name}</td>
      <td>${account.email}</td>
      <td>${account.ngaysinh}</td>
      <td>*******************</td>
      <td>${account.tttk}</td>
      </tr>
    </tbody>`;
    }
  }
  if (count == 0) {
    tableData += ` <tbody>
        <tr>
        <td colspan="9"style="font-size:20px; font-weight:bold; height: 80px">
        Chưa có người dùng nào!
          </td>
        </tr>
      </tbody>`;
  }
  tableUSTK.innerHTML = tableData;
}
//ham render danh sach tai khoan nhan vien
function renderListAdminAccount() {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  let tableData = ``;
  tableData += `<thead>
                <tr>
                <td>STT</td>
                <td>ID</td>
                <td>Avatar</td>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>Ngày sinh</td>
                <td>Mật khẩu</td>
                <td>Đã xác minh</td>
                </tr>
                </thead>`;
  var index = 0;
  for (let account of accounts) {
    if (account.chucvu == "quanly") {
      index++;
      tableData += `  <tbody>
      <tr>
      <td>${index}</td>
      <td>${account.id}</td>
      <td><img style="border-radius:50%" src="${account.avtSrc}" width="100px"></td>
      <td>${account.user}</td>
      <td>${account.name}</td>
      <td>${account.email}</td>
      <td>${account.ngaysinh}</td>
      <td>*******************</td>
      <td>${account.tttk}</td>
      </tr>
    </tbody>`;
    }
  }
  tableADTK.innerHTML = tableData;
}
//ham render cai dat
function renderSetting() {
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  let logins = localStorage.getItem("logins")
    ? JSON.parse(localStorage.getItem("logins"))
    : [];
  var user;
  for (let login of logins) {
    user = login.user;
  }

  let data = ``;
  for (let account of accounts) {
    if (user == account.user) {
      data += `<div>Họ tên: <span id="namead">${account.name}</span></div>
      <div>
        <img width="250px" src="${account.avtSrc}" alt="" id="avtad" />
      </div>
      <div>Tài khoản: <span id="tkad">${account.user}</span></div>
      <div>Email: <span id="emailad">${account.email}</span></div>
      <div>Ngày sinh: <span id="nsinhad">${account.ngaysinh}</span></div>
      <div>Đã xác minh: <span id="dxmhad">${account.tttk}</span></div>
      <div>
      <button class="sua-thong-tin" width:"400px" onclick="truycapuser()" type="button">Truy cập với tư cách người dùng</button>
      </div>
      `;
    }
  }
  tbcd.innerHTML = data;
}
//ham truy cap nguoi dung cho admin
function truycapuser() {
  window.location = "../html/user.html";
}
//================================================BIEU DO===========================================/
//ham loc gia tri trung lap trong series
function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//ham hien thi bieu do
function chart() {
  let accessAcs = localStorage.getItem("accessAcs")
    ? JSON.parse(localStorage.getItem("accessAcs"))
    : [];
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  var truycap = 0;
  const nbac = document.querySelector(".numbers.access");
  for (let accessAc of accessAcs) {
    if (accessAc.user) {
      truycap++;
    }
  }
  nbac.innerHTML = truycap;
  var slxdb = 0;
  const sxdb = document.querySelector(".numbers.car-sell");
  var thunhap = 0;
  const thunhapinner = document.querySelector(".numbers.earning");

  listcar.map((data) => {
    if (data.sldb > 0) {
      slxdb += data.sldb;
      thunhap =
        thunhap +
        Math.round((parseFloat(data.pricecar) + Number.EPSILON) * 100) / 100;
    }
  });
  sxdb.innerHTML = slxdb;
  var thunhapafterformat = formatCash(String(thunhap));
  thunhapinner.innerHTML = thunhapafterformat;
  let labelsCar = [];
  let series = [];
  listcar.map((data) => {
    labelsCar.push(data.namecar);
    series.push(data.seriescar);
  });
  let series1 = unique(series);
  let dataSeries = [];
  let sldbPERCAR = [];
  labelsCar.map((data1) => {
    listcar.map((data) => {
      if (data1 == data.namecar) {
        sldbPERCAR.push(data.sldb);
      }
    });
  });
  var d1 = 0,
    d2 = 0,
    d3 = 0;
  series1.map((data1) => {
    listcar.map((data) => {
      if (data1 == data.seriescar) {
        if (data.seriescar == "A Series") {
          d1 += data.sldb++;
        }
        if (data.seriescar == "e-tron Series") {
          d2 += data.sldb++;
        }
        if (data.seriescar == "Q Series") {
          d3 += data.sldb++;
        }
      }
    });
  });
  dataSeries.push(d1, d2, d3);
  const boxchart = document.querySelector(".box.chart");
  let canva = `
  <h2>Số lượng xe bán ra mỗi xe</h2>
  <canvas id="myChart"></canvas>`;
  boxchart.innerHTML = canva;
  const boxearning = document.querySelector(".box.earning");
  let canvae = `
  <h2>Số lượng xe bán ra mỗi loại xe</h2>
  <canvas id="earning"></canvas>`;
  boxearning.innerHTML = canvae;

  const ctx = document.getElementById("myChart");
  const earning = document.getElementById("earning");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labelsCar,
      datasets: [
        {
          label: "Số xe",
          data: sldbPERCAR,
          borderWidth: 1,
          borderColor: [
            "RGBA( 0, 0, 128, 1 )",
            "RGBA( 139, 0, 0, 1 )",
            "RGBA( 0, 255, 255, 1 )",
            "RGBA( 127, 255, 212, 1 )",
            "RGBA( 153, 50, 204, 1)",
            "RGBA( 255, 105, 180, 1 )",
            "RGBA( 255, 20, 147, 1)",
            "RGBA( 0, 191, 255, 1)",
            "RGBA( 255, 215, 0, 1 )",
            "RGBA( 173, 255, 47, 1 )",
            "RGBA( 255, 0, 0, 1 )",
            "RGBA( 0, 255, 127, 1 )",
            "RGBA( 70, 130, 180, 1 )",
            "rgba(255,103,110,1)",
          ],
          backgroundColor: [
            "RGBA( 0, 0, 128, 0.1 )",
            "RGBA( 139, 0, 0, 0.1 )",
            "RGBA( 0, 255, 255, 0.1 )",
            "RGBA( 127, 255, 212, 0.1 )",
            "RGBA( 153, 50, 204, 0.1)",
            "RGBA( 255, 105, 180,0.1 )",
            "RGBA( 255, 20, 147, 0.1)",
            "RGBA( 0, 191, 255, 0.1)",
            "RGBA( 255, 215, 0, 0.1 )",
            "RGBA( 173, 255, 47, 0.1 )",
            "RGBA( 255, 0, 0, 0.1 )",
            "RGBA( 0, 255, 127, 0.1 )",
            "RGBA( 70, 130, 180, 0.1 )",
            "rgba(255,103,110,0.1)",
          ],
        },
      ],
    },
    options: {
      reponsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  new Chart(earning, {
    type: "bar",
    data: {
      labels: series1,
      datasets: [
        {
          label: "Số lượng xe bán ra mỗi series",
          data: dataSeries,
          borderWidth: 1,
          borderColor: [
            "RGBA( 0, 128, 128,1 )",
            "RGBA( 255, 99, 71, 1)",
            "RGBA( 255, 255, 0, 1)",
          ],
          backgroundColor: [
            "RGBA( 0, 128, 128,0.1 )",
            "RGBA( 255, 99, 71, 0.1)",
            "RGBA( 255, 255, 0, 0.1)",
          ],
        },
      ],
    },
    options: {
      reponsive: true,
    },
  });
}

//=============KHO XE===============//
//ham upload anh
const inputFile1 = document.querySelector("#file1"),
  inputFile2 = document.querySelector("#file2"),
  inputFile3 = document.querySelector("#file3"),
  inputFile4 = document.querySelector("#file4"),
  inputFile5 = document.querySelector("#file5"),
  inputFile6 = document.querySelector("#file6"),
  inputFile7 = document.querySelector("#file7"),
  inputFile8 = document.querySelector("#file8"),
  imgArea1 = document.querySelector("#img-1"),
  imgArea2 = document.querySelector("#img-2"),
  imgArea3 = document.querySelector("#img-3"),
  imgArea4 = document.querySelector("#img-4"),
  imgArea5 = document.querySelector("#img-5"),
  imgArea6 = document.querySelector("#img-6"),
  imgArea7 = document.querySelector("#img-7"),
  imgArea8 = document.querySelector("#img-8");
inputFile1.addEventListener("change", function () {
  const image = this.files[0];
  // console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG1 = imgArea1.querySelectorAll("img");
    allIMG1.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea1.appendChild(img);
    imgArea1.classList.add("active");
    imgArea1.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile2.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG2 = imgArea2.querySelectorAll("img");
    allIMG2.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea2.appendChild(img);
    imgArea2.classList.add("active");
    imgArea2.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile3.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG3 = imgArea3.querySelectorAll("img");
    allIMG3.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea3.appendChild(img);
    imgArea3.classList.add("active");
    imgArea3.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile4.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG4 = imgArea4.querySelectorAll("img");
    allIMG4.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea4.appendChild(img);
    imgArea4.classList.add("active");
    imgArea4.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile5.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG5 = imgArea5.querySelectorAll("img");
    allIMG5.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea5.appendChild(img);
    imgArea5.classList.add("active");
    imgArea5.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile6.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG6 = imgArea6.querySelectorAll("img");
    allIMG6.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea6.appendChild(img);
    imgArea6.classList.add("active");
    imgArea6.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile7.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG7 = imgArea7.querySelectorAll("img");
    allIMG7.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea7.appendChild(img);
    imgArea7.classList.add("active");
    imgArea7.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
inputFile8.addEventListener("change", function () {
  const image = this.files[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMG8 = imgArea8.querySelectorAll("img");
    allIMG8.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea8.appendChild(img);
    imgArea8.classList.add("active");
    imgArea8.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
//ham them xe
function ADDNEWCAR() {
  nutsua.style.display = "none";
  section.classList.add("admin");
  popupedc.classList.add("admin");
  nutthem.style.display = "block";
  titlesua.style.display = "none";
  titlethem.style.display = "block";
}
function themCAR() {
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
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  var idcar = generateString(4);
  var namecar = document.querySelector("#name-car").value;
  var slx = document.querySelector("#slx-car").value;
  var sldb = 0;
  var seriescar = document.querySelector("#kind-car").value;
  var pricecar = document.querySelector("#price-car").value;
  var img1car = document.querySelector("#img-1").dataset.img;
  var img2car = document.querySelector("#img-2").dataset.img;
  var img1 = document.querySelector("#img-3").dataset.img;
  var img2 = document.querySelector("#img-4").dataset.img;
  var img3 = document.querySelector("#img-5").dataset.img;
  var img4 = document.querySelector("#img-6").dataset.img;
  var img5 = document.querySelector("#img-7").dataset.img;
  var img6 = document.querySelector("#img-8").dataset.img;
  var namecolor1 = document.querySelector("#name-color-1").value;
  var namecolor2 = document.querySelector("#name-color-2").value;
  var namecolor3 = document.querySelector("#name-color-3").value;
  var namecolor4 = document.querySelector("#name-color-4").value;
  var namecolor5 = document.querySelector("#name-color-5").value;
  var namecolor6 = document.querySelector("#name-color-6").value;
  var nametag1 = document.querySelector("#name-tag-1").value;
  var nametag2 = document.querySelector("#name-tag-2").value;
  var nametag3 = document.querySelector("#name-tag-3").value;
  var nametag4 = document.querySelector("#name-tag-4").value;
  var nametag5 = document.querySelector("#name-tag-5").value;
  var nametag6 = document.querySelector("#name-tag-6").value;
  if (namecar == "") {
    setError(document.querySelector("#name-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-car"));
  }
  if (pricecar == "") {
    setError(document.querySelector("#price-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#price-car"));
  }
  if (slx == "") {
    setError(document.querySelector("#slx-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#slx-car"));
  }
  if (namecolor1 == "") {
    setError(document.querySelector("#name-color-1"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-1"));
  }
  if (namecolor2 == "") {
    setError(document.querySelector("#name-color-2"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-2"));
  }
  if (namecolor3 == "") {
    setError(document.querySelector("#name-color-3"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-3"));
  }
  if (namecolor4 == "") {
    setError(document.querySelector("#name-color-4"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-4"));
  }
  if (namecolor5 == "") {
    setError(document.querySelector("#name-color-5"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-5"));
  }
  if (namecolor6 == "") {
    setError(document.querySelector("#name-color-6"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-6"));
  }
  if (
    namecar == "" ||
    slx == "" ||
    seriescar == 0 ||
    !img1car ||
    !img2car ||
    !img1 ||
    !img2 ||
    !img3 ||
    !img4 ||
    !img5 ||
    !img6 ||
    namecolor1 == "" ||
    namecolor2 == "" ||
    namecolor3 == "" ||
    namecolor4 == "" ||
    namecolor5 == "" ||
    namecolor6 == ""
  ) {
    showToast(failmsg);
    return false;
  } else {
    showToast(successmsg);
    let car = {
      sldb: sldb,
      idcar: idcar,
      namecar: namecar,
      slx: Number(slx),
      pricecar: Number(pricecar),
      seriescar: seriescar,
      img1car: `${img1car}`,
      img2car: `${img2car}`,
      img1: `${img1}`,
      img2: `${img2}`,
      img3: `${img3}`,
      img4: `${img4}`,
      img5: `${img5}`,
      img6: `${img6}`,
      namecolor1: namecolor1,
      namecolor2: namecolor2,
      namecolor3: namecolor3,
      namecolor4: namecolor4,
      namecolor5: namecolor5,
      namecolor6: namecolor6,
      nametag1: nametag1,
      nametag2: nametag2,
      nametag3: nametag3,
      nametag4: nametag4,
      nametag5: nametag5,
      nametag6: nametag6,
    };

    console.log(car);
    listcar.push(car);
    localStorage.setItem("listcar", JSON.stringify(listcar));
    section.classList.remove("admin");
    popupedc.classList.remove("admin");
  }
  slxdb();
  renderKHO();
  resetINPUT();
  chart();
}

//ham sua xe
function xoaCAR(id) {
  document.querySelector("#cf-del").value = id;
  section.classList.add("admin");
  popupdel.classList.add("admin");
}
function xoaCARINFO() {
  let listcar = [];
  var idcarthis = document.querySelector("#cf-del").value;
  JSON.parse(localStorage.getItem("listcar")).map((car) => {
    if (car.idcar != idcarthis) {
      listcar.push(car);
    }
  });
  localStorage.setItem("listcar", JSON.stringify(listcar));
  renderKHO();
  chart();
}
//ham sua xe
function suaCAR(id) {
  nutthem.style.display = "none";
  nutsua.style.display = "block";
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  listcar.map((car) => {
    if (car.idcar == id) {
      console.log(car.idcar);
      document.querySelectorAll(".img-area").forEach((img) => {
        img.classList.add("active");
      });
      document.querySelector("#name-car").value = car.namecar;
      document.querySelector("#slx-car").value = car.slx;
      document.querySelector("#kind-car").innerHTML = `${car.seriescar}`;
      document.querySelector("#kind-car").value = car.seriescar;
      document.querySelector("#price-car").value = car.pricecar;
      document.querySelector("#img-1").dataset.img = car.img1car.substring(
        0,
        car.img1car.length
      );
      document.querySelector("#img-2").dataset.img = car.img2car.substring(
        0,
        car.img2car.length
      );
      document.querySelector("#img-3").dataset.img = car.img1.substring(
        0,
        car.img1.length
      );
      document.querySelector("#img-4").dataset.img = car.img2.substring(
        0,
        car.img2.length
      );
      document.querySelector("#img-5").dataset.img = car.img3.substring(
        0,
        car.img3.length
      );
      document.querySelector("#img-6").dataset.img = car.img4.substring(
        0,
        car.img4.length
      );
      document.querySelector("#img-7").dataset.img = car.img5.substring(
        0,
        car.img5.length
      );
      document.querySelector("#img-8").dataset.img = car.img6.substring(
        0,
        car.img6.length
      );

      document.querySelector("#anh1").src = car.img1car;
      document.querySelector("#anh2").src = car.img2car;
      document.querySelector("#anh3").src = car.img1;
      document.querySelector("#anh4").src = car.img2;
      document.querySelector("#anh5").src = car.img3;
      document.querySelector("#anh6").src = car.img4;
      document.querySelector("#anh7").src = car.img5;
      document.querySelector("#anh8").src = car.img6;
      document.querySelector("#name-color-1").value = car.namecolor1;
      document.querySelector("#name-color-2").value = car.namecolor2;
      document.querySelector("#name-color-3").value = car.namecolor3;
      document.querySelector("#name-color-4").value = car.namecolor4;
      document.querySelector("#name-color-5").value = car.namecolor5;
      document.querySelector("#name-color-6").value = car.namecolor6;
    }
  });
  document.querySelector("#index-this-car").value = id;
  section.classList.add("admin");
  popupedc.classList.add("admin");
  titlesua.style.display = "block";
  titlethem.style.display = "none";
}

function suaCARINFO() {
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
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];
  var namecar = document.querySelector("#name-car").value;
  var slx = document.querySelector("#slx-car").value;
  var seriescar = document.querySelector("#kind-car").value;
  var pricecar = document.querySelector("#price-car").value;
  var img1car = document.querySelector("#img-1").dataset.img;
  var img2car = document.querySelector("#img-2").dataset.img;
  var img1 = document.querySelector("#img-3").dataset.img;
  var img2 = document.querySelector("#img-4").dataset.img;
  var img3 = document.querySelector("#img-5").dataset.img;
  var img4 = document.querySelector("#img-6").dataset.img;
  var img5 = document.querySelector("#img-7").dataset.img;
  var img6 = document.querySelector("#img-8").dataset.img;
  var namecolor1 = document.querySelector("#name-color-1").value;
  var namecolor2 = document.querySelector("#name-color-2").value;
  var namecolor3 = document.querySelector("#name-color-3").value;
  var namecolor4 = document.querySelector("#name-color-4").value;
  var namecolor5 = document.querySelector("#name-color-5").value;
  var namecolor6 = document.querySelector("#name-color-6").value;
  var nametag1 = document.querySelector("#name-tag-1").value;
  var nametag2 = document.querySelector("#name-tag-2").value;
  var nametag3 = document.querySelector("#name-tag-3").value;
  var nametag4 = document.querySelector("#name-tag-4").value;
  var nametag5 = document.querySelector("#name-tag-5").value;
  var nametag6 = document.querySelector("#name-tag-6").value;
  var idthiscar = document.querySelector("#index-this-car").value;

  if (namecar == "") {
    setError(document.querySelector("#name-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-car"));
  }
  if (pricecar == "") {
    setError(document.querySelector("#price-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#price-car"));
  }
  if (slx == "") {
    setError(document.querySelector("#slx-car"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#slx-car"));
  }
  if (namecolor1 == "") {
    setError(document.querySelector("#name-color-1"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-1"));
  }
  if (namecolor2 == "") {
    setError(document.querySelector("#name-color-2"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-2"));
  }
  if (namecolor3 == "") {
    setError(document.querySelector("#name-color-3"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-3"));
  }
  if (namecolor4 == "") {
    setError(document.querySelector("#name-color-4"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-4"));
  }
  if (namecolor5 == "") {
    setError(document.querySelector("#name-color-5"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-5"));
  }
  if (namecolor6 == "") {
    setError(document.querySelector("#name-color-6"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-color-6"));
  }
  if (
    namecar == "" ||
    slx == "" ||
    seriescar == 0 ||
    !img1car ||
    !img2car ||
    !img1 ||
    !img2 ||
    !img3 ||
    !img4 ||
    !img5 ||
    !img6 ||
    namecolor1 == "" ||
    namecolor2 == "" ||
    namecolor3 == "" ||
    namecolor4 == "" ||
    namecolor5 == "" ||
    namecolor6 == ""
  ) {
    showToast(faileditmsg);
    return false;
  }
  listcar.map((car) => {
    if (car.idcar == idthiscar) {
      car.namecar = namecar;
      car.slx = Number(slx);
      car.seriescar = seriescar;
      car.pricecar = Number(pricecar);
      car.img1car = `${img1car}`;
      car.img2car = `${img2car}`;
      car.img1 = `${img1}`;
      car.img2 = `${img2}`;
      car.img3 = `${img3}`;
      car.img4 = `${img4}`;
      car.img5 = `${img5}`;
      car.img6 = `${img6}`;
      car.namecolor1 = namecolor1;
      car.namecolor2 = namecolor2;
      car.namecolor3 = namecolor3;
      car.namecolor4 = namecolor4;
      car.namecolor5 = namecolor5;
      car.namecolor6 = namecolor6;
      car.nametag1 = nametag1;
      car.nametag2 = nametag2;
      car.nametag3 = nametag3;
      car.nametag4 = nametag4;
      car.nametag5 = nametag5;
      car.nametag6 = nametag6;
    }
  });
  localStorage.setItem("listcar", JSON.stringify(listcar));
  resetINPUT();
  renderKHO();
  chart();
  slxdb();
  showToast(successeditmsg);
  section.classList.remove("admin");
  popupedc.classList.remove("admin");
}
//ham render danh sach xe trong kho
function renderKHO() {
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];

  const xeAcontain = document.querySelector(".xe-container-sll.Aseries");
  const xeecontain = document.querySelector(".xe-container-sll.e-tronseries");
  const xeQcontain = document.querySelector(".xe-container-sll.Qseries");
  let xeA = ``;
  let xeE = ``;
  let xeQ = ``;
  var count = 0;
  for (let car of listcar) {
    if (car.seriescar == "A Series" && car.slx > 0) {
      count++;
      xeA += `  
      <div class="admin-sll-car">
        <div class="carsll">
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>

        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    } else if (car.seriescar == "A Series" && car.slx == 0) {
      count++;
      xeA += `  
      <div class="admin-sll-car">   
        <div class="carsll">
          <img
          src="../audi/hethang.png"
          width="400px"
          class="sold-out-sll"
          alt=""
          />
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>

        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    }
    if (car.seriescar == "e-tron Series" && car.slx > 0) {
      count++;
      xeE += `  
      <div class="admin-sll-car">
        <div class="carsll">
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>
        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    } else if (car.seriescar == "e-tron Series" && car.slx == 0) {
      count++;
      xeE += `  
      <div class="admin-sll-car">
        <div class="carsll">
          <img
          src="../audi/hethang.png"
          width="400px"
          class="sold-out-sll"
          alt=""
          />
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>
        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    }
    if (car.seriescar == "Q Series" && car.slx > 0) {
      count++;
      xeQ += `  
      <div class="admin-sll-car">
        <div class="carsll">
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>


        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    } else if (car.seriescar == "Q Series" && car.slx == 0) {
      count++;
      xeQ += `  
      <div class="admin-sll-car">
        <div class="carsll">
          <img
          src="../audi/hethang.png"
          width="400px"
          class="sold-out-sll"
          alt=""
          />
          <img
            src="${car.img1car}"
            width="400px"
            class="img-sll"
            alt=""
          />
        </div>
        <div class="tenxe-sll">${car.namecar}</div>
        <div>
          Số lượng trong kho: <span class="soluong-sll">${car.slx}</span>
        </div>
        <div>
        <button class="suarw" onclick=suaCAR('${car.idcar}')>Sửa</button>


        <button class="xoas" onclick="xoaCAR('${car.idcar}')">Xóa</button>
        </div>
      </div>
     
     `;
    }
  }
  if (count == 0) {
    xeQ += `
    <div style="font-size:20px; font-weight:bold; height: 80px">
    Chưa xe nào!
      </div>
  `;
    xeA += `
      <div style="font-size:20px; font-weight:bold; height: 80px">
      Chưa xe nào!
        </div>
    `;
    xeE += `
    <div style="font-size:20px; font-weight:bold; height: 80px">
    Chưa xe nào!
      </div>
    `;
  }

  xeAcontain.innerHTML = xeA;
  xeecontain.innerHTML = xeE;
  xeQcontain.innerHTML = xeQ;
}
//ham select
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
});
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    let valueselectedOption = option.querySelector(".option-text").value;
    sBtn_text.innerText = selectedOption;
    sBtn_text.value = valueselectedOption;
    optionMenu.classList.remove("active");
  });
});

//ham reset nhap vao
function resetINPUT() {
  document.querySelector("#name-car").value = "";
  document.querySelector("#slx-car").value = "";
  document.querySelector("#kind-car").innerHTML = "Chọn mẫu xe";
  document.querySelector("#kind-car").value = 0;
  document.querySelector("#price-car").value = "";
  document.querySelector("#img-1").dataset.img = "";
  document.querySelector("#img-2").dataset.img = "";
  document.querySelector("#img-3").dataset.img = "";
  document.querySelector("#img-4").dataset.img = "";
  document.querySelector("#img-5").dataset.img = "";
  document.querySelector("#img-6").dataset.img = "";
  document.querySelector("#img-7").dataset.img = "";
  document.querySelector("#img-8").dataset.img = "";
  document.querySelector("#name-color-1").value = "";
  document.querySelector("#name-color-2").value = "";
  document.querySelector("#name-color-3").value = "";
  document.querySelector("#name-color-4").value = "";
  document.querySelector("#name-color-5").value = "";
  document.querySelector("#name-color-6").value = "";
  document.querySelector("#name-tag-1").value = "";
  document.querySelector("#name-tag-2").value = "";
  document.querySelector("#name-tag-3").value = "";
  document.querySelector("#name-tag-4").value = "";
  document.querySelector("#name-tag-5").value = "";
  document.querySelector("#name-tag-6").value = "";
  const inputcontrol = document.querySelectorAll(".input-control.success");
  const inputcontrolER = document.querySelectorAll(".input-control.error");

  inputcontrol.forEach((ipct) => {
    ipct.classList.remove("success");
  });
  inputcontrolER.forEach((ipct) => {
    ipct.classList.remove("error");
    const errorDisplay = ipct.querySelector(".error");
    errorDisplay.innerText = "";
  });
}
//======================NHAN VIEN===================
//ham select
const optionMenuNV = document.querySelector(".select-menu-nv"),
  selectBtnNV = optionMenuNV.querySelector(".select-btn-nv"),
  optionsNV = optionMenuNV.querySelectorAll(".option-nv"),
  sBtn_textNV = optionMenuNV.querySelector(".sBtn-text-nv");
selectBtnNV.addEventListener("click", () => {
  optionMenuNV.classList.toggle("active");
});
optionsNV.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text-nv").innerText;
    let valueselectedOption = option.querySelector(".option-text-nv").value;
    sBtn_textNV.innerText = selectedOption;
    sBtn_textNV.value = valueselectedOption;
    optionMenuNV.classList.remove("active");
  });
});
const optionMenuPB = document.querySelector(".select-menu-phongban"),
  selectBtnPB = optionMenuPB.querySelector(".select-btn-phongban"),
  optionsPB = optionMenuPB.querySelectorAll(".option-phongban"),
  sBtn_textPB = optionMenuPB.querySelector(".sBtn-text-phongban");
selectBtnPB.addEventListener("click", () => {
  optionMenuPB.classList.toggle("active");
});
optionsPB.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(
      ".option-text-phongban"
    ).innerText;
    let valueselectedOption = option.querySelector(
      ".option-text-phongban"
    ).value;
    sBtn_textPB.innerText = selectedOption;
    sBtn_textPB.value = valueselectedOption;
    optionMenuPB.classList.remove("active");
  });
});
const inputFileNV = document.querySelector("#file-nv"),
  imgAreaNV = document.querySelector("#img-nv");

inputFileNV.addEventListener("change", function () {
  const image = this.files[0];
  // console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allIMGNV = imgAreaNV.querySelectorAll("img");
    allIMGNV.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgAreaNV.appendChild(img);
    imgAreaNV.classList.add("active");
    imgAreaNV.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
//ham them nhan vien
function ADDNEWNV() {
  section.classList.add("admin");
  popupnv.classList.add("admin");
  nutsuanv.style.display = "none";
  titlesuanv.style.display = "none";
  nutthemnv.style.display = "block";
  titlethemnv.style.display = "block";
}
function themNV() {
  let listNV = localStorage.getItem("listNV")
    ? JSON.parse(localStorage.getItem("listNV"))
    : [];
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
  var idnv = generateString(3);
  var namenv = document.querySelector("#name-nv").value;
  var bornnv = document.querySelector("#born-nv").value;
  var emailnv = document.querySelector("#email-nv").value;
  var chucvunv = document.querySelector("#kind-nv").value;
  var sdtnv = document.querySelector("#sdt-nv").value;
  var phongbannv = document.querySelector("#kind-phongban").value;
  var anhnv = document.querySelector("#img-nv").dataset.img;
  var acong = emailnv.indexOf("@");
  var daucham = emailnv.lastIndexOf(".");
  var born = new Date(bornnv);
  var now = new Date();
  var kiemTraDT = isNaN(sdtnv);

  var year = now.getFullYear() - born.getFullYear();
  if (namenv == "") {
    setError(document.querySelector("#name-nv"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-nv"));
  }
  if (
    year < 18 ||
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear() ||
    (year == 18 && born.getMonth() > now.getMonth())
  ) {
    console.log(year);
    setError(document.querySelector("#born-nv"), "Tuổi không hợp lệ!");
  } else if (bornnv == "") {
    setError(document.querySelector("#born-nv"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#born-nv"));
  }
  if (emailnv == "") {
    setError(document.querySelector("#email-nv"), "Không được để trống");
  } else if (acong < 1 || daucham < acong + 2 || daucham + 2 > emailnv.length) {
    setError(document.querySelector("#email-nv"), "Không đúng định dạng");
  } else {
    setSuccess(document.querySelector("#email-nv"));
  }
  if (sdtnv == "") {
    setError(document.querySelector("#sdt-nv"), "Không được để trống");
  } else if (sdtnv.length != 10) {
    setError(document.querySelector("#sdt-nv"), "Điện thoại định dạng 10 số");
  } else if (kiemTraDT == true) {
    setError(
      document.querySelector("#sdt-nv"),
      "Điện thoại phải ở định dạng số"
    );
  } else {
    setSuccess(document.querySelector("#sdt-nv"));
  }
  if (
    namenv == "" ||
    bornnv == "" ||
    chucvunv == 0 ||
    phongbannv == 0 ||
    emailnv == "" ||
    sdtnv == "" ||
    anhnv == "" ||
    year < 18 ||
    sdtnv.length != 10 ||
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear() ||
    (year == 18 && born.getMonth() > now.getMonth()) ||
    kiemTraDT == true ||
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > emailnv.length
  ) {
    showToast(failmsg);
    return false;
  } else {
    showToast(successmsg);
    nhanvien = {
      idnv: idnv,
      namenv: namenv,
      bornnv: bornnv,
      chucvunv: chucvunv,
      phongbannv: phongbannv,
      emailnv: emailnv,
      sdtnv: sdtnv,
      anhnv: `../audi/avt/${anhnv}`,
    };
    listNV.push(nhanvien);
    localStorage.setItem("listNV", JSON.stringify(listNV));
  }
  section.classList.remove("admin");
  popupnv.classList.remove("admin");
  renderNV();
  resetINPUTNV();
}
//ham in danh sach nhan vien
function renderNV() {
  let listNV = localStorage.getItem("listNV")
    ? JSON.parse(localStorage.getItem("listNV"))
    : [];
  let tableData = ``;

  var index = 0;
  var count = 0;

  listNV.map((data) => {
    count++;
    index++;
    tableData += `  <div class="card_nv">
    <img
      src="${data.anhnv}"
      alt="Person"
      class="card__image"
    />
    <p class="card__name">${data.namenv}</p>
    <div class="grid-container">
      <div class="grid-child-posts">Phòng ban:</div>
      <div class="grid-child-followers">${data.phongbannv}</div>
      <div class="grid-child-posts">Chức vụ:</div>
      <div class="grid-child-followers">${data.chucvunv}</div>
    </div>
    <button class="btn-nv sua draw-border" onclick="suaNV('${data.idnv}')">Sửa thông tin</button>
    <button class="btn-nv xoatt draw-border" onclick="xoaNV('${data.idnv}')">Sa thải</button>
  </div>`;
  });
  if (count == 0) {
    tableData += ` <tbody>
    <tr>
    <td colspan="11"style="font-size:20px; font-weight:bold; height: 80px">
    Chưa có nhân viên nào!
      </td>
    </tr>
  </tbody>`;
  }
  tableNV.innerHTML = tableData;
}
function suaNV(id) {
  nutthemnv.style.display = "none";
  nutsuanv.style.display = "block";
  let listNV = localStorage.getItem("listNV")
    ? JSON.parse(localStorage.getItem("listNV"))
    : [];
  listNV.map((nv) => {
    if (nv.idnv == id) {
      console.log(nv.idnv);
      document.querySelector("#name-nv").value = nv.namenv;
      document.querySelector("#born-nv").value = nv.bornnv;
      document.querySelector("#email-nv").value = nv.emailnv;
      document.querySelector("#sdt-nv").value = nv.sdtnv;
      document.querySelector("#kind-nv").innerHTML = `${nv.chucvunv}`;
      document.querySelector("#kind-nv").value = nv.chucvunv;
      document.querySelector("#kind-phongban").innerHTML = `${nv.phongbannv}`;
      document.querySelector("#kind-phongban").value = nv.phongbannv;
      document.querySelector("#img-nv").dataset.img = nv.anhnv.substring(
        12,
        nv.anhnv.length
      );
      document.querySelector("#img-nv").classList.add("active");

      document.querySelector("#anh-nv").src = nv.anhnv;
    }
  });
  document.querySelector("#index-this-nv").value = id;
  section.classList.add("admin");
  popupnv.classList.add("admin");
  titlesuanv.style.display = "block";
  titlethemnv.style.display = "none";
}
function suaNVINFO() {
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
  var namenv = document.querySelector("#name-nv").value;
  var bornnv = document.querySelector("#born-nv").value;
  var emailnv = document.querySelector("#email-nv").value;
  var chucvunv = document.querySelector("#kind-nv").value;
  var sdtnv = document.querySelector("#sdt-nv").value;
  var phongbannv = document.querySelector("#kind-phongban").value;
  var anhnv = document.querySelector("#img-nv").dataset.img;
  var acong = emailnv.indexOf("@");
  var daucham = emailnv.lastIndexOf(".");
  var born = new Date(bornnv);
  var now = new Date();
  var kiemTraDT = isNaN(sdtnv);
  var idthisnv = document.querySelector("#index-this-nv").value;
  var year = now.getFullYear() - born.getFullYear();
  if (namenv == "") {
    setError(document.querySelector("#name-nv"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#name-nv"));
  }
  if (
    year < 18 ||
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear() ||
    (year == 18 && born.getMonth() > now.getMonth())
  ) {
    console.log(year);
    setError(document.querySelector("#born-nv"), "Tuổi không hợp lệ!");
  } else if (bornnv == "") {
    setError(document.querySelector("#born-nv"), "Không được để trống");
  } else {
    setSuccess(document.querySelector("#born-nv"));
  }
  if (emailnv == "") {
    setError(document.querySelector("#email-nv"), "Không được để trống");
  } else if (acong < 1 || daucham < acong + 2 || daucham + 2 > emailnv.length) {
    setError(document.querySelector("#email-nv"), "Không đúng định dạng");
  } else {
    setSuccess(document.querySelector("#email-nv"));
  }
  if (sdtnv == "") {
    setError(document.querySelector("#sdt-nv"), "Không được để trống");
  } else if (sdtnv.length != 10) {
    setError(document.querySelector("#sdt-nv"), "Điện thoại định dạng 10 số");
  } else if (kiemTraDT == true) {
    setError(
      document.querySelector("#sdt-nv"),
      "Điện thoại phải ở định dạng số"
    );
  } else {
    setSuccess(document.querySelector("#sdt-nv"));
  }
  if (
    namenv == "" ||
    bornnv == "" ||
    chucvunv == 0 ||
    phongbannv == 0 ||
    emailnv == "" ||
    sdtnv == "" ||
    anhnv == "" ||
    year < 18 ||
    sdtnv.length != 10 ||
    born.getFullYear() < 1923 ||
    born.getFullYear() > now.getFullYear() ||
    (year == 18 && born.getMonth() > now.getMonth()) ||
    kiemTraDT == true ||
    acong < 1 ||
    daucham < acong + 2 ||
    daucham + 2 > emailnv.length
  ) {
    showToast(faileditmsg);
    return false;
  } else {
    showToast(successeditmsg);

    listNV.map((nv) => {
      if (nv.idnv == idthisnv) {
        nv.namenv = namenv;
        nv.bornnv = bornnv;
        nv.chucvunv = chucvunv;
        nv.phongbannv = phongbannv;
        nv.emailnv = emailnv;
        nv.sdtnv = sdtnv;
        nv.anhnv = `../audi/avt/${anhnv}`;
      }
    });
    localStorage.setItem("listNV", JSON.stringify(listNV));
  }
  section.classList.remove("admin");
  popupnv.classList.remove("admin");
  renderNV();
  resetINPUTNV();
}
//xoa nhan vien
function xoaNV(id) {
  document.querySelector("#cf-del-nv").value = id;
  section.classList.add("admin");
  popupdelnv.classList.add("admin");
}
function xoaNVINFO() {
  let listNV = [];
  var idnvthis = document.querySelector("#cf-del-nv").value;
  JSON.parse(localStorage.getItem("listNV")).map((nv) => {
    if (nv.idnv != idnvthis) {
      listNV.push(nv);
    }
  });
  localStorage.setItem("listNV", JSON.stringify(listNV));
  renderNV();
}
//reset ham nhap nv
function resetINPUTNV() {
  document.querySelectorAll(".img-area.active").forEach((imga) => {
    imga.classList.remove("active");
    var imgE = imga.querySelectorAll("img");
    imgE.forEach((item) => item.remove());
  });
  document.querySelector("#name-nv").value = "";
  document.querySelector("#born-nv").value = "";
  document.querySelector("#email-nv").value = "";
  document.querySelector("#sdt-nv").value = "";
  document.querySelector("#kind-phongban").innerHTML = "Phòng ban";
  document.querySelector("#kind-nv").innerHTML = "Chức vụ";
  document.querySelector("#kind-phongban").value = 0;
  document.querySelector("#kind-nv").value = 0;
  document.querySelector("#price-car").value = "";
  document.querySelector("#img-nv").dataset.img = "";
  const inputcontrol = document.querySelectorAll(".input-control.success");
  const inputcontrolER = document.querySelectorAll(".input-control.error");

  inputcontrol.forEach((ipct) => {
    ipct.classList.remove("success");
  });
  inputcontrolER.forEach((ipct) => {
    ipct.classList.remove("error");
    const errorDisplay = ipct.querySelector(".error");
    errorDisplay.innerText = "";
  });
}
//ham hien thi so luong xe da ban va so luong xe con lai torng kho
function slxdb() {
  let listcar = localStorage.getItem("listcar")
    ? JSON.parse(localStorage.getItem("listcar"))
    : [];

  const dba = document.querySelector(".db.A");
  const dbe = document.querySelector(".db.E");
  const dbq = document.querySelector(".db.Q");
  const cla = document.querySelector(".slxe.A");
  const cle = document.querySelector(".slxe.E");
  const clq = document.querySelector(".slxe.Q");

  var adb = 0,
    acl = 0,
    edb = 0,
    ecl = 0,
    qdb = 0,
    qcl = 0;
  listcar.map((car) => {
    if (car.seriescar == "A Series") {
      adb += car.sldb;
      acl += car.slx;
    }
    if (car.seriescar == "e-tron Series") {
      edb += car.sldb;
      ecl += car.slx;
    }
    if (car.seriescar == "Q Series") {
      qdb += car.sldb;
      qcl += car.slx;
    }
  });
  dba.innerHTML = adb;
  cla.innerHTML = acl;
  dbe.innerHTML = edb;
  cle.innerHTML = ecl;
  dbq.innerHTML = qdb;
  clq.innerHTML = qcl;
}
