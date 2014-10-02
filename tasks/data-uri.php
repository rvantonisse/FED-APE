#!/usr/bin/env php
<?php

if (count($argv) < 2) {
	echo "\033[0;31m[!]\033[0m Path to an image expected.\n";
}
else {
	$imagetype = exif_imagetype($argv[1]);
	if ($imagetype) {
		$prefix = "data:";
		$mime = image_type_to_mime_type($imagetype);
		$suffix = ";base64,";

		echo "[*] Dimensions:\n\t" . getimagesize($argv[1])[3] . "\n";
		echo "[*] Base64 data URI:\n\t";
		echo $prefix . $mime . $suffix . base64_encode(file_get_contents($argv[1])) . "\n";
	}
	else {
		echo "\033[0;31m[!]\033[0m Unable to process file. Is it a valid image?\n";
	}
}

// Terminate properly
exit(0);