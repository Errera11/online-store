class ApiError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static ServerError(message) {
        return new ApiError(500, message)
    }

    static Forbidden(message) {
        return new ApiError(403, message)
    }

    static BadRequest(message) {
        return new ApiError(400, message)
    }

    static Unauthorized(message) {
        return new ApiError(401, message)
    }
}

module.exports = ApiError;