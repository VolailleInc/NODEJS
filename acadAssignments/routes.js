const fs = require("fs");

const createUserHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    req.write("<html>");
    req.write("<head><title>Hello Users!</title>");
    res.write(
      '<body><form action="/username" method="POST"><input type="text" name="username"><button type="submit">Username</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    req.write("<html>");
    req.write("<head><title>Hello Users!</title>");
    res.write(
      "<body><h1>Hello awesome users of my app</h1><ul><li>Abdul-Razak</li><li>Phaako</li><li>Neenah</li><li>Siham</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/createuser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const passedBody = Buffer.concat(body).toString();
      const username = passedBody.split("="[1]);
      fs.writeFile("message.txt", username, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
     res.setHeader('Content-Type','text/html')
    res.write("<html>");
    res.write("<head><title>Hello Users!</title>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
};

exports.handler = createUserHandler;
