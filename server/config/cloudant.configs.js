let cloudant = (cloudantModule, cloudantCredentials, db) => {

    let dbName = JSON.parse(db);
    let cloudantSet = cloudantModule(cloudantCredentials);

    cloudantSet.db.create(dbName, (error, response) => {
        if (error) return;
        console.info('Database ' + dbName + ' has been created', response);
    })
    return cloudantSet;
}

module.exports = cloudant;