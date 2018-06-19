function PrintStatement(history){
  this.history = history
};

PrintStatement.prototype.print = function() {
  this._spaceChecker();
  console.log("date || credit || debit || balance\n");
  this.history.log.forEach(function(statement){
    console.log(statement.date + " || " + statement.credit + "|| " + statement.debit + "|| " + Number(statement.balance).toFixed(2) + "\n")
  });
}

PrintStatement.prototype._spaceChecker = function() {
  this.history.log.forEach(function(statement){
    if(statement.credit != "") {statement.credit = Number(statement.credit).toFixed(2) + " "}
    if(statement.debit != "") {statement.debit = Number(statement.debit).toFixed(2) + " "}
  });
}
