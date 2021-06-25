var express = require('express');
var router = express.Router();
let movieData = require('../movies.json');

console.log('moviesRouter movieData ', movieData);
console.log('-> movies.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // console.log('-> router.get(/movies)');
  console.log('movies.js / req.query ->', req.query);
  if (req.query === {}) {
    res.status(200);
    res.send(movieData);
  }
  else if (req.query['title'] !== {}) {
    let tmp = movieData.filter(movie => movie.title.includes(req.query.title))
    if (tmp === []) res.send('nothing found')
    else res.send(movieData.filter(movie => movie.title.includes(req.query.title)))    
    res.status(200)
    
  } else {
    res.status(400)
    res.send('Invalid query')
  }
});

  // res.send('router.get(/movies');
  
// });

router.get('/:id', (req, res) => {
  console.log('-> router.get(/movies/:id)');
  // console.log('movies.js (/:id) req.params ->', req.params);

  if (movieData.filter(movie => movie.id == req.params.id).length !== 0) {
    res.status(200)
    res.send(movieData.filter(movie => movie.id == req.params.id))
  } else if (!isNaN(req.params.id)) {
    res.status(404)
    res.send('Book ID not found')
  } else {
    res.status(400)
    res.send('Invalid ID supplied')
  }
});


module.exports = router;