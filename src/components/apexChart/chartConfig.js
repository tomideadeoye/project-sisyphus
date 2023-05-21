import { Box, Button, Divider, Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../utils/context";

export default function ChartConfig() {
	const appContext = useContext(AppContext);
	const timeOptions = appContext.value.interval.startTimeOptions;
	const intervalOptions = appContext.value.interval.intervalOptions;
	const startTime = appContext.value.interval.startTime;
	const interval = appContext.value.interval.interval;

	const handleTime = (e) => {
		const time = e.currentTarget.value;
		appContext.setValue({
			...appContext.value,
			interval: {
				...appContext.value.interval,
				startTime: time,
			},
		});
	};

	const handleInterval = (e) => {
		const interval = e.currentTarget.value;
		appContext.setValue({
			...appContext.value,
			interval: {
				...appContext.value.interval,
				interval: interval,
			},
		});
	};

	return (
		<Stack spacing={2}>
			<Stack
				direction="row"
				alignItems="center"
				sx={{
					"& > Button": {
						fontSize: (theme) => theme.typography.body1.fontSize,
					},
				}}
				spacing={1}
				divider={
					<Divider
						orientation="vertical"
						flexItem
						sx={{ backgroundColor: "#353836" }}
					/>
				}
			>
				<Stack
					direction="row"
					sx={{
						"& > Button": {
							fontSize: (theme) => theme.typography.body1.fontSize,
							fontWeight: "light",
						},
					}}
				>
					<Button variant="text">Time</Button>
					{timeOptions?.map((timeOption) => {
						return (
							<Button
								variant="text"
								onClick={handleTime}
								value={timeOption}
								sx={{
									background: startTime == timeOption && "grey",
								}}
							>
								{timeOption}
							</Button>
						);
					})}
				</Stack>
				<Stack>
					<Box component="img" src="/images/icons/Candle Chart 1.svg" />
				</Stack>
				<Stack
					sx={{
						"& > Button": {
							fontSize: (theme) => theme.typography.body1.fontSize,
						},
					}}
				>
					<Button variant="text">Fx Indicators</Button>
				</Stack>
				<Stack direction="row" spacing={1}>
					<Box component="img" src="/images/icons/undo.png" />
					<Box component="img" src="/images/icons/redo.png" />
				</Stack>
			</Stack>

			<Stack
				direction="row"
				sx={{
					"& > Button": {
						fontSize: (theme) => theme.typography.body1.fontSize,
						fontWeight: "light",
					},
				}}
			>
				<Button variant="text">Interval</Button>
				{intervalOptions?.map((intervalOption) => {
					return (
						<Button
							variant="text"
							onClick={handleInterval}
							value={intervalOption}
							sx={{
								background: interval == intervalOption && "grey",
							}}
						>
							{intervalOption}
						</Button>
					);
				})}
			</Stack>
		</Stack>
	);
}
