
$("#titre").click(function() {
    $(".first").css('display', 'block');
    $("#first").text('<h1> Title </h1>');
    $("#mainHTML").append('<div class="last"></div>')
/*    $(".last").text('<h1>title</h1>');*/
});

$("#paragraphe").click(function() {
    $(".second").css('display', 'block');
    $("#second").text('<p>Do you believe, this is a paragraph okay? do yous still believe me nigga? I swear to your mom this is a paragraph. MOTHERFUCKER THIS IS A GODDAMN PARAGRAPH</p>');
});

$("#lo").click(function() {
    $(".listed").css('display', 'block');
    $("#listed").text('<ol> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> </ol>');
});

$("#lno").click(function() {
    $(".unlisted").css('display', 'block');
    $("#unlisted").text('<ul> <li>Item</li> <li>Item</li> <li>Item</li> </ul>');
});

$("#image").click(function() {
    $(".img").css('display', 'block');
    $("#img").text('<img src="res/img.jpg">');
});

$("#video").click(function() {
    $("#video1").css('display', 'block');
    $("#vid").text('<video src="res/vid.mp4">');
});

$(".para1").click(function() {
    var para1 = prompt("Badel elli theb");
    $(".para1").html(para1);
});

$(".first").click(function() {
    var titre1 = prompt("Badel elli theb");
    $(".hey").html(titre1);
});

$(".second").click(function() {
    var text1 = prompt("Badel elli theb");
    $(".text1").html(text1);
});

$("#lien").click(function() {
    $("#lin1").css('display', 'block');
    $("#lin").text('<a href="http://www.gomycode.com">Our website</a>');
});

$("#audio").click(function() {
    $("#audi").css('display', 'block');
    $("#audi1").text('<div id="audio"> <audio controls> <source src="res/audio.mp3" type="audio/mpeg"> </audio> </div>');
});

$("#item1").click(function() {
    var item1 = prompt("Edit this");
    $("#item1").html(item1);
});

