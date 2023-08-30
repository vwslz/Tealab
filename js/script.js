$('.peopleList').on('click', function (e) {
  var ref = this.getAttribute('href').substring(1);
  if (document.getElementById(ref).classList.contains('show')) {
    this.children[0].children[0].classList.remove('fa-chevron-down');
    this.children[0].children[0].classList.add('fa-chevron-right');
  }
  else {
    this.children[0].children[0].classList.remove('fa-chevron-right');
    this.children[0].children[0].classList.add('fa-chevron-down');
  }
}
)

// $('#myCollapsible').collapse({
//   toggle: false
// })
