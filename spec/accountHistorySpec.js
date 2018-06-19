describe('AccountHistory', function(){
  var history;

  beforeEach(function(){
    history = new AccountHistory();
  });

  describe('#add', function(){

    it('Adds a new transaction object to the log', function(){
      history.add(100, "", "10-11-2012", 200, "credit");
      expect(history.log[0]).toEqual({ date: "10/11/2012", credit: 100.00, debit: "", balance: 200.00, type: "credit" })
    });
  });
});
