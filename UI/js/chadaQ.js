/*
* chadaQ.js 
* Author Chadrack Ruhara
* 16 june 2019
*/


let Qselect = (element) => {
    return document.querySelector(element);
}

let QselectAll = (element) => {
    return document.querySelectorAll(element);
}

let Qval = (element) => {
    return Qselect(element).value;
}

/* Set a style(css) to an element */
const Qstyle = (element, property, value) => {
    element.style.setProperty(property, value);
};

const Qhide = (element) => {
    Qstyle(element, "display", "none");
};

const Qshow = (element,value='block') => {
    Qstyle(element, "display", value);
};

const QredirectTo = (path) => {
    document.location.assign(path);
}
/** Validator  */
class IsQ {
    constrcutor() {}

   
    Qvalid(inputType, value) {

        if (inputType == undefined || value == undefined ) { return false }

        const purified = value.toString().toLowerCase().trim();
        let   water;

        switch(inputType) {

            case "name"   : {
                water = /^[a-zA-Z'-]{2,30}$/;
                break;
            }
            case "number" : {
                water = /^-{0,1}\d+$/;
                break;
            }
            case "email" :  {
                water =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                break;
            }
            case "phone" : {
                water = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                break;
            }
            case "url"  : {
                return false
            }
            default : {
                return false ;
            }
        }

        return water.test(purified);

    }

}

/** File load - include */
let Qinclude = ()  => {

    let z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");

    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("Qinclude");

      if (file) {

        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("Qinclude");
            Qinclude();
          }
        }      
        
        xhttp.open("GET", file, true);
        xhttp.send();

        return;
      }
    }

  };