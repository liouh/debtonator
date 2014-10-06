$(function() {
    
    $('.startCampaign').on('click', function(e) {
        e.preventDefault();
        Chegg.auth({ deeplink: 'campaign.html' });
    });
    
});
