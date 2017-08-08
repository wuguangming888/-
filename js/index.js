/**
 * Created by Administrator on 2017/7/31.
 */
   $ (function () {
       //    顶部鼠标特效
       //     1 发生的目标目标 a
       // 发生的事件 mousemove  mousemout
       $('.top a').mousemove(function () {
           $(this).css('color', '#fff')
       }).mouseout(function () {
           $(this).css('color', '#a4b094')
       })
       // //    购物车特效
       $('.shopCar').click(function () {
           $(this).css({color: '#FF6700', background: '#fff'});
           $('.goods').stop(true, false).slideDown();
       }).mouseout(function () {
           $(this).css({color: '#a4b094', background: '#424242'});
           $('.goods').stop(true, false).slideUp();
           //输入框特效
       })
       var flag = true;
       /*表单的输入框移入效果*/
       $('.ser1').mouseover(function () {
           if (flag) {
               $('.ser1 input').css('border', '1px solid #000');
               $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
           }
       }).mouseout(function () {
           if (flag) {
               $('.ser1 input').css('border', '1px solid #ccc');
               $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
           }
       })
       /*热门搜索的移入效果*/
       $('.hot a').mouseover(function () {
           $(this).css({
               'color': '#fff',
               'background': 'orange'
           })
       }).mouseout(function () {
           $(this).css({
               'color': '#757575',
               'background': '#eee'
           })
       })
       /*按钮移入后的效果*/
       $('.ser2').mouseover(function () {
           if (flag) {
               $('.ser1 input').css({
                   'border': '1px solid #000',
                   'border-right': 'none'
               });
               $(this).css({
                   'background': 'orange',
                   'color': '#fff',
                   'border': 'none'
               })
           }
       }).mouseout(function () {
           if (flag) {
               $('.ser1 input').css('border', '1px solid #ccc');
               $(this).css({
                   'background': '#fff',
                   'color': '#000',
                   'border': '1px solid #ccc',
                   'border-left': 'none'
               })
           }
       })
       /*表单获取焦点的时候*/
       $('.ser1 input').focus(function () {
           flag = false;
           $(this).css('border', '1px solid orange');
           $('.ser2').css('border-color', 'orange');
           $('.keywordsList').show().css('border-color', 'orange');
       }).blur(function () {
           flag = true;
           $(this).css('border-color', '#ccc');
           $('.ser2').css('border-color', '#ccc');
           $('.keywordsList').hide().css('border-color', '#ccc');
       })

//       导航特效
       $('.nav li').mouseover(function () {
           // console.log($('.select ul'))
           $(this).children('a').css('color', 'red')
           if ($(this).index() < 7) {
               $('.select').removeClass('hide');
               $('.select').slideDown().finish();
               $('.select').find('ul').addClass('hide');
               $('.select').find('ul').eq($(this).index()).removeClass('hide');
           }
       }).mouseout(function () {
           $(this).children('a').css('color', '#000')
       })

       $('.nav').mouseout(function () {
           $('.select').slideUp().finish();
       })
       $('.select').mouseover(function () {
           $('.select').slideDown().finish()
       }).mouseout(function () {
           $('.select').slideUp();
       })
//       二级导航    轮播及 特效
//       轮播图
       var num = 0;
       var timer;
       timer = setInterval(autoplay, 3000)
       $('.round li').mouseover(function () {
           clearInterval(timer);
           num = $(this).index();
           displayImg();
       })
       $('.direcL').click(function () {
           num = num - 1;
           if (num < 0) {
               num = 4;
           }
           displayImg()
       })
       $('.banner').mouseover(function () {
           clearInterval(timer);
       }).mouseout(function () {
           timer = setInterval(autoplay, 3000)
       })
       $('.direcR').click(function () {
           clearInterval(timer);
           num = num + 1;
           if (num > 4) {
               num = 0;
           }
           displayImg()
       })
       function displayImg() {
           $('.round li').eq(num).css('background', 'orange').siblings().css({
               'background': '#000',
               'opacity': '0.5'
           });
           $('.banner > img ').eq(num).removeClass('hide').siblings('img').addClass('hide')
       }
       function autoplay() {
           num++;
           if (num > 4) {
               num = 0;
           }
           displayImg()
       }
//      隐藏的   左侧导航
       $('.navL li').mouseover(function () {
           $(this).css('background', '#ff6700')
           $('.navHide').removeClass('hide')
           $('.ulHide').addClass('hide')
           $('.ulHide').eq($(this).index()).removeClass('hide')
       }).mouseout(function () {
           $(this).css('background', 'transparent');
       })
       $('.navL').mouseout(function () {
           $('.navHide').addClass('hide')
       })
       $('.ulHide').mouseover(function () {
           $('.navHide').removeClass('hide')
           $('.navL li').eq($(this).index()).css('background', '#ff6700');
       }).mouseout(function () {
           $('.navHide').addClass('hide')
           $('.navL li').eq($(this).index()).css('background', 'transparent');
       })
       $('.navthree-nav li').mouseover(function () {
           // alert('1')
           $('.navthree-nav li a').eq($(this).index()).css('color', '#fff')
       }).mouseout(function () {
           $('.navthree-nav li a').eq($(this).index()).css('color', '#ccc')
       })
//       小米明星精品  为您推荐
          var i = 0 ;
         $('.mistar-right').click(function () {
            i++
            $('.mistar-right').css('color','#eee')
            $('.mistar-left').css('color','#ff6700')
            i == 1 ? $(this).parent().siblings().eq(i).removeClass('hide').siblings('ul').addClass('hide') : i = 1;
       })
           $('.mistar-left').click(function () {
               i--
               $('.mistar-left').css('color','#eee')
               $('.mistar-right').css('color','#ff6700')
              i ==0 ? $(this).parent().siblings().eq(i).removeClass('hide').siblings('ul').addClass('hide'):i =0
     })
       //    轮播
       $('.mistar').mouseover(function(){
           clearInterval(timer1);
       }).mouseout(function(){
           timer1 = setInterval(autoplay1,3000)
       });
       var timer1 = setInterval(autoplay1,3000)
       var a = 1
       function autoplay1() {
           if (a == 1) {
               a++;
               $('.mistar-list-1').addClass('hide')
               $('.mistar-list-2').removeClass('hide')
           } else {
               $('.mistar-list-1').removeClass('hide')
               $('.mistar-list-2').addClass('hide')
               a = 1
           }
       }
       // 智能硬 特效
       // console.log(   $('.capacity > li').eq(0))
       $('.capacity-2 li').eq(0).add($('.box-shadow li')).add($('.box-shadow5 li')).add($('.match-right li')).add($('.match1-left li')).add($('.Comments  li')).add($('.video li')).mouseover(function () {
           shadow(this);
       }).mouseout(function () {
           shadowout(this);
       })
       //切换特效
       $('.match-1 li').add($('.match-3 li')).add($('.match-2 li')).hover(function () {
           $(this).css('borderBottom','2px solid red').parents('.match').find('.match-right').find('>ul').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
       }).mouseout(function () {
           $(this).css('borderBottom','none')
       })
       //为您推荐特效
        var c = 0 ;
          $('.recommend-right').click(function () {
              console.log('1')
              c++;
              $('.recommend-right').css('color','#aaa')
              $('.recommend-left').css('color','#ff6700')
               c < 4 ? $('.recommend > ul ').addClass('hide').eq(c).removeClass('hide'): c = 3
          })
          $('.recommend-left').click(function () {
              c--
              $('.recommend-left').css('color','#aaa')
              $('.recommend-right').css('color','#ff6700')
             c >= 0 ? $('.recommend > ul ').addClass('hide').eq(c).removeClass('hide'): c=0
       })
       //内容特效
       var c = 0;
       //移入效果
       $('.content > ul > li ').mouseover(function () {
            c =  $(this).find('.round2').children('.border-2').index()
           $(this).children("p").removeClass('hide')
       }).mouseout(function () {
           $(this).children("p").addClass('hide')
        })
       //右点击
       $('.content .r2').click(function () {
               if( c < 3 ){
                    c++;
                   $(this).siblings('ul').find('li').addClass('hide').eq(c).removeClass('hide')
                   $(this).siblings('.round2').find('p').removeClass('border-2') .eq(c).addClass('border-2')
               }else {
                   c = 3
               } })
       //左点击
       $('.content .l2').click(function () {
           if( c > 0 ){
               c--;
               $(this).siblings('ul').find('li').addClass('hide').eq(c).removeClass('hide')
               $(this).siblings('.round2').find('p').removeClass('border-2') .eq(c).addClass('border-2')
           }else {
               c = 0
           }
       })
           //  点击换图
           $('.round2 p').click(function () {
               $(this).addClass('border-2').siblings('p').removeClass('border-2')
               c =  $(this).index()
               $(this).parent().siblings('ul').find('li').addClass('hide').eq(c).removeClass('hide')
           })
   //内容特效结束
       $('.nav1 a').mouseover(function () {
           $(this).css('color', '#ff6700')
       }).mouseout(function () {
           $(this).css('color', '#000')
       })
       //视频特效
        $('.video img').hover(function () {
            // console.log( $(this).siblings('div'))
             $(this).siblings('div').css('color','#ff6700')
        }).mouseout(function () {
            $(this).siblings('div').css('color','#fff')
        })
       //阴影特效
       function shadow(shadow) {
           $(shadow).css({
          'marginTop':'13px',
          'box-shadow':'0 0 28px #aaa'
         })
           $(shadow).find('.slideDiv').stop(true, false).slideDown().removeClass('hide');
       }
       function shadowout(shadow) {
           $(shadow).css({
               'marginTop':'15px',
               'box-shadow':'none'
           })
           $(shadow).find('.slideDiv').stop(true, false).slideUp().addClass('hide');
       }
   });





