"use client"

export default function Tools() {
	function download() {
		const canvas = document.getElementById("canvas") as HTMLCanvasElement;
		const dataURL = canvas?.toDataURL("image/png", 1);
		var link = document.createElement("a");
		link.download = "notion-avatar.png";
		link.href = dataURL;
		link.click();
	}


	return (
		<section style={{
			"display": "flex",
			"flexDirection": "column",
			gap: "12px",
			alignContent: "flex-start",
			alignItems: "flex-start",
			justifyItems: "flex-start"
		}}>
			<button onClick={() => download()}>{"Download image"}</button>
			<button onClick={()=> location.reload()}>{"Random"}</button>
		</section>
	);
}
