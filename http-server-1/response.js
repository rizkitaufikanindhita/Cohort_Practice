const response = (statusCode, data, res) => {
  res.json({
    datas: data,
    status: statusCode,
  });
};

module.exports = response;
