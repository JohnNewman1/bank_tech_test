describe('AccountHistory', function(){
  var history;

  beforeEach(function(){
    history = new AccountHistory();
  });

  it('Starts with empty array'. function(){
    expect(history.log).toEqual([]);
  });
});
