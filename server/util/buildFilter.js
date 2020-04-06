const buildFilterQuery = (filterOptions) => {
  const query = {};
  if (typeof filterOptions.id !== "undefined") {
    query.id = filterOptions.id;
  }
  if (typeof filterOptions.first_name !== "undefined") {
    query.first_name = filterOptions.first_name.toLowerCase();
  }
  if (typeof filterOptions.last_name !== "undefined") {
    query.last_name = filterOptions.last_name.toLowerCase();
  }
  if (typeof filterOptions.email !== "undefined") {
    query.email = filterOptions.email.toLowerCase();
  }
  if (typeof filterOptions.country !== "undefined") {
    query.country = filterOptions.country.toLowerCase();
  }
  if (typeof filterOptions.car_model !== "undefined") {
    query.car_model = filterOptions.car_model.toLowerCase();
  }
  if (typeof filterOptions.car_model_year !== "undefined") {
    query.car_model_year = filterOptions.car_model_year;
  }
  if (typeof filterOptions.car_color !== "undefined") {
    query.car_color = filterOptions.car_color.toLowerCase();
  }
  if (typeof filterOptions.gender !== "undefined") {
    query.gender = filterOptions.gender.toLowerCase();
  }
  if (typeof filterOptions.job_title !== "undefined") {
    query.job_title = filterOptions.job_title.toLowerCase();
  }


  return query;
}

module.exports = buildFilterQuery;