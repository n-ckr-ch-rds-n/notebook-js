(function(exports) {
  function testNoteCanBeReturned() {
    var note = new Note("Hello");

    assert.isTrue(note.read === "Hello");

  };

  testNoteCanBeReturned();
})(this);
