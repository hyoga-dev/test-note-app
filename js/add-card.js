const rotateSpeed = 1.3;


export default function add() {
  let a, b, at, bt, rectLeft, rectTop, prevEvent, currentEvent, arr;
  const para = document.createElement("div");
  const node = document.createTextNode("Hallo bambang");

  para.appendChild(node);
  para.classList.add("box");

  container.appendChild(para);
  
  for (let j = 0; j < document.querySelectorAll(".box").length; j++ ){
    let box = document.querySelectorAll(".box")[j];
    box.addEventListener("mousedown", flyUp); // flying card
    box.addEventListener("touchstart", flyUp); // flying card


    // * =========================================================================
    // * ========================= FlyUp =========================================
    // * =========================================================================
    function flyUp(e) {
      box = document.querySelectorAll(".box")[j];
      let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
      a = e.clientX;
      b = e.clientY;

      if (window.innerWidth < 450){
        at = e.touches[0].clientX;
        bt = e.touches[0].clientY;
      }
      
      // <-- indexing
      arr = [];
      // add index order
      for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
        index = parseInt(getComputedStyle(document.querySelectorAll(".box")[k]).getPropertyValue("z-index"));
        arr.push(index);
      }
      let max = Math.max(...arr);
      rectLeft = Math.floor(box.getBoundingClientRect().left);
      rectTop = Math.floor(box.getBoundingClientRect().top);
      // indexing -->
  
      // <-- normalise index
      if (max < 100) {
        box.style.zIndex = max + 1;
        localStorage.setItem(`index${j}`, max);
      } else {
        for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
          console.log(localStorage.getItem(`index${k}`));
          localStorage.setItem(`index${k}`, localStorage.getItem(`index${k}`) - 50);
          document.querySelectorAll(".box")[k].style.zIndex = localStorage.getItem(`index${k}`);
        }}
      // normalise index -->
      
      // add fly effect --
      box.style.cursor = "grabbing";
      box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
  
      // add event handler
      window.addEventListener("touchmove", fly);
      window.addEventListener("mousemove", fly);
      window.addEventListener("mouseup", flyDown);
      window.addEventListener("touchend", flyDown);
      // ========================================================
      document.getElementById("demo5").innerHTML = "Arr : " + arr;
    }
  
    // * =========================================================================
    // * ========================= Fly ===========================================
    // * =========================================================================
    function fly(e) {
      box = document.querySelectorAll(".box")[j];

      if (window.innerWidth < 450) {
        const x = e.touches[0].clientX - (at - rectLeft);
        const y = e.touches[0].clientY - (bt - rectTop);
  
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;

        localStorage.setItem(`left${[j]}`, x + "px");
        localStorage.setItem(`top${[j]}`, y + "px");
      } else {
      
        const mouseHor = e.clientX - (a - rectLeft),
              mouseVer = e.clientY - (b - rectTop);
    
        box.style.left = `${mouseHor}px`;
        box.style.top = `${mouseVer}px`;
        
        localStorage.setItem(`top${[j]}`, mouseVer + "px");
        localStorage.setItem(`left${[j]}`, mouseHor + "px");
    
        // * Wosh
        function wosh() {
          currentEvent = e;
          if (prevEvent && currentEvent) {
            var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
            var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
    
            const mx = movementX * 1.5;
            const my = movementY * -1.5;
            if (mx < 25 && mx > -25 && my < 25 && my > -25) {
              box.style.transform = `rotateX(${my / rotateSpeed}deg) rotateY(${mx / rotateSpeed}deg)`;
            }
          }
    
          prevEvent = currentEvent;
        }
        wosh();
      }
    }
  
    // * =========================================================================
    // * ============================ FlyDown ====================================
    // * =========================================================================
    function flyDown() {
      
      box = document.querySelectorAll(".box");
      let index1 = getComputedStyle(box[0]).getPropertyValue("z-index");
      let index2 = getComputedStyle(box[1]).getPropertyValue("z-index");
      let index3 = getComputedStyle(box[2]).getPropertyValue("z-index");
      let index4 = getComputedStyle(box[3]).getPropertyValue("z-index");
      
      box = document.querySelectorAll(".box")[j];
      box.style.cursor = "grab";
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
  
      document.getElementById("demo").innerHTML =
        "Box number : " + 0 + ", have index of: " + index1;
      document.getElementById("demo2").innerHTML =
        "Box number : " + 1 + ", have index of: " + index2;
      document.getElementById("demo3").innerHTML =
        "Box number : " + 2 + ", have index of: " + index3;
      document.getElementById("demo4").innerHTML =
        "Box number : " + 3 + ", have index of: " + index4;
  
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("touchmove", fly);
      window.removeEventListener("mouseup", flyDown);
      window.removeEventListener("touchend", flyDown);
  
      const top = parseInt(getComputedStyle(box).getPropertyValue("top")),
        left = parseInt(getComputedStyle(box).getPropertyValue("left")),
        container = document.querySelector(".container"),
        boxWidth = parseInt(getComputedStyle(box).getPropertyValue("width")),
        boxHeight = parseInt(getComputedStyle(box).getPropertyValue("height")),
        conHeight = parseInt(
          getComputedStyle(container).getPropertyValue("height")
        ),
        conWidth = parseInt(
          getComputedStyle(container).getPropertyValue("width")
        );
  
        if (top < 0 && left > conWidth - boxWidth) {
          box.style.top = `0`;
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`top${[i]}`, `0`);
          localStorage.setItem(`left${[i]}`, `${conWidth - boxWidth}px`);
          return;
        } else if (top > conHeight - boxHeight && left < 0) {
          box.style.top = `${conHeight - boxHeight}px`;
          box.style.left = `0`;
          localStorage.setItem(`top${[i]}`, `${conHeight - boxHeight}px`);
          localStorage.setItem(`left${[i]}`, `0`);
          return;
        } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
          box.style.top = `${conHeight - boxHeight}px`;
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`top${[i]}`, `${conHeight - boxHeight}px`);
          localStorage.setItem(`left${[i]}`, `${conWidth - boxWidth}px`);
          return;
        } else if (top < 0 && left < 0) {
          box.style.top = "0";
          box.style.left = "0";
          localStorage.setItem(`top${[i]}`, `0`);
          localStorage.setItem(`left${[i]}`, `0`);
          return;
        } else if (top < 0) {
          box.style.top = "0";
          localStorage.setItem(`top${[i]}`, `0`);
          return;
        } else if (left < 0) {
          box.style.left = "0";
          localStorage.setItem(`left${[i]}`, `0`);
          return;
        } else if (top > conHeight - boxHeight) {
          box.style.top = `${conHeight - boxHeight}px`;
          localStorage.setItem(`top${[i]}`, `${conHeight - boxHeight}px`);
          return;
        } else if (left > conWidth - boxWidth) {
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`left${[i]}`, `${conWidth - boxWidth}px`);
          return;
        }
    }

  }
}