$('.btn').click(function(){
    let valueBut = $(this).text()
    $('input').val($("input").val() + valueBut)
})

$('#empty').click(function(){
    $('input').val('')
})

$('#back').click(function(){
    let delVal = $('input').val()
    $('input').val(delVal.substring(0, delVal.length - 1))
})

$('#equal').click(function(){
    let valInp = $('input').val()
    $('input').val(eval(valInp))
})

$('#pers').click(function(){
    let valInp = $('input').val()
    $('input').val(valInp / 100)
})

$('#oneLess').click(function(){
    let valInp = $('input').val()
    $('input').val(1 / valInp)
})

$('#plusMinus').click(function(){
    let valInp = $('input').val()
    $('input').val(valInp * -1)
    
})

$('#inSqur').click(function(){
    let valInp = $('input').val()
    $('input').val(valInp * valInp)
})

$('#outSqur').click(function(){
    let valInp = $('input').val()
    $('input').val(Math.sqrt(valInp))
})