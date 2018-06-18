function Account(){

  this.balance = 0.00;
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
}

Account.prototype.withdraw = function(amount){
  if (this.balance < amount) throw "Insufficient funds available"; 
  this.balance -= amount;
}
