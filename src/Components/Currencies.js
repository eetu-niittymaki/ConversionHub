import React, { useState, useEffect, useRef } from "react"
import axios from "axios";

const  Currencies = () => {
    const [amount, setAmount] = useState()
    const [rates, setRates] = useState(null)
    const [ratesFetched, setRatesFetched] = useState(false);
    const [origCurrency, setOrigCurrency] = useState("USD")
    const [finalCurrency, setFinalCurrency] = useState("EUR")
    let origCurrencyRef = useRef("USD")
    let finalCurrencyRef = useRef("EUR")
    let newAmount = useRef()
    let conversion = useRef()

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
                let data = response.data.conversion_rates
                let date = Date.now()
                const obj = {"rates": data, "timestamp": date}
                setRates(data)
                localStorage.setItem("rates", JSON.stringify(obj))
                setRatesFetched(true)
            }
        }
    }

    const calculateConversion = async () => {
        conversion.current = (rates[finalCurrencyRef.current] / rates[origCurrencyRef.current]) * newAmount.current
    }

    useEffect(() => {
        const localRates = JSON.parse(localStorage.getItem("rates"))

        if (localRates) {
            if (Date.now() - localRates.timestamp >= 60000 * 60 * 6) {
                setRatesFetched(false)
                getRates()
            } else {
                setRates(localRates.rates)
            }
        } else {
            getRates()
        }
    }, [])
    
    return(
        <div>
            <div>   
                <h1>Currencies</h1>
                <div>
                    <input type="number" 
                        value={amount} 
                        id="amount"
                        style={{minHeight:"5vh", marginBottom:"10%"}}
                        onChange={(e) => handleChange(e)}/>
                </div>
                <div style={{display: "flex", flexDirection:"row", justifyContent: "center"}}>
                <button
                        onClick={() => { setOrigCurrency(finalCurrency) ;
                                         setFinalCurrency(origCurrency) ;
                                         origCurrencyRef.current = finalCurrency ;
                                         finalCurrencyRef.current = origCurrency ;
                                         calculateConversion()}}>
                    <img src="./arrow.png" alt="Change"/>
                </button> 
            </div>
                <select name="origCurrency"
                        id="origCurrency"
                        value={origCurrency}
                        style={{marginRight: "5vh", minWidth:"15vh", minHeight:"5vh", fontWeight:"bold" }}
                        onChange={(e) => { setOrigCurrency(e.target.value) ; 
                                            origCurrencyRef.current = e.target.value ; 
                                            calculateConversion() }}>
                        {rates && Object.keys(rates).filter(currency => currency !== finalCurrency).map((currency, index) => (
                            <option key={index} value={currency} >
                                {currency}
                            </option>
                        ))}
                </select>
                <label>To:</label>
                <select id="finalCurrency"
                        value={finalCurrency}
                        style={{marginLeft: "5vh", minWidth:"15vh", minHeight:"5vh", fontWeight:"bold"}}
                        onChange={(e) => { setFinalCurrency(e.target.value) ; 
                                            finalCurrencyRef.current = e.target.value ; 
                                            calculateConversion() }}>
                    {rates &&  Object.keys(rates).filter(currency => currency !== origCurrency).map((currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                    ))}
                </select>
            </div>
                <h1>{(amount) ? `${amount} ${origCurrency} = ${conversion.current} ${finalCurrency}` : ""}</h1>
        </div>
    )
}

export default Currencies
