class AppError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
    this.status = statusCode?.toString().startsWith("4") ? "fail" : "error";
  }
}

module.exports = AppError;
