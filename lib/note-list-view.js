(function(exports) {
  function NotelistView(notelist) {
    this.notelist = notelist;
  }

  NotelistView.prototype.view = function () {
    var htmlString = "<ul>";
    this.notelist.list.forEach(function(note){
      htmlString += `<li><div>` + note.read.substring(0, 20) + `</div></li>`
    })
    htmlString += "</ul>";
    return htmlString;
  };

  exports.NotelistView = NotelistView;
})(this);
