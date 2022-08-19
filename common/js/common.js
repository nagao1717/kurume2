
    $('.slide').slick({
        fade: true,    // fedeオン
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
        speed:2000,//スライドの動きのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 1,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
        arrows: true,//左右の矢印あり
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        dots: true,//下部ドットナビゲーションの表示
            pauseOnFocus: false,//フォーカスで一時停止を無効
            pauseOnHover: false,//マウスホバーで一時停止を無効
            pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });
    

function scrollWatch(el,func) {
    $(window).scroll(function(){
        let offset = 0;  //各種要素の位置を取得
        let scroll = $(window).scrollTop();
        let w_height = $(window).height() /2 ;
        // console.log(scroll);
        for(let i = 0,len = el.length;i < len; i++){
            // offset = el.item(i).offsetTop - w_height;
            offset = el.item(i).getBoundingClientRect().top + window.scrollY - w_height;
            // console.log(offset)
            if(scroll > offset) {
                func(el.item(i));
                
            }
        }
        //func;  //アニメーション関数を実行
    });
}
function tgrClass(el) {
    el.classList.add('active');
}
// tgrClass(ttl.item(1));
// for(let i = 0,len = ttl.length;i < len; i++){
//     console.log(ttl.item(i).offsetTop);
// }
let el_scroll = document.getElementsByClassName('trg_scroll');
scrollWatch(el_scroll,tgrClass);

function loadAnime(el,func) {
    window.onload = function () {
        // ここに読み込み完了時に実行してほしい内容を書く。
        
        console.log(el);
        for(let i = 0,len = el.length;i < len; i++){
            // offset = el.item(i).offsetTop - w_height;
            // let el = load.item(i);
            // console.log(el.item(i));
            func(el.item(i));
        }
    };
};
let el = document.getElementsByClassName('trg_load');
loadAnime(el,tgrClass);