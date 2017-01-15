const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'bkdev',
      room: 'fcode'
    }, {
      id: '2',
      name: 'sung',
      room: 'fev'
    }, {
      id: '3',
      name: 'elon',
      room: 'fcode'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'bkdev',
      room: 'fcode'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for fcode', () => {
    var userList = users.getUserList('fcode');

    expect(userList).toEqual(['bkdev', 'elon']);
  });

  it('should return names for fev', () => {
    var userList = users.getUserList('fev');

    expect(userList).toEqual(['sung']);
  });
});
