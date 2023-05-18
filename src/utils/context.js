/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";

// create the context
export const AppContext = createContext();
const BASE_URL = "https://api.binance.com";

export const AppContextProvider = ({ children }) => {
	const [value, setValue] = useState({
		tradingPairs: ["BTCUSDT"],
		currentPair: {
			symbol: "BTCUSDT",
			historicals: null,
		},
		interval: {
			interval: "1h",
			startTime: "1d",
			intervalOptions: ["1m", "1h", "2h", "4h", "1d", "1w", "1M"],
			startTimeOptions: ["1h", "1d", "1w", "1M", "1y", "5y", "max"],
		},
	});
	console.log("value", value.interval.startTime);

	async function getTradingPairs() {
		const response = await axios.get(`${BASE_URL}/api/v3/ticker/24hr`);
		const tradingPairs = response?.data;
		console.log("tradingPairs", tradingPairs);
		return tradingPairs;
	}

	async function getPairPrice(pair) {
		const response = await axios.get(`${BASE_URL}/api/v3/ticker`, {
			params: {
				symbol: pair.toUpperCase(),
			},
		});
		return response.data;
	}
	const symbol = value.currentPair.symbol; // trading pair

	const startTime = () => {
		const now = new Date();
		if (value.interval.startTime == "1h") {
			return now.setHours(now.getHours() - 1);
		} else if (value.interval.startTime == "1d") {
			return now.setHours(now.getHours() - 24);
		} else if (value.interval.startTime == "1w") {
			return now.setHours(now.getHours() - 168);
		} else if (value.interval.startTime == "1M") {
			return now.setHours(now.getHours() - 720);
		} else if (value.interval.startTime == "1y") {
			return now.setHours(now.getHours() - 8760);
		} else if (value.interval.startTime == "5y") {
			return now.setHours(now.getHours() - 43800);
		} else if (value.interval.startTime == "max") {
			return "";
		}
	};

	// now to epoch
	const endTime = Date.now(); // end time in milliseconds since epoch
	useMemo(() => {
		const getHistoricals = async () => {
			const historicals = `${BASE_URL}/api/v3/klines?symbol=${symbol}&interval=${
				value.interval.interval
			}&startTime=${startTime()}`;
			const response = await axios.get(historicals);
			setValue((prev) => ({
				...prev,
				historicals: response.data,
			}));
		};
		getHistoricals();
	}, [symbol, value]);

	useEffect(() => {
		const getPairs = async () => {
			const response = await getTradingPairs();
			setValue((prev) => ({
				...prev,
				tradingPairs: response,
			}));
		};
		getPairs();
	}, []);

	useEffect(() => {
		getPairPrice(value.currentPair.symbol).then((data) => {
			setValue((prev) => ({
				...prev,
				currentPair: data,
			}));
		});
	}, [value.currentPair.symbol]);

	return (
		<AppContext.Provider value={{ value, setValue }}>
			{children}
		</AppContext.Provider>
	);
};
