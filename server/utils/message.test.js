var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'bkdev';
    var text = 'go coffee?';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 1;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.url).toBe('https://www.google.com/maps?q=1,1');
    expect(message.createdAt).toBeA('number');
  });
});
