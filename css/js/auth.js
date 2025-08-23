// js/auth.js
document.addEventListener('DOMContentLoaded', function () {
    const subjectLinks = document.querySelectorAll('.subject-link');

    const subjectPasswords = {
        "grade1-term1-arabic": ["."],
        "grade1-term1-math": ["."],
        "grade1-term1-english": ["."],
        "grade1-term1-science": ["."],
        "grade1-term1-social": ["."],

        "grade1-term2-arabic": ["."],
        "grade1-term2-math": ["."],
        "grade1-term2-english": ["."],
        "grade1-term2-science": ["."],
        "grade1-term2-social": ["."],

        "grade2-term1-arabic": ["."],
        "grade2-term1-english": ["."],
        "grade2-term1-math": ["."],
        "grade2-term1-science": ["."],
        "grade2-term1-social": ["."],

        "grade2_term2-arabic": ["."],
        "grade2_term2-english": ["."],
        "grade2_term2-math": ["."],
        "grade2_term2-science": ["."],
        "grade2_term2-social": ["."],

        "grade3-term1-arabic": ["."],
        "grade3-term1-math": ["."],
        "grade3-term1-english": ["."],
        "grade3-term1-science": ["."],
        "grade3-term1-social": ["."],

        "grade3-term2-arabic": ["."],
        "grade3-term2-math": ["."],
        "grade3-term2-english": ["."],
        "grade3-term2-science": ["."],
        "grade3-term2-social": ["."]
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