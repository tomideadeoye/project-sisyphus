import React, { useContext, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { VerticalAlignTop } from "@material-ui/core";
import { AppContext } from "../../utils/context";
import { Stack } from "@mui/material";
import ChartConfig from "./chartConfig";

const ApexChart = () => {
	const contextHistoricals = useContext(AppContext)?.value.historicals;
	const [data, setData] = React.useState(null);
	const [time, setTime] = React.useState("1D");

	const series = [
		{
			name: "candle",
			data: data,
		},
	];

	useMemo(() => {
		if (!contextHistoricals) return;
		let newDataPack = contextHistoricals?.map((item) => {
			return {
				x: new Date(item[0]).toLocaleString(),
				y: [
					parseFloat(item[1]),
					parseFloat(item[2]),
					parseFloat(item[3]),
					parseFloat(item[4]),
				],
			};
		});
		setData(newDataPack);
	}, [contextHistoricals, time]);

	const options = {
		chart: {
			height: 350,
			type: "candlestick",
			toolbar: {
				autoSelected: "pan",
				show: true,
			},
		},

		series: [
			{
				name: "candle",
				data: data,
			},
		],
		xaxis: {
			type: "category",
			//tickPlacement: 'between',
		},
		yaxis: {
			legend: {
				title: "dan",
			},
		},
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				return (
					'<div class="arrow_box">' +
					"<span>" +
					//the whole series is offered as a prop
					//plus the relevant series in the data if there are more than one
					//plus the index of where this sits on the x axis
					//plus a global object w to extract other chart data.
					//apexcharts.js/src/modules/settings/Globals.js
					//usw W for better access rather than series[seriesindex][datapointindex]
					JSON.stringify(w.globals.categoryLabels[dataPointIndex]) +
					"</span>" +
					"</div>"
				);
			},
		},
		optionsBar: {
			chart: {
				// height: 160,
				type: "bar",
				// brush: {
				// 	enabled: true,
				// 	// target: "candle",
				// },
				selection: {
					enabled: true,
					xaxis: {
						min: new Date("20 Jan 2017").getTime(),
						max: new Date("10 Dec 2023").getTime(),
					},
					// fill: {
					// 	color: "#ccc",
					// 	opacity: 0.4,
					// },
					stroke: {
						color: "#0D47A1",
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				bar: {
					columnWidth: "80%",
					colors: {
						ranges: [
							{
								from: -1000,
								to: 0,
								color: "#FF6838",
							},
							{
								from: 1,
								to: 10000,
								color: "#58BD7D",
							},
						],
					},
				},
			},
			stroke: {
				width: 9,
				colors: "#FF6838",
			},
			xaxis: {
				// type: "datetime",
				// axisBorder: { offsetX: 13 },
			},
			yaxis: { labels: { show: true } },
		},
	};

	const seriesBar = [
		{
			name: "volume",
			data: data?.map((data, index) => ({
				x: data.x,
				y: [data.y[0], data.y[1], data.y[0], data.y[1]],
			})),
		},
	];
	console.log("sibar", seriesBar);

	return (
		<Stack
			width="100%"
			height="100%"
			sx={{
				background: (theme) => theme.palette.primary.background,
			}}
		>
			<ChartConfig />
			{data && (
				<div>
					<div id="chart">
						<ReactApexChart
							options={options}
							series={series}
							type="candlestick"
							// height={350}
						/>
					</div>
					<div id="chart-bar">
						<ReactApexChart
							options={options.optionsBar}
							series={seriesBar}
							type="bar"
							height={160}
						/>
					</div>
				</div>
			)}
		</Stack>
	);
};

export default ApexChart;
