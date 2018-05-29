const express = require('express');
const router = express.Router();


// Controllers.
const user = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// GET request for creating user. 
// NOTE This must come before route for id (i.e. display author).
router.get('/create', user.user_create_get);

// POST request for creating user.
router.post('/create', user.user_create_post);

/* // GET request to delete user.
router.get('/:id/delete', user.user_delete_get);

// POST request to delete user
router.post('/:id/delete', user.user_delete_post);

// GET request to update user.
router.get('/:id/update', user.user_update_get);

// POST request to update user.
router.post('/:id/update', user.user_update_post);
 */

// GET request for one user.
router.get('/:id', user.user_detail);

// GET request for list of all user.
router.get('/list', user.user_list);

module.exports = router;
