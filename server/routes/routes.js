module.exports = (props) => {

    props.server.get('/api/courses', (req, res) => {
        let source = req.body.db;
        let table = req.body.table;
        let load = props.helpers.cloudant(props, { source: source, table: table }).load;

        load().then(response => {
            console.log("Loaded data->", response);
            res.status(200).send({ status: true, data: response });
        }).catch(function(error) {
            console.error(error);
            res.status(400).send({ status: false, data: error });
        });
    });

    props.server.get('/api/course/:id', (req, res) => {
        let source = req.body.db;
        let table = req.body.table;
        let get = props.helpers.cloudant(props, { source: source, table: table }).get;

        get(req.params.id).then(response => {
            console.log("Loaded data->", response);
            res.status(200).send({ status: true, data: response });
        }).catch(function(error) {
            console.error(error);
            res.status(400).send({ status: false, data: error });
        });
    });

    props.server.delete('/api/deleteCourse/:id/:rev', (req, res) => {
        let source = req.body.db;
        let table = req.body.table;
        let remove = props.helpers.cloudant(props, { source: source, table: table }).remove;

        var file = { _id: req.params.id, _rev: req.params.rev }

        remove(file).then(response => {
            console.log("Removed data->", response);
            res.status(200).send({ status: true, data: response });
        }).catch(function(error) {
            console.error(error);
            res.status(400).send({ status: false, data: error });
        });
    });

    props.server.put('/api/updateCourse/:id/:rev', (req, res) => {
        let source = req.body.db;
        let table = req.body.table;
        let update = props.helpers.cloudant(props, { source: source, table: table }).update;

        var file = { _id: req.params.id, _rev: req.params.rev }

        remove(file).then(response => {
            console.log("Updated data->", response);
            res.status(200).send({ status: true, data: response });
        }).catch(function(error) {
            console.error(error);
            res.status(400).send({ status: false, data: error });
        });
    });

    props.server.post('/api/updateCourse/:id/:rev', (req, res) => {
        let source = req.body.db;
        let table = req.body.table;
        let update = props.helpers.cloudant(props, { source: source, table: table }).update;

        req.body._id = req.params.id;
        req.body._rev = req.params.rev;

        update(req.body).then(response => {
            console.log("Updated data->", response);
            res.status(200).send({ status: true, data: response });
        }).catch(function(error) {
            console.error(error);
            res.status(400).send({ status: false, data: error });
        });
    });
}