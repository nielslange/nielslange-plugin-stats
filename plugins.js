let url = 'https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[fields][banners]=true&request[search]=SMNTCS';
let downloads = 0;
let installs = 0;
let plugins;
let plugin;
let plugin_data = document.querySelector('#plugin_data');
	
fetch( url )
.then( response => {
	return response.json()
} )
.then( data => {
	plugins = data['plugins'];
	plugins.sort( ( a, b ) => a.name.localeCompare( b.name ));

	for ( plugin of plugins ) {

		plugin_data.innerHTML += 
			'<div class="col-md-6 col-lg-4 col-xl-3 mb-4">' + 
				'<div class="card">' + 
					'<img src="' + plugin['banners']['low'] + '" class="card-img-top" alt="...">' + 
					'<div class="card-body">' + 
						'<h5 class="card-title">' + plugin['name'] + '</h5>' + 
						'<p class="card-text">' + plugin['short_description'] + '</p>' + 
						'<p class="card-text font-weight-light text-secondary">' + 
							'<i class="fas fa-download"></i> ' + plugin['active_installs'] + '+ active installs<br>' + 
							'' + plugin['downloaded'] + ' downloads' +
						'</p>' + 
						'<a href="' + plugin['download_link'] + '" class="btn btn-success"><i class="fas fa-download"></i></a> ' + 
						'<a href="' + plugin['homepage'] + '" class="btn btn-info"><i class="fab fa-wordpress-simple"></i></a> ' + 
						'<a href="' + plugin['homepage'] + '" class="btn btn-info"><i class="fab fa-github"></i></a> ' + 
						'</div>' + 
				'</div>' + 
			'</div>';
	}

} )
.catch(err => {
	console.log( err );
} )
