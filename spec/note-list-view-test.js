(function(exports) {
  function testReturnsStringOfHTMLRepresentingNotelist() {
    var notelist = new Notelist();
    notelist.store("Hello my name is Nick and everything is hunky dory");
    var notelistview = new NotelistView(notelist);
    assert.isTrue(notelistview.view() === "<ul><li><div>Hello my name is Nic</div></li></ul>")
  };

  testReturnsStringOfHTMLRepresentingNotelist();
})(this);
