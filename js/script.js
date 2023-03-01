$(document).ready(function () {
    //dim
    $(".dim").click(function(){
        $(".js, .alert_box, .dim").hide();
    });
    
    $('.login_btn').on('click', function(){
        $('.dim').show();
        $('.join_slide').show().animate({
            bottom:0
        },350);  
    });
    $('.dim').on('click', function(){
        $('.join_slide').animate({
            bottom: '-' + 72 + '%'
                   },350,function(){
            $('.join_slide').hide(); 
        }); 
    });

    //패스워드 보이기버튼
    $(".log_pw_btn, .pw_btn").click(function(){
        $(this).toggleClass("on");
    });
    
    //탭메뉴
	$(".tab_content").eq(0).show();

	$(".alarm_tab_top>li").click(function(){
		$(".alarm_tab_top>li").removeClass("tab_active");
		$(this).addClass("tab_active");
		$(".tab_content").hide();
		var tabid = $(this).attr("rel");
		$("#"+tabid).fadeIn();
	});
    $(".tab_content").eq(0).show();

	$(".main_tab_top>li").click(function(){
		$(".main_tab_top>li").removeClass("tab_active");
		$(this).addClass("tab_active");
		$(".tab_content").hide();
		var tabid = $(this).attr("rel");
		$("#"+tabid).fadeIn();
	});
    $(".tab_content").eq(0).show();

	$(".search_tab_top>li").click(function(){
		$(".search_tab_top>li").removeClass("tab_active");
		$(this).addClass("tab_active");
		$(".tab_content").hide();
		var tabid = $(this).attr("rel");
		$("#"+tabid).fadeIn();
	});

    $("#main .tab1").click(function(){
        $(".main_tab_top .select_wrap").fadeOut(30);
    });
    $("#main .tab2").click(function(){
        $(".main_tab_top .select_wrap").fadeIn();
    });
    
    //햄버거 메뉴
    $('.menu').on('click', function(){
        $(".ham_dim").show();
        $('.ham_slide').show().animate({
            right:0
        },300);  
    });
    $('.ham_menu, .ham_dim').on('click', function(){
        $(".ham_dim").hide();
        $('.ham_slide').animate({
            right: '-' + 60 + '%'
                   },300,function(){
            $('.ham_slide').hide(); 
        }); 
    });
    
    //체크박스 전체선택
	$("#join_all").click(function(){
        if($("#join_all").is(":checked")){
            $(".join_chk").prop("checked",true);
        }else{
            $(".join_chk").prop("checked",false);
        }
	});

    //체크박스 btn활성화
    // $("#join1_chk, #ev_act_chk").click(function(){
    //     if($("#join1_chk, #ev_act_chk").is(":checked")){
    //         $(".login_btn, .act_next").prop("disabled",false);
    //     }else{
    //         $(".login_btn, .act_next").prop("disabled",true);
    //     }
	// });

    //Main_view
    $(".hd_report").click(function(){
        $(".report").toggle();
        $(this).toggleClass("on");
    });

    $(".mv_zzim").click(function(){
        $(this).toggleClass("on");
    });

    //Employer,History 해시태그 추가
    $("button.empr_c_title, .history_addtag").click(function(){
        $(".dim, .empr_tag_alert").show();
    });
    $(".empr_tag_alert button").click(function(){
        $(".dim, .empr_tag_alert").hide();
    });

    //Setup 버튼 슬라이드
    $('.setup_slide').click(function() {
        $(this).toggleClass('on');
	});

    //댓글, 답변, 답글
    $('.more_com').click(function() {
        $(".more_com").removeClass("on");
        $(this).toggleClass('on');
        $(".recom_box").hide();
        $(this).parents().siblings(".recom_box").toggle();
	});

    //일시키기 주소검색 슬라이드다운
    $('.empr_loc_ul li').click(function() {
        $(".empr_loc_ul li div").stop().slideUp(200);
        $(this).find("div").stop().slideToggle(200);
	});
    $(".user_profile .logout").click(function(){
        $(".confirm").show()
    });
    $(".confirm button").click(function(){
        $(".confirm").hide()
    });
    $(".email_change").click(function(){
        $(".certification").show()
    });
    $(".certification button").click(function(){
        $(".user_profile .popup").show()
    });
    $(".work_list .work_com").click(function(){
        $(".work_list .popupbox").show()
    })
    $(".work_list .cancel").click(function(){
        $(".work_list .popupbox").hide()
    })
    $(".w_top .open").click(function(){
      if($(this).html() == '펼치기'){
          $(this).html('접기').css({'color':'#888'})
          $('.wlc').css({'-webkit-box-orient':'inherit'});
      }else{
        $(this).html('펼치기').css({'color':'#0942ff'})
        $('.wlc').css({'-webkit-box-orient':'vertical'});
      }
    });
});