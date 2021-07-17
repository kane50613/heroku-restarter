const Restarter = require("./base/Restarter")

module.exports = (token, name) => {
	if(!token || token?.length === 0)
		throw new Error(`Heroku API token is required! more info here https://devcenter.heroku.com/articles/authentication`)
	if(!name || name.length === 0)
		throw new Error(`App name is required`)
	return new Restarter(token, name)
}