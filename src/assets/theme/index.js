import { createTheme } from "@mui/material";

export default createTheme({
	typography: {
		fontFamily: "Poppins, sans-serif",
		fontSize: 18,
		h1: {
			fontFamily: "Poppins",
			fontStyle: "normal",
			fontWeight: "600",
			fontSize: "24px",
			lineHeight: "36px",
			color: "#333333",
		},
		h2: {
			fontSize: "4rem",
		},
		h3: {
			fontFamily: "Poppins",
			fontStyle: "normal",
			fontWeight: 500,
			fontSize: "18px",
			lineHeight: "27px",
			color: "#008080",
			textAlign: "center",
		},
		/* Tile */

		h4: {
			fontSize: "16px",
			fontWeight: 400,
			color: "#333333",
			lineHeight: "24px",
		},
		h5: {
			fontSize: "2rem",
		},
		h6: {
			fontSize: "1.6rem",
			fontWeight: 100,
			color: "#fff",
		},

		button: {
			fontSize: "1rem",
			fontWeight: 500,
		},
	},
	palette: {
		primary: {
			main: "#b4abf4",
			light: "#f5f6f9",
			dark: "#7c74e9",
		},

		white: {
			main: "#fff",
		},

		green: {
			100: "#D7ECEC",
			200: "#489494",
		},
		background: {
			default: "#F3F5FC",
		},
	},
	spacing: ["0px", "24px", "32px", "40px", "80px", "160px", "334px", "600px"],
	padding: {
		xs3: "9px",
		xs2: "10px",
		xs: "24px",
		sm: "27px",
		md: "28px",
		lg: "32px",
		xl: "40px",
		xl2: "64px",
	},
	borderRadius: {
		sm: "8px",
		md: "12px",
	},

	overrides: {
		MuiButton: {
			root: {
				padding: 24,
			},
		},
		MuiCard: {
			root: {
				borderRadius: 12,
			},
		},
		MuiPaper: {
			root: {
				padding: 32,
			},
		},
	},

	links: {
		textDecoration: "none",
		color: "inherit",
	},
});
