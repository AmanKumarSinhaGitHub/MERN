const express = require('express');

const router = express.Router();


/* First Way of writing the code
router.get('/', (req, res) => {
    res.send('Hello World using Router');
})
*/

// You can also write the above code as below:
// router.route('/')
//     .get((req, res) => {
//         res.send('Hello World using Router');
//     })


const { home, register, login } = require('../controllers/auth-controller');

router.route('/')
    .get(home);


router.route('/register')
    .post(register);

router.route('/login')
    .post(login);


module.exports = router;