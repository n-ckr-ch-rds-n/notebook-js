(function(exports) {
  function Notelist() {
    this.list = [];
  }

  Notelist.prototype.store = function (string) {
    var id = (this.list.length + 1)
    var note = new Note(string, id)
    this.list.push(note)
  };

  exports.Notelist = Notelist;
})(this);
