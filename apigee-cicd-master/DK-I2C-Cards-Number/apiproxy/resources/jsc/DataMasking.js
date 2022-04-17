jsonRequest = JSON.parse(context.getVariable("JSONRequest"));
jsonResponse = JSON.parse(context.getVariable("JSONResponse"));
jsonRequest.Envelope.Body.BalanceInquiry.Acquirer.Id = "*****";
jsonRequest.Envelope.Body.BalanceInquiry.Acquirer.UserId = "*****";
jsonRequest.Envelope.Body.BalanceInquiry.Acquirer.Password = "*****";
jsonRequest.Envelope.Body.BalanceInquiry.Card.ReferenceID = "*****";
jsonResponse.Envelope.Body.BalanceInquiryResponse.CardNumber = "*****";
context.setVariable("JSONRequestMasked", JSON.stringify(jsonRequest));
context.setVariable("JSONResponseMasked", JSON.stringify(jsonResponse));