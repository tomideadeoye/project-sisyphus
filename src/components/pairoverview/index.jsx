/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
// import { useTheme } from "@mui/material/styles";
import { Avatar, Divider, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChangeStacked from "./ChangeStacked";
import Wrapper from "../wrapper";
import { AppContext } from "../../utils/context";

export function PairOverview() {
	const context = useContext(AppContext);
	const pair = context.value.currentPair.symbol;

	const handleChange = (event) => {
		context.setValue((prevState) => ({
			...prevState,
			currentPair: {
				...prevState.currentPair,
				symbol: event.target.value,
			},
		}));
	};

	return (
		<Wrapper>
			<Stack
				direction={"row"}
				justifyContent="space-between"
				width="100%"
				alignItems="center"
				spacing={3}
				divider={<Divider orientation="vertical" flexItem color="primary" />}
				sx={{
					background: (theme) => theme.palette.primary.background,
					borderColor: (theme) => `1px solid ${theme.palette.primary.border}`,
				}}
			>
				<SelectPair pair={pair} handleChange={handleChange} />
			</Stack>
		</Wrapper>
	);
}

const SelectPair = ({ pair, handleChange }) => {
	const appContext = useContext(AppContext);
	console.log(appContext);
	const price = appContext.value.currentPair.openPrice;
	let priceFormatted = new Intl.NumberFormat("en-US").format(price);

	return (
		<Stack
			alignItems="center"
			direction="row"
			spacing={2}
			sx={{
				width: "100%",
			}}
			divider={
				<Divider
					orientation="vertical"
					flexItem
					color={(theme) => theme.palette.primary.main}
				/>
			}
		>
			<Stack direction="row" alignItems="center">
				<Avatar alt="Remy Sharp" src="/images/logo/pair.svg" width="100%" />
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={pair}
					label="Pair"
					onChange={handleChange}
				>
					{appContext.value.tradingPairs?.map((pair) => (
						<MenuItem key={pair} value={pair}>
							{pair}
						</MenuItem>
					))}
				</Select>
				<KeyboardArrowDownIcon />
				<Typography variant="h5" color="secondary.main">
					${priceFormatted && priceFormatted}
				</Typography>
			</Stack>
			<ChangeStacked
				title="24h Change"
				change={appContext.value.currentPair.priceChange}
				changePercent={appContext.value.currentPair.priceChangePercent}
			/>
			<ChangeStacked
				title="24h high"
				change={appContext.value.currentPair.priceChange}
				changePercent={appContext.value.currentPair.priceChangePercent}
			/>
			<ChangeStacked
				title="24h low"
				change={appContext.value.currentPair.priceChange}
				changePercent={appContext.value.currentPair.priceChangePercent}
			/>
			<ChangeStacked
				title="24h Volume"
				change={appContext.value.currentPair.priceChange}
			/>
		</Stack>
	);
};
