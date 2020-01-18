const express = require('express')

const app = express ();
require('./routers/index')(app);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen (PORT, () => console.log (`App has been started on ${PORT}`));
    } catch (e) {
        console.log (e);
        process.exit (1);
    }
};

start ();