import React from "react";
import Wrapper from "../wrapper";
import { Grid } from "@mui/material";
import ChartComponent from "./chart";
import OrderBookRecentTrades from "./orderBookRecentTrades";
import BuySell from "./BuySell";

export function PairDetails() {
	return (
		<Grid container spacing={1}>
			<Grid item md={12} lg={8}>
				<Wrapper>
					<ChartComponent />
				</Wrapper>
			</Grid>
			<Grid item md={12} lg={2}>
				<Wrapper>
					<OrderBookRecentTrades />
				</Wrapper>
			</Grid>

			<Grid item md={12} lg={2}>
				<Wrapper>
					<BuySell />
				</Wrapper>
			</Grid>
		</Grid>
	);
}
