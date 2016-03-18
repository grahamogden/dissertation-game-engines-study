<?php

class Module {
	protected $file;
	protected $values = array();

	public function __construct($file = null) {
		$this->file = $file;
	}

	private function load($file) {
		if(isset($file) && file_exists($file)) {
			$this->file = $file;
		}
	}

	public function set($key, $value) {
		if (is_object($value) && get_class($value) === "Template")
			$this->values[$key] = $value->output();
		else
			$this->values[$key] = $value;
	}

	public function output() {
		$output = (file_exists($this->file) ? file_get_contents($this->file) : "No such template!");

		foreach ($this->values as $key => $value)
		{
			if (!empty($value) && $value !== false) {
				$output = str_replace("[@".$key."]", $value, $output);
				// $output = preg_replace("/(?:\[(.*?)\])?\[@$key\](?:\[(.*?)\])?/s", $value, $output);
			}

		}
		return $output;
	}

	static public function merge($templates) {
		/**
		 * Loops through the array concatenating the outputs from each template, separating with $separator.
		 * If a type different from Template is found we provide an error message. 
		 */
		$output = "";

		foreach ($templates as $template) {
			$output = (get_class($template) !== "Template")
				? "Error, incorrect type - expected Template."
				: $template->output();
		}

		return $output;
	}
}

?>