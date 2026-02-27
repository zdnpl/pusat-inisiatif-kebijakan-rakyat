    document.querySelectorAll('.toggle-password').forEach(function(btn) {
        
    });

    
    function handleLogin(event) {
        event.preventDefault(); 
        
        const emailInput = document.getElementById('loginEmail').value;
        const passwordInput = document.getElementById('loginPassword').value;
        
        // validasi akun
        if(emailInput === 'adminpikir123' && passwordInput === 'admin123') {
            // save login status ke localstorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', 'Bintang Berliana'); 
            
            // masuk ke page profil
            window.location.href = '/pages/profil.html';
        } else {
            alert('Username atau Password salah! Gunakan: adminpikir123 / admin123');
        }
    }
    
    // kalo user belom login
    window.onload = function() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = '/pages/profil.html';
        }
    }