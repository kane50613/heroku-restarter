class RequestError extends Error {
	constructor(message, response, code) {
		super(message)

		this.response = response
		this.code = code
	}
}

module.exports = RequestError