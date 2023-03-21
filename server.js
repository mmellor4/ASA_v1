var http = require('http');
	fs = require('fs');

var port = 1337;

function serverStaticFile(res,path,contentType,responseCode){

	if(!responseCode){
		responseCode = 200;
	}

	fs.readFile(__dirname + path, function(err,data){
		if(err){
			res.writeHead(500,  {'Content-Type': 'text/plain'});

			res.end('500 - Internal Error');
		} else{
			res.writeHead(responseCode, {'Content-Type': contentType});

			res.end(data);
		}
	});
}



http.createServer(function(request, res) {

	
	var path = request.url.replace(/\/?(?:\?.*)?$/,'')
			.toLowerCase();

	switch(path){

	case '':
		serverStaticFile(res, '/public/index.html', 'text/html');
		break;

	case '/style_home.css':
		serverStaticFile(res, '/public/style_home.css', 'text/css');
		break;

	//html pages 

	case '/index':
		serverStaticFile(res, '/public/index.html', 'text/html');
		break;

	case '/about':
		serverStaticFile(res, '/public/about.html', 'text/html');
		break;

	case '/gallery':
		serverStaticFile(res, '/public/gallery.html', 'text/html');
		break;

	case '/upcoming':
		serverStaticFile(res, '/public/upcoming.html', 'text/html');
		break;

	case '/past':
		serverStaticFile(res, '/public/past.html', 'text/html');
		break;

	case '/brickleys':
		serverStaticFile(res, '/public/brickleys.html', 'text/html');
		break;

	case '/craftday':
		serverStaticFile(res, '/public/craftday.html', 'text/html');
		break;

	case '/farmersdaughter':
		serverStaticFile(res, '/public/farmersdaughter.html', 'text/html');
		break;

	case '/halloween':
		serverStaticFile(res, '/public/halloween.html', 'text/html');
		break;	

	case '/musicalchairs':
		serverStaticFile(res, '/public/musicalchairs.html', 'text/html');
		break;

	case '/savethebay':
		serverStaticFile(res, '/public/savethebay.html', 'text/html');
		break;

	case '/scaryacers':
		serverStaticFile(res, '/public/scaryacers.html', 'text/html');
		break;

	case '/winterformal':
		serverStaticFile(res, '/public/winterformal.html', 'text/html');
		break;

	//js

	case '/script.js':
		serverStaticFile(res, '/public/script.js', 'text/js');
		break;

	case '/jq-load.js':
		serverStaticFile(res, '/public/js/jq-load.js', 'text/js');
		break;

	case '/jq-jquery-3.6.3.min.js':
		serverStaticFile(res, '/public/js/jquery-3.6.3.min.js', 'text/js');
		break;

	case '/jQuery-script.js':
		serverStaticFile(res, '/public/jQuery-script.js', 'text/js');
		break;

	case '/modernizr-custom.js':
		serverStaticFile(res, '/public/modernizr-custom.js', 'text/js');
		break;

	case '/more-photos-json.js':
		serverStaticFile(res, '/public/more-photos-json.js', 'text/js');
		break;

	case '/past-data-html.js':
		serverStaticFile(res, '/public/past-data-html.js', 'text/js');
		break;
		
	case '/upcoming-data-xml.js':
		serverStaticFile(res, '/public/upcoming-data-xml.js', 'text/js');
		break;

	case '/geolocation-m.js':
		serverStaticFile(res, '/public/js/geolocation-m.js', 'text/js');
		break;

	case '/geolocation.js':
		serverStaticFile(res, '/public/js/geolocation.js', 'text/js');
		break;


	//data

	case '/data.html':
		serverStaticFile(res, '/public/data/data.html', 'text/html');
		break;

	case '/more-photos.json':
		serverStaticFile(res, '/public/data/more-photos.json', 'text/json');
		break;

	case '/past-data.html':
		serverStaticFile(res, '/public/data/past-data.html', 'text/html');
		break;

	case '/upcoming-data.xml':
		serverStaticFile(res, '/public/data/upcoming-data.xml', 'text/xml');
		break;

	//images
	case '/asa_logo.png':
		serverStaticFile(res, '/public/img/logo.png', 'image/png');
		break;

	case '/asa_group.jpeg':
		serverStaticFile(res, '/public/ASA_group.jpeg', 'image/jpeg');
		break;

	case '/asa_logo_official.jpeg':
		serverStaticFile(res, '/public/ASA_LOGO_official.jpeg', 'image/jpeg');
		break;

	case '/dis.png':
		serverStaticFile(res, '/public/dis.png', 'image/png');
		break;

	case '/ig.png':
		serverStaticFile(res, '/public/ig.png', 'image/png');
		break;

	case '/youtube.png':
		serverStaticFile(res, '/public/youtube.png', 'image/png');
		break;

	//eboard
	case '/eboard/alfred.png':
		serverStaticFile(res, '/public/eboard/alfred.png', 'image/png');
		break;

	case '/eboard/si.png':
		serverStaticFile(res, '/public/eboard/si.png', 'image/png');
		break;

	case '/eboard/julie.png':
		serverStaticFile(res, '/public/eboard/julie.png', 'image/png');
		break;

	case '/eboard/ji.png':
		serverStaticFile(res, '/public/eboard/ji.png', 'image/png');
		break;

	case '/eboard/mei.png':
		serverStaticFile(res, '/public/eboard/mei.png', 'image/png');
		break;

	 case '/eboard/jenny.png':
		serverStaticFile(res, '/public/eboard/jenny.png', 'image/png');
		break;

	case '/eboard/celina.png':
		serverStaticFile(res, '/public/eboard/celina.png', 'image/png');
		break;

	//gallery MAIN


	case '/gallery/craftday1.png':
		serverStaticFile(res, '/public/gallery/craftday1.png', 'image/png');
		break;

	case '/gallery/brickleys1.png':
		serverStaticFile(res, '/public/gallery/brickleys1.png', 'image/png');
		break;

	case '/gallery/musical_chairs1.png':
		serverStaticFile(res, '/public/gallery/musical_chairs1.png', 'image/png');
		break;

	case '/gallery/farmers_daughter1.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter1.png', 'image/png');
		break;

	case '/gallery/scary_acers1.png':
		serverStaticFile(res, '/public/gallery/scary_acers1.png', 'image/png');
		break;

	case '/gallery/halloween1.png':
		serverStaticFile(res, '/public/gallery/halloween1.png', 'image/png');
		break;

	case '/gallery/save_the_bay1.png':
		serverStaticFile(res, '/public/gallery/save_the_bay1.png', 'image/png');
		break;

	case '/gallery/winter_formal1.png':
		serverStaticFile(res, '/public/gallery/winter_formal1.png', 'image/png');
		break;

	case '/gallery/pga.png':
		serverStaticFile(res, '/public/gallery/pga.png', 'image/png');
		break;

	case '/gallery/holiday.png':
		serverStaticFile(res, '/public/gallery/holiday.png', 'image/png');
		break;

	case '/gallery/s2d1.png':
		serverStaticFile(res, '/public/gallery/s2d1.png', 'image/png');
		break;

	//craft day
	case '/gallery/craftday2.png':
		serverStaticFile(res, '/public/gallery/craftday2.png', 'image/png');
		break;

	case '/gallery/craftday3.png':
		serverStaticFile(res, '/public/gallery/craftday3.png', 'image/png');
		break;

	case '/gallery/craftday4.png':
		serverStaticFile(res, '/public/gallery/craftday4.png', 'image/png');
		break;

	case '/gallery/craftday5.png':
		serverStaticFile(res, '/public/gallery/craftday5.png', 'image/png');
		break;

	case '/gallery/craftday6.png':
		serverStaticFile(res, '/public/gallery/craftday6.png', 'image/png');
		break;

	case '/gallery/cultureshow.jpeg':
		serverStaticFile(res, '/public/gallery/cultureshow.jpeg', 'image/jpeg');
		break;

	//brickleys + beach

	case '/gallery/brickleys2.png':
		serverStaticFile(res, '/public/gallery/brickleys2.png', 'image/png');
		break;

	case '/gallery/brickleys3.png':
		serverStaticFile(res, '/public/gallery/brickleys3.png', 'image/png');
		break;

	case '/gallery/brickleys4.png':
		serverStaticFile(res, '/public/gallery/brickleys3.png', 'image/png');
		break;

	case '/gallery/beach1.png':
		serverStaticFile(res, '/public/gallery/beach1.png', 'image/png');
		break;

	case '/gallery/beach2.png':
		serverStaticFile(res, '/public/gallery/beach2.png', 'image/png');
		break;

	case '/gallery/beach3.png':
		serverStaticFile(res, '/public/gallery/beach3.png', 'image/png');
		break;

	case '/gallery/beach4.png':
		serverStaticFile(res, '/public/gallery/beach4.png', 'image/png');
		break;

	//muscial chairs

	case '/gallery/musical_chairs2.png':
		serverStaticFile(res, '/public/gallery/musical_chairs2.png', 'image/png');
		break;

	case '/gallery/musical_chairs3.png':
		serverStaticFile(res, '/public/gallery/musical_chairs3.png', 'image/png');
		break;

	case '/gallery/musical_chairs4.png':
		serverStaticFile(res, '/public/gallery/musical_chairs4.png', 'image/png');
		break;

	//farmers daughter

	case '/gallery/farmers_daughter2.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter2.png', 'image/png');
		break;

	case '/gallery/farmers_daughter3.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter3.png', 'image/png');
		break;

	case '/gallery/farmers_daughter4.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter4.png', 'image/png');
		break;

	case '/gallery/farmers_daughter5.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter5.png', 'image/png');
		break;

	case '/gallery/farmers_daughter6.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter6.png', 'image/png');
		break;

	case '/gallery/farmers_daughter7.png':
		serverStaticFile(res, '/public/gallery/farmers_daughter7.png', 'image/png');
		break;

	//scary acers

	case '/gallery/scary_acers2.png':
		serverStaticFile(res, '/public/gallery/scary_acers2.png', 'image/png');
		break;

	case '/gallery/scary_acers3.png':
		serverStaticFile(res, '/public/gallery/scary_acers3.png', 'image/png');
		break;

	case '/gallery/scary_acers4.png':
		serverStaticFile(res, '/public/gallery/scary_acers4.png', 'image/png');
		break;

	//halloween

	case '/gallery/halloween2.png':
		serverStaticFile(res, '/public/gallery/halloween2.png', 'image/png');
		break;

	case '/gallery/halloween3.png':
		serverStaticFile(res, '/public/gallery/halloween3.png', 'image/png');
		break;

	case '/gallery/halloween4.png':
		serverStaticFile(res, '/public/gallery/halloween4.png', 'image/png');
		break;

	//save the bay
	case '/gallery/save_the_bay2.png':
		serverStaticFile(res, '/public/gallery/save_the_bay2.png', 'image/png');
		break;

	case '/gallery/save_the_bay3.png':
		serverStaticFile(res, '/public/gallery/save_the_bay3.png', 'image/png');
		break;

	case '/gallery/save_the_bay4.png':
		serverStaticFile(res, '/public/gallery/save_the_bay4.png', 'image/png');
		break;

	case '/gallery/save_the_bay5.png':
		serverStaticFile(res, '/public/gallery/save_the_bay5.png', 'image/png');
		break;

	case '/gallery/save_the_bay6.png':
		serverStaticFile(res, '/public/gallery/save_the_bay6.png', 'image/png');
		break;

	//winter formal

	case '/gallery/winter_formal2.png':
		serverStaticFile(res, '/public/gallery/winter_formal2.png', 'image/png');
		break;

	case '/gallery/winter_formal3.png':
		serverStaticFile(res, '/public/gallery/winter_formal3.png', 'image/png');
		break;

	case '/gallery/winter_formal4.png':
		serverStaticFile(res, '/public/gallery/winter_formal4.png', 'image/png');
		break;

	case '/gallery/winter_formal5.png':
		serverStaticFile(res, '/public/gallery/winter_formal5.png', 'image/png');
		break;

	case '/gallery/winter_formal6.png':
		serverStaticFile(res, '/public/gallery/winter_formal6.png', 'image/png');
		break;

	case '/gallery/winter_formal7.png':
		serverStaticFile(res, '/public/gallery/winter_formal7.png', 'image/png');
		break;

	case '/gallery/winter_formal8.png':
		serverStaticFile(res, '/public/gallery/winter_formal8.png', 'image/png');
		break;

	case '/gallery/winter_formal9.png':
		serverStaticFile(res, '/public/gallery/winter_formal9.png', 'image/png');
		break;

	case '/gallery/winter_formal10.png':
		serverStaticFile(res, '/public/gallery/winter_formal10.png', 'image/png');
		break;

	default:
		serverStaticFile(res,'/public/error','text/html', 404);
		break;
	}

}).listen(port);

console.log("Listening...Go to http://localhost:" + port)