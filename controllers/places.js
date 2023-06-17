const router = require('express').Router()
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//POST ROUTE  Part8 Bonus to give special error messages with the New Page
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW ROUTE
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router










//BE_7_REST_RANT_PART8 ASKS TO DELETE ALL THE CONTENT OF THE ROUTES

// const router = require('express').Router()
// const places = require('../models/places.js')

// //INDEX
// router.get('/', (req, res) => {
//     res.render('places/index', {places})
// })
// //NEW
// router.get("/new", (req, res) => {
//   res.render("places/new");
// })

// //POST
// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city){
//     req.body.city = "Anytown"
//   }
//   if (!req.body.state) {
//     req.body.state = "USA"
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// //CLICK LINK EDIT
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', {place: places[id], id})
//   }
// })

// //SHOW - ID - EDIT BUTTON
// router.put('/:id', (req, res)=>{
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     if (!req.body.pic) {
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city){
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places[id] = req.body
//   res.redirect(`/places/${id}`)
//   }
// })

// //SHOW
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })


// //DELETE
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//   res.redirect('/places')
//   }
// })

// module.exports = router