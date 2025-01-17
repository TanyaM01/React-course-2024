import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] =useState({})
    //i want to call api here, jab yei hook load ho tb uss hook ko m call krun, ya uss api ko call krun -> useEffect
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        //hold data somewhere, if data stored in normal variable., then it will never get updated in ui so use useState
        .then((res) => setData(res[currency]) )
        console.log(data)
    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;