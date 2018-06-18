describe('Account', function(){
  var account;
  var history;

  beforeEach(function(){
    history = jasmine.createSpyObj('history', ['_add']);
    account = new Account(history);

  });

  it('takes a argument for accounthistory and saves it', function(){
    expect(account.historyLog).toEqual(history);
  })

  it('Has a balance that starts with 0.00', function(){
    expect(account.balance).toEqual(0.00);
  });

  describe('#deposit', function(){

    it('Balance will equal 100.10 when 100.10 is the argument', function(){
      account.deposit(100.10, "10-12-2012");
      expect(account.balance).toEqual(100.10);
    })

    it('HistoryLog method add method is called with correct arguments', function(){
      account.deposit(100.00, "20-12-1990");
      expect(account.historyLog._add).toHaveBeenCalledWith(100.00, "", "20-12-1990", 100.00)
    })
  });

  describe('#withdraw', function(){

    it('HistoryLog method add method is called with correct arguments', function(){
      account.deposit(100.00, "20-12-1990");
      account.withdraw(20.20, "30-5-1000");
      expect(account.historyLog._add).toHaveBeenCalledWith("", 20.20, "30-5-1000", 79.80)
    })

    it('Balance will equal 220.20 when 80.30 is the argument', function(){
      account.deposit(300.50, "10-12-2012");
      account.withdraw(80.30, "10-12-2012");
      expect(account.balance).toEqual(220.20);
    });

    it('Throws error if insufficient funds in account', function(){
      expect(function(){
        account.withdraw(100.00, "10-12-2012");
      }).toThrow("Insufficient funds available");
    });
  });
});
