import React from "react";
import Chart from "./Chart";
import { getData } from "./utils";
import { Box } from "@mui/material";

const ChartComponent = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		getData().then((data) => {
			setData(data);
		});
	}, []);

	if (data == null) {
		return <div>Loading...</div>;
	}
	return (
		<Box>
			<Chart data={data} />
		</Box>
	);
};

export default ChartComponent;
