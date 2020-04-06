import axios from 'axios';

const convertToObject = (values) => {
  if(values.length === 0) {
    return {};
  }
  return values.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
}

export default {
  getFilters: async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://ven10.co/assessment/filter.json";
      let res = await axios.get(proxyurl + url);
      return convertToObject(res.data) || {};
    }
    catch(err) {
      console.log("error: " + err.message);
      return err.message;
    }
  }
}