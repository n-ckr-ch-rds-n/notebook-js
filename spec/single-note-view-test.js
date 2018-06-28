(function(exports) {
  function testSingleNoteView() {
    var note = new Note("Cool beans");
    var singlenoteview = new SingleNoteView(note);
    assert.isTrue(singlenoteview.noteHtmlString() === "<div>Cool beans</div>");
  };

  testSingleNoteView();
})(this);
