const buildFilterQuery = require("../util/buildFilter");

const carOwnersController = (carOwnersModel) => {
  /* --------------- GET ALL CAR OWNERS ------------------------------- */
  const getAll = (req, res) => {
    let response = { error: false, message: "", data: null };
    (async function asyncFunc() {
      try {
        console.log('get all ');
        const carOwners = await carOwnersModel.find();
        console.log(carOwners)

        if (carOwners === null || carOwners.length === 0) {
          response.message = "no record found";
          return res.status(200).json(response);
        }

        response.data = carOwners;
        response.message = "success";
        return res.status(200).json(response);
      } catch (err) {
        response.message = err.message;
        response.error = true;
        return res.status(400).json(response);
      }
    }());
  }
  /* --------------- GET CAR OWNERS BY ID --------------------------------- */
  const getById = (req, res) => {
    let response = { error: false, message: "", data: null };
    const query = {id: parseInt(req.params.id)};
    
    console.log('By id', query);
    
    if(typeof query.id === "undefined") {
      response.message = "Id was not supplied";
        response.error = true;
        return res.status(400).json(response);
    }

    (async function asyncFunc() {
      try {
        const carOwners = await carOwnersModel.findOne(query);

        if (carOwners === null || carOwners.length === 0) {
          response.message = "no record found";
          return res.status(200).json(response);
        }

        response.data = carOwners;
        response.message = "success";
        return res.status(200).json(response);
      } catch (err) {
        response.message = err;
        response.error = true;
        return res.status(400).json(response);
      }
    }());
  }

  /* --------------- GET CAR OWNERS BASED ON FILTER PARAMETERS ------------------------------- */
  const getByFilter = (req, res) => {
    console.log('By filter', req.query);
    let response = { error: false, message: "", data: null };
    const query = buildFilterQuery(req.query);
    
    (async function asyncFunc() {
      try {
        const carOwners = await carOwnersModel.find(query);

        if (carOwners === null || carOwners.length === 0) {
          response.message = "no record found";
          return res.status(200).json(response);
        }

        response.data = carOwners;
        response.message = "success";
        return res.status(200).json(response);
      } catch (err) {
        response.message = err;
        response.error = true;
        return res.status(400).json(response);
      }
    }());
  }

  return {
    getByFilter,
    getAll,
    getById
  }
};

module.exports = carOwnersController;