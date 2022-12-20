document.querySelector("html").style.opacity = "0";

function show() {
  document.querySelectorAll("img.img-fluid").forEach(function (el) {
    el.setAttribute(
      "src",
      "https://drive.google.com/uc?export=view&id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu"
    );
  });

  var url = window.location.href;
  if (url == "https://my.ug.edu.ge/") {
    document.querySelector("main").innerHTML = `
                <iframe style="width:100%;height:800px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&showinfo=0&controls=0" allowfullscreen  frameborder="0"  sandbox="allow-scripts allow-presentation allow-same-origin"
            allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"></iframe> `;
  } else if (url == "https://my.ug.edu.ge/login") {
    document.querySelector(".logo img").style.width = "200px";
  }
  try {
    document.querySelectorAll(".d-none").forEach((el) => {
      el.classList.add("d-block");
    });
  } catch {
    console.log("none");
  }

  document.querySelector(
    "nav"
  ).innerHTML = `<nav data-v-31e7222c="" class="navbar navbar-expand-md navbar__lg  fixed-top "><div data-v-31e7222c="" class="sm-w-100 d-flex order-1 order-md-2"><button data-v-31e7222c="" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span data-v-31e7222c="" class="navbar-toggler-icon"></span></button> </div> <div data-v-31e7222c="" id="navbarSupportedContent" class="collapse navbar-collapse order-2 order-md-1 navbarSupportedContent">
<ul data-v-31e7222c="" class="navbar-nav">

    <li data-v-31e7222c="" class="nav-item ">
        <a data-v-31e7222c="" href="/schedule" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">ცხრილი</a> 
    </li>
    <li data-v-31e7222c="" class="nav-item ">
        <a data-v-31e7222c="" href="/online-books" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">წიგნები</a> 
    </li>

    <li data-v-31e7222c="" class="nav-item">
        <a data-v-31e7222c="" href="/exam-schedule" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">გამოცდები</a> <!---->
    </li>

    <li data-v-31e7222c="" class="nav-item">
        <a data-v-31e7222c="" href="/evaluations" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">შეფასებები</a> <!---->

    </li>

    <li data-v-31e7222c="" class="nav-item">

        <a data-v-31e7222c="" href="/my-applications/" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">განცხადებები</a> <!---->
    </li>

    <li data-v-31e7222c="" class="nav-item">
        <a data-v-31e7222c="" href="/exam-view/" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">ნამუშევრები</a>
    <!----></li>
</ul>
</div></nav>`;
try{
  var message_count = document.querySelector(".badge-danger.badge-pill").innerText

  
var element = `<span class="ml-1 badge-danger badge-pill">${message_count}</span>`
}catch{
  element = ""
}

  document.querySelector(
    "aside"
  ).innerHTML = `<div class="d-flex justify-content-center"><div class="circle-border "><div class="circle"><a href="/"><img src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="profile-image" class="img-fluid"></a></div></div></div>
 <div class="grid-lay">  
  <li class="nav-item">
 
<a href="/conversations/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">მესიჯები${element}</a></li>
  <li class="nav-item">
  
  <a href="/profile/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">პროფილი</a></li>
  <li class="nav-item">
  
  <a href="/my-program/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">სილაბუსები</a></li>
  <li class="nav-item">
  
  <a href="/pay-online/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">გადახდა</a></li><li  class="nav-item">

  <a href="/financial-info/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">ფინანსები</a></li><li  class="nav-item">
  
  
  <a style="background:red !important;"href="/logout" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">გამოსვლა</a></li></div>`;
  // სახელები
  var senders = [
    "საზოგადოებასთან ურთიერთობისა და მარკეტინგის სამსახური",
    "თამარ ცეცხლაძე",
    "სტუდენტურ საქმეთა ცენტრი",
    "თეა ზარიძე",
    "ხაინდრავა სალომე",
    "გუგუნავა დიმიტრი",
    "ბაჯიაშვილი ანასტასია",
    "მარიამ გაგელიძე",
  ];
  var yellows = ["მედეა ჯანჯღავა"];
  const timer = setTimeout(main, 1000);

  // ფუნქცია იწყება 100 მილიწამში
  function main() {
    clearTimeout(timer);
    try {
      document.querySelector(".message-search-area").remove();
      document.querySelector(".conversation-note").remove();
    } catch {}
    // ფილტრაცია
    var url = window.location.href;
    if (url.includes("conversations")) {
      document.querySelector("main").classList.add("convers");
      var msgs = document.querySelectorAll(".msg__item");
      msgs.forEach(function (msg) {
        var sender = msg.querySelector(".sender").textContent;
        if (yellows.includes(sender)) {
          msg.remove();
        }
        if (!senders.includes(sender) && !yellows.includes(sender)) {
          msg.querySelector(".sender").classList.add("yellow-msg");
        }
      });

      document
        .querySelector(".conversation__start-inner button img")
        .setAttribute(
          "src",
          "https://drive.google.com/uc?export=view&id=1O13dax4VnwzhVQMQdMgnnFV0eWeVV8ZY"
        );
      document
        .querySelector(".btn-round-attachment img")
        .setAttribute(
          "src",
          "https://drive.google.com/uc?export=view&id=1Jre49HSZf8v-U6FzFYwUfeRIW235N0AG"
        );
    } else if (url.includes("my-program")) {
      document.querySelectorAll("td a").forEach(function (el) {
        el.style.color = "#6d0053 !important";
      });
    } else if (url.includes("schedule")) {
      console.log(1);
      const date = new Date();
      const [month, day] = [date.getMonth() + 1, date.getDate()];

      var schedule = document.querySelectorAll(".schedule tbody tr");

      schedule.forEach((el) => {
        var date = el.querySelector("td[data-label='თარიღი']").innerText;
        var m = parseInt(date.split("-")[1]);
        var d = parseInt(date.split("-")[2]);
        if (month > m || day > d) {
          el.style.display = "none";
        }
      });
    }
  }
}
window.addEventListener("load", (event) => {
  try {
    show();
  } catch {}

  document.querySelector("html").style.opacity = "1";
});

// nav.navbar.d-flex.align-items-center.navbar__sm.fixed-top.d-block.d-sm-none
