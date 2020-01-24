const express = require ('express');
const fingerprint = require ('express-fingerprint');
const path = require ('path');

const app = express ();
app.use (express.json ());
app.use (fingerprint ());
require ('./routers/index') (app);

app.use (express.static ('client/build'));
app.get ('*', (req, res) => {
    res.sendFile (path.join (__dirname, '..', 'client', 'build', 'index.html'));
});

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
