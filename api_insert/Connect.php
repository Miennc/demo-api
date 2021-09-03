<?php 
class Connect {
    protected $pdo = null;
    public function __construct(){
        try {
            $this->pdo = new PDO('mysql:host=localhost;dbname=cp17','root','');
            $this->pdo->exec('SET NAMES utf8');
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
}
?>