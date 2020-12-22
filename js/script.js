	$('#btnRun').click(function() {

		$.ajax({
			url: "php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "php/getTimezoneInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTimezoneId').html(result['data'][0]['timezoneId']);
					$('#txtTime').html(result['data'][0]['time']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "php/getWikiInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				q=london: $('#selQ=london').val(),
				maxRows: $('#selMaxRows').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTitle').html(result['data'][0]['title']);
					$('#txtSummary').html(result['data'][0]['summary']);
					$('#urlThumbnailImg').html(result['data'][0]['thumbnailImg']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
