import Box from "@mui/material/Box";
// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import React from "react";
import Stack from "@mui/material/Stack";
import { Avatar, Divider, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const NavItem = styled(Link)(({ theme }) => ({
	color: theme.palette.primary.main,
	textDecoration: "none",
	fontSize: theme.typography.body1.fontSize,
	fontWeight: 600,
	padding: "0.5rem 1rem",
}));

export const navItems = [
	{
		id: "Exchange",
		link: "/exchange",
		subnav: [],
	},
	{
		id: "Wallets",
		link: "/wallets",
		subnav: [],
	},
	{
		id: "Roqqu Hub",
		link: "/roqquhub",
		subnav: [],
	},
];

export default function Navigation() {
	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			justifyContent="space-between"
			alignItems="center"
			spacing={3}
			sx={{
				padding: "1rem 2rem",
			}}
		>
			<Stack
				direction="row"
				alignItems={"center"}
				spacing={3}
				divider={<Divider orientation="vertical" flexItem color="white" />}
			>
				<Link href="/">
					<Box
						component="img"
						src="/images/Fictional company logo.svg"
						alt="Logomark"
						width="auto"
						height={30}
					/>
				</Link>
				<Stack spacing={2} direction="row">
					{navItems.map((item) => (
						<NavItem key={item.id} href={item.link}>
							{item.id}
						</NavItem>
					))}
				</Stack>
			</Stack>

			<Stack direction="row" spacing={2} alignItems="center">
				<Stack
					direction="row"
					spacing={2}
					alignItems="center"
					sx={{
						backgroundColor: "#12171D",
						padding: "0.5rem 1rem",
						borderRadius: "0.7rem",
					}}
					// navigate to linkedin on click
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/tomide-adeoye-828604129/",
							"_blank"
						)
					}
				>
					<Avatar
						alt="Tomide Adeoye"
						src="/images/tompic.jpg"
						sx={{
							background: "linear-gradient(0deg, #DF9090, #DF9090)",
						}}
					/>
					<Typography variant="body1" component="div">
						Tomide Adeoye...
					</Typography>
					<KeyboardArrowRightIcon />
				</Stack>
				<Link href="/">
					<Box
						component="img"
						src="/images/logo/globe.svg"
						alt="Logomark"
						width="auto"
						height={25}
					/>
				</Link>
				<Link href="/">
					<Box
						component="img"
						src="/images/logo/logout.svg"
						alt="Logomark"
						width="auto"
						height={25}
					/>
				</Link>
			</Stack>
		</Stack>
	);
}
