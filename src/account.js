function Account(history){

  this.historyLog = history;
  this.balance = 0.00;
}

Account.prototype.deposit = function(amount, date){
  this.balance += amount;
  this.historyLog.add(amount, "", date, this.balance, "credit");
}

Account.prototype.withdraw = function(amount, date){
  if (this.balance < amount) throw "Insufficient funds available";
  this.balance -= amount;
  this.historyLog.add("", amount, date, this.balance, "debit");
}
