function PrintStatement(history){
  this.log = history.log
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
    this.log.forEach(function (statement){
      console.log(statement.date + " ||" + statement.credit + " || " + statement.debit + " ||" + statement.balance)
    });

}
