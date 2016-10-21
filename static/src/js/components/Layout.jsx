const React = require('react')
const { Link } = require('react-router')

const Layout = (props) => (

  <div className='wrapper'>
    <header className='l-header'>
      <nav className='site-nav'>
        <div className='site-logo'>nuroute</div>
        <ul>
          <li><a>Sign Up</a></li>
          <li><a>Log In</a></li>
        </ul>
      </nav>
    </header>
    <div className='sidebar' />
    <div className='page'>
      <div className='searchBar'>
        <input type='text' placeholder='Search For Anything' />
        <Link to='/results' className='search-nuroute'>Browse Nuroute</Link>
      </div>
      <main className='l-content'>
        {props.children}
      </main>
      <footer className='l-footer' />
    </div>
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
