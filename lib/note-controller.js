(function(exports) {
  function NoteController(notelist) {
    notelist.store("My favourite drink is seltzer");
    notelist.store("Eggs");
    notelist.store("Cheese");
    notelist.store("Wine");
    this.notelist = notelist;
  }

  function listen() {
    window.addEventListener("hashchange", function() {
      singleNote();
    });
  };

  function singleNote() {
    var noteID = window.location.hash.split('/')[1];
    var note = this.notelist.list[noteID-1];
    var singlenoteview = new SingleNoteView(note);
    document.getElementById("app").innerHTML = singlenoteview.noteHtmlString();
  };

  NoteController.prototype.insertViewHtml = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.view.view();
  };

  NoteController.prototype.update = function (element) {
    this._view = new NotelistView(this.notelist);
    element.innerHTML = this._view.view();
    listen();
  };

  exports.NoteController = NoteController;

})(this);
