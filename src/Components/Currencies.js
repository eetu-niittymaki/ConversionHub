import React, { useState, useEffect } from "react"
import axios from "axios";

const  Currencies = () => {
    const [amount, setAmount] = useState("")
    const [rates, setRates] = useState()
    const [ratesFetched, setRatesFetched] = useState(false);
    const [origCurrency, setOrigCurrency] = useState("USD")
    const [finalCurrency, setFinalCurrency] = useState("USD")
    const [conversion, setConversion] = useState()

    console.log(conversion)

    const handleChange = e => {
        setAmount(e.target.value)
    }

    const getRates = async () => {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`)
        if (response.data.result === "success") {
            setRates(response.data.conversion_rates)
            setRatesFetched(true)
        }
    }

    const calculateConversion = async () => {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${origCurrency}`)
        const fetchedRates = response.data.conversion_rates;
        const CurrencyRate = fetchedRates[finalCurrency];
        const output = amount * CurrencyRate;
        setConversion(output);
    }

    useEffect(() => {
      getRates()
    }, [])

    return(
        <div>
            <div>   
                <label>From:</label>
                <select name="origCurrency"
                        id="origCurrency"
                        value={origCurrency}
                        onChange={(e) => setOrigCurrency(e.target.value)}>
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
            <form>
                <label>
                    Amount: <input type="text" value={amount} onChange={(e) => {handleChange(e) ; calculateConversion()}}/>
                </label>
            </form>
            <div class="input-to">
      <label>To:</label>
      <select id="finalCurrency"
              value={finalCurrency}
              onChange={(e) => setFinalCurrency(e.target.value)}>
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
            <h1>Conversion: {amount !== "" ? conversion  : ""}</h1>
        </div>
    )

}

export default Currencies