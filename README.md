# <img src="https://raw.githubusercontent.com/heroku/favicon/master/favicon.iconset/icon_32x32.png"> heroku-restarter
Restart your Heroku app with simple **one-line** code!

---
## Install
```shell
npm i heroku-restarter
```

## Example
```js
require("heroku-restarter")("API_KEY", "APP_NAME").restart()
```
look how simple it is

## Reference
- [Restarter#restart](src/base/Restarter.js#L29)

Parameter | Type | Optional | Description
---|---|---|---
None | - | - | -
  
- [Restarter#list](src/base/Restarter.js#L12)

Parameter | Type | Optional | Description
---|---|---|---
id | string | yes | Specify "dyno id" to restart (leave this blank to restart all dynos)

## Author
🧑‍💻 **Kane**
- Github [@Gary50613](https://github.com/Gary50613)

## ❤️ Contributing
Feel free to open [issue](https://github.com/Gary50613/heroku-restarter/issues)
or join [my discord server](https://discord.gg/ct2ufag)