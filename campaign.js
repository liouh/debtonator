$(function() {
    
    $('.progress').fire({
        speed:60,
        minPow:3,
        maxPow:10,
        gravity:0,
        flameWidth:3,
        flameHeight:1,
        fadingFlameSpeed:9,
        fireTransparency: 100
    });
    
});

function updateProgress(percentage) {
    
    percentage = 100 - percentage;
    $('.fuse').css('width', '' + percentage + '%');
}
