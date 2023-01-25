import React from "react";

export default function Row({ guess }) {
	// If not undefined
	if (guess) {
		return (
			<div className="row past">
				{guess.map((letter, index) => (
					<div key={index} className={letter.color}>
						{letter.key}
					</div>
				))}
			</div>
		);
	}

	// Else output empty row
	return (
		// Five square per row (one row five square)
		<div className="row">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
