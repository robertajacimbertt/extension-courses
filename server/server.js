module.exports = (server, modules) => {

    const nano = require('nano');
    const fs = require('fs');
    const cloudant_credentials = JSON.parse(process.env.CLOUDANT);
    const db = JSON.stringify(process.env.DATABASE);

    const cloudant = require('./config/cloudant.configs')(nano, cloudant_credentials, db); //contem um db
    let Cloudant = require('./helper/cloudant');

    let props = {
        server: server,
        db: db,
        modules: {
            fs: fs,
            cloudant: cloudant,
            cfenv: modules.cfenv
        },
        helpers: {
            cloudant: Cloudant
        }
    }

    require('./routes/routes')(props);
};