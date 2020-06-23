import React, { Component } from 'react';

import NewsScreen from  '../components/NewsScreen';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: "Top 5 Cryptocurrencies to Watch This Week: BTC, ETH, ADA, LEO, XMR",
          img: 'news1'
        },
        {
          id: 2,
          title: "Developer Who Successfully Hacked Bitcoin Wallet Ensures Bitcoin Is Still Safe",
          img: 'news2'
        },
        {
          id: 3,
          title: "How to tell the difference between real and fake news?",
          img:'news3'
        },
        {
          id: 4,
          title: "Top 5 Cryptocurrencies to Watch This Week: BTC, ETH, ADA, LEO, XMR",
          img: 'news1'
        },
        {
          id: 5,
          title: "Developer Who Successfully Hacked Bitcoin Wallet Ensures Bitcoin Is Still Safe",
          img: 'news2'
        },
        {
          id: 6,
          title: "How to tell the difference between real and fake news?",
          img:'news3'
        },
        {
          id: 7,
          title: "Top 5 Cryptocurrencies to Watch This Week: BTC, ETH, ADA, LEO, XMR",
          img: 'news1'
        },
        {
          id: 8,
          title: "Developer Who Successfully Hacked Bitcoin Wallet Ensures Bitcoin Is Still Safe",
          img: 'news2'
        }
      ]
    }
  }

  render () {
    return (
      <NewsScreen articles = {this.state.articles} />
    )
  }

}
