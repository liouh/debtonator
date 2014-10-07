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
    
    window.userEmail = window.location.href.split("?")[1].split('=')[1];
    
    startPolling(2000);
    updateProgress();
    
    $(window).on('keyup', function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key === 13) {
            triggerFeed();
        }
    });
    
    var activityCount = -1;
    setInterval(function() {
        findActivitesByStudentEmail(window.userEmail, function(o) {
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

function addDonation(amount) {
    saveDonor({"email": window.userEmail, "amount": amount});
}

function triggerFeed() {
    saveActivity({email: window.userEmail});
}

function updateFeed() {
    $('.item.hidden').last().slideDown(function() {
        Chegg.Canvas.resize();
    }).removeClass('hidden');
}

function fetchUser() {
    window.userEmail && findDonorsByStudentEmail(window.userEmail, function(o){
        var amount = 0;
        for(var i = 0; i < o.length; i++) {
            amount += o[i].attributes.amount;
        }
        updateProgress(amount);
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
});