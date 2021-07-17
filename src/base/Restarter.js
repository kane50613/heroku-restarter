const fetch = require("node-fetch")
const Heroku = require("./Heroku")

class Restarter {
	constructor(token, name) {
		this.#token = token
		this.name = name
	}

	async list() {
		let response = await fetch(`${Heroku.API_ENDPOINT}/${name}/dynos`, {
			headers: {
				Accept: "application/vnd.heroku+json; version=3"
			}
		})

		if(response.status === 200)
			return await response.json()
		else throw {
			code: response.status,
			response: await response.json(),
			error: new Error(`Error while trying to list dynos`)
		}
	}

	async restart(id) {
		let response = await fetch(`${Heroku.API_ENDPOINT}/${name}/dynos${id ? `/${id}` : ""}`, {
			method: "DELETE",
			headers: {
				Accept: "application/vnd.heroku+json; version=3",
				"Content-Type": "application/json"
			}
		})

		if(response.status === 202)
			return true
		else throw {
			code: response.status,
			response: await response.json(),
			error: new Error(`Error while trying to restart dynos`),
			id
		}
	}
}

module.exports = Restarter