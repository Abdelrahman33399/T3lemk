<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

$usersFile = 'users.json';
$users = json_decode(file_get_contents($usersFile), true);

// كأدمن، يمكنك إضافة مادة لمستخدم
if($data['action'] === 'add_subject' && $data['admin_key'] === 'ADMIN_SECRET_KEY') {
    $userIndex = array_search($data['user_id'], array_column($users, 'id'));
    
    if($userIndex !== false && !in_array($data['subject'], $users[$userIndex]['subjects'])) {
        $users[$userIndex]['subjects'][] = $data['subject'];
        file_put_contents($usersFile, json_encode($users));
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>