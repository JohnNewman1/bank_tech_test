describe('Feature Tests', function(){
    var account;
    var output;
    var history;
  beforeEach(function(){
    history = new AccountHistory();
    output = new PrintStatement(history);
    account = new Account(history);
    account.deposit(1000, "10-01-2012");
    account.deposit(2000, "13-01-2012");
    account.withdraw(500, "14-01-2012");
  })

  it('balance equals 2500', function(){
    expect(account.balance).toEqual(2500);
  })

})
