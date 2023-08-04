"use client"

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
	const { width, height } = canvas.getBoundingClientRect();
	const { devicePixelRatio: ratio = 1 } = window;
	const context = canvas.getContext("2d");

	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width * ratio;
		canvas.height = height * ratio;
		context?.scale(ratio, ratio);
		return true;
	}

	return false;
}

export default resizeCanvasToDisplaySize;