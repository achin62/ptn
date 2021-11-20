const CONFIG = {
    InTitle: 'chúc cô giáo nhỏ luôn vui vẻ và trở thành 1 cô giáo tuyệt vời :)) ',
    FBLink:'https://www.facebook.com/achin62135/ ',
    ConfirmBtnText: 'bấm zô a nek :)',
    PopTitle: 'Hi cô giáo Nhỏ',
    PopText: 'Ngày hôm nay của em thấy thế nào ?',
    PopConfim: 'bấm tiếp vào đây nek <3 !!  ' ,
    MessText: 'sorry a vừa mới làm xong nên hơi xấu :(( nghe hết bài đi hy vọng bài em thích bài này ',
   }
   $("#btnYes, #btnNo, #ED").hide();
   function stpopup(){
      Swal.fire({
         title: CONFIG.PopTitle,
         text: CONFIG.PopText ,
         confirmButtonText: CONFIG.PopConfim,
         imageUrl: './ptn.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
         backdrop: `
            rgba(0,0,123,0.4)
            url("img/nyan-cat.gif")
            left top
            no-repeat
                  `    
       }).then((result) => {
          play();
          $("#btnYes, #btnNo, #ED").show(2000);
       })
   }
   
   function yesClick() 
    {
      Swal.fire({
         title: CONFIG.InTitle,
         text: CONFIG.MessText,
         confirmButtonText: CONFIG.ConfirmBtnText,
         imageUrl: './nhung.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
     }).then((result) => {
      if (result.isConfirmed) {
            window.location = CONFIG.FBLink;
      }
     })
   }
     
   function noHover()
    {
       var x = Math.floor(Math.random() * window.innerWidth);
       var y = Math.floor(Math.random() * window.innerHeight);
       document.getElementById("btnNo").style.left = x + "px";
       document.getElementById("btnNo").style.top = y + "px";
       document.getElementById("btnNo").style.transition = "0.3s";
   }
   
    function play() {
      var audio = new Audio('AG.mp3');
      audio.play();
   }
   
   