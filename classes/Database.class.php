<?php

class DatabaseConnection extends PDO {
	private $dbname     = "xxxx";
	private $host       = "xxxx";
	private $user       = "xxxx";
	private $password   = "xxxx";
	private $port       = 5432;

	public function __construct($dbname, $host, $user, $password) {
		$this->dbname = $dbname;
		$this->host = $host;
		$this->user = $user;
		$this->password = $password;
		try {
			parent::__construct("pgsql:host=$this->host;port=$this->port;dbname=$this->dbname;user=$this->user;password=$this->password");
		} catch(PDOException $e) {
			echo    $e->getMessage();  
		}
	}
}
?>