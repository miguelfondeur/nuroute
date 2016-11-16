const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../dummy-data/searchResults')

const SearchResults = () => (
  <div className='container'>
    {data.cards.map((card) => (
      <ShowCard {...card} key={card.ID} />
    ))}
  </div>
)

module.exports = SearchResults

