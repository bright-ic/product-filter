const buildFilterQuery = (filterOptions) => {
  filterOptions = JSON.parse(filterOptions.q);
  const query = {};
  if (typeof filterOptions.countries !== "undefined" && Array.isArray(filterOptions.countries) && filterOptions.countries.length > 0) {
    query.country = {$in: filterOptions.countries};
  }
  if ((typeof filterOptions.start_year !== "undefined" && filterOptions.start_year !== "") && (typeof filterOptions.end_year !== "undefined" && filterOptions.end_year !== "" )) {
    query.car_model_year =  {$lte: filterOptions.end_year, $gte: filterOptions.start_year};
  }
  if (typeof filterOptions.colors !== "undefined" && Array.isArray(filterOptions.colors) && filterOptions.colors.length > 0) {
    query.car_color = {$in: filterOptions.colors};
  }
  if (typeof filterOptions.gender !== "undefined" && filterOptions.gender !== "") {
    query.gender = filterOptions.gender.charAt(0).toUpperCase() + filterOptions.gender.slice(1);
  }
  console.log("query", query);

  return query;
}

module.exports = buildFilterQuery;