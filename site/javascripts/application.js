$(function()
{
	$('#wrap').supersleight({shim: '/images/transparent.gif'});
});

$(function()
{
	
	$('.audio').each(function()
	{
		
		// move first child (the original hyperlink) out of the detail area to create the header
		var detail = $(this);
		var header = detail.children(':first');
		header.addClass('audio_toggle')
		detail.before(header);
		
		// add our control container to the detail
		var controls = $('<p class="controls"></p>').prependTo(detail);
		
		// insert the Flash player into the control container
		var href = header.find('a').attr('href');
		$('<span class="player"></span>').appendTo(controls).jmp3(
		{
			filepath: href,
			width: 200,
			backcolor: "000000",
			forecolor: "00ff00",
			showfilename: "true",
			showdownload: "false",
			volume: 80
		});
		
		// add a download link to the control container
		$('<a class="download"><img src="/images/download.png" alt="Download" /></a>')
			.appendTo(controls).attr('href', href);
		
		// toggle visibility of the detail area when the header link is clicked
		header.find('a').click(function()
		{
			detail.slideToggle(400);
			return false;
		});
		
		// fix the width of the container for .slideToggle() to work properly
		// this is ran asynchronously so the Flash object gets a chance to init
		setTimeout(function()
		{
			detail.width(detail.width() + 1);
		}, 1);
		
		// the detail area should be initially hidden
		detail.hide();
		
	});
	
});

$(function()
{
	$(".tweet").tweet({
		username: "pugnusferreus",
		join_text: "auto",
		avatar_size: 16,
		count: 5,
		auto_join_text_default: "", 
		auto_join_text_ed: "",
		auto_join_text_ing: "",
		auto_join_text_reply: "",
		auto_join_text_url: "",
		loading_text: "loading twitter..."
	});
});
