/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Chart from "./Chart";
// import { getData } from "./utils";
import { Box } from "@mui/material";
import { AppContext } from "../../../utils/context";
import { timeParse } from "d3-time-format";
import moment from "moment/moment";
import Wrapper from "../../wrapper";

const parseEpoch = (epoch) => {
	let date = new Date(epoch);
	date = moment(date).format("YYYY-MM-DD");
	date = timeParse("%Y-%m-%d")(date);
	return date;
};

const ChartComponent = () => {
	const [data, setData] = React.useState(null);
	const contextHistoricals = useContext(AppContext)?.value.historicals;

	React.useMemo(() => {
		const data = arrayToNewFormat();

		setData(data);
	}, [contextHistoricals]);

	function arrayToNewFormat() {
		const newFormat = contextHistoricals?.map((item) => {
			return {
				date: parseEpoch(item[0]),
				open: item[1],
				high: item[2],
				low: item[3],
				close: item[4],
				volume: item[5],
				split: "",
				dividend: "",
				absoluteChange: "",
				percentChange: "",
				ema26: item[5],
				ema12: item[5],
				macd: {
					macd: "",
					signal: "",
					divergence: "",
				},
			};
		});
		return newFormat;
	}

	if (data == null) {
		return <div>Loading...</div>;
	}
	return (
		<Box width="100%">
			<Wrapper>{data && <Chart data={data} />}</Wrapper>
		</Box>
	);
};

export default ChartComponent;
