function PrintStatement(history){
  this.history = history
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
  this.history.log.reverse().forEach(function(statement){
    console.log(statement.date + " ||" + this._format(statement) + " " + Number(statement.balance).toFixed(2) + "\n" );
  }.bind(this));
}

PrintStatement.prototype._format = function(statement){
  return (statement.type == "credit") ? ` ${Number(statement.credit).toFixed(2)} || ||` : ` || ${Number(statement.debit).toFixed(2)} ||`;
}
