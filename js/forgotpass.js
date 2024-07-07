const qmk = document.querySelector(".qmk"),
  fgp = document.querySelector("#forgotpassword"),
  OKpw = document.querySelector("#pwOK");

qmk.addEventListener("click", () => {
  dn.classList.add("fgp");
  fgp.classList.add("fgp");
});

function forgot() {
  var emailfg = document.getElementById("email-forgot-pass").value;
  var userfg = document.getElementById("user-forgot-pass").value;
  let accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
  var user;
  if (userfg == "") {
    showToast(failpassmsg);
    return false;
  }
  if (emailfg == "") {
    showToast(failpassmsg);
    return false;
  }
  for (let account of accounts) {
    if (userfg == account.user) {
      user = account.user;
    }
  }
  if (user === userfg) {
    for (let account of accounts) {
      if (userfg == account.user) {
        setSuccess(document.getElementById("user-forgot-pass"));
      }
    }
  } else {
    showToast(failpassmsg);

    setError(
      document.getElementById("user-forgot-pass"),
      "Tài khoản không chính xác"
    );
    return false;
  }
  document.getElementById("index-forgot").value = userfg;
  var us = document.getElementById("index-forgot").value;
  var npass = generateString(8);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  const serviceID = "service_fshn79k";
  const templateID = "template_2ou2ekq";
  var name;
  var email_test;
  accounts.map((data) => {
    if (data.user == us) {
      console.log(data.user);
      name = data.name;
      if (data.email == emailfg) {
        showToast(successpassmsg);
        setSuccess(document.getElementById("email-forgot-pass"));
        email_test = data.email;
        data.pass = npass;
        localStorage.setItem("accounts", JSON.stringify(accounts));
      } else {
        setError(
          document.getElementById("email-forgot-pass"),
          "Email không chính xác"
        );
        showToast(failpassmsg);

        return false;
      }
    }
  });
  if (email_test != emailfg) {
    setError(
      document.getElementById("email-forgot-pass"),
      "Email không chính xác"
    );

    return false;
  }
  var params = {
    name: name,
    message: npass,
    email: emailfg,
    user: userfg,
  };
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      setTimeout(reload, 4500);
      dn.classList.remove("fgp");
      fgp.classList.remove("fgp");
      dn.classList.add("pwOK");
      OKpw.classList.add("pwOK");
    })
    .catch((err) => console.log(err));
}
