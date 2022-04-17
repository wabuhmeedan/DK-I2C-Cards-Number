var cardNumber = context.getVariable("card.card_number");
var expiryDate = context.getVariable('card.expiry_date');

// cardNumber = cardNumber.match(/.{1,4}/g).join(" ");
cardNumber = ".... " + cardNumber.slice(-4);

if(expiryDate){
    var year = expiryDate.slice(-2);
    var month = expiryDate.length == 5 ? expiryDate.slice(0,1) : expiryDate.slice(0,2);
    context.setVariable("card.expiry_date", month.concat('/', year));
}

context.setVariable("card.card_number", cardNumber);
