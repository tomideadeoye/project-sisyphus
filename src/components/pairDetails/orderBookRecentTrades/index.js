import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataTable from "./table";
import { MenuItem, Select, Stack } from "@mui/material";
import TableRowsIcon from "@mui/icons-material/TableRows";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

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

export default function OrderBookRecentTrades() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [query, setQuery] = useState(10);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const handleQueryChange = (event) => {
		const newValue = event.target.value;
		setQuery(newValue);
	};

	return (
		<Box
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
					<Tab
						label="Order Book"
						{...a11yProps(0)}
						sx={{
							color: (theme) => theme.palette.primary.main,
							fontSize: (theme) => theme.typography.body1,
						}}
					/>
					<Tab
						label="Recent Trades"
						{...a11yProps(1)}
						sx={{
							color: (theme) => theme.palette.primary.main,
							fontSize: (theme) => theme.typography.body1,
						}}
					/>
				</Tabs>
			</AppBar>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				padding={(theme) => theme.spacing(2)}
			>
				<Stack direction="row">
					<TableRowsIcon fontSize="small" />
					<TableRowsIcon fontSize="small" />
					<TableRowsIcon fontSize="small" />
				</Stack>

				{MUISelect(handleQueryChange, query)}
			</Stack>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<DataTable query={query} />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					No recent trades
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}
function MUISelect(handleQueryChange, query) {
	return (
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={query}
			label="select"
			IconComponent={() => (
				<KeyboardArrowDownIcon
					sx={{ color: (theme) => theme.palette.primary.main }}
				/>
			)}
			onChange={handleQueryChange}
			sx={{
				background: (theme) => theme.palette.primary.accent1,
				"& .MuiSelect-select": {
					paddingTop: "6px",
					paddingBottom: "6px",
					lineHeight: "1.2",
					fontSize: "0.6rem",

					"& .MuiSelect-icon": {
						top: "calc(90% - 12px)",
						color: (theme) => theme.palette.primary.main,
						fill: (theme) => theme.palette.primary.main,
						width: "24px",
						height: "24px",
						background: (theme) => theme.palette.primary.accent1,
					},
					color: (theme) => theme.palette.primary.main,
				},
			}}
		>
			{/* loop from 10 to 100 in 10 incerements */}
			{Array.from(Array(10).keys()).map((i) => (
				<MenuItem key={i} value={i * 10}>
					{i * 10}
				</MenuItem>
			))}
		</Select>
	);
}
