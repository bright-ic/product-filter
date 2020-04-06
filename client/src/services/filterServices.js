import axios from 'axios';

export default {
  getFilters: async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://ven10.co/assessment/filter.json";
      let res = await axios.get(proxyurl + url);
      return res.data || [];
    }
    catch(err) {
      console.log("error: " + err.message);
      return err.message;
    }
  }
}