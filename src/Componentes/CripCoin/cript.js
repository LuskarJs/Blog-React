import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import "./cript.css";

const CripView = () => {
    const [cryptoCurrent, setCryptoCurrent] = useState([]);
    const [Search, setSearch] = useState([]);    
    const SearchPut = useRef(null);

        const handleSearch = (event) => {
            event.preventDefault();
            const value = SearchPut.current.value.toLowerCase();
            const ResultSearch = cryptoCurrent.filter(item => item.name.toLowerCase().includes(value) || item.symbol.toLowerCase().includes(value));

            setSearch(ResultSearch);
        }

    useEffect(() => {
        const FetchCrypto = async () => {
            try {
                const response = await axios.get("https://api.coincap.io/v2/assets");
                const Data = response.data.data;
                setCryptoCurrent(Data);
                localStorage.setItem('cryptoDados', JSON.stringify(Data));
            } catch (error) {
                console.error(error);
            }
        };

       const interval = setInterval(() => {
            FetchCrypto();
        }, 1500)
   

        const storedData = localStorage.getItem('cryptoDados');
        if(storedData) {
            const parseDado = JSON.parse(storedData);
            setCryptoCurrent(parseDado);
        } else {
            FetchCrypto();
        }   

        return () => {
            clearInterval(interval);
        }
    }, []);

    return(
        <section className="content-Crypto">
            <div className="title-cripto">
                <h2>Moedas Digitais</h2>
            </div>
            <div className="search-cript">
                <form>
                    <div className="input">
                        <input type="text" htmlFor="search" placeholder="Exemplo: Bitcoin, ETH" onChange={handleSearch} ref={SearchPut}/>
                    </div>
                </form>
            </div>
            <ul>
                {Search.length > 0 ? (
                    Search.map(crypto => (
                        <li key={crypto.id}>
                        <div className="info-coin">
                            <span className="rank">
                                {crypto.rank} -
                            </span>
                            <span className="symbol">
                                {crypto.symbol}
                            </span>
                            <div className="namePrice">
                                <p>{crypto.name} </p>
                                <span>
                                    {parseFloat(crypto.priceUsd).toLocaleString(undefined, {
                                    minimumFractionDigits: 2, 
                                    })}      
                                </span>
                            </div>
                        </div>
                        <div className="Percent">
                            {crypto.changePercent24Hr > 0 ? (
                            <span className="increase" style={{color: 'green'}}>
                                ↑ {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                            </span>) : (
                            <span className="decrease" style={{color: 'red'}}>
                                ↓ {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                            </span>)}
                            <p>
                                Em Circulação: 
                                <span>
                                    {parseFloat(crypto.supply).toLocaleString(undefined, {minimumFractionDigits: 2})}   
                                </span>
                            </p>
                        </div>
                        <div className="moreInfo">
                            <p>
                                Volume Negociado na Ultimas 24HRS
                                <span> {parseFloat(crypto.volumeUsd24Hr).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                            </p>
                            <p className="supply">
                                Quantitade em Circulação: <span>
                                    {parseFloat(crypto.supply).toLocaleString(undefined,{
                                        minimumFractionDigits: 2
                                    })}
                                </span>
                            </p>
                            <p className="supply">
                                Quantitade Maxima Que pode existir: <span>
                                    {parseFloat(crypto.maxSupply).toLocaleString(undefined,{
                                        minimumFractionDigits: 2
                                    })}
                                </span>
                            </p>
                            <button>                          
                                <a href={crypto.explorer} alt={crypto.name} target="_blank" rel="noreferrer">
                                Saiba Mais Aqui 
                                </a>                            
                            </button>
                        </div>
                        </li>
                    ))
                    ) : (cryptoCurrent.map((crypto) => (    
                        <li key={crypto.id}>
                            <div className="info-coin">
                                <span className="rank">
                                    {crypto.rank} -
                                </span>
                                <span className="symbol">
                                    {crypto.symbol}
                                </span>
                                <div className="namePrice">
                                    <p>{crypto.name} </p>
                                    <span>
                                        {parseFloat(crypto.priceUsd).toLocaleString(undefined, {
                                        minimumFractionDigits: 2, 
                                        })}      
                                    </span>
                                </div>
                            </div>
                            <div className="Percent">
                                {crypto.changePercent24Hr > 0 ? (
                                <span className="increase" style={{color: 'green'}}>
                                    ↑ {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                                </span>) : (
                                <span className="decrease" style={{color: 'red'}}>
                                    ↓ {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                                </span>)}
                                <p>
                                    Em Circulação: 
                                    <span>
                                        {parseFloat(crypto.supply).toLocaleString(undefined, {minimumFractionDigits: 2})}   
                                    </span>
                                </p>
                            </div>
                            <div className="moreInfo">
                                <p>
                                    Volume Negociado na Ultimas 24HRS
                                    <span> {parseFloat(crypto.volumeUsd24Hr).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                                </p>
                                <p className="supply">
                                    Quantitade em Circulação: <span>
                                        {parseFloat(crypto.supply).toLocaleString(undefined,{
                                            minimumFractionDigits: 2
                                        })}
                                    </span>
                                </p>
                                <p className="supply">
                                    Quantitade Maxima Que pode existir: <span>
                                        {parseFloat(crypto.maxSupply).toLocaleString(undefined,{
                                            minimumFractionDigits: 2
                                        })}
                                    </span>
                                </p>
                                <button>                          
                                    <a href={crypto.explorer} alt={crypto.name} target="_blank" rel="noreferrer">
                                    Saiba Mais Aqui 
                                    </a>                            
                                </button>
                            </div>
                        </li>
                    )))
                }     
            </ul>
        </section>
    );
}

export default CripView;