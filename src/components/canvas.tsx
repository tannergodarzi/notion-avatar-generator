"use client";

import useCanvas from "@/hooks/useCanvas";
import resizeCanvasToDisplaySize from "@/utils/resizeCanvas";
import React, { CanvasHTMLAttributes } from "react";

export interface CanvasProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
	draw?: (context: CanvasRenderingContext2D, frameCount: number) => void;
	predraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
	postdraw?: (context: CanvasRenderingContext2D) => void;
}

function _predraw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
	context.save();
	resizeCanvasToDisplaySize(canvas);
	const { width, height } = context.canvas;
	context.clearRect(0, 0, width, height);
}

function _postdraw(context: CanvasRenderingContext2D) {
	context.restore();
}

function Canvas(props: CanvasProps) {
	const { draw, predraw = _predraw, postdraw = _postdraw, ...rest } = props;
	const canvasRef = useCanvas({ draw, predraw, postdraw });

	return <canvas ref={canvasRef} {...rest}  id="canvas"/>;
}

export default Canvas;
