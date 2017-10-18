module.exports = (app) => {
    app.get('/api/explore', (req, res) => {
        // do something here
        res.send('Greetings to you!');
    });

    app.post('/api/explore', (req, res) => {
        // get payload and send to console for review
        console.log('body from post:\n', req.body);
        res.send('{"rx":"true"}');        

    });
}