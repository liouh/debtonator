$(function() {
    
    Chegg.Canvas.scrollTo({y: 0});
    
    $('.progress').fire({
        speed:60,
        maxPow:8,
        gravity:0,
        flameWidth:4,
        flameHeight:1,
        fadingFlameSpeed:9,
        fireTransparency:100
    });
    
    updateProgress();
    
    $(window).on('keyup', function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key === 13) {
            updateFeed();
        }
    });
});

function updateProgress(raised, total) {
    
    if(!total) total = 15000;
    if(!raised) raised = 5000;
    
    var percentage = 100 - (raised / total * 100);
    $('.fuse').css('width', '' + percentage + '%');
    
    raised = numeral(raised).format('0,0');
    $('.amountRaised').text(raised);
    
    total = numeral(total).format('0,0');
    $('.amountNeeded').text(total);
}

function updateFeed() {
    $('.item.hidden').last().slideDown(function() {
        Chegg.Canvas.resize();
    }).removeClass('hidden');
}

function fetchUser(cb){
    if(!this.userEmail){
        this.userEmail = window.location.href.split("?")[1].split('=')[1];
    }
    this.userEmail && findStudentByEmail(this.userEmail, function(studentObj){
        cb && cb(studentObj._serverData);
    })
}

function startPolling(timeout){
    var time = timeout || 5000;
    this.pollInterval = setInterval(fetchUser, time);
}

function stopPolling(){
    clearInterval(this.pollInterval);
}