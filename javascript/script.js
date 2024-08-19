let position = 1;
let i;

/*Diapo 1 */
function afficherPhoto1(n) {
	let x1 = document.getElementsByClassName("monDiapo1");
	let y1 = document.getElementsByClassName("legende1");

	for (i = 0; i < x1.length; i++) {
		x1[i].style.display = "none";
	}

	for (i = 0; i < y1.length; i++) {
		y1[i].style.display = "none";
	}

	if (n > x1.length) { position = 1 }
	if (n < 1) { position = x1.length }

	if (n > y1.length) { position = 1 }
	if (n < 1) { position = y1.length }

	x1[position - 1].style.display = "block";
	y1[position - 1].style.display = "block";
}

function dplcmt1(n) {
	afficherPhoto1(position += n);
}

afficherPhoto1(position);

/*Diapo 2*/

function afficherPhoto2(n) {
	let x2 = document.getElementsByClassName("monDiapo2");
	let y2 = document.getElementsByClassName("legende2");

	for (i = 0; i < x2.length; i++) {
		x2[i].style.display = "none";
	}

	for (i = 0; i < y2.length; i++) {
		y2[i].style.display = "none";
	}

	if (n > x2.length) { position = 1 }
	if (n < 1) { position = x2.length }

	if (n > y2.length) { position = 1 }
	if (n < 1) { position = y2.length }

	x2[position - 1].style.display = "block";
	y2[position - 1].style.display = "block";
}

function dplcmt2(n) {
	afficherPhoto2(position += n);
}

afficherPhoto2(position);

/*Diapo 3*/

function afficherPhoto3(n) {
	let x3 = document.getElementsByClassName("monDiapo3");
	let y3 = document.getElementsByClassName("legende3");

	for (i = 0; i < x3.length; i++) {
		x3[i].style.display = "none";
	}

	for (i = 0; i < y3.length; i++) {
		y3[i].style.display = "none";
	}

	if (n > x3.length) { position = 1 }
	if (n < 1) { position = x3.length }

	if (n > y3.length) { position = 1 }
	if (n < 1) { position = y3.length }

	x3[position - 1].style.display = "block";
	y3[position - 1].style.display = "block";
}

function dplcmt3(n) {
	afficherPhoto3(position += n);
}

afficherPhoto3(position);

/*Diapo 4*/

function afficherPhoto4(n) {
	let x4 = document.getElementsByClassName("monDiapo4");
	let y4 = document.getElementsByClassName("legende4");

	for (i = 0; i < x4.length; i++) {
		x4[i].style.display = "none";
	}

	for (i = 0; i < y4.length; i++) {
		y4[i].style.display = "none";
	}

	if (n > x4.length) { position = 1 }
	if (n < 1) { position = x4.length }

	if (n > y4.length) { position = 1 }
	if (n < 1) { position = y4.length }

	x4[position - 1].style.display = "block";
	y4[position - 1].style.display = "block";
}

function dplcmt4(n) {
	afficherPhoto4(position += n);
}

afficherPhoto4(position);

/*Diapo 5*/

function afficherPhoto5(n) {
	let x5 = document.getElementsByClassName("monDiapo5");
	let y5 = document.getElementsByClassName("legende5");

	for (i = 0; i < x5.length; i++) {
		x5[i].style.display = "none";
	}

	for (i = 0; i < y5.length; i++) {
		y5[i].style.display = "none";
	}

	if (n > x5.length) { position = 1 }
	if (n < 1) { position = x5.length }

	if (n > y5.length) { position = 1 }
	if (n < 1) { position = y5.length }

	x5[position - 1].style.display = "block";
	y5[position - 1].style.display = "block";
}

function dplcmt5(n) {
	afficherPhoto5(position += n);
}

afficherPhoto5(position);

/*Diapo 6*/

function afficherPhoto6(n) {
	let x6 = document.getElementsByClassName("monDiapo6");
	let y6 = document.getElementsByClassName("legende6");

	for (i = 0; i < x6.length; i++) {
		x6[i].style.display = "none";
	}

	for (i = 0; i < y6.length; i++) {
		y6[i].style.display = "none";
	}

	if (n > x6.length) { position = 1 }
	if (n < 1) { position = x6.length }

	if (n > y6.length) { position = 1 }
	if (n < 1) { position = y6.length }

	x6[position - 1].style.display = "block";
	y6[position - 1].style.display = "block";
}

function dplcmt6(n) {
	afficherPhoto6(position += n);
}

