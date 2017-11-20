'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var trendingForks = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
		var replies, cardsReplies, language, response, repos;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log('TRENDING FORKS');

						replies = [];
						cardsReplies = [];
						language = res.getMemory('language');

						console.log('======================================');
						console.log(language);
						console.log('======================================');
						replies.push(formatter.formatMsg(res.reply()));
						_context.next = 10;
						return agent('GET', 'https://api.github.com/search/repositories?q=language:' + language.value + '&sort=forks&order=desc');

					case 10:
						response = _context.sent;

						console.log('======================================');
						console.log(response);
						console.log('======================================');
						repos = response.body.items.slice(0, 10);

						console.log('======================================');
						console.log(repos);
						console.log('======================================');
						repos.forEach(function (rep) {
							cardsReplies.push({
								name: rep.name,
								picture: rep.owner.avatar_url,
								link: rep.html_url
							});
						});
						replies.push(formatter.formatCardsReplies(cardsReplies));
						return _context.abrupt('return', replies);

					case 21:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function trendingForks(_x) {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* trending forks */
var agent = require('superagent-promise')(require('superagent'), _promise2.default);
var formatter = require('../formatter');

module.exports = trendingForks;