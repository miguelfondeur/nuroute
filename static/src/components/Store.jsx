const React = require('react')

class Store extends React.Component {
  render () {
    const params = this.props.params || {}
    const { name, profession, city, state } = params
    return (
      <div className='card-full'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <p>{city}</p>
        <p>{state}</p>
      </div>
    )
  }
}

const { object } = React.PropTypes

Store.propTypes = {
  params: object.isRequired
}

module.exports = Store
