$(document).ready(function(){
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // CLICK EVENT ON TOGGLE MENU
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
}) 