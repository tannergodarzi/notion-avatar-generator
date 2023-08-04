"use client";

import Canvas from "./canvas";

function getRandomInt(min: number, max: number) {
	const number = Math.floor(Math.random() * (max - min) + min);

	return number < 10 ? `0${number}` : number;
}

export default function Generator() {
	const skintoneLayer = new Image(1200, 1200);
	skintoneLayer.onload = ()=> console.log("Skin layer loaded")
	skintoneLayer.src = `/skintone/${getRandomInt(1, 6)}.png`;

	const eyeLayer = new Image(1200, 1200);
	eyeLayer.onload = () => console.log("Eye layer loaded");
	eyeLayer.src = `/eyes/${getRandomInt(1, 32)}.png`;
	

	const mouthLayer = new Image(1200, 1200);
	mouthLayer.onload = () => console.log("Mouth layer loaded");
	mouthLayer.src = `/mouths/${getRandomInt(1, 52)}.png`;

	const noseLayer = new Image(1200, 1200);
	noseLayer.onload = () => console.log("Nose layer loaded");
	noseLayer.src = `/nose/${getRandomInt(1, 26)}.png`;

	const hairLayer = new Image(1200, 1200);
	hairLayer.onload = () => console.log("Hair layer loaded");
	hairLayer.src = `/hair/${getRandomInt(1, 67)}.png`;

	const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(skintoneLayer, 0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(eyeLayer, 0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(mouthLayer, 0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(noseLayer, 0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(hairLayer, 0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fill();
	};

	return (
    <section>
			<Canvas draw={draw} width={600} height={600} />
		</section>
	);
}
