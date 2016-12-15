$(function(){
  var request;

  $("#mainForm").submit(function(event){

     if(request){
       request.abort();
     }
      // If I write this one, the person cannnot send message many times.

      var myData = $("#mainForm").find("input,textarea").serialize();
      // serialize...オブジェクトの表すデータを、ファイルとしてセーブしたり、ネットワークで送信したりすることができるようになる。

     request = $.ajax({
       url:"http://api.ideiadoluiz.com.br/email/index.php",
       method:"post",
       data: myData
     });

     // ajax...画面を更新しないデータの通信, not to do refresh the page, ex) google suggest

     request.done(function(data){
       $("#result").removeClass();

      if(data.description == "success"){
        $("#result").html(data.description).addClass("bg-success");
         } else {
        $("#result").html(data.description).addClass("bg-danger");
                }
    });
         //request.done~の最初の奴は初期値を設定。addClass...文字の背景色を変えるやつ

     request.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR+ " " + textStatus + errorThrown);
      });
      //http://api.jquery.com/jquery.ajax/参照
      //コンソールログ関数はブラウザのコンソールにメッセージを出力できる関数
      //動作確認やデバッグに活用できる

     event.preventDefault();
      //  preventDefault()は、実行したイベントがキャンセル可能な場合、イベントをキャンセルするためのメソッド。
      //  「イベント」例、フォームのテキストエリアの入力やチェックボックスのチェック、リンクのクリックなど
      //  preventDefault()でイベントがキャンセルされると、テキストエリアの入力などは行われません。
  });
 });
