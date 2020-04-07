import axios from 'axios';

export default {
  getCarOwners: async (filter) => {
    try {
      filter = JSON.stringify(filter);
      const url = `http://localhost:5000/api/v1/carowners/filter/?q=${filter}`;
      let res = await axios.get(url);
      return res.data.data || {};
    }
    catch(err) {
      console.log("error: " + err.message);
      return err.message;
    }
  }
}