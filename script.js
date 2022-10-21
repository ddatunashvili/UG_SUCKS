document.querySelector("html").style.opacity = "0";

function show() {
    window.addEventListener("load", (event) => {
        document.querySelector("html").style.opacity = "1";
        document.querySelectorAll("img.img-fluid").forEach(function (el) {
            el.setAttribute("src", "https://drive.google.com/uc?export=view&id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu");
        });

        var url = window.location.href;
        if (url == "https://my.ug.edu.ge/") {
            document.querySelector("main").innerHTML = `<iframe style="width:100%;height:800px" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;controls=0&autoplay=1&mute=1&showinfo=0&modestbranding=0" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay=True; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
        }

        document.querySelector("nav").innerHTML = `<nav data-v-31e7222c="" class="navbar navbar-expand-md navbar__lg  fixed-top "><div data-v-31e7222c="" class="sm-w-100 d-flex order-1 order-md-2"><button data-v-31e7222c="" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span data-v-31e7222c="" class="navbar-toggler-icon"></span></button> </div> <div data-v-31e7222c="" id="navbarSupportedContent" class="collapse navbar-collapse order-2 order-md-1 navbarSupportedContent"><ul data-v-31e7222c="" class="navbar-nav"><li data-v-31e7222c="" class="nav-item ">
<a data-v-31e7222c="" href="/schedule" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">ცხრილი</a> </li><li data-v-31e7222c="" class="nav-item ">
<a data-v-31e7222c="" href="/online-books" class="nav-link text-nowrap" id="navbarDropdown_lg-0" role="button" aria-haspopup="true" aria-expanded="false"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">წიგნები</a> </li><li data-v-31e7222c="" class="nav-item">

<a data-v-31e7222c="" href="/exam-schedule" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">გამოცდები</a> <!----></li><li data-v-31e7222c="" class="nav-item">

<a data-v-31e7222c="" href="/evaluations" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">შეფასებები</a> <!----></li><li data-v-31e7222c="" class="nav-item">

<a data-v-31e7222c="" href="/my-applications/" class="nav-link text-nowrap"><img data-v-31e7222c="" src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="" class="img-fluid pre-icon">განცხადებები</a> <!----></li></ul></div></nav>`;

        document.querySelector("aside").innerHTML = `<div class="d-flex justify-content-center"><div class="circle-border "><div class="circle"><a href="/"><img src="https://drive.google.com/uc?export=view&amp;id=1Csxh6szRXpu0ye3fDo0_cWQTyp1xYVeu" alt="profile-image" class="img-fluid"></a></div></div></div>
 <div class="grid-lay">  
  <li class="nav-item">
 
<a href="/conversations/" class="nav-link d-flex align-items-baseline justify-content-start" id="conversations">მესიჯები</a></li>
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

        const timer = setTimeout(main, 1000);

        // ფუნქცია იწყება 100 მილიწამში
        function main() {
            clearTimeout(timer);
            document.querySelector("html").style.opacity = "1";
            document.querySelector(".message-search-area").remove();
            document.querySelector(".conversation-note").remove();

            // ფილტრაცია
            var url = window.location.href;
            if (url.includes("conversations")  ) {
                document.querySelector("main").classList.add("convers");
                var msgs = document.querySelectorAll(".msg__item");
                msgs.forEach(function (msg) {
                    var sender = msg.querySelector(".sender").textContent;
                    if (! senders.includes(sender)) {
                        msg.remove();
                    }
                });

                document.querySelector(".conversation__start-inner button img").setAttribute("src", "https://drive.google.com/uc?export=view&id=1O13dax4VnwzhVQMQdMgnnFV0eWeVV8ZY");
                document.querySelector(".btn-round-attachment img").setAttribute("src", "https://drive.google.com/uc?export=view&id=1Jre49HSZf8v-U6FzFYwUfeRIW235N0AG");
            }
        }
    });
}

show();
