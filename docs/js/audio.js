$(document).ready(function(){

    var audio =$('#audioTrack')[0];
    
    $playBtn=$('#audio-play');

    $pauseBtn=$('#audio-pause');
    
    $audioControl =$('[data-type="audio-control"]');

    setTimeout(initAudioPlayer, 800);

    function initAudioPlayer(){
     
    $playBtn.parent().show();
    audio.loop = true;
    //audio.play();   

    $audioControl.click(function(){
        
        if (audio.paused) {
            audio.play();
            $playBtn.parent().hide();
            $pauseBtn.parent().show();
        }else{
            audio.pause();
            $pauseBtn.parent().hide();
            $playBtn.parent().show();
        }
    })

    }
});
