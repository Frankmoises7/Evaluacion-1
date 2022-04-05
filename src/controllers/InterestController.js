class InterestController {
  constructor () {
    this.renderInterestResult = this.renderInterestResult.bind(this)
  }

  renderInterest (req, res) {
    res.render('interest')
  }

  calculateInterest (capital, interest, years) {
    return capital * (interest / 100) * years
  }

  renderInterestResult (req, res) {
    console.log('req.body', req.body)
    const { capital, interest, years } = req.body

    const gain = this.calculateInterest(capital, interest, years)
    const total = parseFloat(capital) + parseFloat(gain)

    res.render('interest', {
      capital,
      interest,
      years,
      gain,
      total
    })
  }
}

module.exports = InterestController
