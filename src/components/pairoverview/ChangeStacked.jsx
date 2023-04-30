/* eslint-disable react/prop-types */
import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

export default function ChangeStacked({ title, change, changePercent }) {
	return (
		<Stack
			justifyContent="flex-start"
			width="100%"
			ml={2}
			spacing={1}
			sx={{
				background: (theme) => theme.palette.primary.background,
				borderColor: (theme) => `1px solid ${theme.palette.primary.border}`,
			}}
		>
			<Stack direction="row" spacing={1} alignItems="center">
				<Box
					component="img"
					src="/images/icons/clock.svg"
					alt="Logomark"
					width="auto"
					height={25}
				/>
				<Typography variant="body1" fontWeight="bold">
					{title}
				</Typography>
			</Stack>
			<Stack direction={"row"} spacing={1}>
				<Typography variant="body1" fontWeight="bold" color="secondary.main">
					{change}
				</Typography>
				<Typography variant="body1" fontWeight="bold" color="secondary.main">
					{changePercent && changePercent + "%"}
				</Typography>
			</Stack>
		</Stack>
	);
}
