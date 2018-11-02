const Status=["Delivered", "In transit", "Not Delivered"];
function (Status) {
	if (Status==="Delivered" || Status==="In transit") {
		console.log(You can not cancel the delivery order)
	};
}