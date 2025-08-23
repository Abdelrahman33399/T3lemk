// js/auth.js
document.addEventListener('DOMContentLoaded', function () {
    const subjectLinks = document.querySelectorAll('.subject-link');

    const subjectPasswords = {
        "grade1-term1-arabic": ["Rabea2"],
        "grade1-term1-math": ["Rabea11"],
        "grade1-term1-english": ["Rabea11"],
        "grade1-term1-science": ["Rabea11"],
        "grade1-term1-social": ["Rabea11"],

        "grade1-term2-arabic": ["Rabea11"],
        "grade1-term2-math": ["Rabea11"],
        "grade1-term2-english": ["Rabea11"],
        "grade1-term2-science": ["Rabea11"],
        "grade1-term2-social": ["Rabea11"],

        "grade2-term1-arabic": ["Rabea11"],
        "grade2-term1-english": ["Rabea11"],
        "grade2-term1-math": ["Rabea11"],
        "grade2-term1-science": ["Rabea11"],
        "grade2-term1-social": ["Rabea11"],

        "grade2_term2-arabic": ["Rabea11"],
        "grade2_term2-english": ["Rabea11"],
        "grade2_term2-math": ["Rabea11"],
        "grade2_term2-science": ["Rabea11"],
        "grade2_term2-social": ["Rabea11"],

        "grade3-term1-arabic": ["Rabea11"],
        "grade3-term1-math": ["Rabea11"],
        "grade3-term1-english": ["Rabea11"],
        "grade3-term1-science": ["Rabea11"],
        "grade3-term1-social": ["Rabea11"],

        "grade3-term2-arabic": ["Rabea11"],
        "grade3-term2-math": ["Rabea11"],
        "grade3-term2-english": ["Rabea11"],
        "grade3-term2-science": ["Rabea11"],
        "grade3-term2-social": ["Rabea11"]
    };

    subjectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const subject = this.getAttribute('data-subject');
            const url = this.getAttribute('data-url');
            const validPasswords = subjectPasswords[subject];

            if (!validPasswords) {
                alert("عذرًا، لم يتم تعيين كود وصول لهذه المادة بعد.");
                return;
            }

            let userPassword = prompt("من فضلك أدخل كود المادة (للحصول عليه تواصل مع الدعم الفني في أسفل المنصة):");
            
            if (userPassword === null) return;

            userPassword = userPassword.trim();

            if (validPasswords.includes(userPassword)) {
                window.location.href = url;
            } else {
                alert("عذرًا، الكود غير صحيح أو غير مصرح به للوصول إلى هذه المادة.");
            }
        });
    });
});