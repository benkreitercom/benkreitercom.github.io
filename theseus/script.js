document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const verifyButton = document.querySelector('.verify-btn');
    const refreshButton = document.querySelector('.refresh-btn');
    
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
    
    verifyButton.addEventListener('click', function() {
        const selectedItems = document.querySelectorAll('.grid-item.selected');
        
        if (selectedItems.length === 0) return;
        
        selectedItems.forEach(item => {
            item.classList.add('fading');
        });
        
        setTimeout(() => {
            selectedItems.forEach(item => {
                item.classList.remove('fading');
            });
        }, 450);
        
        setTimeout(() => {
            selectedItems.forEach(item => {
                item.classList.remove('selected');
            });
        }, 900);
    });
    
    refreshButton.addEventListener('click', function() {
        document.querySelectorAll('.grid-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
    });
});