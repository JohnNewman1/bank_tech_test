function PrintStatement(history){
  this.history = history
  this.transaction;
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
  this.history.log.reverse().forEach(function(statement){
    this._format(statement)
    console.log(this.transaction);
  }.bind(this));
}

PrintStatement.prototype._format = function(statement){
  if (statement.type == "credit") {
    this.transaction = statement.date + " || " + Number(statement.credit).toFixed(2) + " || || " + Number(statement.balance).toFixed(2) + "\n"
  } else {
    this.transaction = statement.date + " || || " + Number(statement.debit).toFixed(2) + " || " + Number(statement.balance).toFixed(2) + "\n"
  }
}
