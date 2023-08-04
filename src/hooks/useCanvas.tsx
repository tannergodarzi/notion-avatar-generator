"use client";

import { CanvasProps } from "@/components/canvas";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

function useCanvas({ draw, predraw, postdraw }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return
    }
		const context = canvas.getContext("2d");
    let animationFrameId: number;
    let frameCount = 0;

    const render = () => {
      if (!context) {
        return
      }
      predraw && predraw(context, canvas);
      frameCount++;
			draw && draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
      postdraw && postdraw(context)
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
  }, [draw, predraw, postdraw]);

  return canvasRef;
};

export default useCanvas;
