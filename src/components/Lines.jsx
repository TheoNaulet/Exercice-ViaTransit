import React, { useEffect, useState } from "react";

function Lines(line) {
	return (
		<div className="line">
			{
				<img
					className="logo-line"
					src={require(`../assets/img/T${line.line}.png`)}
					alt={`Logo line ${line} TAM`}
				/>
			}
		</div>
	);
}

export default Lines;
