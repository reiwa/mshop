    var loaded = 0;
    var loaded2 = 0;
    var loadednews = 6;
    //↑この変数の値をニュースの数に変える。
    var lng = 0;
    var maxnews = loadednews + 1;
    //ドルマークがついたコードはhtml側でjqueryを読み込む必要あり。htmlのid要素を表示したり非表示にしたりできる。
    $(window).scroll(function () {
      var TargetPos = window.innerHeight - 60;
      var ScrollPos = $(window).scrollTop();
      if(ScrollPos >= TargetPos){
        $("#waku").fadeIn();
        $("#background1").fadeIn();
      } else{
        $("#waku").fadeOut();
        $("#background1").fadeOut();
      }
      var TargetPos = $('#product-introduction').offset();
      TargetPos = TargetPos.top - 300;
      if( ScrollPos >= TargetPos && loaded == 0) {
        fade();
        loaded = 1;
      }
    });
    var count = 0;
    function fade(){
      var div = document.getElementById('pbbutton');
      div.style.opacity = "0";
      div.style.cursor = "default";
      if(count <= 5){
      //↑商品を追加する際は、上のcount <= の隣の数字を商品の数-1に変える。
        count += 1;
        document.getElementById('fade' + (parseInt(count))).style.opacity = "1" ;
        var timer2= setTimeout(fade,150);
      } else {
        var pd1 = document.getElementsByClassName('pdEmphasize');
        for(i=0;i<pd1.length;i++){
          pd1[i].style.transform = "rotateZ(45deg)";
          pd1[i].style.opacity = "1" ;
        }
        var pd2 = document.getElementsByClassName('pdEmText');
        for(i=0;i<pd2.length;i++){
          pd2[i].style.transform = "rotateZ(-45deg)" ;
          pd2[i].style.opacity = "1" ;
          pd2[i].style.marginLeft = "0px" ;
        }
        var pd3 = document.getElementsByClassName('pdEmArrow');
        for(i=0;i<pd3.length;i++){
          pd3[i].style.transform = "rotateZ(180deg)";
          pd3[i].style.opacity = "1" ;
        }
      }
    }
    function showft(){
      document.getElementById("hidden").style.opacity = "1" ;
      document.getElementById("reserved").style.cursor = "auto" ;
    }

    var firstload = 0;
    function chkwindowwidth(){
    var windowidth = window.innerWidth;
    var windowheight = window.innerHeight;
      if(firstload == 0){
        firstload = 1;
        $("#snavfade").fadeOut();
      }
      if(windowidth <= 950){
        $("#main-nav").fadeOut();
        $("#small-device-nav").fadeIn();
      } else {
        $("#small-device-nav").fadeOut();
        $("#main-nav").fadeIn();
        document.getElementById("main-nav").style.display = "flex" ;
        document.getElementById("snavback").style.display = "none" ;
        document.getElementById("snav1").style.transform = "translateY(0px) rotate(0deg)" ;
        var div = document.getElementById('snav2');
        div.style.backgroundColor = "#3870e6";
        div.style.border = "none";
        div.style.height = "8px";
        div.style.width = "40px";
        div.style.borderRadius = "2px";
        div.style.boxShadow = "none";
        div.style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
        document.getElementById("snav3").style.transform = "translateY(0px) rotate(0deg)" ;
        $("#snavfade").fadeOut();
        snavshow = 0;
      }
    var timer3= setTimeout(chkwindowwidth,1000);
    }
    var timer3= setTimeout(chkwindowwidth,100);

    var snavshow = 0;
    function nav(){
      if(snavshow == 0){
        $("#snavfade").fadeIn();
        document.getElementById("snavback").style.display = "block" ;
        document.getElementById("snav1").style.transform = "translateY(15.5px) rotate(45deg)" ;
        var div = document.getElementById('snav2');
        div.style.backgroundColor = "white";
        div.style.border = "0.5px #3870e6 solid";
        div.style.height = "45px";
        div.style.width = "45px";
        div.style.borderRadius = "250%";
        div.style.boxShadow = "-1px -1px 1px 1px lightgray";
        div.style.transform = "translateY(-17.5px) translateX(2.3px) rotate(180deg)";
        document.getElementById("snav3").style.transform = "translateY(-13px) rotate(-45deg)" ;
        snavshow = 1;
      } else{
        $("#snavfade").fadeOut();
        document.getElementById("snavback").style.display = "none" ;
        document.getElementById("snav1").style.transform = "translateY(0px) rotate(0deg)" ;
        var div = document.getElementById('snav2');
        div.style.backgroundColor = "#3870e6";
        div.style.border = "none";
        div.style.height = "8px";
        div.style.width = "40px";
        div.style.borderRadius = "2px";
        div.style.boxShadow = "none";
        div.style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
        document.getElementById("snav3").style.transform = "translateY(0px) rotate(0deg)" ;
        snavshow = 0;
      }
    }
    var countnews = 0;
    var loadfirst = 1;
    function shownews(){
      var test = document.getElementById('newsbutton').innerHTML;
      if(test == "") {
        return;
      }
      //全表示処理
      if(test == "もっと見る" || test == "Read More"){
        if((loadfirst == 1 && countnews < 3 && loadednews > 0) || (loadfirst == 0 && loadednews > 0)){
          $("#news" + (parseInt(maxnews - loadednews))).fadeIn();
          document.getElementById("news" + (parseInt(maxnews - loadednews))).style.height = "62.5px" ;
          loadednews -= 1;
          countnews += 1;
          var timer3= setTimeout(shownews,100);
        } else {
          if(loadfirst == 1 && countnews < 3){
            document.getElementById('newsbutton').innerHTML = "";
          } else if(loadfirst == 0){
            if(lng == 0) {
              document.getElementById('newsbutton').innerHTML = "▲折りたたむ";
            } else {
              document.getElementById('newsbutton').innerHTML = "▲Fold";
            }
          }
          loadfirst = 0;
          countnews = 0;
        }
      //折りたたみ処理
      } else{
        if(loadednews < maxnews - 4){
          loadednews += 1;
          countnews -= 1;
          $("#news" + (parseInt(maxnews - loadednews))).fadeOut();
          document.getElementById("news" + (parseInt(maxnews - loadednews))).style.height = "0px" ;
          var timer3= setTimeout(shownews,50);
        } else {
          if(lng == 0) {
            document.getElementById('newsbutton').innerHTML = "もっと見る";
          } else {
            document.getElementById('newsbutton').innerHTML = "Read More";
          }
          countnews = 0;
        }
      }
    }
    //ここはもしや...言語変更!?
    //お前はもしや...田中!?
    function langchange(){
      if(lng == 0){
        lng = 1;
        document.getElementsByClassName('what-moisshop-title')[0].innerHTML = "ABOUT";
        document.getElementsByClassName('what-moisshop-title')[1].innerHTML = "Products";
        document.getElementsByClassName('link')[0].innerHTML = "Links";
        document.getElementById('sn').innerHTML = "MENU";
        document.getElementById('sn0').innerHTML = "Go to top";
        document.getElementById('sn1').innerHTML = "About MOIS SHOP";
        document.getElementById('sn2').innerHTML = "Products";
        document.getElementById('sn3').innerHTML = "News";
        document.getElementById('n1').innerHTML = "About MOIS SHOP";
        document.getElementById('n2').innerHTML = "Products";
        document.getElementById('n3').innerHTML = "News";
        document.getElementById('t1').innerHTML = "<p>MOIS SHOP is a school company managed by Omiya International Secondary School (MOIS in short).</p><p>In MOIS SHOP, we're creating original and practical erasers and other writing materials.</p><p>We will continue creating unique items. We'll do our best, so please wait patiently for new products to come!</p>";
        document.getElementById('slg1').innerHTML = "Next sale is";
        document.getElementById('slg2').innerHTML = "dued on,＿＿＿＿＿＿＿2024.";
        document.getElementById('slg3').innerHTML = "Thank you.";
        document.getElementById('slg4').innerHTML = "Access";
        document.getElementById('t2').innerHTML = "";
        document.getElementById('t3').innerHTML = "";
        document.getElementById('moislink').innerHTML = "MOIS official homepage";
        var test = document.getElementById('newsbutton').innerHTML;
        if(loadednews > 3){
          if(test == "もっと見る") {
            document.getElementById('newsbutton').innerHTML = "Read More";
          } else {
            document.getElementById('newsbutton').innerHTML = "▲Fold";
          }
        }
        document.getElementById('pbbutton').innerHTML = "Show Products";
        document.getElementsByClassName('langtxt')[0].innerHTML = "JP";

        document.getElementById('fade1').innerHTML = '<img src="img/1.jpg" width="100%" height="175px" alt="Name" title="Name"><div class="pdEmphasize" style="transform: rotateZ(45deg); opacity: 1;"><div class="pdEmText" style="transform: rotateZ(-45deg); opacity: 1; margin-left: 0px;"><b>New!</b></div></div><div class="pdEmArrow" style="transform: rotateZ(180deg); opacity: 1;"></div>Name<div class="product-description-line">Price：about 500Yen ×3<br>Purchase：Gacha・buy<br>---<br>Pretty little necktie key ring.</div>';

        document.getElementById('fade2').innerHTML = '<img src="img/2.jpg" width="100%" height="175px" alt="Name" title="Name"><div class="pdEmphasize" style="transform: rotateZ(45deg); opacity: 1;"><div class="pdEmText" style="transform: rotateZ(-45deg); opacity: 1; margin-left: 0px;"><b>New!</b></div></div><div class="pdEmArrow" style="transform: rotateZ(180deg); opacity: 1;"></div>Name<div class="product-description-line">Price：nantoka Yen<br>Purchase：Hanbai way<br>---<br>Description</div>';

        document.getElementById('fade3').innerHTML = '<img src="img/3.jpg" width="100%" height="175px" alt="Name" title="Name">Name<div class="product-description-line">Price：nantoka Yen<br>Purchase：Hanbai way<br>---<br>Description</div>';

        document.getElementById('fade4').innerHTML = '<img src="img/4.jpg" width="100%" height="175px" alt="Name" title="Name">Name<div class="product-description-line">Price：nantoka Yen<br>Purchase：Hanbai way<br>---<br>Description</div>';

        document.getElementById('fade5').innerHTML = '<img src="img/5.jpg" width="100%" height="175px" alt="Name" title="Name">Name<div class="product-description-line">Price：nantoka Yen<br>Purchase：Hanbai way<br>---<br>Description</div>';

        document.getElementById('fade6').innerHTML = '<img src="img/6.jpg" width="100%" height="175px" alt="Name" title="Name">Name<div class="product-description-line">Price：nantoka Yen<br>Purchase：Hanbai way<br>---<br>Description</div>';

        document.getElementById('news1').innerHTML = '<div class="arrow"></div>18.11.2021 I want MOIS SHOP website to be shared.';
        document.getElementById('scr').src = "img/moisshop_h1_2_EN_min.webp";
      } else {
        window.location.reload();
      }
    }

    var cooldown = 0;
    let effectlist = [];
    class effects {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.mx = 0;
        this.my = 0;
        this.rotat = 0;
      }
    }

    //背景アニメーション

    var windowidth = window.innerWidth;
    //要素を配列に格納して、（content.after()あたりでhtml要素を複製できる）
    for(let i=0; i<8; i++){
      var content = document.getElementsByClassName("imgeffect")[0];
      var clone_element = content.cloneNode(false);
      content.after(clone_element);
      let e = new effects();
      e.x = Math.random() * windowidth;
      e.mx = ((Math.random() * 1.5) + 1.5) * 8;
      e.my = (Math.random() * -3 - 2) * 5;
      e.y = Math.random() * 1500;
      e.rotat = Math.floor(Math.random() * 361);
      effectlist.push(e);
    }
    //一秒ごとに座標を変更（その間オブジェクトはtransition:1s;で動く）
    function effect(){
      if(cooldown == 0) {
        var content = document.getElementsByClassName("imgeffect")[0];
        var clone_element = content.cloneNode(false);
        content.after(clone_element);
        let e = new effects();
        e.x = -105;
        e.mx = ((Math.random() * 1.5) + 1.5) * 8;
        e.my = (Math.random() * -3 - 2) * 5;
        e.y = Math.random() * 1500;
        e.rotat = Math.floor(Math.random() * 361);
        effectlist.push(e);
        cooldown = 6;
      }
      var windowidth = window.innerWidth;
      cooldown -= 1;
      for(let i=1; i<effectlist.length; i++){
        let e = effectlist[effectlist.length - i];
        e.x += e.mx;
        e.y += e.my;
        e.rotat += (e.mx + Math.abs(e.my))/10;
        if(e.x > windowidth + 100) {
          effectlist.splice(effectlist.length - i,1);
          document.getElementsByClassName("imgeffect")[i].remove();
          i -= 1;
        } else {
          document.getElementsByClassName("imgeffect")[i].style.transform = "translate(" + parseInt(e.x) + "px," +  parseInt(e.y) + "px) rotate(" + parseInt(e.rotat) + "deg)";
        }
      }
      var counttime = setTimeout(effect,1000);
    }
    $(function(){
      shownews();
      effect();
    });