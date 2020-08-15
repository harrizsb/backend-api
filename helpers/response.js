const constructResponse = (
  data = "Something went wrong, please try again!",
  success = false
) => ({
  success,
  [success ? "data" : "msg"]: data,
});

module.exports = constructResponse;
