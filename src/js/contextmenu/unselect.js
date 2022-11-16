


import { qsa } from "../utility.js"


export default function unselect(e) {
  const secondClass = e.target.className.split(" ")[1]
  const box = e.target.className.split(" ").filter(val => {
    return val === "box";
  })
  const selected = qsa(".selected")
  const shift = e.shiftKey
  // if (e.button === 0) {
    if (box == "box" || box == "" ) {
      
      selected.forEach(x => {
        if (e.target.id != "d-select-all" && secondClass != "side-delete") {
          if (e.target.id != "d-delete" && e.target.id != "delete" ) {
            if (!shift) {
              x.classList.remove("selected") 
            }
          }
        }
      })
  }
  // } 
}