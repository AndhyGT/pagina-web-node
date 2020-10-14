const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Pagina Web con Node' });
});


router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Pagina Contacto' });
});



module.exports = router;