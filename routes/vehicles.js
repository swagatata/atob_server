const vehicleRoutes = (app, fs) => {
    // variables
    const dataPath = './data/vehicle_locations.json';

    // READ
    app.get('/vehicle_locations', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = vehicleRoutes;