class AppError extends Error {
  constructor(statusCode, msg) {
    super(msg);
    this.statusCode = statusCode;
    this.status = statusCode.toString().startsWith("4") ? "fail" : "error";
  }
}

module.exports = AppError;
