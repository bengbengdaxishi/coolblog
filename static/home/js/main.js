if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: 'justify'
  };
  $('.article-gallery').justifiedGallery(options);
}

$(document).ready(function(){
  $("#menu-icon, #menu-icon-tablet").click(function(){
    if ( $('#menu').css('visibility') == 'hidden' ) {
      $('#menu').css('visibility','visible');
      $('#menu-icon, #menu-icon-tablet').addClass('active');

      var topDistance = $("#menu > #nav").offset().top;

      if ( $('#menu').css('visibility') != 'hidden' && topDistance < 50 ) {
        $("#menu > #nav").show();
      } else if ($('#menu').css('visibility') != 'hidden' && topDistance > 100) {
        $("#menu > #nav").hide();
      }
      return false;
    } else {
      $('#menu').css('visibility','hidden');
      $('#menu-icon, #menu-icon-tablet').removeClass('active');
      return false;
    }
  });

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });

  if ( $( "#menu" ).length ) {
    $(window).on('scroll', function() {
      var topDistance = $("#menu > #nav").offset().top;

      if ( $('#menu').css('visibility') != 'hidden' && topDistance < 50 ) {
        $("#menu > #nav").show();
      } else if ($('#menu').css('visibility') != 'hidden' && topDistance > 100) {
        $("#menu > #nav").hide();
      }

      if ( ! $( "#menu-icon" ).is(":visible") && topDistance < 50 ) {
        $("#menu-icon-tablet").show();
        $("#top-icon-tablet").hide();
      } else if (! $( "#menu-icon" ).is(":visible") && topDistance > 100) {
        $("#menu-icon-tablet").hide();
        $("#top-icon-tablet").show();
      }
    });
  }

  if ( $( "#footer-post" ).length ) {
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
      var topDistance = $(window).scrollTop();

    if (topDistance > lastScrollTop){
      // downscroll code
      $("#footer-post").hide();
    } else {
      // upscroll code
      $("#footer-post").show();
    }
    lastScrollTop = topDistance;

    $("#nav-footer").hide();
    $("#toc-footer").hide();
    $("#share-footer").hide();

    if ( topDistance < 50 ) {
      $("#actions-footer > ul > #top").hide();
      $("#actions-footer > ul > #menu").show();
    } else if ( topDistance > 100 ) {
      $("#actions-footer > ul > #menu").hide();
      $("#actions-footer > ul > #top").show();
    }
    });
  }

  $("img.captcha").css('cursor', 'pointer').on('click', function() {
        var $form = $(this).parents('form');

        // Make the AJAX-call
        $.getJSON("/captcha/refresh/", {}, function(json) {

            $form.find('input[name="captcha_0"]').val(json.key);
            $form.find('img.captcha').attr('src', json.image_url);
        });

        return false;
    });
});
function reply_to(id, nickname) {
  $("#id_parent").val(id);
  var content = $("#id_content").val();
  content = '@' + nickname + ' ' + content;
  $("#id_content").val(content);
  $('html, body').animate({
        scrollTop: parseInt($("#reply").offset().top)
    }, 250);
}
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}