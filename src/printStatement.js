function PrintStatement(history){
  this.history = history
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
  this.history.log.forEach(function(statement){
    console.log(statement.date + " || " + statement.credit + "|| " + statement.debit + "|| " + Number(statement.balance).toFixed(2) + "\n")
  });
}
