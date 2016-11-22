$(function() {
		setTimeout(function(){
			$('.content-one').fadeIn()
		},10000)
			/****搜索狂***/
		$('.seacrh-btn').on('click', function() {
			$('.search-box').fadeToggle(300);
		})
		$('.search-text').each(function(i, item) {
				$(item).on('click', function() {
					$('#search-keyword').val($(item).html())
				})
			})
			/******变图标*****/
		$('.am-icon-comment-o').on('mouseover', function() {
			$(this).removeClass('am-icon-comment-o').addClass('am-icon-comment')
		})
		$('.am-icon-comment-o').on('mouseleave', function() {
			$(this).removeClass('am-icon-comment').addClass('am-icon-comment-o')
		})
		$('.am-icon-thumbs-o-up').on('mouseover', function() {
			$(this).removeClass('am-icon-thumbs-o-up').addClass('am-icon-thumbs-up')
		})
		$('.am-icon-thumbs-o-up').on('mouseleave', function() {
				$(this).removeClass('am-icon-thumbs-up').addClass('am-icon-thumbs-o-up')
			})
			/******点赞*******/

		var dianzan = $('.am-icon-thumbs-o-up');
		dianzan.each(function(i, item) {
			var dKey = true;
			$(item).on('click', function() {
				if(dKey) {
					$(item).removeClass('am-icon-thumbs-o-up').addClass('am-icon-thumbs-up')
					var num = $('.b').eq(i).html();
					num++;
					$('.b').eq(i).html(num);
					$('.pao').eq(i).addClass("am-animation-slide-top").addClass('am-animation-reverse')
					dKey = false;
				}
			})
		})
		$('.content-one-co').on('click', function() {
			$('.content-one').fadeOut(300);
		})

		/******重新加载页面*****/
		$('.am-icon-refresh').click(function() {
			location.reload();
			$('.content-one').fadeOut(300);
		});
		/*******登录切换******/
		$('.qrcode_target').on('click', function() {
			if(!$(this).hasClass('qrcode_phone')) {
				$(this).addClass('qrcode_phone')
				$('.login-title-1').removeClass('active')
				$('.login-title-2').addClass('active')
				$('.account').removeClass('active');
				$('.safety').addClass('active');
			} else {
				$(this).removeClass('qrcode_phone')
				$('.login-title-2').removeClass('active')
				$('.login-title-1').addClass('active')
				$('.account').addClass('active');
				$('.safety').removeClass('active');
			}
		})
		$('.login-title-1').on('click', function() {
			$('.login-title-2').removeClass('active')
			$('.qrcode_target').removeClass('qrcode_phone')
			$(this).addClass('active');
			$('.account').addClass('active');
			$('.safety').removeClass('active');
		})
		$('.login-title-2').on('click', function() {
				$('.login-title-1').removeClass('active')
				$(this).addClass('active');
				$('.account').removeClass('active');
				$('.qrcode_target').addClass('qrcode_phone')
				$('.safety').addClass('active');
			})
			/*******失去焦点和得到焦点****/
		jQuery.focusblur = function(focusid) {
			var focusblurid = $(focusid);
			var defval = focusblurid.val();
			focusblurid.focus(function() {
				var thisval = $(this).val();
				if(thisval == defval) {
					$(this).val("");
				}
			});
			focusblurid.blur(function() {
				var thisval = $(this).val();
				if(thisval == "") {
					$(this).val(defval);
				}
			});
		};
		$.focusblur(".account-input");
		$.focusblur(".account-pass");
		$('.erma').on('mouseover', function() {
			$('.phone').show();
		})
		$('.erma').on('mouseout', function() {
				$('.phone').hide();
			})
			/******登录验证*******/
			var open1 = false,open2=false;
		$('#doc-vld-msg').validator({
			onValid: function(validity) {
				$(validity.field).closest('.am-form-group').find('.am-alert').hide();
				$('.am-icon-user').css({
						"top": "50%"
					})
				open1=true;
			},
			onInValid: function(validity) {
				var $field = $(validity.field);
				var $group = $field.closest('.am-form-group');
				var $alert = $group.find('.am-alert');
				var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
				
				if(!$alert.length) {
					$alert = $('<div class="am-alert am-alert-danger"></div>').hide().
					appendTo($group);
					$('.am-icon-user').css({
					"top": "25%"
				})
				}
				$alert.html(msg).show();
				open1 = false
			}
		})
		$('#doc-vld-msg-pass').validator({
			onValid: function(validity) {
				$(validity.field).closest('.am-form-group').find('.am-alert').hide();
				$('.am-icon-unlock-alt').css({
						"top": "50%"
					})
				open2=true;
			},
			onInValid: function(validity) {
				var $field = $(validity.field);
				var $group = $field.closest('.am-form-group');
				var $alert = $group.find('.am-alert');
				var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
				
				if(!$alert.length) {
					$alert = $('<div class="am-alert am-alert-danger"></div>').hide().
					appendTo($group);
					$('.am-icon-unlock-alt').css({
					"top": "25%"
					})
				}
				$alert.html(msg).show();
				open2 = false
			}
		})
		/******登录按钮******/
		
		$('.btn-loading-example').click(function () {
			
			if(open1 && open2){
				var $btn = $(this)
  				$btn.button('loading');
   				 setTimeout(function(){
    		  		$btn.button('reset');
 		 		}, 5000);
 		 		}
			return false
			});
		
		/*******换一换******/
		$('.huanyihuan').on('click',function(){
  			changeNum()
		})
		var _num = 0;
		function changeNum(){
			if(_num<$('.hot-content').length-1){
				_num ++;
			}else{
				_num = 0;
			}
			$('.hot-content').eq(_num).addClass('active').siblings().removeClass('active');
		  }
		$('.content-three').find('.yuan').each(function(i,item){
			$(this).on('mouseover',function(){
			/*	alert(i)*/
				$(this).siblings().show()
			})
			$(this).on('mouseout',function(){
				/*alert(i)*/
				$(this).siblings().hide()
			})
		})
		
		/*****gengduo*****/
		$('.gengduocaidan').on('mouseover',function(){
			/*alert(1)*/
			$('.caidan').show().addClass('am-animation-slide-left')
		})
		$('.gengduocaidan').on('mouseout',function(){
			/*alert(1)*/
			$('.caidan').removeClass('am-animation-slide-left').hide()
		})
	})
	/*********关闭********/
var closeTop = document.querySelector('.content-one')
var closeTopCo = document.querySelector('.content-one-co')
var asideFix = document.querySelector('.aside-fix');
var content = document.querySelector('.content');
var loginRight = document.querySelector('.login-right');
window.onscroll = function() {
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollT > 20) {
		closeTopCo.style.marginTop = "-40px"
		closeTop.style.position = "fixed";
		closeTop.style.top = "50px";
		closeTop.style.left = "50%";
		closeTop.style.marginLeft = "-107px";
	}
	if(scrollT <= 20) {
		closeTop.style.position = "";
		closeTopCo.style.marginTop = ""
		closeTop.style.marginLeft = "";
	}
	
}