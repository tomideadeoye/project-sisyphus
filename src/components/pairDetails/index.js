import React from "react";
import { Grid, Stack } from "@mui/material";
import ChartComponent from "./chart";
import OrderBookRecentTrades from "./orderBookRecentTrades";
import BuySell from "./BuySell";
import { GoogleCandleStick } from "../googleChart";

export function PairDetails() {
	return (
		<Stack
			direction={{ sm: "column", md: "row" }}
			spacing={{ sm: 2, md: 1 }}
			sx={{ width: "100%", height: "100%", padding: "0px 10px" }}
			justifyContent="space-between"
		>
			<GoogleCandleStick />
			<OrderBookRecentTrades />
			<BuySell />
		</Stack>
	);
}
