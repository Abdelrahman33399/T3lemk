document.addEventListener('DOMContentLoaded', () => {
    // ابحث عن كل الروابط التي لها كلاس "subject-link"
    const subjectLinks = document.querySelectorAll('.subject-link');

    subjectLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault(); // امنع الرابط من العمل بشكل طبيعي

            const subjectName = link.dataset.subject; // احصل على اسم المادة (مثال: 'arabic')
            const subjectUrl = link.dataset.url;   // احصل على رابط المادة

            // اطلب من المستخدم إدخال كلمة المرور
            const password = prompt("لفتح المادة، يرجى إدخال الرقم السري:\n(للحصول عليه تواصل مع الدعم الفني)");

            // إذا أدخل المستخدم كلمة مرور وضغط "موافق"
            if (password) {
                // جهز البيانات لإرسالها إلى السيرفر
                const formData = new FormData();
                formData.append('subject', subjectName);
                formData.append('password', password);

                try {
                    // أرسل البيانات إلى ملف PHP للتحقق منها
                    const response = await fetch('php/check_subject_password.php', {
                        method: 'POST',
                        body: formData
                    });

                    const result = await response.json();

                    if (result.success) {
                        // إذا كانت كلمة المرور صحيحة، انتقل إلى صفحة المادة
                        window.location.href = subjectUrl;
                    } else {
                        // إذا كانت خاطئة، أظهر رسالة خطأ
                        alert(result.message);
                    }
                } catch (error) {
                    alert('حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى.');
                }
            }
        });
    });
});