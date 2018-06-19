describe('PrintStatement', function(){
  var statement;
  var history;

  beforeEach(function(){
    history = jasmine.createSpy("history")
    history.log = [{ date: "10/11/2012", credit: 100.00, debit: "", balance: 200.00, type: "credit" },
                  { date: "05/01/2010", credit: "", debit: 100.00, balance: 100.00, type: "debit" }];
    statement = new PrintStatement(history);
    console.log = jasmine.createSpy("console");
  });

  describe('#print', function(){

    it('console logs the titles without any argument',function(){
      statement.print();
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n");
    });

    it('console logs the history log in the correct format', function(){
      statement.print();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n');
      expect(console.log).toHaveBeenCalledWith('10/11/2012 || 100.00 || || 200.00\n');
      expect(console.log).toHaveBeenCalledWith('05/01/2010 || || 100.00 || 100.00\n');
    })
  });
});
