# libre_translate.js
Web-API for [libretranslate.com](https://libretranslate.com) Free and Open Source Machine Translation API

## Example
```JavaScript
async function main() {
	const { LibreTranslate } = require("./libre_translate.js");
	const libreTranslate = new LibreTranslate()
	const languages = await libreTranslate.getLanguages()
	console.log(languages)
}

main()
```
