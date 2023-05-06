var catarr = [];

function changecat() {
  console.log("click");
  catarr.push(document.getElementById('business').value);
}

function saveGetDemo() {
  getVdemo();
  $("#submitGetDemo").prop("disabled", true);

  var buss_name = $("#bName").val();
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#moblie").val();
  let new_ph = phone.length == 10 ? "+91" + phone : phone;

  if (!buss_name || !name || !email || !phone || catarr.length == 0) {
    $("#submitGetDemo").prop("disabled", false);
  } else {

    $.post(
      "https://app.refr.club/api/reminder/vendor/IN",
      {
        buss_name:buss_name,
        name: name,
        email: email,
        phone: new_ph,
        type: catarr,
      },
      (data) => {
        console.log("Data saved :" + data);
        $("#bName").val("");
        $("#name").val("");
        $("#email").val("");
        $("#moblie").val("");

        $("#submitGetDemo").prop("disabled", false);
      }
    );
  }
}

function getVdemo() {
  document.getElementById("error").innerHTML = "";

  let x1 = document.getElementById("bName").value;
  let x2 = document.getElementById("name").value;
  let x3 = document.getElementById("email").value;
  let x4 = document.getElementById("moblie").value;
  let x5 = catarr.length !== 0;

  if (!x1 && !x2 && !x3 && !x4 && !x5) {
    // NO SUBMIT
    document.getElementById("error").innerHTML = "Please fill the form before submitting";
  } else {
    if (!x1 || !x2 || !x3 || !x4 || !x5) {
      // SUBMIT NO VALUE
      document.getElementById("error").innerHTML = "Please enter valid value";
    } else {
      var mailformat = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

      if (x3.match(mailformat)) {
        document.getElementById("error").innerHTML = "Please enter the valid email id";
      }
      var phoneformat = "/^[0-9A-Za-z@]+$";
      if (x4.match(phoneformat)) {
        document.getElementById("error").innerHTML = "Please enter valid Mobile No.";
      }
    }
  }
}
