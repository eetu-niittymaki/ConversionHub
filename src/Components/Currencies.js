import React, { useState, useEffect, useRef } from "react"
import axios from "axios";

const  Currencies = () => {
    const [amount, setAmount] = useState(0)
    const [rates, setRates] = useState()
    const [ratesFetched, setRatesFetched] = useState(false);
    const [origCurrency, setOrigCurrency] = useState("USD")
    const [finalCurrency, setFinalCurrency] = useState("USD")
    let newAmount = useRef(0)
    let conversion = useRef(0)

    const apiKeys = [ 
                process.env.REACT_APP_API_KEY1, 
                process.env.REACT_APP_API_KEY2, 
                process.env.REACT_APP_API_KEY3, 
                process.env.REACT_APP_API_KEY4, 
                process.env.REACT_APP_API_KEY5,
            ]

    const randKey = () => {
        return Math.floor(Math.random() * apiKeys.length)
    }

    const handleChange = e => {
        setAmount(e.target.value)
        newAmount.current = e.target.value
        calculateConversion()
    }

    const getRates = async () => {
        if (ratesFetched === false) {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKeys[randKey()]}/latest/USD`)
            if (response.data.result === "success") {
                setRates(response.data.conversion_rates)
                setRatesFetched(true)
            }
        }
    }

    const calculateConversion = async () => {
        conversion.current = (rates[origCurrency] / rates[finalCurrency]) * newAmount.current
    }

    useEffect(() => {
        const interval = setInterval(() => { 
            setRatesFetched(false)
            getRates()
        }, 60000 * 60 * 16)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            getRates()
        }, 500)
    }, [])

    return(
        <div>
            <div>   
                <label>From: </label>
                <select name="origCurrency"
                        id="origCurrency"
                        value={origCurrency}
                        onChange={(e) => { setOrigCurrency(e.target.value) ;  calculateConversion()}}>
                        {ratesFetched ? (
                            Object.keys(rates).map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))
                        ) : (
                            <option defaultValue>USD</option>
                        )}
                </select>
            </div>
            <div>
                <label>Amount: </label>
                <input type="number" 
                       value={amount} 
                       id="amount"
                       onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label>To:</label>
                <select id="finalCurrency"
                        value={finalCurrency}
                        onChange={(e) => { setFinalCurrency(e.target.value) ; calculateConversion() }}>
                    {ratesFetched ? (
                        Object.keys(rates).map((currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                        ))
                    ) : (
                    <option defaultValue>EUR</option>
                    )}
                </select>
            </div>
                <h1>Conversion: {conversion.current}</h1>
        </div>
    )

}

export default Currencies