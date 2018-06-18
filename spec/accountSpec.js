describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  });

  it('Has a balance that starts with 0 ', function(){
    expect(account.balance).toEqual(0);
  });
});
