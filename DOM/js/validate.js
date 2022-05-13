SignUpForm = (event) => {
  event.preventDefault;

  var valid = true;
  var elements = event.currentTarget;
  var email = elements[0].value; //Email
  var uname = elements[1].value; //Username
  var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var regex_uname = /^[a-zA-Z0-9_-]+$/;
  var regex_pswd = /^(\S*)?\d+(\S*)?$/;
  var msg_email = document.getElementById("msg_email");
  var msg_uname = document.getElementById("msg_uname");
  msg_email.innerHTML = "";
  msg_uname.innerHTML = "";
  var textNode;
  var htmlNode;
  if (email == null || email == "") {
    textNode = document.createTextNode("Email address empty.");
    msg_email.appendChild(textNode);
    valid = false;
  } else if (regex_email.test(email) == false) {
    textNode = document.createTextNode(
      "Email address wrong format. example: username@somewhere.sth"
    );
    msg_email.appendChild(textNode);
    valid = false;
  } else if (email.length > 60) {
    textNode = document.createTextNode(
      "Email address too long. Maximum is 60 characters."
    );
    msg_email.appendChild(textNode);
    valid = false;
  }
  if (uname == null || uname == "") {
    textNode = document.createTextNode("Username is empty.");
    msg_uname.appendChild(textNode);
    valid = false;
  }
  var display_info = document.getElementById("display_info");
  display_info.innerHTML = "";
  if (valid == true) {
    display_info.style.color = "green";

    textNode = document.createTextNode("Email: " + email);
    display_info.appendChild(textNode);
    htmlNode = document.createElement("br");
    display_info.appendChild(htmlNode);
    textNode = document.createTextNode("Username: " + uname);
    display_info.appendChild(textNode);
    htmlNode = document.createElement("br");
    display_info.appendChild(htmlNode);
  } else {
    event.preventDefault();
    display_info.setAttribute("style", "color: red");
  }
};
