(function(exports) {
  function NoteController(notelist) {
    notelist.store("Neigh!!");
    this.view = new NotelistView(notelist);
  }

  NoteController.prototype.insertViewHtml = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.view.view();
  };

  exports.NoteController = NoteController;

})(this);

//
// var app = document.getElementById('app');
// app.innerHTML = "Howdy";
