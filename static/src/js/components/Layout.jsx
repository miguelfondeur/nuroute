const React = require('react')
const { Link } = require('react-router')
const Header = require('./Header')

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    <div className='sidebar' />
    <div className='page'>
      <div className='search-bar'>
        <div className='content-container'>
          <input type='text' placeholder='Search For Anything' />
          <Link to='/results' className='search-nuroute'>Browse Nuroute</Link>
        </div>
      </div>
      <main className='l-content'>
        <div className='content-container'>
          {props.children}
        </div>
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
