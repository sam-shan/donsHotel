/* -------------------------------------------------------------------
Main script for Dons Beach Hotel
----------------------------------------------------------------------
Author: Sameera Madushan
Version: 1.0;
Date: MAY 2015;
Origin: LK;
---------------------------------------------------------------------- */

$(document).ready(function() {
 
  $("#hSlider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true,
      responsive: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});