/* eslint-disable react/prop-types */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AppContext } from "../../../utils/context";
import { useContext } from "react";

function createData(price, amount, total) {
	return { price, amount, total };
}

const rowHeading = ["Price\n", "Amount\n", "Total"];
export default function DataTable({ query, color }) {
	const data = useContext(AppContext)?.value.historicals;

	const rows = [];

	data?.forEach((element) => {
		rows.push(createData(element[4], element[8], element[5]));
	});

	return (
		<TableContainer
			sx={{
				color: (theme) => theme.palette.primary.main,
			}}
		>
			<Table aria-label="simple table" size="small">
				<TableHead>
					<TableRow>
						{rowHeading.map((heading) => (
							<TableCell
								key={heading}
								align="right"
								sx={{
									color: (theme) => theme.palette.primary.main,
									fontSize: (theme) => theme.typography.body1,
								}}
							>
								{heading}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows?.slice(0, query).map((row) => (
						<TableRow
							key={row.name}
							sx={{
								"&:last-child td, &:last-child th": { border: 0 },
								lineHeight: "0.2",
								backgroundColor: {
									// index of row.price is greater than the index of the previous row.price then color is green else red
									backgroundColor:
										row.price > rows[rows.indexOf(row) - 1]?.price
											? "green"
											: "red",
								},
							}}
						>
							<TableCell
								align="right"
								sx={{
									color: (theme) => theme.palette.primary.main,
									fontSize: (theme) => theme.typography.body2,
									lineHeight: "0.2",
								}}
							>
								{parseFloat(row.price).toFixed(2)}
							</TableCell>
							<TableCell
								align="right"
								sx={{
									color: (theme) => theme.palette.primary.main,
									fontSize: (theme) => theme.typography.body2,
								}}
							>
								{parseFloat(row.amount).toFixed(2)}
							</TableCell>
							<TableCell
								align="right"
								sx={{
									color: (theme) => theme.palette.primary.main,
									fontSize: (theme) => theme.typography.body2,
								}}
							>
								{parseFloat(row.total).toFixed(2)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
