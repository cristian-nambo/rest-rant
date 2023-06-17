const React = require('react')
const Def = require('../default')

function show (data) {
    console.log("Show",data)
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! [MadFace] 🤬' : 'Rave! [Love]💖'}</h2>
               <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4> 
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} />

            <div>
                <h2> Rating </h2>
                <p> Not Rated </p>                                  
            </div>

                <div>
                  <h2> Description </h2>
                  <p> {data.place.showEstablished()} </p>
                  <h4> Serving {data.place.cuisines} </h4>
                </div>
                <h2> Comments </h2>
                    {comments}               

<hr/>

                    <h2>Don't be SHY, does {data.place.name} deserve a Rave 💖 or a Rant 🤬?</h2>

            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Review</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">⭐️ Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-1">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>  


<hr />           
            <div>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
            <i className="bi bi-pencil"></i> Edit </a>
            </div>
           
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>
                <i className="bi bi-trash"></i> Delete</button>
                
                
            </form>
          </main>
        </Def>
    )
}

module.exports = show


