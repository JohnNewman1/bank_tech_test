describe('PrintStatement', function(){
  var statement;

  beforeEach(function(){
    statement = new PrintStatement();
    console.log = jasmine.createSpy("log");
  })

  it('console logs the titles without any argument',function(){
    statement.print();
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n");
  })
});
