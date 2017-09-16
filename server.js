var app = require("express")();

app.get("/", function(request, response){
  response.send({
    ipaddress: request.headers["x-forwarded-for"].split(",")[0],
    language: request.get("Accept-Language").split(",")[0],
    software: request.get("User-Agent").split("(")[1].split(")")[0]
  });
});

app.listen(process.env.PORT);
