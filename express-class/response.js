const response = (statusCode, data, res) => {
  res.json({
    data: data,
    status: statusCode,
  });
};

module.exports = response;
