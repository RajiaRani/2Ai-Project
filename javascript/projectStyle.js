
document.getElementById('clickableImage').addEventListener('click', function() {
    document.getElementById('fullImageOverlay').style.display = 'flex';
});

document.getElementById('fullImageOverlay').addEventListener('click', function() {
    document.getElementById('fullImageOverlay').style.display = 'none';
});
