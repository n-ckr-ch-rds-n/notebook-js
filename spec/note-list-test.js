(function(exports) {
  function testStoresAnArrayOfNoteModels() {
    var notelist = new Notelist();
    notelist.store("How are you?");
    assert.isTrue(notelist.list[0].read === "How are you?")
  };

  testStoresAnArrayOfNoteModels();
})(this);
