$('.tel').click(function() {
        var me = $(this);
        a = me.attr('data-tel');
       $.get("/bank2/advert/showtelefon?id="+ a,function(data){
       me.closest("td").html(data);
          });
    });
    function inputclean(){
    $('#new').val('');
    }
      $('#kiy').on('click',function(){
    	inputclean();
    	$('#new').val('Киев');
      });
      $('#dnepr').on('click',function(){
    	inputclean();
    	$('#new').val('Днепр');
      });
      $('#odessa').on('click',function(){
    	inputclean();
    	$('#new').val('Одесса');
      });
      $('#harkov').on('click',function(){
    	inputclean();
    	$('#new').val('Харьков');
      });
