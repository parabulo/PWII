document.addEventListener('DOMContentLoaded', function () {
    var showPopupBtns = document.getElementsByClassName('showPopupBtn');
    var popup = document.getElementById('myPopup');
    var closePopup = document.getElementById('closePopup');

    // Iterate through the collection and attach click event to each element
    Array.from(showPopupBtns).forEach(function (showPopupBtn) {
        showPopupBtn.addEventListener('click', function () {
            popup.classList.add('is-active');
        });
    });

    // Close the popup
    closePopup.addEventListener('click', function () {
        popup.classList.remove('is-active');
    });

    // Close the popup if clicked outside the content
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.remove('is-active');
        }
    });
});