afficherPhoto6(position);

/*Diapo 7*/

function afficherPhoto7(n) {
	let x7 = document.getElementsByClassName("monDiapo7");
	let y7 = document.getElementsByClassName("legende7");

	for (i = 0; i < x7.length; i++) {
		x7[i].style.display = "none";
	}

	for (i = 0; i < y7.length; i++) {
		y7[i].style.display = "none";
	}

	if (n > x7.length) { position = 1 }
	if (n < 1) { position = x7.length }

	if (n > y7.length) { position = 1 }
	if (n < 1) { position = y7.length }

	x7[position - 1].style.display = "block";
	y7[position - 1].style.display = "block";
}

function dplcmt7(n) {
	afficherPhoto7(position += n);
}

afficherPhoto7(position);

/*Diapo 8*/

function afficherPhoto8(n) {
	let x8 = document.getElementsByClassName("monDiapo8");
	let y8 = document.getElementsByClassName("legende8");

	for (i = 0; i < x8.length; i++) {
		x8[i].style.display = "none";
	}

	for (i = 0; i < y8.length; i++) {
		y8[i].style.display = "none";
	}

	if (n > x8.length) { position = 1 }
	if (n < 1) { position = x8.length }

	if (n > y8.length) { position = 1 }
	if (n < 1) { position = y8.length }

	x8[position - 1].style.display = "block";
	y8[position - 1].style.display = "block";
}

function dplcmt8(n) {
	afficherPhoto8(position += n);
}

afficherPhoto8(position);

/*Diapo 9*/

function afficherPhoto9(n) {
	let x9 = document.getElementsByClassName("monDiapo9");
	let y9 = document.getElementsByClassName("legende9");

	for (i = 0; i < x9.length; i++) {
		x9[i].style.display = "none";
	}

	for (i = 0; i < y9.length; i++) {
		y9[i].style.display = "none";
	}

	if (n > x9.length) { position = 1 }
	if (n < 1) { position = x9.length }

	if (n > y9.length) { position = 1 }
	if (n < 1) { position = y9.length }

	x9[position - 1].style.display = "block";
	y9[position - 1].style.display = "block";
}

function dplcmt9(n) {
	afficherPhoto9(position += n);
}

afficherPhoto9(position);

/*Diapo 10*/

function afficherPhoto10(n) {
	let x10 = document.getElementsByClassName("monDiapo10");
	let y10 = document.getElementsByClassName("legende10");

	for (i = 0; i < x10.length; i++) {
		x10[i].style.display = "none";
	}

	for (i = 0; i < y10.length; i++) {
		y10[i].style.display = "none";
	}

	if (n > x10.length) { position = 1 }
	if (n < 1) { position = x10.length }

	if (n > y10.length) { position = 1 }
	if (n < 1) { position = y10.length }

	x10[position - 1].style.display = "block";
	y10[position - 1].style.display = "block";
}

function dplcmt10(n) {
	afficherPhoto10(position += n);
}

afficherPhoto10(position);

/*Diapo 11*/

function afficherPhoto11(n) {
	let x11 = document.getElementsByClassName("monDiapo11");
	let y11 = document.getElementsByClassName("legende11");

	for (i = 0; i < x11.length; i++) {
		x11[i].style.display = "none";
	}

	for (i = 0; i < y11.length; i++) {
		y11[i].style.display = "none";
	}

	if (n > x11.length) { position = 1 }
	if (n < 1) { position = x11.length }

	if (n > y11.length) { position = 1 }
	if (n < 1) { position = y11.length }

	x11[position - 1].style.display = "block";
	y11[position - 1].style.display = "block";
}

function dplcmt11(n) {
	afficherPhoto11(position += n);
}

afficherPhoto11(position);

/*Diapo 12*/

function afficherPhoto12(n) {
	let x12 = document.getElementsByClassName("monDiapo12");
	let y12 = document.getElementsByClassName("legende12");

	for (i = 0; i < x12.length; i++) {
		x12[i].style.display = "none";
	}

	for (i = 0; i < y12.length; i++) {
		y12[i].style.display = "none";
	}

	if (n > x12.length) { position = 1 }
	if (n < 1) { position = x12.length }

	if (n > y12.length) { position = 1 }
	if (n < 1) { position = y12.length }

	x12[position - 1].style.display = "block";
	y12[position - 1].style.display = "block";
}

function dplcmt12(n) {
	afficherPhoto12(position += n);
}

afficherPhoto12(position);