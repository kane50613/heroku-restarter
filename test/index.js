require("dotenv").config()

try {
	require("../src/index")(process.env.HEROKU_API_KEY, process.env.HEROKU_APP).list()
	.then(console.log)
	.catch(console.log)
} catch (e) {
	console.log(e)
}