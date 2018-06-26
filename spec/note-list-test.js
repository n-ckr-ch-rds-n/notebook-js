(function(exports) {
  function testStoresAnArrayOfNoteModels() {
    var note = new Note("How are you?");
    var notelist = new Notelist();
    notelist.store(note);
    assert.isTrue(notelist.list[0].read === "How are you?")
  };

  testStoresAnArrayOfNoteModels();
})(this);
