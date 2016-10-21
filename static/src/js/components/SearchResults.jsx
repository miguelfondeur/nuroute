const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../dummy-data/searchResults')

const SearchResults = () => (
  <div className='container'>
    {data.searchResults.map((show) => (
      <ShowCard {...show} key={show.ID} />
    ))}
  </div>
)

module.exports = SearchResults

