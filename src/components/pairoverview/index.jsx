/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import { Divider, MenuItem, Select } from "@mui/material";
import ChangeStacked from "./ChangeStacked";
import Wrapper from "../wrapper";
import { AppContext } from "../../utils/context";
import BasicPopover from "./components/popover";

export function PairOverview() {
	const appContext = useContext(AppContext);

	const handleChange = (event) => {
		appContext.setValue((prevState) => ({
			...prevState,
			currentPair: {
				...prevState.currentPair,
				symbol: event.target.value,
			},
		}));
	};

	const currentPair = appContext.value.tradingPairs.find(
		(pair) => pair.symbol === appContext.value.currentPair.symbol
	);
	return (
		<Wrapper>
			<Stack
				direction={"row"}
				justifyContent="space-between"
				alignItems="right"
				spacing={3}
				divider={<Divider orientation="vertical" flexItem color="primary" />}
				sx={{
					borderColor: (theme) => `1px solid ${theme.palette.primary.border}`,
				}}
			>
				<Stack
					alignItems="center"
					direction={{ xs: "column", sm: "row" }}
					spacing={2}
					width="100%"
					divider={
						<Divider
							orientation="vertical"
							flexItem
							color={(theme) => theme.palette.primary.main}
						/>
					}
				>
					<Stack direction="row" alignItems="center">
						<BasicPopover />
					</Stack>
					<ChangeStacked
						title="24h Change"
						change={currentPair?.priceChange}
						changePercent={currentPair?.priceChangePercent}
					/>
					<ChangeStacked
						title="24h high"
						change={currentPair?.highPrice}
						changePercent={
							currentPair?.highPrice -
							(currentPair?.lowPrice / currentPair?.lowPrice) * 100
						}
					/>
					<ChangeStacked
						title="24h low"
						change={currentPair?.lowPrice}
						changePercent={
							currentPair?.highPrice - currentPair?.highPrice / 100
						}
					/>
					<ChangeStacked title="24h Volume" change={currentPair?.volume} />
				</Stack>
			</Stack>
		</Wrapper>
	);
}
