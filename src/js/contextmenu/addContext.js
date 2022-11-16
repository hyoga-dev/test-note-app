import fly from "../fly/fly-card.js";
import { getId, qs } from "../utility.js";
const container = getId("container")

export default function addContext (e) {
    
  const secondClass = e.target.className.split(" ")[1]

  if (e.target.id == "delete" || secondClass == "side-delete") {
    this.removeSelected()
    
  } else if (e.target.id == "copy") {
    e.preventDefault();
    this.copiedText = this.selectBox.cloneNode(true);
    // if (document.activeElement.tagName != "BODY") {
    // }
  } else if (e.target.id == "paste") {
    this.paste(e)
    this.refreshEvent()
    this.refreshFly()

  } else if (e.target.id == "lock") {
    console.log(this.selectBox)
    this.selectBox.setAttribute("contenteditable", false)
    const left = getComputedStyle(this.selectBox).getPropertyValue("left")
    this.selectBox.classList.add("lock")
    this.selectBox.classList.remove("box")
    const lock = qs("lock")
    console.log(left)
    lock.style.setProperty("left", `20px !important`)

  } else if (e.target.id == "unlock") {
    this.selectBox.setAttribute("contenteditable", true)
    // this.selectBox.classList.remove("lock")
    // this.selectBox.classList.add("box")
    this.refreshEvent()
    this.refreshFly()

  } else if (e.target.id == "unlockall") {
    this.unlockAll()

  } else if (secondClass == "side-copy") {
    this.copiedText = document.activeElement.cloneNode(true)
  }

  this.menu.style.display = 'none';

}