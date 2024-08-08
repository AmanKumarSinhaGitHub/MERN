const express = require('express');

const router = express.Router();

/* First Way of writing the code
router.get('/', (req, res) => {
    res.send('Hello World using Router');
})
*/

// You can also write the above code as below:
router.route('/')
    .get((req, res) => {
        res.send('Hello World using Router');
    })


module.exports = router;