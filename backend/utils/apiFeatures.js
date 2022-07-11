class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    // use keyword to search case-insensitive
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    // taking copy
    const queryCopy = { ...this.queryStr };
    // removing some fields filter
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((item) => delete queryCopy[item]);
    // filter for price and rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // get result
    this.query = this.query.find(JSON.parse(queryCopy));
    return this;
  }

  pagination(resultPerPage) {
    // no of current page
    const currentPage = Number(this.queryStr.page) || 1;
    // product to skip in next page
    const skip = resultPerPage * (currentPage - 1);
    // get result
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
