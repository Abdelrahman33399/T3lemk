<?php
// php/check_subject_password.php

header('Content-Type: application/json');

// هذا هو المكان الذي ستخزن فيه كلمات السر لكل مادة
// يمكنك تغييرها في أي وقت
$subjectPasswords = [
    'arabic'  => 'ARABIC123',
    'math'    => 'MATH456',
    'science' => 'SCI789',
    'social'  => 'SOC101',
    'english'  => 'ENG202'
    // أضف أي مواد أخرى هنا
];

// تحقق من أن البيانات تم إرسالها
if (isset($_POST['subject']) && isset($_POST['password'])) {
    $subject = $_POST['subject'];
    $password = $_POST['password'];

    // تحقق إذا كانت المادة موجودة في قائمتنا وإذا كانت كلمة المرور متطابقة
    if (array_key_exists($subject, $subjectPasswords) && $subjectPasswords[$subject] === $password) {
        // كلمة المرور صحيحة
        echo json_encode(['success' => true]);
    } else {
        // كلمة المرور خاطئة
        echo json_encode(['success' => false, 'message' => 'الرقم السري غير صحيح، يرجى المحاولة مرة أخرى.']);
    }
} else {
    // البيانات لم تصل بشكل صحيح
    echo json_encode(['success' => false, 'message' => 'حدث خطأ غير متوقع.']);
}
?>