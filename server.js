var app = require("express")();

app.get("/", function(request, response){
  response.send({
    ipaddress: request.ip,
    language: request.get("Accept-Language"),
    software: request.get("User-Agent")
  });
});

app.listen(8000);
