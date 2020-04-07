import axios from 'axios';

const baseUrl = process.env.NODE_ENV == "production" ? "" : "http://localhost:5000/";

export default {
  getCarOwners: async (filter) => {
    try {
      filter = JSON.stringify(filter);
      const url = `${baseUrl}/api/v1/carowners/filter/?q=${filter}`;
      let res = await axios.get(url);
      return res.data.data || {};
    }
    catch(err) {
      return err.message;
    }
  }
}