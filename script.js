// Add a click event listener to the header
document.querySelector('header').addEventListener('click', function() {
	alert('You clicked the header!');
});

// Add a hover event listener to the list items in the Skills section
document.querySelectorAll('#skills li').forEach(function(item) {
	item.addEventListener('mouseover', function() {
		this.style.fontWeight = 'bold';
	});
	item.addEventListener('mouseout', function() {
		this.style.fontWeight = 'normal';
	});
});
