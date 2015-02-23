// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableButton() {
  var button = document.getElementById("update_course_button");
  button.disabled = true;
  document.getElementById("edit_course_1").submit();
}

function hideSection() {
  var section = document.getElementById("grade_list");
  if (section != null) {
  var last = section.lastElementChild;
  last.style.display = "none";
  }
}
