

var app = new Vue({
	el: '#root',

	data: {
		mailRandom: '',
		arrayMail: []
	},

	mounted() {
		const self = this;
		for (var i = 0; i < 10; i++) {
			axios
			.get('https://flynn.boolean.careers/exercises/api/random/mail')
			.then(function(risposta) {

				self.mailRandom = risposta.data.response;
					if (!self.arrayMail.includes(self.mailRandom)){
						self.arrayMail.push(self.mailRandom);
					}
				console.log(self.arrayMail);
			}); // fine then
		}// fine ciclo for


	} // fine mounted
});
