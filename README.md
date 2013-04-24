# backbone-set-event

Adds an event trigger to the Backbone.Collection.set method. When set() is called on a collection, a single 'update' function.

This module exports Backbone.

usage:

    var Backbone = require('backbone-set-event');
    
    var c = new Backbone.Collection([
        { id: "1", name: "andy" },
        { id: "2", name: "scott" },
        { id: "3", name: "tevya" }
    ]);
    
    c.on("update", function() {
        alert("This only fires once!");
    });

    c.set([
        { id: "1", name: "Andy" },
        { id: "2", name: "Scott" },
        { id: "3", name: "Tevya" }
    ]);