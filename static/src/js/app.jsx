const React = require('react')
const ReactDOM = require('react-dom')

const App = () => {
  return (
    <div className='wrapper'>

      <div className='sidebar' />

      <div className='page'>
        <header className='l-header'>
          <nav className='site-nav'>
            <div className='site-logo'>nuroute</div>
            <ul>
              <li><a>Sign Up</a></li>
              <li><a>Log In</a></li>
            </ul>
          </nav>
        </header>
        <main className='l-content' />
        <footer className='l-footer' />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
