// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
//   licenseKey: "gplv3-license",
// });

// Google maps
let map;

async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");

	map = new Map(document.getElementById("map"), {
		center: { lat: 46.2292491, lng: 4.7819825 },
		zoom: 13,
		mapId: "1c1ae9f4503e0135",
		gestureHandling: "greedy",
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
	});

	// Church
	const curchMarker = new google.maps.Marker({
		position: { lat: 46.2473352, lng: 4.7861207 },
		map: map,
		icon: {
			url: "assets/church.png",
			scaledSize: new google.maps.Size(20, 32)
		}
	});
	const churchInfo = new google.maps.InfoWindow({
		content: "Église Saint-Jacques-le-Majeur"
	});
	curchMarker.addListener("click", () => {
		churchInfo.open(map, curchMarker);
	});

	// Train
	const trainMarker = new google.maps.Marker({
		zIndex: 1,
		position: { lat: 46.2130426, lng: 4.7727487 },
		map: map,
		icon: {
			url: "assets/train.png",
			scaledSize: new google.maps.Size(20, 32)
		}
	});
	const trainInfo = new google.maps.InfoWindow({
		content: "Gare de Pontanevaux la Chapelle"
	});
	trainMarker.addListener("click", () => {
		trainInfo.open(map, trainMarker);
	});

	// Castle
	const castleMarker = new google.maps.Marker({
		zIndex: 10,
		position: { lat: 46.215985, lng: 4.772734 },
		map: map,
		icon: {
			url: "assets/castle.png",
			scaledSize: new google.maps.Size(20, 32)
		}
	});
	const castleInfo = new google.maps.InfoWindow({
		content: "Chateau de Beauchamp"
	});
	castleMarker.addListener("click", () => {
		castleInfo.open(map, castleMarker);
	});
}

initMap();
