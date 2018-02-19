import $ from 'jquery';
export default function Slider(){
  $(document).ready(function(){
    var flag=1;
    $(".next").click(function(){
      if(flag==0){
        $(".album_pic-1").css("z-index","1");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-3").css("z-index","0");
        $(".album_pic-4").css("z-index","0");
        flag =1;
      }
      else if (flag==1){
        $(".album_pic-2").css("z-index","1");
        $(".album_pic-3").css("z-index","0");
        $(".album_pic-1").css("z-index","0");
        $(".album_pic-4").css("z-index","0");
        flag =2;
      }
      else if (flag==2) {
        $(".album_pic-3").css("z-index","1");
        $(".album_pic-1").css("z-index","0");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-4").css("z-index","0");
        flag =3;
      }
      else if (flag==3) {
        $(".album_pic-4").css("z-index","1");
        $(".album_pic-1").css("z-index","0");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-3").css("z-index","0");
        flag =0;
      }
    });
    $(".prev").click(function(){
      if(flag==0){
        $(".album_pic-4").css("z-index","1");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-3").css("z-index","0");
        $(".album_pic-1").css("z-index","0");
        flag =3;
      }
      else if (flag==1){
        $(".album_pic-2").css("z-index","1");
        $(".album_pic-4").css("z-index","0");
        $(".album_pic-3").css("z-index","0");
        $(".album_pic-1").css("z-index","0");
        flag =2;
      }
      else if (flag==2) {
        $(".album_pic-1").css("z-index","1");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-3").css("z-index","0");
        $(".album_pic-4").css("z-index","0");
        flag =3;
      }
      else if (flag==3) {
        $(".album_pic-3").css("z-index","1");
        $(".album_pic-2").css("z-index","0");
        $(".album_pic-4").css("z-index","0");
        $(".album_pic-1").css("z-index","0");
        flag =0;
      }
    });
  });
}
