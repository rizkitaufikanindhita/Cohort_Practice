// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { role } = req.headers;
  if (role == "admin") {
    next();
  } else {
    res.json({
      message: "bukan admin",
    });
  }
}

module.exports = adminMiddleware;
