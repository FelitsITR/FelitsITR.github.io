function toggleDropdown(menuId) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id !== menuId) {
            openDropdown.style.display = 'none';
        }
    }

    var dropdown = document.getElementById(menuId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

var animateButton = function(e) {
	e.preventDefault;
	e.target.classList.remove('animate');
	
	e.target.classList.add('animate');
	setTimeout(function(){
	  e.target.classList.remove('animate');
	},700);
};
var bubblyButtons = document.getElementsByClassName("boton");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

document.getElementById('rosa').addEventListener('click', function() {
  // Redirigimos al usuario a la nueva página
  window.location.href = 'flower.html';
});