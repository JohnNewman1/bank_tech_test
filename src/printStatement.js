function PrintStatement(history){
  this.history = history
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
  this.history.log.forEach(function(statement){
    if (statement.type == "credit") {
      console.log(statement.date + " || " + Number(statement.credit).toFixed(2) + " || || " + Number(statement.balance).toFixed(2) + "\n")
    } else {
      console.log(statement.date + " || || " + Number(statement.debit).toFixed(2) + " || " + Number(statement.balance).toFixed(2) + "\n")
    }
  });
}
