/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState, useEffect } from "react";
const axios = require("axios");

// create the context
export const AppContext = createContext();
const BASE_URL = "https://api.binance.com";

// create a provider component
export const AppContextProvider = ({ children }) => {
	const [value, setValue] = useState({
		tradingPairs: ["BTCUSDT"],
		currentPair: {
			symbol: "BTCUSDT",
			historicals: [],
		},
	});

	async function getTradingPairs() {
		const response = await axios.get(`${BASE_URL}/api/v3/exchangeInfo`);
		const tradingPairs = response.data.symbols.map((symbol) => symbol.symbol);
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
	const interval = "1d"; // 1 day interval
	const startTime = "1609459200000"; // start time in milliseconds since epoch
	// now to epoch
	const endTime = Date.now(); // end time in milliseconds since epoch
	useMemo(() => {
		const getHistoricals = async () => {
			const historicals = `${BASE_URL}/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`;
			const response = await axios.get(historicals);
			setValue((prev) => ({
				...prev,
				historicals: response.data,
			}));
		};
		getHistoricals();
	}, [symbol]);

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
