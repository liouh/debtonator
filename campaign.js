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
    
    startPolling();
    updateProgress();
    
    $(window).on('keyup', function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key === 13) {
            triggerFeed();
        }
    });
    
    var activityCount = -1;
    setInterval(function() {
        findActivitesByStudentEmail(this.userEmail, function(o) {
            if(activityCount == -1) {
                activityCount = o.length;
            }
            else if(activityCount < o.length) {
                var newActivities = o.length - activityCount;
                for(var i = 0; i < newActivities; i++) {
                    updateFeed();
                }
                activityCount = o.length;
            }
        })
    }, 2000);
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

function triggerFeed() {
    saveActivity({email: this.userEmail});
}

function updateFeed() {
    $('.item.hidden').last().slideDown(function() {
        Chegg.Canvas.resize();
    }).removeClass('hidden');
}

function fetchUser(cb){
    if(!this.userEmail){
        if(window.location.href.split("?")[1]){
            this.userEmail = window.location.href.split("?")[1].split('=')[1];
        }
    }
    this.userEmail && findStudentByEmail(this.userEmail, function(studentObj){
        cb && cb(studentObj._serverData);
    })
}

function startPolling(timeout){
    var time = timeout || 5000;
    fetchUser();
    this.pollInterval = setInterval(fetchUser, time);
}

function stopPolling(){
    clearInterval(this.pollInterval);
}

$(function () {
    $('a[rel*=leanModal]').leanModal({top: 50, closeButton: ".modal_close"});
    
    $('.add_donor').on('click', function () {
        $('#invite fieldset.hidden').first().slideDown(function () {
            Chegg.Canvas.resize();
        }).removeClass('hidden');
    });

    function onDialogClosed() {
        $('.close_button').click();
        
        $('.email_sent').addClass('hidden');
        
        $('.add_donor, .send_invite').removeClass('hidden', function () {
            Chegg.Canvas.resize();
        }).show();
        
        $('#invite fieldset.hidden').first().slideDown(function () {
            Chegg.Canvas.resize();
        }).removeClass('hidden');
        
        $('.form-title').removeClass('hidden');
    };
    
    $('.send_invite').on('click', function(){
        $('#invite fieldset, .add_donor, .send_invite').addClass('hidden', function(){}).hide();
        $('.email_sent').removeClass('hidden');
        $('.form-title').addClass('hidden');
       
        setTimeout(onDialogClosed, 3000);
    });
});