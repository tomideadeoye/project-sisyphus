import React from "react";
import { Grid, Stack } from "@mui/material";
import OrderBookRecentTrades from "./orderBookRecentTrades";
import BuySell from "./BuySell";
import ApexChart from "../apexChart";

export function PairDetails() {
	return (
		<Stack
			direction={{ sm: "column", md: "row" }}
			spacing={{ sm: 2, md: 1 }}
			sx={{ width: "100%", height: "100%", padding: "0px 10px" }}
			justifyContent="space-between"
		>
			<ApexChart />
			<OrderBookRecentTrades />
			<BuySell />
		</Stack>
	);
}
