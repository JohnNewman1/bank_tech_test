function PrintStatement(history){
  this.log = history.log
};

PrintStatement.prototype.print = function() {
  console.log("date || credit || debit || balance\n");
  console.log("")
}
