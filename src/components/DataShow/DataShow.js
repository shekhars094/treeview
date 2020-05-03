import React, { useContext } from "react";

const DataShow = (props) => {
	return (
		<div style={{ width: "50%", margin: "0 auto" }}>
			<p>{props.data}</p>
		</div>
	);
};

export default DataShow;
