var i2cResponse = context.getVariable("response.content");

context.setVariable("i2cResponse", i2cResponse.replace(/<CardNumber>(.*?)<\/CardNumber>/, "<CardNumber>******</CardNumber>"));