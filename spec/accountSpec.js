describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  });

  it('Has a balance that starts with 0.00 ', function(){
    expect(account.balance).toEqual(0.00);
  });

  describe('#deposit', function(){
    it('Balance will equal 100.10 when 100.10 is the argument', function(){
      account.deposit(100.10);
      expect(account.balance).toEqual(100.10);
    })
  });

  describe('#withdraw', function(){
    it('Balance will equal 220.20 when 80.30 is the argument', function(){
      account.deposit(300.50);
      account.withdraw(80.30);
      expect(account.balance).toEqual(220.20);
    });
    it('Throws error if insufficient funds in account', function(){
      expect(function(){
        account.withdraw(100.00);
    }).toThrow('Insufficient funds available');
    });
  });
});
