<script>
$(function() { 
  $('#tgl1').datetimepicker({
   locale:'id',
   format:'DD/MMMM/YYYY'
   });
   
  $('#tgl2').datetimepicker({
   useCurrent: false,
   locale:'id',
   format:'DD/MMMM/YYYY'
   });
   
   $('#tgl1').on("dp.change", function(e) {
    $('#tgl2').data("DateTimePicker").minDate(e.date);
  });
  
   $('#tgl2').on("dp.change", function(e) {
    $('#tgl1').data("DateTimePicker").maxDate(e.date);
      CalcDiff()
   });
  
});

function CalcDiff(){
var a=$('#tgl1').data("DateTimePicker").date();
var b=$('#tgl2').data("DateTimePicker").date();
    var timeDiff=0
     if (b) {
            timeDiff = (b - a) / 1000;
        }
 
 $('#selisih').val(Math.floor(timeDiff/(86400))+' Hari')   
}
</script>