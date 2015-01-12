var commands = {
	'seismo demo': function (term) {

	}
};

var unknowCommand = function (command, term) {
	term.echo('\tcommand not found: ' + command + '\n');
};

var terminalHandler = function (command, term) {
	var commandHandler = commands[command];

	return commandHandler ? commandHandler(term) : unknowCommand(command, term);
};

var app = {
	run: function () {
		skrollr.init();
		$('.terminal').terminal(terminalHandler, {
			prompt: 'web.dev > ',
			greetings: 'Welcome! Please type `seismo demo`\n\n'
		});
	}
};

$(function () {
	app.run();
});
