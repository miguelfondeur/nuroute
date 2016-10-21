const React = require('react')

const ShowCard = (props) => (
  <div className='card'>
    <h2>{props.name}</h2>
    <p>{props.profession}</p>
    <p>{props.city}</p>
    <p>{props.state}</p>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  name: string.isRequired,
  profession: string.isRequired,
  city: string.isRequired,
  state: string.isRequired
}

module.exports = ShowCard
