function AccountHistory(){
  this.log = [];
}

AccountHistory.prototype._add = function(credit, debit, date, balance){
  var formatDate = this._dateFormat(date)
  var transaction = {date: formatDate, credit: credit, debit: debit, balance: balance}
  this.log.push(transaction)
}

AccountHistory.prototype._dateFormat = function(date){
  var formatedDate = date.replace(/-/g, "/");
  return formatedDate;

}
