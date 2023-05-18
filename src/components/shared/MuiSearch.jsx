import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function MuiSearch({ options }) {
	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={options?.map((option) => option.symbol)}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Search input"
						InputProps={{
							...params.InputProps,
						}}
						InputLabelProps={{
							style: {
								color: "white",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
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
							"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
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
				)}
			/>
		</Stack>
	);
}
