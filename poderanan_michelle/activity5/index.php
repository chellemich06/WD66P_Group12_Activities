<?php
echo getTotalInventory(100, 8);
echo "\n";
echo getTotalInventory(200, 5);
echo "\n";
echo getTotalInventory(300, 5);
	
function getTotalInventory($currentStocks, $qty) {
  $remainingStocks = $currentStocks - $qty;
  return "$currentStocks - $qty = $remainingStocks";
  }
?>