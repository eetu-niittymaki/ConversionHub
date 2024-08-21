import React, { useState, useEffect, useRef } from "react"
import axios from "axios";
import Form from "./Form";
import ChangeButton from "./ChangeButton";
import FirstSelect from "./FirstSelect";
import LastSelect from "./LastSelect";

const  Currencies = () => {
    const [amount, setAmount] = useState()
    const [rates, setRates] = useState(null)
    const [ratesFetched, setRatesFetched] = useState(false);
    const [origCurrency, setOrigCurrency] = useState("USD")
    const [finalCurrency, setFinalCurrency] = useState("EUR")
    let origCurrencyRef = useRef("USD")
    let finalCurrencyRef = useRef("EUR")
    let amountRef = useRef()
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

    const roundNum = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    const handleChange = e => {
        let value = e.target.value
        setAmount(value)
        amountRef.current = value
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
        conversion.current = (rates[finalCurrencyRef.current] / rates[origCurrencyRef.current]) * amountRef.current
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
            <Form amount={amount}
                  name={"amount"}
                  title={"Amount"}
                  handleChange={(e) => handleChange(e)}
            />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%", maxWidth: "27vw"}}>
                <FirstSelect firstSlection={origCurrency}
                            amount={amount}
                            units={rates}
                            handleChange={(e) => { setOrigCurrency(e.target.value) ; 
                                                    origCurrencyRef.current = e.target.value ; 
                                                    calculateConversion()}}
                />
                <ChangeButton functions={() => { setOrigCurrency(finalCurrency) ;
                                                setFinalCurrency(origCurrency) ;
                                                origCurrencyRef.current = finalCurrency ;
                                                finalCurrencyRef.current = origCurrency ;
                                                calculateConversion()}}
                />
                <LastSelect lastSelection={finalCurrencyRef.current}
                            firstSelection={origCurrencyRef.current}
                            amount={amountRef.current}
                            units={rates}
                            type={1}
                            handleChange={(e) => { setFinalCurrency(e.target.value) ; 
                                                finalCurrencyRef.current = e.target.value ; 
                                                calculateConversion() }}
                />
            </div>
            <h3>{amount ? `${roundNum(amountRef.current * (rates[finalCurrencyRef.current] / rates[origCurrencyRef.current]))} ${finalCurrency}`: ""}</h3>  
        </div>
        
        </div>
    )
}

export default Currencies
