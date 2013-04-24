var Backbone = require('./index');

var c = new Backbone.Collection([
    { id: "1", name: "andy" },
    { id: "2", name: "scott" },
    { id: "3", name: "tevya" }
]);

c.on("update", function() {
    document.getElementById("target").innerHTML = "it's working!";
});

c.set([
    { id: "1", name: "Andy" },
    { id: "2", name: "Scott" },
    { id: "3", name: "Tevya" }
]);