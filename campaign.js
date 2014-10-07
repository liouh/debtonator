$(function() {
    
    $('.progress').fire({
        speed:60,
        maxPow:8,
        gravity:0,
        flameWidth:4,
        flameHeight:1,
        fadingFlameSpeed:9,
        fireTransparency:100
    });
    
    updateProgress(25);
    
    $(window).on('keyup', function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key === 13) {
            updateFeed();
        }
    });
});

function updateProgress(percentage) {
    
    percentage = 100 - percentage;
    $('.fuse').css('width', '' + percentage + '%');
}

function updateFeed() {
    $('.item.hidden').last().slideDown().removeClass('hidden');
    Chegg.Canvas.resize();
}
