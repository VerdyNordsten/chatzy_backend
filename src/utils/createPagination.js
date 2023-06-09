require("dotenv").config()

module.exports = (count, page = 1, limit = 5) => {
  let offset = 0

  // jika page falsy
  if (!page || page < 1 || !/[\d]/.test(page)) {
    page = 1
  }
  if (typeof page === "string") {
    page = parseInt(page, 10)
  }

  // jika limit falsy
  if (!limit || limit < 1 || !/[\d]/.test(limit)) {
    limit = 5
  }
  if (typeof limit === "string") {
    limit = parseInt(limit, 10)
  }

  const response = {
    currentPage: page,
    dataPerPage: limit,
    totalPage: Math.ceil(count / limit),
    totalData: parseInt(count, 10),
  }

  offset = (page - 1) * limit

  return {
    limit,
    offset,
    response,
  }
}
