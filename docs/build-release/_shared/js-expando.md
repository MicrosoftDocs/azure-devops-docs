<script type="text/javascript">

$('div.expando-oa').hide();

$('a.expando-oa').append('&#x25BC;');
// I think this one is better but not working on sandbox for some reason
//$('a.expando-oa').append('<span class="expando-oa-icon">&#x25BC;</span>');

$('a.expando-oa').click(function () {
   $target = $(this).parent().next("div.expando-oa");
   
   $(this).text($(this).text().substr(0,$(this).text().length-1));
   if($target.is(':visible')) {
      $(this).append('&#x25BC;');
   } 
   else {
      $(this).append('&#x25B2;');
   }   

   // I think this one is better but not working on sandbox for some reason
   /*
   if($target.is(':visible')) {
      $(this).find('span.expando-oa-icon').text('\u25BC');
   } 
   else {
      $(this).find('span.expando-oa-icon').text('\u25B2');
   }
   */

   $target.slideToggle();
   return false;
});

</script>