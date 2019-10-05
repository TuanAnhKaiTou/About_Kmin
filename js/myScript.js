$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  slidesToScroll: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
  dotsEach: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: offsetTop
      },
      300
    );
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }
});

var Team = [
  {
    img: "./assets/teacher/vdbao1.jpg",
    ten: "Vũ Đình Bảo",
    off1: "Founder",
    off2: "PM",
    off3: "Teacher",
    off4: "Admin",
    info: [
      "Tốt nghiệp loại giỏi chuyên ngành Khoa học máy tính",
      "Project manager tại KDT (Kmin Dev Team)",
      "Huấn luyện viên đội tuyển Olympic Tin học của trường Cao Thắng"
    ],
    op:
      "Hãy cho tôi thấy cách bạn giải quyết vấn đề, tôi sẽ biết bạn dev ra sao."
  },
  {
    img: "./assets/teacher/ntngoc1.jpg",
    ten: "Nguyễn Thị Ngọc",
    off1: "",
    off2: "QA",
    off3: "Teacher",
    off4: "Admin",
    info: [
      "Tốt nghiệp Đại học Khoa học Tự nhiên chuyên ngành Hệ thống thông tin",
      "Teacher trường Cao đẳng Kỹ thuật Cao Thắng",
      "Từng là QA tại KMS Technology"
    ],
    op: "Chỉ có việc nào người ta muốn làm thì mới có thể làm tốt được."
  },
  {
    img: "./assets/teacher/ashark1.png",
    ten: "Lê Hồng Phúc",
    off1: "",
    off2: "Leader",
    off3: "Teacher",
    off4: "",
    info: [
      "Front-end Team Leader tại KDT (Kmin Dev Team)",
      "Danh hiệu học viên xuất sắc nhất năm 2018",
      "Từng làm designer tại Hune Group."
    ],
    op: "Nghèo đói là điều duy nhất bạn có thể đạt được mà không gặp khó khăn."
  },
  {
    img: "./assets/teacher/ntthe1.png",
    ten: "Nguyễn Thanh Thế",
    off1: "",
    off2: "Leader",
    off3: "Teacher",
    off4: "",
    info: [
      "Tốt nghiệp loại giỏi chuyên ngành Công nghệ thông tin",
      "Full-stack developer tại KDT (Kmin Dev Team)",
      "Giải khuyến khích Olympic Tin học sinh viên toàn quốc"
    ],
    op: "Hãy học lập trình như một học sinh lớp 1."
  },
  {
    img: "./assets/teacher/vcttai1.jpg",
    ten: "Vũ Công Tấn Tài",
    off1: "",
    off2: "",
    off3: "Teacher",
    off4: "",
    info: [
      "Full-stack developer tại Cybozu Vietnam",
      "Sáng lập Blog Những dòng code vui",
      "Tốt nghiệp loại giỏi trường Đại học Khoa học tự nhiên"
    ],
    op: ""
  },
  {
    img: "./assets/teacher/",
    ten: "",
    off1: "",
    off2: "",
    off3: "Teacher",
    off4: "",
    info: [
      "Full-stack developer tại Cybozu Vietnam",
      "Sáng lập Blog Những dòng code vui",
      "Tốt nghiệp loại giỏi trường Đại học Khoa học tự nhiên"
    ],
    op: ""
  },
  {
    img: "./assets/teacher/hthieu1.jpg",
    ten: "Hoàng Trung Hiếu",
    off1: "",
    off2: "",
    off3: "Teacher",
    off4: "",
    info: [
      "Đồng tác giả chương trình Dạy máy tính điều phối tín hiệu đèn giao thông",
      "Giải nhất cuộc thi quốc tế Medico: The 2018 Multimedia for Medicine Task"
    ],
    op: "Hãy theo đuổi đam mê, thành công sẽ theo đuổi bạn"
  },
  {
    img: "./assets/teacher/tmthien1.png",
    ten: "Trương Minh Thiện",
    off1: "",
    off2: "",
    off3: "SA",
    off4: "",
    info: [
      "Sinh viên đại học Khoa học Tự nhiên",
      "Tốt nghiệp khóa học Làm chủ ngôn ngữ lập trình loại xuất sắc"
    ],
    op: "Don't wait for opportunity, create it."
  },
  {
    img: "./assets/teacher/nvcuong1.jpg",
    ten: "Nguyễn Văn Cường",
    off1: "",
    off2: "",
    off3: "Teacher",
    off4: "",
    info: [
      "Senior iOS Developer với 5 năm kinh nghiệm",
      "Đã từng làm việc tại công ty đa quốc gia, hiện đang là Freelancer"
    ],
    op: "Hit everthing!"
  },
  {
    img: "./assets/teacher/nttu1.jpg",
    ten: "Nguyễn Thanh Tú ",
    off1: "",
    off2: "",
    off3: "Teacher",
    off4: "",
    info: [
      "iOS Developer tại MPire Agency",
      "Tốt nghiệp loại giỏi chuyên ngành Công nghệ thông tin",
      "Đồ án tốt nghiệp loại xuất sắc"
    ],
    op: ""
  },
  {
    img: "./assets/teacher/tui1.png",
    ten: "Nguyễn Tuấn Anh",
    off1: "",
    off2: "Developer",
    off3: "",
    off4: "Admin",
    info: [
      "Sinh viên năm 3 trường Cao đẳng kỹ thuật Cao Thắng",
      "Chuyên ngành Công nghệ thông tin",
      "Thích đọc sách và ngồi code mỗi khi rảnh"
    ],
    op: ""
  },
  {
    img: "./assets/teacher/thang1.png",
    ten: "Nguyễn Hữu Thắng",
    off1: "",
    off2: "Developer",
    off3: "",
    off4: "",
    info: [
      "Sinh viên năm 3 trường Cao đẳng kỹ thuật Cao Thắng",
      "Chuyên ngành Công nghệ thông tin",
      "Đạt giải khuyến khích Olympic Tin học sinh viên năm 2018 khối không chuyên"
    ],
    op: ""
  }
];
var img = document.getElementById("img");
var ten = document.getElementById("ten");
var off1 = document.getElementById("off1");
var off2 = document.getElementById("off2");
var off3 = document.getElementById("off3");
var off4 = document.getElementById("off4");
var info = document.getElementById("info");
var op = document.getElementById("op");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    modal.style.display = "block";
    var value = this.getAttribute("value");
    console.log(value);
    showInfo(value);
  });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showInfo(value) {
  let name = findName(Team, value);
  img.src = Team[name].img;
  ten.innerHTML = Team[name].ten;
  off1.innerHTML = Team[name].off1;
  off2.innerHTML = Team[name].off2;
  off3.innerHTML = Team[name].off3;
  off4.innerHTML = Team[name].off4;
  addInfo(Team[name].info);
  op.innerHTML = Team[name].op;
}

function findName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].ten === name) {
      return i;
    }
  }
  return -1;
}

function addInfo(arr) {
  var info = document.getElementById("info");
  info.innerHTML = "";
  for (let i in arr) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(arr[i]);
    node.appendChild(textnode);
    info.appendChild(node);
  }
}
