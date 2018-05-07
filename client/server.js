module.exports = (server, modules) => {
    server.use(modules.express.static(__dirname + '/dist/'));

    server.get('/all', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    });

    server.get('/admin', (req, res) => {
        res.sendFile(__dirname + '/dist/admin.html');
    });
}