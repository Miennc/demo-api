<?php 
require_once './../header.php';
$baseName = __DIR__; //Library/WebServer/Documents/post_api/
$baseName = str_replace('api\insert', '', $baseName);
require_once $baseName.'\Connect.php';
require_once $baseName.'\dal\InsertDAL.php';//Library/WebServer/Documents/post_api/dal/PostDAL.php
$httpMethod = $_SERVER['REQUEST_METHOD'];
$insertDAL = new InsertDAL();
switch ($httpMethod) {
        case 'POST':
            //thêm 1 bản ghi vào CSDL
            $data = json_decode(file_get_contents("php://input"), true);
    
            if ($insertDAL->add($data)) {
                echo json_encode(['status' => 'success']);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'failed']);
            }
            break;
}
?>