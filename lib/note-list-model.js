(function(exports) {
  function Notelist() {
    this.list = [];
  }

  Notelist.prototype.store = function (note) {
    this.list.push(note)
  };

  exports.Notelist = Notelist;
})(this);
