document.addEventListener('DOMContentLoaded', function() {
    const animatedElement = document.getElementById('animatedElement');
    const animateBtn = document.getElementById('animateBtn');
    const savePrefsBtn = document.getElementById('savePrefs');
    const bgColorPicker = document.getElementById('bgColor');
    const animationTypeSelect = document.getElementById('animationType');
        loadPreferences();
    
    animateBtn.addEventListener('click', function() {
        animatedElement.classList.remove('pulse', 'rotate', 'bounce');
                void animatedElement.offsetWidth;
        
        const animationType = localStorage.getItem('animationPref') || 'pulse';
        animatedElement.classList.add(animationType);
    });
    
    savePrefsBtn.addEventListener('click', function() {
        localStorage.setItem('bgColorPref', bgColorPicker.value);
        localStorage.setItem('animationPref', animationTypeSelect.value);
        applyPreferences();
        alert('Preferences saved!');
    });
    
    function loadPreferences() {
        if (localStorage.getItem('bgColorPref')) {
            bgColorPicker.value = localStorage.getItem('bgColorPref');
        }
        

        if (localStorage.getItem('animationPref')) {
            animationTypeSelect.value = localStorage.getItem('animationPref');
        }
        
        applyPreferences();
    }
    

    function applyPreferences() {

        document.body.style.backgroundColor = bgColorPicker.value;
        
        animationTypeSelect.value = localStorage.getItem('animationPref') || 'pulse';
    }
    bgColorPicker.addEventListener('input', function() {
        document.body.style.backgroundColor = this.value;
    });
});