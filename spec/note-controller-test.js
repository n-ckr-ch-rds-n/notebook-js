(function(exports) {
  function testNoteController() {
    function NotelistDouble() {};
    NotelistDouble.prototype = {
      store: function() {}
    }
    var notelistdouble = new NotelistDouble;
    var notecontroller = new NoteController(notelistdouble);

    notecontroller.view.view = function () {
      return "<ul><li><div>Neigh!!</div></li></ul>";
    }

    notecontroller.insertViewHtml();
    assert.isTrue(app.innerHTML === "<ul><li><div>Neigh!!</div></li></ul>")
  }

  testNoteController();
})(this);
