const express = require('express')
const PORT = process.env.PORT || 5000

express().use(express.static('./dist/helloworldangular'))
    .get('/*', function(req, res) {
        res.sendFile('index.html', {
            root: 'dist/helloworldangular/'
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));