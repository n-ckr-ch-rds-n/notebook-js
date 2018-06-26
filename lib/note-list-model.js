(function(exports) {
  function Notelist() {
    this.list = [];
  }

  Notelist.prototype.store = function (string) {
    var note = new Note(string)
    this.list.push(note)
  };

  exports.Notelist = Notelist;
})(this);
