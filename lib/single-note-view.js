(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.noteHtmlString = function () {
    var htmlstring = `<div>` + this.note.read + `</div>`;
    return htmlstring;
  };

  exports.SingleNoteView = SingleNoteView;
})(this)
