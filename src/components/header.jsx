import { Avatar, Stack } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	loans: {
		color: "#fff",
		fontSize: "1.5rem",
		fontWeight: "normal",
	},
	online: {
		color: "#fff",
		fontSize: "0.7rem",
		fontWeight: "normal",
	},
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

export default function Header() {
	const styles = useStyles();
	return (
		<a
			href="https://www.linkedin.com/in/tomide-adeoye-828604129/"
			rel="noreferrer"
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<Stack
				alignItems="center"
				p={3}
				direction="row"
				sx={{
					backgroundColor: "#075E54",
				}}
				spacing={4}
			>
				<StyledBadge
					overlap="circular"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					variant="dot"
				>
					<Avatar
						alt="Tomide Adeoye"
						src="./images/twitter.jpeg"
						sx={{ width: 70, height: 70, border: "2px solid #fff" }}
					/>
				</StyledBadge>
				<Stack spacing={0.5}>
					<h1 className={styles.loans}>MathChat with Tomide</h1>
					<h6 className={styles.online}>online | Type in your math issues</h6>
				</Stack>
			</Stack>
		</a>
	);
}
