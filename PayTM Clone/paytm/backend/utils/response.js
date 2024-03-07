const response = (statusCode, data, res) => {
  res.json({
    status: statusCode,
    data: data,
  });
};

module.exports = response;
