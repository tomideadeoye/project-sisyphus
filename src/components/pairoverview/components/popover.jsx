import React, { useContext, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppContext } from "../../../utils/context";
import MuiSearch from "../../shared/MuiSearch";
import { Avatar, Chip, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function BasicPopover() {
	const [anchorEl, setAnchorEl] = useState(null);
	const appContext = useContext(AppContext);
	const pairs = appContext.value.tradingPairs.sort(
		(a, b) => b.lastPrice - a.lastPrice
	);

	const price = appContext.value.currentPair.openPrice;
	let priceFormatted = new Intl.NumberFormat("en-US").format(price);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (pair) => {
		appContext.setValue((prevState) => ({
			...prevState,
			currentPair: {
				...prevState.currentPair,
				symbol: pair?.symbol,
			},
		}));
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<Stack
				direction="row"
				onClick={handleClick}
				alignItems="center"
				sx={{
					cursor: "pointer",
				}}
			>
				<Avatar alt="Remy Sharp" src="/images/logo/pair.svg" width="100%" />
				<KeyboardArrowDownIcon />
				<Typography variant="h5" color="secondary.main">
					${priceFormatted && priceFormatted}
				</Typography>
			</Stack>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				sx={{
					"& .MuiPopover-paper": {
						backgroundColor: (theme) => theme.palette.primary.background,
						color: (theme) => theme.palette.primary.contrastText,
						borderColor: (theme) => theme.palette.primary.border,
					},
				}}
			>
				<Stack spacing={2} p={2}>
					<Typography sx={{ p: 2, fontWeight: "bold" }}>
						Select Market
					</Typography>
					<MuiSearch options={pairs} />
					<Stack direction="row">
						<Chip
							label="All"
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
							}}
						/>
						<Chip
							label="USD"
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
							}}
						/>
						<Chip
							label="BTC"
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
							}}
						/>
					</Stack>
					<Stack>
						{pairs?.map((pair, index) => (
							<Stack
								key={index}
								direction="row"
								justifyContent="space-between"
								onClick={() => handleChange(pair)}
								sx={{
									cursor: "pointer",
									"&:hover": {
										backgroundColor: (theme) => theme.palette.primary.hover,
									},
								}}
							>
								<Avatar
									alt="Remy Sharp"
									src="/images/logo/pair.svg"
									width="100%"
								/>
								<Typography sx={{ p: 2, textAlign: "left" }}>
									{pair.symbol}
								</Typography>
								<Typography sx={{ p: 2 }}>{pair.lastPrice}</Typography>
								<Typography
									sx={
										pair.priceChangePercent > 0
											? { p: 2, color: "success.main" }
											: { p: 2, color: "error.main" }
									}
								>
									{pair.priceChangePercent > 0 ? "+" : ""}
									{pair.priceChangePercent}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Popover>
		</div>
	);
}
