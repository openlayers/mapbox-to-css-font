import should from 'should';
import parseFont from '../index';

describe('mapbox-to-css-font', function() {

  describe('parseFont', function() {
    it('handle font-weight', function() {
      should(parseFont('Noto Sans', 16)).eql('normal 400 16px "Noto Sans"');
      should(parseFont('Noto Sans Bold', 16)).eql('normal 700 16px "Noto Sans"');
      should(parseFont('Noto Sans SemiBold Italic', 16)).eql('italic 600 16px "Noto Sans"');
    });
  });

});
