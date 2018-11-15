<script src='' id="s1"></script>
<script language="javascript">
s1.src="countries.js"
</script>

const countries = require("./countries");
var parcel=document.getElementById("btnAddParcel");

parcel.onclick=function () {
let orders=document.querySelectorAll(".inputbox");

for( let i=0; i<orders.length;i++){
	let orderWeight = orders[i].value; 

	if (orderWeight === ""){
		alert("Please! Enter the weight of your parcels in the empty box before you make other parcel delivery orders");
		return false;
	};
};

let table=document.getElementById("myTable");
let row=document.createElement("tbody");
console.log(countries);
row.innerHTML=`<tr><td>From</td>${countries}
		<td><b>To:</b></td>${countries}
		<td><b>Weight</b></td>
		<td><input type="text" class="inputbox" placeholder="Weight"></td>
	</tr>`;
	table.appendChild(row);
};

var btnShowPrice=document.getElementById("btnShowPrice");
btnShowPrice.onclick=function () {
	let totalPrice= 0;
	let orders=document.querySelectorAll(".inputbox");
	for( let i=0; i<orders.length;i++){
	let orderWeight = orders[i].value;
	totalPrice+=parseFloat(orderWeight);

	if (orderWeight===""){
		alert("Please! Enter the weight of your parcels in all the orders created");
		return false;
	};
	retult.innerHTML=`You are required to pay ${totalPrice*1200} Rwf`;
};
};




