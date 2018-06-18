function Account(){

  this.balance = 0.00;
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
}
