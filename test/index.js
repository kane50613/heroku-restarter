require("dotenv").config()

;(async () => {
	console.log(await require("../src/index")(process.env.HEROKU_API_KEY, process.env.HEROKU_APP).list())
})()