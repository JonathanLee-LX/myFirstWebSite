$('form').on('submit', function(e){
  e.preventDefault()
  var title = $('#article-title').val()
  var body = $("#article-body").val()
  var article = {
    title: title,
    body: body
  }
  $.Ajax({
    url: "http://localhost:6000",
    cache: false,
    data: article,
    dataType: "text",
    type: "POST",
    success: function(msg){
      alert('has received '+msg)
    }
  })
})
