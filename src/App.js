import { Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Navigation from "./components/navigation";
import { PairOverview } from "./components/pairoverview";
import { PairDetails } from "./components/pairDetails";
import { TransactionHistory } from "./components/transactionHistory";
import ChartComponent from "./components/pairDetails/chart";

const useStyles = makeStyles(() => ({
	container: {
		justifyContent: "space-between",
		background: "#1E1E1E",
		color: "#fff",
	},
}));

const App = () => {
	const styles = useStyles();

	return (
		<Stack className={styles.container} spacing={1}>
			<Navigation />
			<PairOverview />
			<PairDetails />
			<TransactionHistory />
			<ChartComponent />
		</Stack>
	);
};

export default App;
