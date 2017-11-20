'use strict';

/* module imports */

exports.formatMsg = function (msg) {
  return {
    type: 'text',
    content: msg
  };
};

exports.formatImg = function (link) {
  return {
    type: 'picture',
    content: link
  };
};

exports.formatQuickReplies = function (quickRp, sentence) {
  var elements = [];
  quickRp.forEach(function (elem) {
    elements.push({
      title: elem.name,
      value: elem.value
    });
  });
  return {
    type: 'quickReplies',
    content: {
      title: sentence,
      buttons: elements
    }
  };
};

exports.formatCardsReplies = function (cards) {
  var elements = [];
  cards.forEach(function (c) {
    elements.push({
      title: c.name,
      imageUrl: c.picture,
      buttons: [{
        type: 'web_url',
        title: c.name,
        value: c.link
      }]
    });
  });
  return {
    type: 'carouselle',
    content: elements
  };
};