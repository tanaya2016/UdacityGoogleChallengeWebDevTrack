
$(document).ready(function(){
//$('#submit').on("click",function(){
	function makeGrid(){


	//$('.grid-table').html('');
	$('.grid-table').find("*").remove();

	let columns = $('#grWidth').val();
	let	rows = $('#grHeight').val();

	for(let i = 0; i<rows; i++){
		$('.grid-table').append('<tr></tr>');
	}

	for(let j = 0; j< columns; j++){
		$('.grid-table tr').each(function(){
		$(this).append('<td></td>');
		});
	}

	



$('.grid-table').on("click","td",function(){
	let color = $(".colorPicker").val();
	$(this).attr("bgcolor",color);
});


$('.grid-table').on("dblclick","td",function(){
	$(this).attr("bgcolor","white");
});


}

$("#submit").click(function(e){
	e.preventDefault();
	makeGrid();
});
	



 

});