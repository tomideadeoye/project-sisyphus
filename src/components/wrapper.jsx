/* eslint-disable react/prop-types */
import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";

export default function Wrapper({ children }) {
	return (
		<Box>
			<Stack
				justifyContent="space-between"
				p={2}
				sx={{
					background: (theme) => theme.palette.primary.background,
					border: (theme) => `1px solid ${theme.palette.primary.border}`,
					borderRadius: "1rem",
				}}
			>
				{children}
			</Stack>
		</Box>
	);
}
