import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";

export default function ChartConfig({ setTime }) {
	const handleTime = (e) => {
		setTime(e.target.value);
		console.log(e.target.value);
	};

	return (
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
					sx={{ backgroundColor: "white" }}
				/>
			}
		>
			<Stack
				direction="row"
				sx={{
					"& > Button": {
						fontSize: (theme) => theme.typography.body1.fontSize,
					},
				}}
			>
				<Button variant="text" onClick={handleTime}>
					Time
				</Button>
				<Button onClick={handleTime} variant="text" value="1H">
					1H
				</Button>
				<Button onClick={handleTime} variant="text" value="2H">
					2H
				</Button>
				<Button onClick={handleTime} variant="text" value="4H">
					4H
				</Button>
				<Button onClick={handleTime} variant="text" value="1D">
					1D
				</Button>
				<Button onClick={handleTime} variant="text" value="1W">
					1W
				</Button>
				<Button onClick={handleTime} variant="text" value="1M">
					1M
				</Button>
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
	);
}
