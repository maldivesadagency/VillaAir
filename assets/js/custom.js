$(document).ready(function () {
  $("button").click(function () {
    $("button").removeClass("active");
    $(this).addClass("active");
  });

  const bookButton = document.getElementById("btn__book");
  const manageButton = document.getElementById("btn__manage");
  const bookDiv = document.getElementById("bookDiv");
  const manageDiv = document.getElementById("manageDiv");

  bookButton.addEventListener("click", function () {
    bookDiv.classList.remove("hidden");
    manageDiv.classList.add("hidden");
  });

  manageButton.addEventListener("click", function () {
    manageDiv.classList.remove("hidden");
    bookDiv.classList.add("hidden");
  });

  const ticketBtn = document.getElementById("search_with_ticket_number");
  const resevBtn = document.getElementById("search_with_reserv_number");
  const resevArea = document.getElementById("reservation__area");
  const ticketArea = document.getElementById("search__with__ticket");

  ticketBtn.addEventListener("click", function () {
    resevArea.style.display = "none";
    ticketArea.style.display = "block";
  });

  resevBtn.addEventListener("click", function () {
    ticketArea.style.display = "none";
    resevArea.style.display = "block";
  });

  // when click id claeed qunt_travelr then display id pesengerSelectbox remove hidden class
  $("#qunt_travelr").click(function () {
    $("#pesengerSelectbox").removeClass("d-none");
    $(document).mouseup(function (e) {
      var container = $("#pesengerSelectbox");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.addClass("d-none");
      }
    });
  });

  $("#qunt_travelr_mobile").click(function () {
    $("#pesengerSelectbox_mobile").removeClass("d-none");
    $(document).mouseup(function (e) {
      var container = $("#pesengerSelectbox_mobile");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.addClass("d-none");
      }
    });
  });
});

$("select").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
    if ($this.children("option").eq(i).is(":selected")) {
      $('li[rel="' + $this.children("option").eq(i).val() + '"]').addClass(
        "is-selected"
      );
    }
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.find("li.is-selected").removeClass("is-selected");
    $list.find('li[rel="' + $(this).attr("rel") + '"]').addClass("is-selected");
    $list.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });

  var $listItems = $list.children("li");

  $listItems.click(function (e) {
    e.stopPropagation();

    var selectedValue = $(this).attr("rel");

    if (selectedValue === "Multy-city") {
      $("#multycity__visitor").show();
      $("#single__trip_way").hide();
    } else {
      $("#multycity__visitor").hide();
      $("#single__trip_way").show();
    }

    $styledSelect.text($(this).text()).removeClass("active");
    $this.val(selectedValue);
    $list.find("li.is-selected").removeClass("is-selected");
    $list.find('li[rel="' + selectedValue + '"]').addClass("is-selected");
    $list.hide();
  });
});