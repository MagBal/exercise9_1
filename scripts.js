var a = 6,
	h = 20,
	triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(4, 0);
	triangle3Area = getTriangleArea(12, -6);
function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	}
	else {
		return ("Incorrect data!");
	}
}
console.log(getTriangleArea(a, h));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


