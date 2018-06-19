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
    console.log = jasmine.createSpy("console");
  });

  it('balance equals 2500', function(){
    expect(account.balance).toEqual(2500);
  });

  it('console log recieves correct arguments', function(){
    output.print()
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n");
    expect(console.log).toHaveBeenCalledWith("14/01/2012 || || 500.00 || 2500.00\n");
    expect(console.log).toHaveBeenCalledWith("13/01/2012 || 2000.00 || || 3000.00\n");
    expect(console.log).toHaveBeenCalledWith("10/01/2012 || 1000.00 || || 1000.00\n");
  });
});
