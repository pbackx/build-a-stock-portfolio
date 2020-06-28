---
layout: post
title: The African Continent, One Year Review
tags:
- Portfolio Idea
- Africa
- Magic Formula

---

This month, I'm reviewing my Africa portfolio and preparing a new one.

## The results

{: .table .table-bordered .table-hover}

| Symbol | Name | Percentage |
| :----- | :--- | ---------: |
| EQX | Equatorial Resources Ltd | 125.78% |
| MLBAT | Batla Minerals SA | 2% |
| TBG | Tiso Blackstar Group SE | -31.58% |
| AEE | African Equity Empowerment Investments Ltd | -48.42% |
| BUI | Barbara Bui SA | -27.52% |
| CMB | Cambria Africa plc | -63.24% |
| ERBOS | Erbosan Erciyas Boru Sanayii ve Ticaret A.S. | 42.9% |
| IEC | Intra Energy Corporation Ltd | -66.67% |
| LON | Lonmin Plc (acquired by Sibanye-Stillwater) | 137.35% |
| SVB | SilverBridge Holdings Ltd | 18.18% |
|  | **Total** | 8.88% |

Overall, the portfolio did quite ok. Nothing spectacular, but I could live with this every year. 

As predicted, the portfolio results are all over the place. Two companies did extremely well, others did spectacularly bad. 

Lonmin was acquired for a very good price (1 LON = 1 SSB), which is why they did so well.

## ADR (American Depository Receipt)

Last year's portfolio was a nice selection of African companies, but it was a pure simulation and did not take into account that you may actually want to buy the stock. Most of the stock is on the Johannesburg stock exchange, which is not exactly easy to access for most people.

This year, I wanted to fix that issue. After some deliberation, the best solution seems to be to look into African stock that has an [ADR](https://www.investopedia.com/terms/a/adr.asp) or similar DR that is traded on an easier accessible stock exchange. 

[J.P. Morgan has an extensive list](https://www.adr.com/dr/drdirectory/drUniverse) that I used as my basis. I did some pruning on that list to only keep the ADRs that have a reasonable trading volume. I also only kept companies for which I could easily find some of their financial numbers.

## Changing parameters

Last year, I used Joel Greenblatt's magic formula to select the top 10. 

This year, I'm going to replace the second parameter with something slightly different:

* **Earnings Yield**: The earnings per share (also known as [EPS](https://www.investopedia.com/terms/e/eps.asp)) compared to the share's price. We are looking for companies that make a lot of money, but can be bought cheaply.
* **Return on capital**: we want firms that can use capital to their advantage. They can take a little bit of capital and turn it into a lot of revenue. This year, I'm going to use **[the CashFlow vs Capital Expenditure ratio](https://www.investopedia.com/terms/c/cashflow_capex.asp)**, or how easy is it for the company to pay for their investments and how much leeway does it have to jump onto opportunities as they arise.

## This Month's Portfolio

With that in mind, here are the criteria for this month's selection:

- African companies with a DR in the US or Europe.
- Take the 20 highest CashFlow vs CapEx ratio.
- From those, select the 10 with highest EPS.

{: .table .table-bordered .table-hover}

| Symbol | Name                                         | Current price |
| :----- | :------------------------------------------- | ------------: |
| MDC | M.D.C. Holdings, Inc. | 32.73 |
| IVTJF | Investec Plc | 2.03 |
| SGBLY | Standard Bank Group Ltd. | 5.92 |
| TBLMY | Tiger Brands Ltd. | 11.05 |
| EXXAY | Exxaro Resources Ltd. | 7.45 |
| BDVSY | The Bidvest Group Ltd. | 16.57 |
| KIROY | Kumba Iron Ore Ltd. | 9.08 |
| MRPLY | Mr. Price Group Ltd. | 8.55 |
| ANGPY | Anglo American Platinum Ltd. | 11.72 |
| MONDY | Mondi Plc | 36.6 |

This month, I started to automate some of my portfolio management using [IEX Cloud](https://iexcloud.io/s/b621e7de ). This is an affiliate link, so I will make a little bit of money if you sign up using that link. IEX Cloud is an easy to use API that can be quickly integrated into, for instance, Google Sheets. You can use the "IMPORTDATA" formula with any of their datapoints very very easily.