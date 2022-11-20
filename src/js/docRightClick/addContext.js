import { redo, undo } from "../undoRedo.js"


export default function addContext () {
  document.addEventListener("mousedown", (e) => {

    if (e.target.id == "d-paste") {
      this.contextMenu.paste(e, this.contextMenu.copiedText)
    } if (e.target.id == "d-select-all") {
      this.selectAll(e)
    } if (e.target.id == "d-delete") {
      this.contextMenu.removeSelected()
    } if (e.target.id == "unlockall") {
      this.contextMenu.unlockAll()
    } if (e.target.id == "context-undo") {
      undo()
    } if (e.target.id == "context-redo") {
      redo()
    }

    this.menu.style.display = 'none';
  }, false)
}