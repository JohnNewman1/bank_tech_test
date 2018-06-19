function AccountHistory(){
  this.log = [];
}

AccountHistory.prototype.add = function(credit, debit, date, balance, type){
  var formatDate = this._dateFormat(date)
  var transaction = {date: formatDate, credit: credit, debit: debit, balance: balance, type: type}
  this.log.push(transaction)
}

AccountHistory.prototype._dateFormat = function(date){
  var formatedDate = date.replace(/-/g, "/");
  return formatedDate;
}
