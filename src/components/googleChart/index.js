import React, { useContext, useMemo } from "react";
import { Chart } from "react-google-charts";
import theme from "../../theme";
import { AppContext } from "../../utils/context";
import ChartConfig from "./chartConfig";
import { Stack } from "@mui/material";

export const options = {
	legend: "none",
	bar: { groupWidth: "100%" }, // Remove space between bars.
	candlestick: {
		fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
		risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
	},
	backgroundColor: { fill: theme.palette.primary.background },
	vAxis: {
		gridlines: { color: "transparent" }, // Remove gridlines
	},
	hAxis: {
		gridlines: { color: "transparent" }, // Remove gridlines
	},
};

export function GoogleCandleStick() {
	const contextHistoricals = useContext(AppContext)?.value.historicals;
	const [data, setData] = React.useState(null);
	const [time, setTime] = React.useState("1D");

	useMemo(() => {
		if (!contextHistoricals) return;
		let newDataPack = contextHistoricals?.map((item) => {
			return [
				new Date(item[0]),
				parseFloat(item[1]),
				parseFloat(item[2]),
				parseFloat(item[3]),
				parseFloat(item[4]),
			];
		});

		const modifiedData = [["Day", "", "", "", ""], ...newDataPack];
		let filteredData = [];
		if (time === "1D") {
			// get greatest day in the array
			const greatestDay = modifiedData.reduce((a, b) => {
				return a[0] > b[0] ? a : b;
			});
			console.log("greatestDay", greatestDay);
			filteredData = modifiedData.filter((item) => {
				const date = new Date(item[0]);
				const greatestDate = new Date(greatestDay[0]);
				const diffTime = Math.abs(date - greatestDate);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				return diffDays <= 1;
			});
			setData([["Day", "", "", "", ""], ...filteredData]);
		} else {
			setData(modifiedData);
		}
	}, [contextHistoricals, time]);

	return (
		<Stack
			width="100%"
			sx={{
				backgroundColor: theme.palette.primary.background,
			}}
		>
			<ChartConfig setTime={setTime} />
			{data && (
				<Chart
					chartType="CandlestickChart"
					width="100%"
					height="100%"
					data={data}
					options={options}
				/>
			)}
		</Stack>
	);
}
