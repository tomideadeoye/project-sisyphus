import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DetailBox from "./DetailBox";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
		"text-color": (theme) => theme.palette.primary.main,
	};
}

export default function TransactionAnalysis() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, eventValue) => {
		setValue(eventValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const channels = [
		"Open Orders",
		"Positions",
		"Order History",
		"Trade History",
	];

	return (
		<Box
			width="100%"
			sx={{
				background: (theme) => theme.palette.primary.background,
				color: (theme) => theme.palette.primary.main,
				fontSize: (theme) => theme.typography.body1,
			}}
		>
			<AppBar
				position="static"
				sx={{
					borderRadius: (theme) => theme.spacing(2),
					background: (theme) => theme.palette.primary.background,
					maxWidth: "700px",
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor={(theme) => theme.palette.secondary.main}
					variant="fullWidth"
					aria-label="full width tabs example"
					sx={{
						// background: (theme) => theme.palette.primary.background,
						fontSize: (theme) => theme.typography.body1,
					}}
				>
					{channels.map((channel) => (
						<Tab
							key={channel}
							label={channel}
							{...a11yProps(0)}
							sx={{
								color: (theme) => theme.palette.primary.main,
								fontSize: (theme) => theme.typography.body1,
							}}
						/>
					))}
				</Tabs>
			</AppBar>

			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				{channels.map((channel, index) => (
					<TabPanel
						key={channel}
						value={value}
						index={index}
						dir={theme.direction}
					>
						<DetailBox channel={channel} />
					</TabPanel>
				))}
			</SwipeableViews>
		</Box>
	);
}
