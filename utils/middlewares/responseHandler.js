module.exports = (err, req, res, next) => {
  let Obj = {};
  Obj.status = res.status || 200;
  Obj.message = "Success";
  Obj.success = true;
  Obj.data = res;
  res.status(200).send(data);
};
