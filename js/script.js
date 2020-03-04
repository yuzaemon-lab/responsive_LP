var mySwiper = new Swiper ('.swiper-container', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 2.6, // 何枚のスライドを表示するか
    spaceBetween: 40, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
 
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: true, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },
 
    // レスポンシブ化条件
    breakpoints: {
      // 980ピクセル幅以下になったら
      980: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // 640ピクセル幅以下になったら
      640: {
        slidesPerView: 1.27,
        spaceBetween: 24
      }
    },
 
    // ページネーションを表示する場合
    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    }

  });


//   アコーディオン
  $('.qanda__content').click(function(){
    var $answer=$(this).find('.qanda__content__answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $(this).find('.qanda__content__question__btn').text("＋");
      $answer.slideUp();
    }else{
      $answer.addClass('open');
      $(this).find('.qanda__content__question__btn').text("ー");
      $answer.slideDown();
    }
  });

//   スムーススクロール
$(function(){
	$('.header__list a, .mainv__btn').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top;
		$('html,body').animate({
		  'scrollTop':position
		},'slow');
	  });
});

// フローティングアクションボタン
jQuery(window).on("scroll", function($) {
	if (jQuery(this).scrollTop() > 100) {
	  jQuery('.float-btn').show();
	} else {
	  jQuery('.float-btn').hide();
	}
  });
  
  jQuery('.float-btn').click(function () {
	jQuery('body,html').animate({
	  scrollTop: 0
	}, 600);
	return false;
  });