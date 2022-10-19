import flyingEffect from "./flyingEffect.js";
import saveCorner from "./saveCorner.js";

let box = document.querySelectorAll(".box");
const rotateSpeed = 1.3;
let a, b, rectLeft, rectTop,  arr, moved;


// let content = localStorage.getItem("arr").split(",")






export default function() {
  
  for (let i = 0; i < box.length; i++) {
    
    let box = document.querySelectorAll(".box")[i];
    let fokus = document.querySelectorAll(".mce-edit-focus")[i];
    
    // fokus.addEventListener("click", () => {
    //   box.removeEventListener("mousedown", flyUp)
    // })

    box.addEventListener("mousedown", flyUp); // flying card
    box.addEventListener("keydown", () => {
      box.style.height = "auto";
    }); // flying card



    
    // =========================================================================
    // ========================= FlyUp =========================================
    // =========================================================================
    function flyUp(e) {
      box.style.resize = "both";
      let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
      let width = parseInt(getComputedStyle(box).getPropertyValue("width"));
      let height = parseInt(getComputedStyle(box).getPropertyValue("height"));
      rectLeft = Math.floor(box.getBoundingClientRect().left);
      rectTop = Math.floor(box.getBoundingClientRect().top);
      a = e.clientX;
      b = e.clientY;
      if (a - rectLeft < width - 2 || b - rectTop < height - 2 ) {
        e.preventDefault()

        // <-- indexing
        arr = [];
        for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
          index = parseInt(getComputedStyle(document.querySelectorAll(".box")[k]).getPropertyValue("z-index"));
          arr.push(index);
        } 
        // console.log("X axis: ", a - rectLeft)
        // console.log("Y axis: ", b - rectLeft)
        // console.log("the width: ", width - 10)
        let max = Math.max(...arr);
    
        
        // <-- normalise index
        if (max < 100) {
          box.style.zIndex = max + 1;
          localStorage.setItem(`index${i}`, max);
        } else {
          for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
            // console.log(localStorage.getItem(`index${k}`));
            localStorage.setItem(`index${k}`, localStorage.getItem(`index${k}`) - 10);
            document.querySelectorAll(".box")[k].style.zIndex = localStorage.getItem(`index${k}`);
          }}
        // normalise index -->
        
        // add fly effect --
        // box.style.cursor = "grabbing";
        // box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
    
        // add event handler
        window.addEventListener("mousemove", fly);
        window.addEventListener("mouseup", flyDown);



      }
    }






  
    //  ================================================================
    //  ========================= Fly ==================================
    //  ================================================================
    function fly(e) {
  
      moved = true;
      box.style.cursor = "grabbing";
      box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";

      const mouseHor = e.clientX - (a - rectLeft),
            mouseVer = e.clientY - (b - rectTop);
  
      box.style.left = `${mouseHor}px`;
      box.style.top = `${mouseVer}px`;
  
      localStorage.setItem(`top${[i]}`, mouseVer + "px");
      localStorage.setItem(`left${[i]}`, mouseHor + "px");
  
      flyingEffect(e, box, rotateSpeed)
    }




  
    //  ===================================================================
    //  ========================= FlyDown =================================
    //  ===================================================================
    function flyDown() {
      let container = document.getElementById("container")

      if (moved != true) {
        box.focus()
      }
      moved = false
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
      
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);

      // undo redo
      // let content = localStorage.getItem("arr").split(",")
      // const left = getComputedStyle(box).getPropertyValue("left")
      // const top = getComputedStyle(box).getPropertyValue("top")
      // const pos = [left, top]
      // content.push(pos)
      // // if (content.length > 10) {content.shift()}
      // localStorage.setItem("arr", content)
      // localStorage.setItem("prev", 0)

      // console.log(content)
      
      saveCorner(box)
    }
  }
  
  }
  
  
  
  








  
  
  
  // let index1 = getComputedStyle(box[0]).getPropertyValue("z-index");
  // let index2 = getComputedStyle(box[1]).getPropertyValue("z-index");
  // let index3 = getComputedStyle(box[2]).getPropertyValue("z-index");
  // let index4 = getComputedStyle(box[3]).getPropertyValue("z-index");




      // document.getElementById("demo").innerHTML =
      //   "Box number : " + 0 + ", have index of: " + index1;
      // document.getElementById("demo2").innerHTML =
      //   "Box number : " + 1 + ", have index of: " + index2;
      // document.getElementById("demo3").innerHTML =
      //   "Box number : " + 2 + ", have index of: " + index3;
      // document.getElementById("demo4").innerHTML =
      //   "Box number : " + 3 + ", have index of: " + index4;