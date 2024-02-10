/* eslint-env mocha */
const should = require('should');
const parseFont = require('../index.js');

describe('mapbox-to-css-font', function() {

  describe('parseFont', function() {
    it('handle font-weight', function() {
      should(parseFont('Noto Sans', 16)).eql('normal 400 16px "Noto Sans"');
      should(parseFont('Noto Sans Bold', 16)).eql('normal 700 16px "Noto Sans"');
      should(parseFont('Noto Sans SemiBold Italic', 16)).eql('italic 600 16px "Noto Sans"');
      should(parseFont('Inter Semi Bold', 16)).eql('normal 600 16px Inter');
    });

    it('handle line-height', function() {
      should(parseFont('monospace', 16)).eql('normal 400 16px monospace');
      should(parseFont('monospace', 16, 3.5)).eql('normal 400 16px/3.5 monospace');
      should(parseFont('monospace', 16, '3em')).eql('normal 400 16px/3em monospace');
    });

    it('use style and weight from primary font', function() {
      should(parseFont(['monospace medium Italic', 'sans-serif Normal'], 16)).eql('italic 500 16px monospace,sans-serif');
    });
  });

});
