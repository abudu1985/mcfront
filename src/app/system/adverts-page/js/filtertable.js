
$(document).ready(function() {
   start();
});
function inputclean(){
$('#inputcityname').val('');
}

function start(){
var table =  $('#example').DataTable(
   {
        "paging":   false,
        "ordering": false,
        "info":     false,
        "dom": '<"top"i>rt<"bottom"flp><"clear">',
       // "searching": false,
        "language": {
        "search": "Поиск:",
        "infoEmpty": "Нет записей",
        "zeroRecords": "0 records",
            "processing": true,
            "serverSide": true,
            "ajax": {
                "url": "js/package.json",
                "type": "POST"
            },
        "columns": [
            {
                "title":"Время",
                "data": "date"
            },
            {
                "title":"Сумма",
                "data": "amount"
            },
            {
                "title":"Курс",
                "data": "rate"
            },
            {
                "title":"Купить/Продать",
                "data": "wish"
            },
            {
                "title":"Телефон",
                "data": "telefon"
            },
            {
                "title":"Инфо",
                "data": "info"
            }
        ]
  }
  }
   );
     $('#dropdowncurrency').on('change', function () {
          table.columns(1).search( this.value ).draw();
      } );
      $('#dropdownbuysale').on('change', function () {
          table.columns(3).search( this.value ).draw();
      } );
      $('#inputcityname').keyup(function(){
          table.columns(5).search($(this).val()).draw();
          console.log(table.columns(6));
      });
        $('#kiy').on('click',function(){
        inputclean();
        $('#inputcityname').val('Киев');
        table.columns(5).search('Киев').draw();
        });
        $('#dnepr').on('click',function(){
        inputclean();
        $('#inputcityname').val('Днепр');
        table.columns(5).search('Днепр').draw();
        });
        $('#odessa').on('click',function(){
        inputclean();
        $('#inputcityname').val('Одесса');
        table.columns(5).search('Одесса').draw();
        });
        $('#harkov').on('click',function(){
        inputclean();
        $('#inputcityname').val('Харьков');
        table.columns(5).search('Харьков').draw();
        });
      $('#test').on( 'click', function () {
      $('#inputcityname').val([]);
      		table.columns().search("");
      		table.draw();
} );

    // setInterval( function () {
    //     table.ajax.reload(null, false);
    // }, 2000 );
}
