import { Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function DetailBox({ channel }) {
	return (
		<Stack
			spacing={2}
			justifyContent="center"
			alignItems="center"
			sx={{
				height: "60vh",
			}}
		>
			<Typography variant="h5">{channel}</Typography>
			<Typography variant="body1">{`
            
            No open ${channel.toLowerCase()} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.
            `}</Typography>
		</Stack>
	);
}

DetailBox.propTypes = {
	channel: PropTypes.string.isRequired,
};
