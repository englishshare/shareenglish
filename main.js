var isPrompt=prompt('Bạn có thực sự muốn học Tiếng Anh hay không?');console.log([isPrompt]);
    isConfirm=confirm('Nhấn OK để tiếp tục.');console.log([isConfirm]);
// Thời gian
function time(){var today=new Date;weekday=new Array;weekday[0]="Chủ Nhật";weekday[1]="Thứ Hai";weekday[2]="Thứ Ba";weekday[3]="Thứ Tư";weekday[4]="Thứ Năm";weekday[5]="Thứ Sáu";weekday[6]="Thứ Bảy";day=weekday[today.getDay()];dd=today.getDate();mm=today.getMonth()+1;yyyy=today.getFullYear();h=today.getHours();m=today.getMinutes();s=today.getSeconds();m=checkTime(m);s=checkTime(s);nowTime=h+":"+m+":"+s;if(dd<10){dd='0'+dd}if(mm<10){mm='0'+mm}today=day+', '+dd+'/'+mm+'/'+yyyy;tmp='<span class="date">'+today+' | '+nowTime+'</span>';document.getElementById("clock").innerHTML=tmp;clocktime=setTimeout("time()","1000","JavaScript");function checkTime(i){if(i < 10){i="0"+i;}return i;}}
// Avoiding user agent detection
if(navigator.userAgent.indexOf("Chrome")!==-1){var camelCaseExpression=new RegExp("(?<=[A-Z])");splitUpString=function(str){return(""+str).split(camelCaseExpression);};}else{var splitUpString=function(str){return str.replace(/[A-Z]/g,"z$1").split(/z(?=[A-Z])/g);};}console.log(splitUpString("fooBare"));console.log(splitUpString("jQWhy"));
// Opera 8.0+
var isOpera=(!!window.opr&&!!opr.addons)||!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;
// Firefox 1.0+
var isFirefox=typeof InstallTrigger!=='undefined';
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari=/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"; })(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification));
// Internet Explorer 6-11
var isIE=false||!!document.documentMode;
// Edge 20+
var isEdge=!isIE&&!!window.StyleMedia;
// Chrome 1 - 71
var isChrome=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime);
// Chrome 1+
var isChrome=!!window.chrome;
// Blink engine detection
var isBlink=(isChrome||isOpera)&&!!window.CSS;
console.log(["Opera - "+isOpera]);
console.log(["Firefox - "+isFirefox]);
console.log(["Safari - "+isSafari]);
console.log(["IE - "+isIE]);
console.log(["Edge - "+isEdge]);
console.log(["Chrome - "+isChrome]);
console.log(["Blink - "+isBlink]);
// Window Navigator
var sBrowser,sUsrAg=navigator.userAgent;
if(sUsrAg.indexOf("Firefox")>-1){sBrowser="Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
}else if(sUsrAg.indexOf("SamsungBrowser")>-1){sBrowser="Samsung Internet";
  // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
}else if(sUsrAg.indexOf("Opera")>-1||sUsrAg.indexOf("OPR")>-1){sBrowser="Opera";
  // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
}else if(sUsrAg.indexOf("Trident")>-1){sBrowser="Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
}else if(sUsrAg.indexOf("Edge")>-1){sBrowser="Microsoft Edge";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
}else if(sUsrAg.indexOf("Chrome")>-1){sBrowser="Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
}else if(sUsrAg.indexOf("Safari")>-1){sBrowser="Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
}else{sBrowser="unknown";}
var isAlert=alert("Bạn đang sử dụng: "+sBrowser);console.log([isAlert]);
// Check user click event to go to learn
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__1").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 1). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=kLRvb0gF4Bg");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 1).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__2").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 2). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=HHb81FCzDBU");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 2).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__3").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 3). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=a571Vxccgmo");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 3).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__4").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 4). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=tcEzARzTjk4");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 4).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__5").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 5). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=sPcf8GM7EKQ");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 5).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__6").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 6). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=O-ScRyy3MHE");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 6).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__7").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 7). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=yke-z54CzF8");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 7).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__8").onclick = function(event) {
  if (this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 8). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=aahlKEyXuXA");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 8).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__9").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 9). Nhấn OK để tiếp tục.");
    console.log([alert]);
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=n2dd7I_rvWs");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 9).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__10").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 10). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=Ld271xOPV04");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 10).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__11").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 11). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=gFZV4bqiick");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 11).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__12").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 12). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=FaoIhc2kgpo");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 12).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__13").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 13). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=g6bAJh1_rB4");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 13).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__14").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 14). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=nQUITr-QpO4");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 14).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__15").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 15). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=iLpysfFgG6Y");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 15).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__16").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 16). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=vhZ6ei24PrA");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 16).");
    console.warn([alert]);
  }
}
document.querySelector(".container__table__table-body__table-row__table-data__input__checkUserClickToGoToLearn__17").onclick = function(event) {
  if(this.checked) {
    alert("Bạn đã đăng ký thành công khóa học How to say all the countries in the world(Part 17). Nhấn OK để tiếp tục.")
    console.log([alert]);;
    alert("Sao chép đường link này để học: https://www.youtube.com/watch?v=yaLrgYlHvFM");
    console.log([alert]);
  } else {
    alert("Bạn đã bỏ đăng ký khóa học How to say all the countries in the world(Part 17).");
    console.warn([alert]);
  }
}
