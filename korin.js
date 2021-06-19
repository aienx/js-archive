//Objected-Oriented programmed
//Scripted with EC6
//Object-oriented programmed
//ES6 applied
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec; /* adding time to the div */
  var t = setTimeout(function () {
    currentTime();
  }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */
var korin = {
  changeHtmlContent(id, newVal) {
    document.getElementById(id).innerHTML = newVal;
  },
  getFormVal(id, variable) {
    variable = document.getElementById().value;
  },
  showHtmlElement(id) {
    document.getElementById(id).style.display = "block";
  },
  removeHtmlElement(id) {
    document.getElementById(id).style.display = "none";
  },
  removeElemFontSize(id, fs) {
    document.getElementById(id).style.fontSize = fs;
  },
  removeElemElemColor(id, color) {
    document.getElementById(id).style.color = color;
  },
  removeElemBackgroundColor(id, bc) {
    document.getElementById(id).style.backgroundColor = bc;
  },
  removeElemBackgroundColor(id, img) {
    document.getElementById(id).src = img;
  },
};

class vehicle {
  constructor(type, trans, lights, color, tires) {
    this.type = type;
    this.transmission = trans;
    this.lights = lights;
    this.color = color;
    this.tires = tires;
  }
}

class books {
  constructor(title, author, pages, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
  }
  get author() {
    return this.author;
  }
  set author(val) {
    this.author = val;
  }
}

function cFinder() {
  var fCareer, jhsCourse;

  function htDataCpl() {
    return jhsCourse == "arts" && fCareer == "arts"
      ? "arts"
      : jhsCourse == "science" && fCareer == "science"
      ? "science"
      : jhsCourse == "math" && fCareer == "math"
      ? "science"
      : jhsCourse == "social studies" && fCareer == "social studies"
      ? "science"
      : jhsCourse == "technical" && fCareer == "technical"
      ? "science"
      : jhsCourse == "languages" && fCareer == "languages"
      ? "science"
      : jhsCourse == "business" && fCareer == "business"
      ? "science"
      : "Career type not scripted";
  }
  htDataCpl();

  function preFunc(val) {
    switch (val) {
      case arts:
        return "High-Scool-Of-Arts";
        break;
      case science:
        return "High-Scool-Of-Science";
        break;
      case math:
        return "High-Scool-Of-Math";
        break;
      case "social studies":
        return "High-School-Of-Social-Studies";
        break;
      case technical:
        return "High-School-Of-Technical-Studies";
        break;
      case languages:
        return "High-School-Of-Languages";
        break;
      case business:
        return "High-School-Of-Business";
        break;
    }
  }
}

