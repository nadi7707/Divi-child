window.addEventListener('DOMContentLoaded', (event)=>{
    var elList = document.querySelectorAll('.back-button');
    elList.forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            window.history.back();
        });
    });
}
);
