<script type="text/javascript">
    // State machine visibility toggle utility
    function switchState(hideElementId, showElementId) {
        const hideTarget = document.getElementById(hideElementId);
        const showTarget = document.getElementById(showElementId);

        if (hideTarget && showTarget) {
            hideTarget.classList.add('d-none');
            showTarget.classList.remove('d-none');
        }
    }

    // Show biometric verification layer
    function showBiometricVerification() {
        switchState('layerWallet', 'layerBiometricVerification');
    }

    // Switch back to wallet
    function switchToWallet() {
        switchState('layerBiometricVerification', 'layerWallet');
    }

    // Execute biometric verification
    function executeBiometricVerification() {
        // Simulate biometric processing delay
        const biometricIcon = document.querySelector('.biometric-icon');
        if (biometricIcon) {
            biometricIcon.textContent = '✓';
            biometricIcon.style.color = 'var(--success-green)';
        }

        setTimeout(function() {
            switchState('layerBiometricVerification', 'layerPINVerification');
            // Reset biometric icon for next cycle
            if (biometricIcon) {
                biometricIcon.textContent = '🔐';
                biometricIcon.style.color = 'inherit';
            }
        }, 2000);
    }

    // Process secure code input logic checks
    function executeTokenValidation() {
        const secretCodeField = document.getElementById('pinVerificationInput');

        // Dynamic input validation evaluation matching lab parameters
        // Ang tamang code ay 120352
        if (secretCodeField && secretCodeField.value.trim() === "120352") {
            switchState('layerPINVerification', 'layerLoadingWheel');

            // Emulates an algorithmic execution processing delay before KYC failed state
            setTimeout(function() {
                switchState('layerLoadingWheel', 'layerKYCFailed');
            }, 3000);
        } else {
            alert("Security matrix mismatch: Input parameters incorrect.");
        }
    }

    // Clean structural variables state baseline back to origin
    function resetWorkflowIndex() {
        const targetPin = document.getElementById('pinVerificationInput');
        if (targetPin) targetPin.value = '';
        switchState('layerSuccess', 'layerWallet');
    }

    // Dito nagtatapos ang huling element o content ng iyong pahina 
    
    // Start of Tawk.to Script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://tawk.to/chat/YOUR_ID_HERE'; // Siguraduhin na tama ang URL mo rito
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
  
    )();

</script>
</body>
</html>
