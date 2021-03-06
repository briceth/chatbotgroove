'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var showLanguage = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
		var replies, quickReplies;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log('SHOW LANGUAGE');

						replies = [];
						quickReplies = [];

						languages.forEach(function (l) {
							quickReplies.push({
								name: l,
								value: 'Top starred repos in ' + l
							});
						});
						replies.push(formatter.formatQuickReplies(quickReplies, res.reply()));
						return _context.abrupt('return', replies);

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function showLanguage(_x) {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var agent = require('superagent-promise')(require('superagent'), _promise2.default);
var formatter = require('../formatter');
var languages = ['Asssembly', 'C', 'C++', 'Go', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust', 'Swift'];

module.exports = showLanguage;