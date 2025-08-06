<?php
// check_auth.php

// يجب بدء الجلسة في كل صفحة تستخدمها
session_start();

// إذا لم يكن هناك 'user_id' في الجلسة، فهذا يعني أن المستخدم لم يسجل دخوله
if (!isset($_SESSION['user_id'])) {
    // أعد توجيهه إلى صفحة تسجيل الدخول
    header('Location: login.html');
    exit(); // مهم جداً إيقاف تنفيذ باقي الكود
}

// يمكنك أيضاً جلب بيانات المستخدم من قاعدة البيانات إذا احتجت إليها
// require_once 'db_connect.php';
// $userId = $_SESSION['user_id'];
// $result = $conn->query("SELECT * FROM users WHERE id = $userId");
// $currentUser = $result->fetch_assoc();
?>