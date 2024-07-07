let listcar = localStorage.getItem("listcar")
  ? JSON.parse(localStorage.getItem("listcar"))
  : [];
let accessCAR = localStorage.getItem("accessCAR")
  ? JSON.parse(localStorage.getItem("accessCAR"))
  : [];
const tenxehientai = document.querySelector(".ten-xe-hientai");
const title = document.querySelector(".ten-xe-hientai");
const carAinseries = document.querySelector("#carAinseries");
const formdkixe = document.getElementById("form-dkx");
const carEinseries = document.querySelector("#carEinseries");
const carQinseries = document.querySelector("#carQinseries");
const carloader = document.querySelector("#car-loader");
console.log(carloader);
const bodypage = document.querySelector(".body-page");
const dcl = document.querySelector(".dcl");
//ham format cash
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
function renderMAUXE() {
  let carproductA = ``;
  let carproductE = ``;
  let carproductQ = ``;
  listcar.map((car) => {
    if (car.seriescar == "A Series" && car.slx > 0) {
      carproductA += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="truy-cap" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
    if (car.seriescar == "A Series" && car.slx == 0) {
      carproductA += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
              <img src="../audi/hethang.png" alt="" class="sold-out-car" />
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="sold-out" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
    if (car.seriescar == "e-tron Series" && car.slx > 0) {
      carproductE += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="truy-cap" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
    if (car.seriescar == "e-tron Series" && car.slx == 0) {
      carproductE += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
            <img src="../audi/hethang.png" alt="" class="sold-out-car" />
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="sold-out" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
    if (car.seriescar == "Q Series" && car.slx > 0) {
      carproductQ += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
            
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="truy-cap" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
    if (car.seriescar == "Q Series" && car.slx == 0) {
      carproductQ += `
      <div class="onlycar">
            <div class="this-name-car">${car.namecar}</div>
            <div class="this-img-car">
              <img src="../audi/hethang.png" alt="" class="sold-out-car" />
              <img src="${car.img2car}" alt="" class="this-car" />
            </div>
            <button class="sold-out" onclick="Car('${car.idcar}')">Xem chi tiết</button>
          </div>`;
    }
  });
  carAinseries.innerHTML = carproductA;
  carEinseries.innerHTML = carproductE;
  carQinseries.innerHTML = carproductQ;
}
function Car(id) {
  console.log(id);
  localStorage.removeItem("accessCAR");
  // accessCAR.push(id);
  // localStorage.setItem("accessCAR", JSON.stringify(accessCAR));
  window.location = "../html/car.html";
  accessCAR.push(id);
  localStorage.setItem("accessCAR", JSON.stringify(accessCAR));
}
function CarLOADER() {
  let accessCAR = localStorage.getItem("accessCAR")
    ? JSON.parse(localStorage.getItem("accessCAR"))
    : [];
  var idthiscar;
  accessCAR.map((ac) => {
    idthiscar = ac;
  });
  document.querySelector("#car-loader").value = idthiscar;
  let carinfor = ``;
  let choosecolor = ``;
  listcar.map((car) => {
    var gia = formatCash(String(`${car.pricecar}`));
    if (car.idcar == idthiscar && car.slx > 0) {
      tenxehientai.innerHTML = car.namecar;
      carinfor += `       <div class="name">
    <h1 class="car-name">${car.namecar}</h1>
    <h2 class="car-kind">${car.seriescar}</h2>
  </div>
  <div class="price">
    <h2>Giá chỉ từ:</h2>
    <h3><span class="car-price"> ${gia}</span> VND</h3>
  </div>
  <div class="back-image">
    <img src="../AUDI/132610_1.jpg" alt="" class="background" />
    <img src="${car.img1car}" alt="" class="car-img" />

    <img
      src="${car.img2car}"
      alt=""
      class="car-img-2"
      style="display: none"
    />
  </div>
  <source src="../product/test.html" class="src-car-page" />`;
      choosecolor += `
  <div class="title-color">Chọn màu xe</div>
  <div class="chonmauxe">
    <div id="color-car">
      <div
        class="img-color-xe"
        style="background-image: url('${car.img1}')"
      >
        <img
          src="${car.img1}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
          <div class="ten-color">${car.namecolor1}</div>
          <div class="mota-color">${car.nametag1}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img2}')"
      >
        <img
          src="${car.img2}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
  <div class="ten-color">${car.namecolor2}</div>
          <div class="mota-color">${car.nametag2}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img3}')"
      >
        <img
          src="${car.img3}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor3}</div>
        <div class="mota-color">${car.nametag3}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img4}')"
      >
        <img
          src="${car.img4}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor4}</div>
          <div class="mota-color">${car.nametag4}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img5}')"
      >
        <img
          src="${car.img5}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor5}</div>
        <div class="mota-color">${car.nametag5}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img6}')"
      >
        <img
          src="${car.img6}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor6}</div>
        <div class="mota-color">${car.nametag6}</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <button id="prev-btns" onclick="prev()"><i class="ri-arrow-left-s-line"></i></button>
      <button id="next-btns" onclick="next()">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
  </div>
  `;
    } else if (car.idcar == idthiscar && car.slx == 0) {
      tenxehientai.innerHTML = car.namecar;
      carinfor += `       <div class="name">
    <h1 class="car-name">${car.namecar}</h1>
    <h2 class="car-kind">${car.seriescar}</h2>
  </div>
  <div class="price">
    <h2>Giá chỉ từ:</h2>
    <h3><span class="car-price">  ${gia}</span> VND</h3>
  </div>
  <div class="back-image">
    <img src="../AUDI/132610_1.jpg" alt="" class="background" />
    <img src="${car.img1car}" alt="" class="car-img" />
    <img src="../audi/hethang.png" alt="" class="car-img" />
    <img
      src="${car.img2car}"
      alt=""
      class="car-img-2"
      style="display: none"
    />
  </div>
  <source src="../product/test.html" class="src-car-page" />`;
      choosecolor += `
  <div class="title-color">Chọn màu xe</div>
  <div class="chonmauxe">
    <div id="color-car">
      <div
        class="img-color-xe"
        style="background-image: url('${car.img1}')"
      >
        <img
          src="${car.img1}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
          <div class="ten-color">${car.namecolor1}</div>
          <div class="mota-color">${car.nametag1}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img2}')"
      >
        <img
          src="${car.img2}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
  <div class="ten-color">${car.namecolor2}</div>
          <div class="mota-color">${car.nametag2}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img3}')"
      >
        <img
          src="${car.img3}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor3}</div>
        <div class="mota-color">${car.nametag3}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img4}')"
      >
        <img
          src="${car.img4}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor4}</div>
          <div class="mota-color">${car.nametag4}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img5}')"
      >
        <img
          src="${car.img5}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor5}</div>
        <div class="mota-color">${car.nametag5}</div>
        </div>
      </div>
      <div
        class="img-color-xe"
        style="background-image: url('${car.img6}')"
      >
        <img
          src="${car.img6}"
          alt=""
          class="image-colos"
          style="display: none"
        />
        <div class="mota-cua-xe">
        <div class="ten-color">${car.namecolor6}</div>
        <div class="mota-color">${car.nametag6}</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <button id="prev-btns" onclick="prev()"><i class="ri-arrow-left-s-line"></i></button>
      <button id="next-btns" onclick="next()">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
  </div>
  `;
      formdkixe.style.display = "none";
    }
  });
  dcl.innerHTML = choosecolor;
  bodypage.innerHTML = carinfor;
}
/*doi mau*/
function next() {
  let lists = document.querySelectorAll(".img-color-xe");
  document.getElementById("color-car").appendChild(lists[0]);
}
function prev() {
  let lists = document.querySelectorAll(".img-color-xe");
  document.getElementById("color-car").prepend(lists[lists.length - 1]);
}
