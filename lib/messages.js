'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var replyMessage = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message) {
		var text, senderId, payload, replies, res;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log('\n**********************************************************');
						_context.prev = 1;

						console.log('MESSAGE RECEIVED', message);

						text = message.content;
						senderId = message.senderId;
						payload = '';
						replies = [];

						if (message.type === 'payload') {
							text = message.content;
						}
						_context.next = 10;
						return req.converseText(text, { conversationToken: senderId });

					case 10:
						res = _context.sent;

						console.log('RECAST ANSWER', res);
						_context.next = 14;
						return handleAction(res, payload);

					case 14:
						replies = _context.sent;

						replies.forEach(function (reply) {
							return message.addReply(reply);
						});

						_context.next = 18;
						return message.reply();

					case 18:
						_context.next = 23;
						break;

					case 20:
						_context.prev = 20;
						_context.t0 = _context['catch'](1);

						console.error('An error occured while handling message', _context.t0);

					case 23:
						console.log('**********************************************************\n');

					case 24:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 20]]);
	}));

	return function replyMessage(_x) {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* module improts */
var handleAction = require('./actions').handleAction;
var request = require('recastai').request;

var req = new request(process.env.REQUEST_TOKEN, process.env.LANGUAGE);

module.exports = replyMessage;