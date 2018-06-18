describe('AccountHistory', function(){
  var history;

  beforeEach(function(){
    history = new AccountHistory();
  });

  it('Starts with empty array', function(){
    expect(history.log).toEqual([]);
  });

  describe('#_dateFormat', function(){
    it('converts - into /',function(){
      expect(history._dateFormat("20-12-1990")).toEqual("20/12/1990");
    });
  });

  describe('#_add', function(){
    it('Adds a new transaction object to the log', function(){
      history._add(100, "", "10-11-2012", 200);
      expect(history.log[0]).toEqual({date: "10/11/2012", credit: 100.00, debit: "", balance: 200.00 })
    });
  });
});
