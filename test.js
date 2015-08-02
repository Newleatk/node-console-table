var options = {};
var content = [
	[
		{
			h: true,
			c: "Bug ID"
		},
		{
			h: true,
			c: "Author"
		}
	],
	[
		{
			c: "#3498"
		},
		{
			c: "Benderwan"
		}
	],
	[
		{
			c: "#3497"
		},
		{
			c: "Tinouss"
		}
	]
];
var table = require('./console-table.js').init(options).data(content).render();