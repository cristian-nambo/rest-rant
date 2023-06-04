const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
<main>
    <h1>REST-Rant</h1>
    <div className='center'>
    <div>
      <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
    </div>
    <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
    </div>
</main>

        </Def>
    )
}

module.exports = home
