const response = (statusCode, data, res) => {
  res.json({
    data: data,
    statusCode: statusCode,
  });
};

module.exports = response;
