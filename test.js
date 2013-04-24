var assert = require('assert');
var Backbone = require('./index');

var c = new Backbone.Collection([
    { id: "1", name: "andy" },
    { id: "2", name: "scott" },
    { id: "3", name: "tevya" }
]);

describe("a backbone-set-event module", function() {
    it("should trigger an update event when 'set' is called on a collection", function(done) {
        c.on("update", function() {
            assert(true);
            done();
        });

        c.set([
            { id: "1", name: "Andy" },
            { id: "2", name: "Scott" },
            { id: "3", name: "Tevya" }
        ]);
    })
})