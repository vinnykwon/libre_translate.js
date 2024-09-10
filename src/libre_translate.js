class LibreTranslate {
	constructor(apiKey) {
		this.api = "https://libretranslate.com"
		this.apiKey = apiKey
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async detectLanguage(query) {
		const response = await fetch(
			`${this.api}/detect`, {
				method: "POST",
				body: {
					"q": query,
					"api_key": this.apiKey
				},
				headers: this.headers
			})
		return response.json()
	}

	async getLanguages() {
		const response = await fetch(
			`${this.api}/languages`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}


	async translate(query, sourceLanguage, targetLanguage) {
		const response = await fetch(
			`${this.api}/translate`, {
				method: "POST",
				body: {
					"q": query,
					"source": sourceLanguage,
					"target": targetLanguage,
					"api_key": this.apiKey
				},
				headers: this.headers
			})
		return response.json()
	}

	async getFrontendSettings() {
		const response = await fetch(
			`${this.api}/frontend/settings`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {LibreTranslate}
