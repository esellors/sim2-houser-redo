module.exports = {
  createProperty: (req, res) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    dbInstance
      .addProperty([name, address, city, state, zip, img, mortgage, rent])
      .then(response => res.status(200).json(response))
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getProperties: (req, res)=> {
    const dbInstance = req.app.get("db");
    dbInstance.getProperties().then(response => res.status(200).json(response))
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });

  }
};
