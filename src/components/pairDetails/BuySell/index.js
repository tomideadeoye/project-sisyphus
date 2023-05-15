import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
	Button,
	Checkbox,
	Chip,
	Divider,
	FormControlLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Wrapper from "../../wrapper";

const ColorButton = styled(Button)(() => ({
	color: "white",
	background:
		"linear-gradient(90deg, #483BEB 0%, #7847E1 47.92%, #DD568D 96.35%)",
	"&:hover": {
		backgroundColor: "white",
	},
}));

const ModTextField = styled(TextField)`
	color: white;
	bordercolor: white;
`;

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

export default function BuySell() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [query, setQuery] = useState(10);

	const handleChange = (event) => {
		const newValue = event.target.value;
		setQuery(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const channels = ["Buy", "Sell"];
	const options = ["Limit", "Market", "Stop Limit"];
	const textInput = ["Limit Price", "Amount", "Type"];

	return (
		<Box
			sx={{
				color: (theme) => theme.palette.primary.main,
				fontSize: (theme) => theme.typography.body1,
				width: {
					md: "100%",
					lg: "20%",
				},
			}}
		>
			<Wrapper>
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
				<Stack
					justifyContent="space-between"
					alignItems="center"
					padding={(theme) => theme.spacing(2)}
				>
					<Stack direction="row" spacing={1} justifyContent="space-between">
						{options.map((option) => (
							<Chip
								key={option}
								label={option}
								size="small"
								sx={{
									color: (theme) => theme.palette.primary.main,
									"&:hover": {
										background: (theme) => theme.palette.primary.accent1,
									},
									fontSize: (theme) => theme.typography.body1,
								}}
							/>
						))}
					</Stack>
				</Stack>

				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={value}
					onChangeIndex={handleChangeIndex}
				>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<Stack
							alignItems="center"
							justifyContent="space-between"
							divider={<Divider flexItem color="white" />}
							spacing={2}
						>
							<Stack width="100%">
								{textInput.map((input) => (
									<ModTextField
										key={input}
										id="outlined-basic"
										label={input}
										margin="dense"
										fullWidth
										placeholder={input}
										InputProps={{
											style: {
												color: "white",
												borderColor: "white",
											},
										}}
										InputLabelProps={{
											style: {
												color: "white",
											},
										}}
										variant="outlined"
										sx={{
											"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
												{
													borderColor: "white",
												},
											"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
												{
													borderColor: "white",
												},
											"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
												{
													borderColor: "white",
												},
											"& .MuiOutlinedInput-input": {
												color: "white",
											},
											"&:hover .MuiOutlinedInput-input": {
												color: "white",
											},
											"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
												{
													color: "white",
												},
											"& .MuiInputLabel-outlined": {
												color: "white",
											},
											"&:hover .MuiInputLabel-outlined": {
												color: "white",
											},
										}}
									/>
								))}
								<FormControlLabel
									control={
										<Checkbox defaultChecked color="info" size="small" />
									}
									label="Post only"
									sx={{
										fontSize: (theme) => theme.typography.body2,
									}}
								/>
								<Stack
									width="100%"
									direction="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Typography variant="body2">Total</Typography>
									<Typography variant="body2">0.00</Typography>
								</Stack>

								<ColorButton
									size="small"
									variant="contained"
									sx={{
										fontSize: (theme) => theme.typography.body1,
									}}
								>
									Buy BTC
								</ColorButton>
							</Stack>

							<Stack width="100%" spacing={1}>
								<Stack
									width="100%"
									direction="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Typography variant="body2">Total account value</Typography>
									{MUISelect(handleChange, query)}
								</Stack>
								<Typography textAlign="left" variant="h5" width="100%">
									0.00
								</Typography>
								<Stack
									width="100%"
									direction="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Typography variant="body2">Open Order</Typography>
									<Typography variant="body2">Available</Typography>
								</Stack>
								<Stack
									width="100%"
									direction="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Typography textAlign="left" variant="h5" width="100%">
										0.00
									</Typography>
									<Typography textAlign="right" variant="h5" width="100%">
										0.00
									</Typography>
								</Stack>
								<Button
									size="small"
									variant="contained"
									sx={{
										fontSize: (theme) => theme.typography.body1,
										maxWidth: (theme) => theme.spacing(20),
										background: "#2764FF",
										color: "white",
									}}
								>
									Deposit
								</Button>
							</Stack>
						</Stack>
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						No recent trades
					</TabPanel>
				</SwipeableViews>
			</Wrapper>
		</Box>
	);
}
function MUISelect(handleChange, query) {
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
			onChange={handleChange}
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
