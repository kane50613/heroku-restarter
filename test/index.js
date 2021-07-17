require("dotenv").config()

;(async () => {
	console.log(await require("../src/index")('a', process.env.HEROKU_APP).list())
})()