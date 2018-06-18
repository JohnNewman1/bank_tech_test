describe('AccountHistory', function(){
  var history;

  beforeEach(function(){
    history = new AccountHistory();
  });

  it('Starts with empty array', function(){
    expect(history.log).toEqual([]);
  });

  describe('#add', function(){
    it('Adds a new transaction object to the log', function(){
      history._add(100, "", "10-11-2012", 200);
      expect(history.log[0]).toEqual({date: 10/11/2012, credit: 100, debit: "", balance: 200 })
    });
  });
});
