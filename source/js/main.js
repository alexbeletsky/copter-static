var commands = {
	'demo': function (term) {
		term.echo('\nWelcome to demo!\
\n\n\
Seismo is able to deploy any static application, let\'s first \
\n\
create simple angular application.\
\n\n\
Please type `yo create`.\n');
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
			prompt: '> ',
			greetings: '\n \
				 _____       _ \n \
				|   __| ___ |_| ___  _____  ___ \n \
				|__   || -_|| ||_ -||     || . | \n \
				|_____||___||_||___||_|_|_||___| v.0.7 \n \
\n\n \
Welcome! Please type `demo`\n\n'
		});
	}
};

$(function () {
	app.run();
});
