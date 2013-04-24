var Backbone = require('backbone');
var oldSet = Backbone.Collection.prototype.set;
Backbone.Collection.prototype.set = function(models, options) {
    options = options || {};
    oldSet.call(this, models, options);
    if (options.silent) return this;
    this.trigger('update', this, options);
}
exports = module.exports = Backbone;