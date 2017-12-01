var a,
	h,
	triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(4, 0);
	triangle3Area = getTriangleArea(12, -6);
function getTriangleArea (a,h) {
	if ((a > 0) && (h > 0)) {
		return (a*h/2);
	}
	else {
		return ("Incorrect data!")
	}
}
console.log(getTriangleArea(16, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


