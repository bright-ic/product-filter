const buildFilterQuery = require("../../../server/util/buildFilter");
describe("Filter query builder", ()=> {
  it("should return empty query object", ()=> {
    let queryParams = {q:JSON.stringify({})};
    expect(buildFilterQuery(queryParams)).toStrictEqual({});
  });

  it("should return query object with gender property equals to the passed value", ()=> {
    let queryParams = {q:JSON.stringify({gender: "Female"})};
    expect(buildFilterQuery(queryParams)).toStrictEqual({gender:"Female"});
  })

  it("should return a query object with property country", ()=> {
    let queryParams = {q:JSON.stringify({gender: "Female", countries: ["United States", "Nigeria"]})};
    expect(buildFilterQuery(queryParams)).toHaveProperty("country");
  })

  it("should return a query object with property car_color", ()=> {
    let queryParams = {q:JSON.stringify({colors: ["yellow", "green"]})};
    expect(buildFilterQuery(queryParams)).toHaveProperty("car_color");
  })

})