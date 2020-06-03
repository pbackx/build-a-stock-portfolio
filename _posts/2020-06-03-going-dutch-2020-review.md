---
layout: post
title: High Dividend Portfolio from The Netherlands, 2020 update and review
tags:
- Portfolio Idea
- The Netherlands
- Dividend Investing
---

This month marks the first year of Build-a-Stock-Portfolio. That means I'm looking back at the portfolio I generated last year. I'll spoil it right away: It's not looking good. 

## The 2019 Portfolio

[Last year, I presented a dividend growth portfolio consisting of Dutch companies](https://www.buildastockportfolio.com/going-dutch.html). Due to the Corona-crisis, all stock, including the one in the portfolio, took a serious beating in March:

* **Much of the stock market recovered quite quickly**. You'll find many indices and portfolio's that are almost back to the level that they started the year with.
* This **Dutch dividend portfolio did not recover well**. For some of the companies, you can understand why, for others it's not that clear so they may still recover later in the year.

To summarize the portfolio's performance over the last year:

* Both KA and KVW were acquired. KVW with a nice bit of profit, KA only marginally above the price that we bought it last year.
* APAM (Aperam) is the only company that did quite well. 
* All companies did distribute a dividend, but it did not make up for the loss in value.

In the below performance overview I have included the dividend that was already paid by the companies. Some have delayed their full dividend and promised that they will pay it later in the year. However this is obviously not set in stone and who knows how the crisis will impact them.

If they do decide to pay the dividend, it will be included in next year's evaluation.

## Automation

One of the things I wanted to do this month was automate some of the portfolio calculations. However, it turns out it's quite complicated to find reliable sources for much of the data. The current stock price is easy to get, the enterprise value too. 

But dividend information turns out to be really difficult to obtain:

* My own broker (Interactive Brokers, through Lynx) has 3 sources of dividend data. None of them turned out to be very reliable and one of those is not available through their API for automated processing.
* The company's investor relations sites can be awesome, others seem to be just there because they have to. Some companies give very clear and easily accessible information. Other companies make it incredibly hard to get to the information you need (footnotes in PowerPoint presentations, for instance).

In the end, I was able to hack something together using Google Sheets, Google Finance, Yahoo! Finance, some copy-pasting and some tedious manually going over individual sites.

The result is not something I'm ready to make public. But I have good hope that this is going to improve and I may be able to offer you customizable portfolio's that allow you to play with the parameters.

## This Month's Portfolio

I have changed the portfolio criteria a little bit compared to last year. The main goal is to select reliable companies that are going to be able to weather the Corona storm (I'm sure it's not over yet):

* A Dutch company (must be on the Amsterdam Stock Exchange)
* Payout ratio < 75% (down from last year's 80%)
* Instead of going for dividend growth, as I did last year, I have now taken companies with the longest dividend payout history. All companies in this year's portfolio have been paying out dividend for almost 20 years continuously.

{: .table .table-bordered .table-hover}
| 2019 Portfolio      | 2020 Performance |                                              Notes |  | 2020 Portfolio |
| :----- | -----: | -------------: | ----: | ------ |
| ECMPA | -49.84% |   |  | AKZA |
| KA    | 2.41%                          | KAS Bank was bought by Crédit Agricole |  | SLIGR |
| ABN   | -62.80%                |      |  | **URW** |
| URW   | -60.36%          |     |  | DSM |
| ASRNL | -33.08%                 |      |  | NSI |
| KVW   | 31.36%      | Koninklijke VolkerWessels was bought by Reggeborgh |  | REN |
| APAM  | 8.85%                          |      |  | VALUE |
| RDSB  | -46.78%              |      |  | VPK |
| ICT   | -38.78%                     |      |  | WKL |
| NEDAP | -25.16% |      |  | HEIA |
| Average performance | -27.42% |  |  |  |

Only one company is back in this year's portfolio, it's [URW (Unibail-Rodamco-Westfield)](https://www.urw.com/). They had an understandably bad year but their dividend history is incredibly solid with a low payout ratio (45%), so I'm still expecting a lot of trouble for them, but the numbers don't lie.

Otherwise, I think there are some very solid companies in the list, so I'm (again) expecting a lot of this team.