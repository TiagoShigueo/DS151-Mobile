# Retornos de cada endpoint da API Alpha Vantage

[Documentação](https://www.alphavantage.co/documentation/)

## TIME SERIES DAILY

This API returns raw (as-traded) daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the global equity specified, covering 20+ years of historical data

> https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo

```
{
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-05-06",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2024-05-06": {
            "1. open": "166.5000",
            "2. high": "168.6700",
            "3. low": "166.3800",
            "4. close": "168.6100",
            "5. volume": "4222266"
        },
        "2024-05-03": {
            "1. open": "165.0000",
            "2. high": "166.6100",
            "3. low": "164.9200",
            "4. close": "165.7100",
            "5. volume": "3400405"
        },
        (...)
    }
}
```

## TIME_SERIES_MONTHL

> https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo

```
{
    "Meta Data": {
        "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-05-06",
        "4. Time Zone": "US/Eastern"
    },
    "Monthly Time Series": {
        "2024-05-06": {
            "1. open": "165.6900",
            "2. high": "168.6700",
            "3. low": "162.6200",
            "4. close": "168.6100",
            "5. volume": "15483484"
        },
        "2024-04-30": {
            "1. open": "190.0000",
            "2. high": "193.2800",
            "3. low": "165.2605",
            "4. close": "166.2000",
            "5. volume": "98297181"
        },
        (...)
    }
}
```

## TIME_SERIES_MONTHLY_ADJUSTED

> https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo

Exemplo com o HGBS11

```
{
    "Meta Data": {
        "1. Information": "Monthly Adjusted Prices and Volumes",
        "2. Symbol": "hgbs11.sa",
        "3. Last Refreshed": "2024-05-27",
        "4. Time Zone": "US/Eastern"
    },
    "Monthly Adjusted Time Series": {
        "2024-05-27": {
            "1. open": "221.2000",
            "2. high": "222.4900",
            "3. low": "217.4500",
            "4. close": "218.0000",
            "5. adjusted close": "218.0000",
            "6. volume": "349669",
            "7. dividend amount": "0.0000"
        },
        "2024-04-30": {
            "1. open": "227.6100",
            "2. high": "229.8300",
            "3. low": "221.1000",
            "4. close": "222.6900",
            "5. adjusted close": "220.9400",
            "6. volume": "409965",
            "7. dividend amount": "1.7500"
        },
        "2024-03-28": {
            "1. open": "229.0100",
            "2. high": "231.9900",
            "3. low": "225.0000",
            "4. close": "228.8900",
            "5. adjusted close": "227.1400",
            "6. volume": "455178",
            "7. dividend amount": "1.7500"
        },
        (...)
    }
}
```

## GLOBAL_QUOTE

A lightweight alternative to the time series APIs, this service returns the latest price and volume information for a ticker of your choice.

> https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo

```
{
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "166.5000",
        "03. high": "168.6700",
        "04. low": "166.3800",
        "05. price": "168.6100",
        "06. volume": "4222266",
        "07. latest trading day": "2024-05-06",
        "08. previous close": "165.7100",
        "09. change": "2.9000",
        "10. change percent": "1.7500%"
    }
}
```

## SYMBOL_SEARCH

> https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo

```
{
    "bestMatches": [
        {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO2.FRK",
            "2. name": "TESCO PLC ADR/1 LS-05",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        },
        {
            "1. symbol": "TCO0.FRK",
            "2. name": "TESCO PLC LS-0633333",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        }
    ]
}
```

## Company Overview

This API returns the company information, financial ratios, and other key metrics for the equity specified. Data is generally refreshed on the same day a company reports its latest earnings and financials.

> https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo

```
{
    "Symbol": "IBM",
    "AssetType": "Common Stock",
    "Name": "International Business Machines",
    "Description": "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
    "CIK": "51143",
    "Exchange": "NYSE",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "TECHNOLOGY",
    "Industry": "COMPUTER & OFFICE EQUIPMENT",
    "Address": "1 NEW ORCHARD ROAD, ARMONK, NY, US",
    "FiscalYearEnd": "December",
    "LatestQuarter": "2024-03-31",
    "MarketCapitalization": "154885652000",
    "EBITDA": "14380000000",
    "PERatio": "19.12",
    "PEGRatio": "4.2",
    "BookValue": "25.32",
    "DividendPerShare": "6.64",
    "DividendYield": "0.0396",
    "EPS": "8.82",
    "RevenuePerShareTTM": "67.94",
    "ProfitMargin": "0.132",
    "OperatingMarginTTM": "0.102",
    "ReturnOnAssetsTTM": "0.0458",
    "ReturnOnEquityTTM": "0.362",
    "RevenueTTM": "62068998000",
    "GrossProfitTTM": "32688000000",
    "DilutedEPSTTM": "8.82",
    "QuarterlyEarningsGrowthYOY": "0.701",
    "QuarterlyRevenueGrowthYOY": "0.015",
    "AnalystTargetPrice": "168.53",
    "AnalystRatingStrongBuy": "4",
    "AnalystRatingBuy": "4",
    "AnalystRatingHold": "10",
    "AnalystRatingSell": "3",
    "AnalystRatingStrongSell": "0",
    "TrailingPE": "19.12",
    "ForwardPE": "18.12",
    "PriceToSalesRatioTTM": "2.701",
    "PriceToBookRatio": "7.42",
    "EVToRevenue": "3.453",
    "EVToEBITDA": "14.54",
    "Beta": "0.714",
    "52WeekHigh": "199.18",
    "52WeekLow": "116.78",
    "50DayMovingAverage": "185.65",
    "200DayMovingAverage": "162.56",
    "SharesOutstanding": "918603000",
    "DividendDate": "2024-06-10",
    "ExDividendDate": "2024-05-09"
}
```
