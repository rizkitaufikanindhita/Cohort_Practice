const authmiddleware = async (c: any, next: any) => {
  const authRole = c.req.query("role");
  if (authRole != "admin") {
    return c.json({
      msg: "Unauthorized",
    });
  } else {
    await next();
  }
};

export default authmiddleware;
