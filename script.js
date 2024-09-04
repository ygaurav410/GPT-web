document.addEventListener('DOMContentLoaded', function() {
    // Example of handling the Calculate Emissions button click
    document.querySelector('.estimation-form .btn').addEventListener('click', function() {
        let excavation = parseFloat(document.getElementById('excavation').value);
        let transportation = parseFloat(document.getElementById('transportation').value);
        
        if (!isNaN(excavation) && !isNaN(transportation)) {
            let totalEmissions = calculateEmissions(excavation, transportation);
            document.querySelector('.results').innerHTML = `<p>Total Emissions: ${totalEmissions} Tons CO2</p>`;
        } else {
            alert('Please enter valid numbers');
        }
    });

    function calculateEmissions(excavation, transportation) {
        // Dummy calculation for example
        return excavation * 0.5 + transportation * 0.2;
    }

        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeRegister = document.getElementById('closeRegister');
    
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });
    
        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    
        closeRegister.addEventListener('click', () => {
            registerModal.style.display = 'none';
        });
    
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });
    });
    