import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#fff",
			background: "#20252B",
			border: "#262932",
			accent1: "#353945",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#1E1E1E",
		},
	},
	typography: {
		// fontFamily: roboto.style.fontFamily,
		h1: {
			fontSize: "3rem",
			fontWeight: "bold",
			lineHeight: 1.2,
		},
		h2: {
			fontSize: "2.5rem",
			fontWeight: "bold",
			lineHeight: 1.2,
		},
		h3: {
			fontSize: "2rem",
			fontWeight: "bold",
			lineHeight: 1.2,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: "bold",
			lineHeight: 1.2,
		},

		h5: {
			fontSize: "1.2rem",
			fontWeight: "bold",
			lineHeight: 1.2,
		},

		body1: {
			fontSize: "0.7rem",
			lineHeight: 1.5,
		},
		body2: {
			fontSize: "0.5rem",
			lineHeight: 1.5,
		},
		button: {
			textTransform: "none",
			fontWeight: "bold",
			fontSize: "1rem",
			padding: "0.5rem 1rem",
		},
	},
	shape: {
		borderRadius: 8, // default border radius
		buttonBorderRadius: 3, // larger border radius for buttons
		cardBorderRadius: 16, // slightly smaller border radius for cards
		avatarBorderRadius: "50%", // circular border radius for avatars
	},
	spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512],
});

export default theme;
