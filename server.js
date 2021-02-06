const app = require("express")();
const http = require("http").Server(app);

app.get("/", (req, res) => {
    res.send("Hello world!");
})

http.listen(process.env.PORT || 8000, () => {

    console.log("now listening on *:"+(process.env.PORT || 8000)+"...");

});