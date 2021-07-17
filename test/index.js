require("dotenv").config()

require("../src/index")(process.env.HEROKU_API_KEY, process.env.HEROKU_APP)
	.restart()