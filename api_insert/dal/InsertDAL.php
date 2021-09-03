<?php
$baseName = __DIR__; //Library/WebServer/Documents/post_api/
$baseName = str_replace('dal', '', $baseName);
require_once $baseName . '.\Connect.php';
class InsertDAL extends Connect
{
  public function add($payload)
  {
    try {
      $stm = $this->pdo->prepare("INSERT INTO user(email,password,fullname,phone,address) VALUES(:email,:password,:fullname,:phone,:address)");
      $stm->bindParam(':email', $email);
      $stm->bindParam(':password', $password);
      $stm->bindParam(':fullname', $fullname);
      $stm->bindParam(':phone', $phone);
      $stm->bindParam(':address', $address);
      $email = $payload['email'];
      $password = md5($payload['password']);
      $fullname = $payload['fullname'];
      $phone = $payload['phone'];
      $address = $payload['address'];
      $stm->execute();
    } catch (PDOException $e) {
      $e->getMessage();
      return false;
    }
    return true;
  }
}
