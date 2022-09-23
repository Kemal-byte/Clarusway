/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  let shippingName = document.getElementById("shippingName");
  let shippingZip = document.getElementById("shippingZip");
  let same = document.getElementById("same");
  let billingName = document.getElementById("billingName");
  let billingZip = document.getElementById("billingZip");
  if (same.checked) {
    alert("checked button clicked");
    console.log(shippingZip.value);
    console.log(shippingName.value);
    billingName.value = shippingName.value;
    billingZip.value = shippingZip.value;
  } else {
    alert("Checked buttong unClicked");
    billingName.value = "";
    billingZip.value = "";
  }
}
