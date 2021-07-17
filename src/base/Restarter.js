const fetch = require("node-fetch")
const Heroku = require("./Heroku")
const RequestError = require("./RequestError");

class Restarter {
	#token

	constructor(token, name) {
		this.#token = token
		this.name = name
	}

	async list() {
		let response = await fetch(`${Heroku.API_ENDPOINT}/apps/${this.name}/dynos`, {
			headers: {
				Authorization: `Bearer ${this.#token}`,
				Accept: "application/vnd.heroku+json; version=3"
			}
		})

		let json = await response.json()

		if(response.status === 200)
			return await response.json()
		else throw new RequestError(
			json.message ?? `Error while trying to listing dynos`,
			json,
			response.status
		)
	}

	async restart(id) {
		let response = await fetch(`${Heroku.API_ENDPOINT}/apps/${this.name}/dynos${id ? `/${id}` : ""}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${this.#token}`,
				Accept: "application/vnd.heroku+json; version=3",
				"Content-Type": "application/json"
			}
		})

		let json = await response.json()

		if(response.status === 202)
			return true
		else throw new RequestError(
			json.message ?? `Error while trying to delete dyno(s)`,
			json,
			response.status
		)
	}
}

module.exports = Restarter