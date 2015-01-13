var script = [
	{
		command: 'll\n',
		respond: 'current directory'
	},
	{
		command: 'git status',
		respond: 'no changes'
	}
];

var player = {
	play: function (script, term) {
		term.insert('gi');

		setTimeout(function () {
			term.insert('t ');

			setTimeout(function () {

				term.insert('l');

				setTimeout(function () {

					term.insert('l\n');

					setTimeout(function () {

						term.echo('..');

					}, 200);

				}, 150);

			}, 250);

		}, 100);


		// term.echo(function () {
		// 	return 'sss';
		// });

		// setTimeout(function () {
		// 	term.echo(script[0].respond);
		// }, 500);
		// term.set_command(script[0].command);
	}
};

var commands = {
	'demo': function (term) {
		player.play(script, term);
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
			greetings: '\n \
 _____       _ \n \
|   __| ___ |_| ___  _____  ___ \n \
|__   || -_|| ||_ -||     || . | \n \
|_____||___||_||___||_|_|_||___| \n \
\n\n \
Welcome! Please type `demo`\n\n'
		});
	}
};

$(function () {
	app.run();
});
