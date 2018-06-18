function AccountHistory(){
  this.log = [];
}

AccountHistory.prototype._add = function(credit, debit, date, balance){
  var transaction = {date: , credit: credit , debit: debit, balance: balance}
  this.log.push(transaction)
}
