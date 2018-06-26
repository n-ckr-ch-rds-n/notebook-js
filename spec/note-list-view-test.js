(function(exports) {
  function testReturnsStringOfHTMLRepresentingNotelist() {
    var notelist = new Notelist();
    notelist.store("house");
    var notelistview = new NotelistView(notelist);
    assert.isTrue(notelistview.view() === "<ul><li><div>house</div></li></ul>")
  };

  testReturnsStringOfHTMLRepresentingNotelist();
})(this);
