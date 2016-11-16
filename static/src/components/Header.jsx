const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <header className='l-header'>
        <nav className='site-nav'>
          <Link to='/' className='site-logo'>
            nuroute
          </Link>
          <ul>
            <li><a>Sign Up</a></li>
            <li><a>Log In</a></li>
          </ul>
        </nav>
      </header>
    )
  }
})

module.exports = Header
