"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "city_locations",
      [
        {
          query: "split",
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
                {
                  id: "poi:8131",
                  level: "poi",
                  rating: 0.26581276925196,
                  rating_local: 1.3290638462598001,
                  quadkey: "120232133013002011302",
                  location: {
                    lat: 43.5080357,
                    lng: 16.440448
                  },
                  bounding_box: {
                    south: 43.5079064,
                    west: 16.4401638,
                    north: 43.5081629,
                    east: 16.4407268
                  },
                  name: "Cathedral of Saint Domnius",
                  name_suffix: "Split, Croatia, Croatia",
                  original_name: "Katedrala svetog Duje",
                  url: "https://go.sygic.com/travel/place?id=poi:8131",
                  duration: 3600,
                  marker: "other:place_of_worship",
                  categories: ["sightseeing"],
                  parent_ids: [
                    "poi:8267",
                    "city:48",
                    "region:23596",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "The Cathedral of Saint Domnius, known locally as the Sveti Dujam or colloquially Sveti Duje, is the Catholic cathedral in  Split, Croatia.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:8131"
                },
                {
                  id: "poi:8267",
                  level: "poi",
                  rating: 0.48110566537465,
                  rating_local: 2.40552832687325,
                  quadkey: "120232133013002011031",
                  location: {
                    lat: 43.5083587,
                    lng: 16.4401831
                  },
                  bounding_box: {
                    south: 43.5071294,
                    west: 16.4387766,
                    north: 43.5095533,
                    east: 16.4416993
                  },
                  name: "Diocletian's Palace",
                  name_suffix: "Split, Croatia, Croatia",
                  original_name: "Dioklecijanova palača",
                  url: "https://go.sygic.com/travel/place?id=poi:8267",
                  duration: 1800,
                  marker: "sightseeing:archaeological_site",
                  categories: ["sightseeing", "discovering"],
                  parent_ids: [
                    "city:48",
                    "region:23596",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "Diocletian's Palace is an ancient palace built for the Roman emperor Diocletian at the turn of the fourth century AD, which today forms…",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:8267"
                },
                {
                  id: "poi:51072",
                  level: "poi",
                  rating: 0.10719648974428,
                  rating_local: 0.5359824487214,
                  quadkey: "120232133001213102312",
                  location: {
                    lat: 43.538946,
                    lng: 16.2993948
                  },
                  bounding_box: {
                    south: 43.5306823,
                    west: 16.2843027,
                    north: 43.5486821,
                    east: 16.3149357
                  },
                  name: "Split Airport",
                  name_suffix: "Split-Dalmatia County, Croatia",
                  original_name: "Zračna luka Split (SPU)",
                  url: "https://go.sygic.com/travel/place?id=poi:51072",
                  duration: 1800,
                  marker: "traveling:airport:terminal",
                  categories: ["traveling"],
                  parent_ids: ["region:23596", "country:27", "continent:1"],
                  perex:
                    "Split Airport, also known as Resnik Airport, is the international airport serving the city of Split, Croatia.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:51072"
                },
                {
                  id: "poi:56629",
                  level: "poi",
                  rating: 0.077638007495943,
                  rating_local: 0.38819003747971503,
                  quadkey: "120232133013002122312",
                  location: {
                    lat: 43.505079,
                    lng: 16.442156
                  },
                  bounding_box: null,
                  name: "Port of Split",
                  name_suffix: "Split, Croatia, Croatia",
                  original_name: "Luka Split",
                  url: "https://go.sygic.com/travel/place?id=poi:56629",
                  duration: 900,
                  marker: "traveling",
                  categories: ["traveling"],
                  parent_ids: [
                    "city:48",
                    "region:23596",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "The Port of Split is a port in the central Dalmatian city of  Split, Croatia.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:56629"
                },
                {
                  id: "poi:15065797",
                  level: "poi",
                  rating: 0.055285669860644,
                  rating_local: 0.27642834930322,
                  quadkey: "120232133013002301001",
                  location: {
                    lat: 43.5046498,
                    lng: 16.4427549
                  },
                  bounding_box: {
                    south: 43.5044361,
                    west: 16.4425683,
                    north: 43.5048664,
                    east: 16.4429438
                  },
                  name: "Split",
                  name_suffix: "Split, Croatia, Croatia",
                  original_name: "Split",
                  url: "https://go.sygic.com/travel/place?id=poi:15065797",
                  duration: 900,
                  marker: "traveling:station:train",
                  categories: ["traveling"],
                  parent_ids: [
                    "city:48",
                    "region:23596",
                    "country:27",
                    "continent:1"
                  ],
                  perex: null,
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:15065797"
                }
              ]
            },
            server_timestamp: "2019-08-24T18:29:49+00:00"
          }),
          poi: 8131,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          query: "dubrovnik",
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
                {
                  id: "poi:2796",
                  level: "poi",
                  rating: 0.51372619394843,
                  rating_local: 2.56863096974215,
                  quadkey: "120233201330202011221",
                  location: {
                    lat: 42.6411621,
                    lng: 18.1098539
                  },
                  bounding_box: {
                    south: 42.6387763,
                    west: 18.1041244,
                    north: 42.6431373,
                    east: 18.1135044
                  },
                  name: "Walls of Dubrovnik",
                  name_suffix: "Dubrovnik, Croatia",
                  original_name: "Dubrovačke gradske zidine",
                  url: "https://go.sygic.com/travel/place?id=poi:2796",
                  duration: 1800,
                  marker: "hiking:viewpoint",
                  categories: [
                    "hiking",
                    "sightseeing",
                    "discovering",
                    "playing"
                  ],
                  parent_ids: [
                    "city:49",
                    "region:23503",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "An absolute must-see if you're around Dubrovnik. These walls are the perfect example of a fortification system, as they protected the city…",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:2796"
                },
                {
                  id: "poi:2795",
                  level: "poi",
                  rating: 0.41684663424838,
                  rating_local: 2.0842331712419,
                  quadkey: "120233201330202012012",
                  location: {
                    lat: 42.640782,
                    lng: 18.1086498
                  },
                  bounding_box: null,
                  name: "Old Town Dubrovnik",
                  name_suffix: "Dubrovnik, Croatia",
                  original_name: "Stari grad Dubrovnik",
                  url: "https://go.sygic.com/travel/place?id=poi:2795",
                  duration: 10800,
                  marker: "sightseeing",
                  categories: ["sightseeing", "discovering"],
                  parent_ids: [
                    "city:49",
                    "region:23503",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "The heart of the “Pearl of the Adriatic” and one of the most beautiful and interesting parts of Dubrovnik.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:2795"
                },
                {
                  id: "poi:2828",
                  level: "poi",
                  rating: 0.3164611913916,
                  rating_local: 1.582305956958,
                  quadkey: "120233201330200320320",
                  location: {
                    lat: 42.64326,
                    lng: 18.111818
                  },
                  bounding_box: null,
                  name: "Dubrovnik Cable Car",
                  name_suffix: "Dubrovnik, Croatia",
                  original_name: "Žičara Dubrovnik",
                  url: "https://go.sygic.com/travel/place?id=poi:2828",
                  duration: 7200,
                  marker: "going_out",
                  categories: ["sightseeing", "traveling"],
                  parent_ids: [
                    "city:49",
                    "region:23503",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "Ascend to the top of the Old City and enjoy the majestic view of the islands and mountains or visit the Homeland War Museum.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:2828"
                },
                {
                  id: "poi:51066",
                  level: "poi",
                  rating: 0.2135809571423,
                  rating_local: 1.0679047857115,
                  quadkey: "120233201333332101120",
                  location: {
                    lat: 42.5608727,
                    lng: 18.2669534
                  },
                  bounding_box: {
                    south: 42.5514449,
                    west: 18.2453272,
                    north: 42.5715257,
                    east: 18.2866483
                  },
                  name: "Dubrovnik airport",
                  name_suffix: "Dubrovnik-Neretva County, Croatia",
                  original_name: "Zračna luka Dubrovnik",
                  url: "https://go.sygic.com/travel/place?id=poi:51066",
                  duration: 1800,
                  marker: "traveling:airport:terminal",
                  categories: ["traveling"],
                  parent_ids: [
                    "region:23503",
                    "country:27",
                    "poi:36973594",
                    "continent:1"
                  ],
                  perex:
                    "Dubrovnik Airport, also referred to as Čilipi Airport, is the international airport of Dubrovnik, Croatia.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:51066"
                },
                {
                  id: "poi:2849",
                  level: "poi",
                  rating: 0.19919147230656,
                  rating_local: 0.9959573615328,
                  quadkey: "120233201330202102001",
                  location: {
                    lat: 42.6409675,
                    lng: 18.1112945
                  },
                  bounding_box: null,
                  name: "Old Port Dubrovnik",
                  name_suffix: "Dubrovnik, Croatia",
                  original_name: "Gradska luka",
                  url: "https://go.sygic.com/travel/place?id=poi:2849",
                  duration: 1800,
                  marker: "sightseeing",
                  categories: ["sightseeing", "traveling"],
                  parent_ids: [
                    "city:49",
                    "region:23503",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "What once used to be a glorious harbor and a guarantee of Dubrovnik's prosperity is now a local port with small boats.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:2849"
                }
              ]
            },
            server_timestamp: "2019-08-24T19:17:18+00:00"
          }),
          poi: 2796,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          query: "zadar",
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
                {
                  id: "poi:5807685",
                  level: "poi",
                  rating: 0.11596502531032,
                  rating_local: 0.5798251265516,
                  quadkey: "120232103323201130222",
                  location: {
                    lat: 44.1161936,
                    lng: 15.2244573
                  },
                  bounding_box: {
                    south: 44.1159876,
                    west: 15.2241545,
                    north: 44.116418,
                    east: 15.2247321
                  },
                  name: "Cathedral of Saint Anastasia",
                  name_suffix: "Zadar, Croatia",
                  original_name: "Katedrala svete Stošije",
                  url: "https://go.sygic.com/travel/place?id=poi:5807685",
                  duration: 1800,
                  marker: "other:place_of_worship:church:cathedral",
                  categories: ["sightseeing"],
                  parent_ids: [
                    "city:47",
                    "region:23637",
                    "country:27",
                    "continent:1"
                  ],
                  perex: null,
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:5807685"
                },
                {
                  id: "poi:51076",
                  level: "poi",
                  rating: 0.061445332956179,
                  rating_local: 0.307226664780895,
                  quadkey: "120232103332303220323",
                  location: {
                    lat: 44.1043797,
                    lng: 15.3488416
                  },
                  bounding_box: {
                    south: 44.0771433,
                    west: 15.3263806,
                    north: 44.1232016,
                    east: 15.3624689
                  },
                  name: "Zadar Airport",
                  name_suffix: "Zadar County, Croatia",
                  original_name: "Zračna luka Zadar (ZAD)",
                  url: "https://go.sygic.com/travel/place?id=poi:51076",
                  duration: 1800,
                  marker: "traveling:airport:international",
                  categories: ["traveling"],
                  parent_ids: [
                    "region:23637",
                    "country:27",
                    "poi:36973594",
                    "continent:1"
                  ],
                  perex:
                    "Zadar Airport is an international airport serving Zadar, Croatia. It is located in Zemunik Donji, 8 km from the centre of Zadar.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:51076"
                },
                {
                  id: "poi:12622852",
                  level: "poi",
                  rating: 0.056244699960979,
                  rating_local: 0.281223499804895,
                  quadkey: "120232103323000322122",
                  location: {
                    lat: 44.1433742,
                    lng: 15.2113318
                  },
                  bounding_box: null,
                  name: "Zadar",
                  name_suffix: "Zadar, Croatia",
                  original_name: "Zadar",
                  url: "https://go.sygic.com/travel/place?id=poi:12622852",
                  duration: 3600,
                  marker: "other:information:board:map",
                  categories: ["traveling"],
                  parent_ids: [
                    "city:47",
                    "region:23637",
                    "country:27",
                    "continent:1"
                  ],
                  perex: null,
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url: null
                },
                {
                  id: "poi:27440877",
                  level: "poi",
                  rating: 0.01146864548495,
                  rating_local: 0.057343227424749996,
                  quadkey: "120232103323210200320",
                  location: {
                    lat: 44.1144257,
                    lng: 15.2277795
                  },
                  bounding_box: {
                    south: 44.1142834,
                    west: 15.2275655,
                    north: 44.1145571,
                    east: 15.2279835
                  },
                  name: "Zadar",
                  name_suffix: "Zadar, Croatia",
                  original_name: "Grad Zadar",
                  url: "https://go.sygic.com/travel/place?id=poi:27440877",
                  duration: 900,
                  marker: "sightseeing:town_hall:city_hall",
                  categories: [],
                  parent_ids: [
                    "city:47",
                    "region:23637",
                    "country:27",
                    "continent:1"
                  ],
                  perex:
                    "Zadar is the oldest continuously-inhabited Croatian city. It is situated on the Adriatic Sea, at the northwestern part of Ravni Kotari…",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url:
                    "https://media-cdn.sygictraveldata.com/media/poi:27440877"
                },
                {
                  id: "poi:6031428",
                  level: "poi",
                  rating: 0.0062225716020811,
                  rating_local: 0.0311128580104055,
                  quadkey: "120232103323201013323",
                  location: {
                    lat: 44.1172141,
                    lng: 15.2210791
                  },
                  bounding_box: {
                    south: 44.1170617,
                    west: 15.2208621,
                    north: 44.1173534,
                    east: 15.2212873
                  },
                  name: "Zadar County",
                  name_suffix: "Zadar, Croatia",
                  original_name: "Zadarska županija",
                  url: "https://go.sygic.com/travel/place?id=poi:6031428",
                  duration: 3600,
                  marker: "other:office:governmental",
                  categories: [],
                  parent_ids: [
                    "city:47",
                    "region:23637",
                    "country:27",
                    "poi:36973594",
                    "continent:1"
                  ],
                  perex:
                    "Zadar County is a county in Croatia, it encompasses northern Dalmatia and southeastern Lika. Its center is the city of Zadar.",
                  customer_rating: null,
                  star_rating: null,
                  star_rating_unofficial: null,
                  thumbnail_url: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:20:05+00:00"
          }),
          poi: 5807685,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("city_locations", null, {});
  }
};
