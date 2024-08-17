document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const userId = document.querySelector('#userId').value;
        const password = document.querySelector('#password').value;
        
        if (userId === 'admin' && password === '12345') {
            sessionStorage.setItem('isLoggedIn', 'true');
            
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials');
        }
    });
});
