document.querySelector("html").style.opacity = "0";
 



function show() {
  // image change
  document.querySelectorAll("img.img-fluid").forEach(function (el) {
    el.setAttribute(
      "src",
      "https://drive.google.com/uc?export=view&id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu"
    );
  });

  var url = window.location.href;
  // if url is login
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

  // top menu
  document.querySelector(
    "nav"
    ).innerHTML = `<nav data-v-31e7222c="" class="navbar navbar-expand-md navbar__lg  fixed-top "><div data-v-31e7222c="" class="sm-w-100 d-flex order-1 order-md-2"><button data-v-31e7222c="" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span data-v-31e7222c="" class="navbar-toggler-icon"></span></button> </div> <div data-v-31e7222c="" id="navbarSupportedContent" class="collapse navbar-collapse order-2 order-md-1 navbarSupportedContent">
  <ul data-v-31e7222c="" class="navbar-nav">

      <li data-v-31e7222c="" class="nav-item ">
          <a data-v-31e7222c="" href="/schedule" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">ცხრილი</a> 
      </li>
      <li data-v-31e7222c="" class="nav-item ">
          <a data-v-31e7222c="" href="/online-books" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">წიგნი</a> 
      </li>

      <li data-v-31e7222c="" class="nav-item">
          <a data-v-31e7222c="" href="/exam-schedule" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">გამოცდა</a> <!---->
      </li>

      <li data-v-31e7222c="" class="nav-item">
          <a data-v-31e7222c="" href="/evaluations" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">შეფასება</a> <!---->

      </li>

      <li data-v-31e7222c="" class="nav-item">

          <a data-v-31e7222c="" href="/my-applications/" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">განცხადება</a> <!---->
      </li>

      <li data-v-31e7222c="" class="nav-item">
          <a data-v-31e7222c="" href="/exam-view/" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">ნამუშევარი</a>
      
      <!----></li>
  </ul>
  </div></nav>`;
  // message count on messages nav item
  try {
    var message_count = document.querySelector(".badge-danger.badge-pill").innerText


    var element = `<span class="ml-1 badge-danger badge-pill">${message_count}</span>`
  } catch {
    element = ""
  }
  // dog image link

  /* <img src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="profile-image" class="img-fluid"> */ 


  // left side menu
  document.querySelector(
    "aside"
  ).innerHTML = `<div class="d-flex justify-content-center"><div class="circle-border "><div class="circle"><a href="/">
  
  <img src="https://avatars.githubusercontent.com/u/71693187?v=4" alt="profile-image" class="img-fluid">
  
  </a></div></div></div>
 <div class="grid-lay">  
  <li class="nav-item">
 
    <a href="/conversations/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">მესიჯი${element}</a></li>
    <li class="nav-item">
    
    <a href="/profile/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">პროფილი</a></li>
    <li class="nav-item">
    
    <a href="/my-program/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">სილაფუსი</a></li>
    <li class="nav-item">
    
    <a href="/pay-online/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">გადახდა</a></li><li  class="nav-item">

    <a href="/financial-info/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">ბალანსი</a></li><li  class="nav-item">

    <a href="/presentations/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">ნაშრომი</a></li><li  class="nav-item">

    <a href="/registration/" style="display:flex !important; justify-content:center !important;color:white !important;background: #679300 !important;"class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">არჩევა</a></li><li  class="nav-item">

    
    <a style="background:red !important;"href="/logout" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">გამოსვლა</a></li>

  </div>`;
  // left-menu end

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
    "დასაქმების ხელშეწყობის ცენტრი",
    "სამსახური ფინანსური",
    "ნათია მანჯიკაშვილი"
  ];
  // ბლოკლისტი
  var blocked = [
    "მედეა ჯანჯღავა",
  ];


  const timer = setTimeout(main, 100);
  // ფუნქცია იწყება 100 მილიწამში
  function main() {
    clearTimeout(timer);
    
    // ფილტრაცია
    var url = window.location.href;
    // chat fix 
    if (url.includes("conversations")) {
      
      try {
        document.querySelector(".message-search-area").remove();
        document.querySelector(".conversation-note").remove();
      } catch { }

      document.querySelector("span.close-button").addEventListener("click", () => {
        document.querySelector(".conversation-sm-h").style.display = "none"
      })
      document.querySelectorAll(".msg__item-wrapper").forEach((el) => {
        el.addEventListener("click", () => {
          document.querySelector(".conversation-sm-h").style.display = "block"
        })
      })
      document.querySelector("main").classList.add("convers");
      var msgs = document.querySelectorAll(".msg__item");
      msgs.forEach(function (msg) {
        var sender = msg.querySelector(".sender").textContent;
        // თუ yellow სიას ეკუთვნის  წაშალე
        if (senders.includes(sender)) {
          msg.querySelector(".sender").classList.add("yellow-msg");
        }
        //  თუ არ არის სენდერი და არც yellow არის მაშინ
        if (blocked.includes(sender)) {
          msg.remove();
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
    } 
    // evaluation page
    else if (url.includes("evaluations")){
      document.querySelector(".btn-registration").click()
    }

    // subjects page fix
    else if (url.includes("my-program")) {
      document.querySelectorAll("td a").forEach(function (el) {
        el.style.color = "#6d0053 !important";
      });
    } 
    // timetable fix
    else if (url.includes("/schedule")) {
      const date = new Date();
      const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];

      var schedule = document.querySelectorAll(".schedule tbody tr");

      schedule.forEach((el) => {
        var date = el.querySelector("td[data-label='თარიღი']").innerText;
        var y = parseInt(date.split("-")[0]);
        var m = parseInt(date.split("-")[1]);
        var d = parseInt(date.split("-")[2]);
        console.log(year)
        if (month > m || day > d || year > y) {
          el.style.display = "none";

        }
      })
    }// timetable end
    // exam-schedule page
    else if (url.includes("schedule")){
      function filtertable(){
        const date = new Date();
        const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
  
        var schedule = document.querySelectorAll("table tr");
  
        schedule.forEach((el) => {
          if (el.innerHTML.includes("საგანი")){
            return
          }
          el.classList.add("active-exam")
          var date = el.querySelectorAll("td")[3].innerText;
          var y = parseInt(date.split("-")[0]);
          var m = parseInt(date.split("-")[1]);
          var d = parseInt(date.split("-")[2]);
          console.log(year)
          if (month > m || day > d || year > y) {
            el.style.display = "none";
  
          }
        })

        document.querySelector("html").classList.add("exam-sched")
  
      }// filterfunc end
      filtertable()
      document.querySelector("#nav-tab").addEventListener("mouseleave",()=>{
        filtertable()
      })
      
    }// exam schedule fix end
    else if (url.includes("/exam-view")){
     document.querySelector("h2").outerHTML +=`<a href="/exam-view/" class="btn btn-main my-btn">ნამუშევრიდან გამოსვლა</a>`
     if (document.querySelector('.exam-view-section')){
      document.querySelector(".my-btn").remove()
     }
    }
    


  } //main func end
} // func show end

  window.addEventListener("load", (event) => {

    // reload when url changes
    function doSomething() {
    document.querySelector("html").style.opacity = "0";

       window.location.reload()
       show()
    }
    
    let currentUrl = location.href;
    
    setInterval(() => {
      if (location.href !== currentUrl) {
        currentUrl = location.href;
        doSomething();
      }
    }, 10);

    //  menus 
    try {
      show();
    } catch {
     
      
     }
    try {

      document.querySelector("#survey-modal___BV_modal_outer_").remove()
    } catch { }
    document.querySelector("html").style.opacity = "1";
  });

