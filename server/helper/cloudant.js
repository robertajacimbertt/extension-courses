module.exports = (props, dbInfo) => {
    let db = "courses",
        cloudant = props.modules.cloudant.use(db);

    return {
        load: () => {
            return new Promise((resolve, reject) => {
                cloudant.list({ include_docs: true }, (error, data) => {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                })
            });
        },
        get: (course) => {
            return new Promise((resolve, reject) => {
                cloudant.get(course, (error, data) => {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                })
            });
        },
        create: (course) => {
            return new Promise((resolve, reject) => {
                cloudant.insert(course, (error, data) => {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                })
            });
        },
        update: (course) => {
            return new Promise((resolve, reject) => {
                cloudant.insert(course, (error, data) => {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                })
            });
        },
        remove: (course) => {
            return new Promise((resolve, reject) => {
                cloudant.destroy(course._id, course._rev, (error, data) => {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                })
            });
        }
    }
}