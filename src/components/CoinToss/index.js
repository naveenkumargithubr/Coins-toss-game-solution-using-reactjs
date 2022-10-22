// Write your code here

import {Component} from 'react'

import './index.css'

const HeadsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultsImage: HeadsImage, headscount: 0, tailscount: 0}

  onClickToss = () => {
    const {headscount, tailscount} = this.state

    const toss = Math.floor(Math.random() * 2)
    let latestHeads = headscount
    let latesTails = tailscount
    let finalToss = ''
    if (toss === 0) {
      finalToss = HeadsImage
      latestHeads = headscount + 1
    } else {
      finalToss = TailsImage
      latesTails = tailscount + 1
    }
    this.setState({
      tossResultsImage: finalToss,
      headscount: latestHeads,
      tailscount: latesTails,
    })
  }

  render() {
    const {tossResultsImage, headscount, tailscount} = this.state
    const Total = headscount + tailscount
    return (
      <div className="bg-container">
        <div className="toss-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossResultsImage} alt="Toss results" className="toss-img" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="counting-contianer">
            <p className="space">Total:{Total}</p>
            <p className="space">Heads:{headscount}</p>
            <p className="space">Tails:{tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
