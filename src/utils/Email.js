export const Email = {
	personalizations: [{
		to: [{
			email: "infestedian@gmail.com",
			name: "Ian Moses"
		}],
		cc: [{
			email: "",
			name: ""
		}],
		subject: "New Message from Contact Form"
	}],
	content: [{
		type: "text/plain",
		value: ""
	}],
	from: {
		email: "ianmoses.contactform@gmail.com",
		name: "Ian Moses Contact Form"
	},
	reply_to: {
		email: "",
		name: ""
	}
}