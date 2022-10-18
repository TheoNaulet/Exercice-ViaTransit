import React from "react";

function Header() {
	return (
		<div className="header">
			{/* Logo ViaTransit */}
			<img
				className=""
				src={require("../assets/img/logo_wide_blue.png")}
				alt="logo viaTransit"
			/>
		</div>
	);
}

export default Header;
