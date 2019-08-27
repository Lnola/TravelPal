"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "locations",
      [
        {
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
                    "https://media-cdn.sygictraveldata.com/media/poi:5807685",
                  tags: [
                    {
                      key: "Cathedral",
                      name: "Cathedral"
                    },
                    {
                      key: "Wheelchair Accessible",
                      name: "Wheelchair Accessible"
                    },
                    {
                      key: "Christian",
                      name: "Christian"
                    },
                    {
                      key: "Place of Worship",
                      name: "Place of Worship"
                    },
                    {
                      key: "Catholic",
                      name: "Catholic"
                    },
                    {
                      key: "Hidden Gem",
                      name: "Hidden Gem"
                    }
                  ],
                  area: 1003,
                  address: "2 Trg svete Stošije, Zadar 23000, Croatia",
                  address_is_approximated: true,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: null,
                  description: null,
                  opening_hours_raw: null,
                  media_count: 3,
                  main_media: {
                    usage: {
                      square: "m:38311779",
                      video_preview: null,
                      portrait: "m:38311779",
                      landscape: "m:115652673"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 2048,
                          height: 3072
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383338333131373739",
                        created_at: "2017-06-10T09:43:51+0000",
                        source: {
                          provider: "user_upload",
                          name: null,
                          external_id: null
                        },
                        type: "photo",
                        created_by: "587be3be6a0de",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383338333131373739.jpg",
                        quadkey: null,
                        attribution: {
                          title_url: null,
                          license: "CC-BY-SA",
                          other: null,
                          author_url: null,
                          author: "Németh Antal",
                          title: null,
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/4.0/"
                        },
                        location: null,
                        id: "m:38311779"
                      },
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2304
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d38313135363532363733",
                        created_at: "2019-04-14T18:02:47+0000",
                        source: {
                          provider: "user_upload",
                          name: null,
                          external_id: null
                        },
                        type: "photo",
                        created_by: "5c690968b6b70",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d38313135363532363733.jpg",
                        quadkey: null,
                        attribution: {
                          title_url: null,
                          license: "CC-BY-SA",
                          other: null,
                          author_url: null,
                          author: "Isabelle Delval",
                          title: "Cathedral of Saint Anastasia",
                          license_url:
                            "http://creativecommons.org/licenses/by/4.0/"
                        },
                        location: null,
                        id: "m:115652673"
                      }
                    ]
                  },
                  references: [],
                  external_ids: [
                    {
                      id: "way:146453824",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:23:08+00:00"
          }),
          poi: 5807685,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:51076",
                  tags: [
                    {
                      key: "Airport",
                      name: "Airport"
                    },
                    {
                      key: "International Airport",
                      name: "International Airport"
                    }
                  ],
                  area: 3751141,
                  address: "23222, Croatia",
                  address_is_approximated: true,
                  admission: null,
                  email: "",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "",
                  description: {
                    text:
                      "Zadar Airport is an international airport serving Zadar, Croatia. It is located in Zemunik Donji, 8 km from the centre of Zadar.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Zadar_Airport",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 1,
                  main_media: {
                    usage: {
                      square: "m:5693018",
                      video_preview: null,
                      portrait: "m:5693018",
                      landscape: "m:5693018"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2304
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3835363933303138",
                        created_at: "2015-08-24T11:35:39+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "53d8a9428f8ff",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3835363933303138.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Zadar_airport_terminal_croatia.JPG",
                          license: "Public domain",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:(aeropagitica)",
                          author: "(aeropagitica)",
                          title:
                            "Zadar Airport terminal building, as seen from airside.",
                          license_url: null
                        },
                        location: null,
                        id: "m:5693018"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1564767,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Zadar_Airport",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 1441946,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "https://www.zadar-airport.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 14542379,
                      title: "About Zadar",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Zadar",
                      supplier: "wikivoyage",
                      priority: 503,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    },
                    {
                      id: 1302735,
                      title: "Car Rentals - Zadar Airport",
                      type: "rent:car",
                      language_id: null,
                      url:
                        "http://www.rentalcars.com/AirportLandingPage.do?countryCode=hr&iata=zad&affiliateCode=tripomatic_apps&preflang=en&adcamp=References",
                      supplier: null,
                      priority: 1000,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "en:Zadar Airport",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "LDZD",
                      type: "icao",
                      language_id: null
                    },
                    {
                      id: "ZAD",
                      type: "iata",
                      language_id: null
                    },
                    {
                      id: "way:372828272",
                      type: "osm",
                      language_id: null
                    },
                    {
                      id: "Q155359",
                      type: "wikidata",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:24:25+00:00"
          }),
          poi: 51076,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                  thumbnail_url: null,
                  tags: [
                    {
                      key: "Tourist Information",
                      name: "Tourist Information"
                    },
                    {
                      key: "Tourist Information Map",
                      name: "Tourist Information Map"
                    }
                  ],
                  area: 0,
                  address: "45 Krešimirova obala, Zadar 23000, Croatia",
                  address_is_approximated: true,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: null,
                  description: null,
                  opening_hours_raw: null,
                  media_count: 0,
                  main_media: null,
                  references: [],
                  external_ids: [
                    {
                      id: "node:3697755752",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:26:24+00:00"
          }),
          poi: 12622852,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:27440877",
                  tags: [
                    {
                      key: "Town Hall",
                      name: "Town Hall"
                    }
                  ],
                  area: 472,
                  address: "Narodni trg 1, 23000 Zadar",
                  address_is_approximated: false,
                  admission: null,
                  email: "ured.grada@grad-zadar.hr",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 23 208 100",
                  description: {
                    text:
                      "Zadar is the oldest continuously-inhabited Croatian city. It is situated on the Adriatic Sea, at the northwestern part of Ravni Kotari region. Zadar serves as the seat of Zadar County and of the wider northern Dalmatian region. The city proper covers 25 km2 with a population of 75,082 in 2011, making it the second-largest city of the region of Dalmatia and the fifth-largest city in the country.\n\nThe area of present-day Zadar traces its earliest evidence of human life from the late Stone Age, while numerous settlements date as early as the Neolithic. Before the Illyrians, an ancient Mediterranean people of a pre-Indo-European culture inhabited the area. Zadar traces its origin to its 9th-century BC founding as a settlement of the Illyrian tribe of Liburnians known as Iader. ",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Zadar",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 13,
                  main_media: {
                    usage: {
                      square: "m:111577531",
                      video_preview: null,
                      portrait: "m:111577529",
                      landscape: "m:111577531"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 1600,
                          height: 1200
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d38313131353737353331",
                        created_at: "2019-03-13T03:58:17+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: null,
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d38313131353737353331.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Cibona_vs_Zadar_05062010.JPG",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Ex13",
                          author: "Ex13",
                          title: "KK Cibona vs. KK Zadar 05/06/2010",
                          license_url:
                            "https://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:111577531"
                      },
                      {
                        original: {
                          size: null,
                          width: 1125,
                          height: 3000
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d38313131353737353239",
                        created_at: "2019-03-13T03:58:15+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: null,
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d38313131353737353239.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Maraschino_Maraska_Bottle.jpg",
                          license: "CC BY-SA 2.5",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:AlMare",
                          author: "AlMare",
                          title: "See title",
                          license_url:
                            "https://creativecommons.org/licenses/by-sa/2.5"
                        },
                        location: null,
                        id: "m:111577529"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 14109219,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Zadar",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 9161839,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "http://www.grad-zadar.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 14636670,
                      title: "About Dalmatia",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Dalmatia",
                      supplier: "wikivoyage",
                      priority: 501,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    },
                    {
                      id: 14636230,
                      title: "About Northern Dalmatia",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Northern_Dalmatia",
                      supplier: "wikivoyage",
                      priority: 501,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    },
                    {
                      id: 14636216,
                      title: "About Croatia",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Croatia",
                      supplier: "wikivoyage",
                      priority: 508,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    },
                    {
                      id: 14215753,
                      title: "About Zadar",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Zadar",
                      supplier: "wikivoyage",
                      priority: 503,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q3370",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "en:Zadar",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "way:603361320",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:27:19+00:00"
          }),
          poi: 27440877,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                  thumbnail_url: null,
                  tags: [
                    {
                      key: "Office",
                      name: "Office"
                    },
                    {
                      key: "Government Office",
                      name: "Government Office"
                    }
                  ],
                  area: 581,
                  address: "Ulica Božidara Petranovića 8, 23000 Zadar",
                  address_is_approximated: false,
                  admission: null,
                  email: "zupanija@zadarska-zupanija.hr",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 23 350 401",
                  description: {
                    text:
                      "Zadar County is a county in Croatia, it encompasses northern Dalmatia and southeastern Lika. Its center is the city of Zadar.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Zadar_County",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 0,
                  main_media: null,
                  references: [
                    {
                      id: 14493223,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Zadar_County",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 8341696,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "https://www.zadarska-zupanija.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q58146",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "en:Zadar County",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "way:173172515",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:28:31+00:00"
          }),
          poi: 6031428,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                  thumbnail_url: null,
                  tags: [
                    {
                      key: "Office",
                      name: "Office"
                    },
                    {
                      key: "Government Office",
                      name: "Government Office"
                    }
                  ],
                  area: 581,
                  address: "Ulica Božidara Petranovića 8, 23000 Zadar",
                  address_is_approximated: false,
                  admission: null,
                  email: "zupanija@zadarska-zupanija.hr",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 23 350 401",
                  description: {
                    text:
                      "Zadar County is a county in Croatia, it encompasses northern Dalmatia and southeastern Lika. Its center is the city of Zadar.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Zadar_County",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 0,
                  main_media: null,
                  references: [
                    {
                      id: 14493223,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Zadar_County",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 8341696,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "https://www.zadarska-zupanija.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q58146",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "en:Zadar County",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "way:173172515",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:28:31+00:00"
          }),
          poi: 2796,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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
                    "https://media-cdn.sygictraveldata.com/media/poi:2796",
                  tags: [
                    {
                      key: "Heritage",
                      name: "Heritage"
                    },
                    {
                      key: "Coastal Views",
                      name: "Coastal Views"
                    },
                    {
                      key: "Family Friendly",
                      name: "Family Friendly"
                    },
                    {
                      key: "UNESCO",
                      name: "UNESCO"
                    },
                    {
                      key: "View Point",
                      name: "View Point"
                    },
                    {
                      key: "Game of Thrones",
                      name: "Game of Thrones"
                    },
                    {
                      key: "Editor's Choice",
                      name: "Editor's Choice"
                    }
                  ],
                  area: 6655,
                  address: "8 Placa - Stradun, Dubrovnik 20000, Croatia",
                  address_is_approximated: true,
                  admission:
                    "Adults: 150 HRK\nChildren (5 - 18): 50 HRK\nChildren (under 5): free",
                  email: "info@citywallsdubrovnik.hr",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 20 638 800",
                  description: {
                    text:
                      "An absolute must-see if you're around Dubrovnik. These walls are the perfect example of a fortification system, as they protected the city during the Middle Ages from every single attack that took place here.\n\nThe most productive phase of construction took place between the 12th and the 17th century, but the walls have been existent since the 8th century. They did their job, which was proven after a 15-month long invasion by the Saracens that the city withstood with no problems.\n\nThe walk usually takes about two hours, but if you're a photographer, prepare to spend more time here. The incredible view of both the city and the sea should be enjoyed thoroughly and without rushing. This place is guaranteed to provide you with some of the best vacation photos you can show off to your friends.\n\nThere's quite a few stairs here, so bear that in mind when planning a trip to this location. If you come here during summer, bring a lot of water and a protection from the sunlight, because it gets pretty intense. Do not throw away the receipt confirming that you have paid your ticket, because you will be asked to show it about halfway through the trip.",
                    provider: null,
                    translation_provider: null,
                    link: null,
                    is_translated: true
                  },
                  opening_hours_raw:
                    "Apr-May: Mo-Su 8:00-18:30; Jun-Jul: Mo-Su 8:00-19:30; Aug-Sep: Mo-Su 8:00-18:30; Oct: Mo-Su 8:00-17:30; Nov-Mar: Mo-Su 10:00-15:00",
                  media_count: 12,
                  main_media: {
                    usage: {
                      square: "m:35957368",
                      video_preview: null,
                      portrait: "m:35957368",
                      landscape: "m:35957368"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2035
                        },
                        suitability: ["landscape", "portrait", "square"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383335393537333638",
                        created_at: "2017-03-29T09:19:50+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "56d6fc0c75fd4",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383335393537333638.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:R0000598_Dubrovnik_Stadtmauer.jpg",
                          license: "CC BY-SA 4.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Harlekess",
                          author: "Harlekess",
                          title:
                            "Stadtmauer von Dubrovnik von der Festung Lovrijenac aus gesehen",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/4.0"
                        },
                        location: null,
                        id: "m:35957368"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1474267,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Walls_of_Dubrovnik",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 5000,
                      title: "Official website",
                      type: "link:official",
                      language_id: null,
                      url: "https://www.wallsofdubrovnik.com/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q931733",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "relation:2294262",
                      type: "osm",
                      language_id: null
                    },
                    {
                      id: "en:Walls of Dubrovnik",
                      type: "wikipedia",
                      language_id: "en"
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:30:26+00:00"
          }),
          poi: 2795,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:2795",
                  tags: [
                    {
                      key: "UNESCO",
                      name: "UNESCO"
                    },
                    {
                      key: "Filming Location",
                      name: "Filming Location"
                    },
                    {
                      key: "Game of Thrones",
                      name: "Game of Thrones"
                    },
                    {
                      key: "Historical District",
                      name: "Historical District"
                    }
                  ],
                  area: 0,
                  address: "10 Od Puča, Dubrovnik 20000, Croatia",
                  address_is_approximated: true,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: null,
                  description: {
                    text:
                      "The heart of the “Pearl of the Adriatic” and one of the most beautiful and interesting parts of Dubrovnik. Even though the Old Town was severely damaged during the 1990's as a result of being under siege after the break-up of Yugoslavia, it did not lose its charm and it is currently under a massive restoration programme to regain its original form.\n\nAlthough this place is known for its narrow, romantic streets and the authentic and mystic atmosphere that undoubtedly catches everyone's attention, it gained most of its popularity in the recent years thanks to being chosen as a filming location for some parts of the famous TV series, Game of Thrones. \n\nThis place does not lose its charm during any time of the day. When the sun goes down, you can enjoy a variety of musical and theatrical street performances and walk among not only tourists but locals seeking fun as well.\n\nDue to its small size, you will have no problems sightseeing it on foot, but you should be prepared for steep alleyways and lots of stairs around the whole area.",
                    provider: null,
                    translation_provider: null,
                    link: null,
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 8,
                  main_media: {
                    usage: {
                      square: "m:4628636",
                      video_preview: null,
                      portrait: "m:36415230",
                      landscape: "m:4628636"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2048
                        },
                        suitability: ["square"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3834363238363336",
                        created_at: "2015-07-20T09:37:11+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "54fd9daac276a",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3834363238363336.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Dubrovnik_IMG_9667.JPG",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Bjoertvedt",
                          author: "Bjoertvedt",
                          title:
                            "Old town of Dubrovnik, at the adriatic coast of southeastern Croatia.",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:4628636"
                      },
                      {
                        original: {
                          size: null,
                          width: 2048,
                          height: 3072
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383336343135323330",
                        created_at: "2017-04-10T07:51:12+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "58a0b7854273c",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383336343135323330.jpg",
                        quadkey: "122311302321023210",
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Side_street_Old_Town_Dubrovnik_(4058864298).jpg",
                          license: "CC BY 2.0",
                          other: null,
                          author_url:
                            "http://www.flickr.com/people/37804979@N00",
                          author: "Tony Hisgett",
                          title: "Side street Old Town Dubrovnik",
                          license_url:
                            "http://creativecommons.org/licenses/by/2.0"
                        },
                        location: {
                          lat: 18.108354,
                          lng: 42.641462
                        },
                        id: "m:36415230"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 4997,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: null,
                      url: "http://en.wikipedia.org/wiki/Dubrovnik#Heritage",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 4998,
                      title: "UNESCO website",
                      type: "link:info",
                      language_id: null,
                      url: "http://whc.unesco.org/en/list/95",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:31:18+00:00"
          }),
          poi: 2828,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:2828",
                  tags: [],
                  area: 0,
                  address: "Petra Krešimira 4. bb,\n20000 Dubrovnik",
                  address_is_approximated: false,
                  admission:
                    "Adult round-trip ticket\t150 KN\nAdult one-way ticket\t85 KN\nChild round-trip ticket (4 - 12 years)\t60 KN\nChild* one-way ticket (4 - 12 years)\t40 KN",
                  email: "info@dubrovnikcablecar.com",
                  opening_hours:
                    "Jun, Jul, Aug: 9 am - midnight\nSeptember: 9 am - 10 pm\nMay: 9 am - 9 pm\nApr, Oct:\t9 am - 8 pm\nFeb, Mar, Nov: 9 am - 5 pm\nJan, Dec: 9 am - 4 pm",
                  is_deleted: false,
                  phone: "+385 20 414 321",
                  description: {
                    text:
                      "Ascend to the top of the Old City and enjoy the majestic view of the islands and mountains or visit the Homeland War Museum.",
                    provider: null,
                    translation_provider: null,
                    link: null,
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 4,
                  main_media: {
                    usage: {
                      square: "m:7753455",
                      video_preview: null,
                      portrait: "m:7753455",
                      landscape: "m:5858283"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 1280,
                          height: 1920
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3837373533343535",
                        created_at: "2015-10-25T20:56:32+0000",
                        source: {
                          provider: "user_upload",
                          name: null,
                          external_id: null
                        },
                        type: "photo",
                        created_by: "5226adc6f2645",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3837373533343535.jpg",
                        quadkey: null,
                        attribution: {
                          title_url: null,
                          license: "CC-BY-SA",
                          other: null,
                          author_url: null,
                          author: "Charmaine Wong",
                          title: "Dubrovnik Cable Car",
                          license_url:
                            "http://creativecommons.org/licenses/by/4.0/"
                        },
                        location: null,
                        id: "m:7753455"
                      },
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2048
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3835383538323833",
                        created_at: "2015-09-03T10:45:37+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "55c07bdc059f1",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3835383538323833.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:%C5%BDi%C4%8Dara_ekskluziva.JPG",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Bracodbk",
                          author: "Bracodbk",
                          title: "Cable car Srđ - Dubrovnik",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:5858283"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 5038,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: null,
                      url:
                        "http://hr.wikipedia.org/wiki/%C5%BDi%C4%8Dara_Sr%C4%91",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 5037,
                      title: "Official website",
                      type: "link:official",
                      language_id: null,
                      url: "http://www.dubrovnikcablecar.com",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q10562417",
                      type: "wikidata",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:31:58+00:00"
          }),
          poi: 51066,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:51066",
                  tags: [
                    {
                      key: "Airport",
                      name: "Airport"
                    },
                    {
                      key: "Airport Terminal",
                      name: "Airport Terminal"
                    },
                    {
                      key: "International Airport",
                      name: "International Airport"
                    },
                    {
                      key: "Wi-Fi",
                      name: "Wi-Fi"
                    }
                  ],
                  area: 1930349,
                  address:
                    "Dubrovnik Airport\r\nČilipi\r\nKonavle\r\nDubrovnik\r\nCroatia",
                  address_is_approximated: false,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 20 773 100",
                  description: {
                    text:
                      "Dubrovnik Airport, also referred to as Čilipi Airport, is the international airport of Dubrovnik, Croatia. The airport is located approximately 15.5 km from Dubrovnik city centre, near Čilipi. It was the third-busiest airport in Croatia in 2017 after Zagreb Airport and Split Airport in terms of passenger throughput. It also has the country's longest runway, allowing it to accommodate heavy long-haul aircraft. The airport is a major destination for leisure flights during the European summer holiday season.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Dubrovnik_Airport",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 3,
                  main_media: {
                    usage: {
                      square: "m:11850838",
                      video_preview: null,
                      portrait: "m:11850839",
                      landscape: "m:11850838"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2304
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383131383530383338",
                        created_at: "2016-01-02T18:31:09+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "55d1c78a734cb",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383131383530383338.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:DBVairportterminal.jpg",
                          license: "CC0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Wingtip",
                          author: "Wingtip",
                          title:
                            "Terminal of the Dubrovnik International Airport (DBV), Croatia. The Picture is taken from the area before the airport.",
                          license_url:
                            "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
                        },
                        location: null,
                        id: "m:11850838"
                      },
                      {
                        original: {
                          size: null,
                          width: 2304,
                          height: 3072
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383131383530383339",
                        created_at: "2016-01-02T18:31:52+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "55d1c78a734cb",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383131383530383339.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:DBVtower.jpg",
                          license: "CC0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Wingtip",
                          author: "Wingtip",
                          title:
                            "Tower of the Dubrovnik Airport (DBV), Croatia.",
                          license_url:
                            "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
                        },
                        location: null,
                        id: "m:11850839"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1566755,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Dubrovnik_Airport",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 14503217,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "https://www.airport-dubrovnik.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 14540067,
                      title: "About Dubrovnik",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Dubrovnik",
                      supplier: "wikivoyage",
                      priority: 508,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    },
                    {
                      id: 72607,
                      title: "Airport-dubrovnik",
                      type: "link:info",
                      language_id: null,
                      url: "http://www.airport-dubrovnik.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "Q1147000",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "way:171204794",
                      type: "osm",
                      language_id: null
                    },
                    {
                      id: "en:Dubrovnik Airport",
                      type: "wikipedia",
                      language_id: "en"
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:32:41+00:00"
          }),
          poi: 2849,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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
                    "https://media-cdn.sygictraveldata.com/media/poi:8131",
                  tags: [
                    {
                      key: "Christian",
                      name: "Christian"
                    },
                    {
                      key: "Catholic",
                      name: "Catholic"
                    },
                    {
                      key: "Place of Worship",
                      name: "Place of Worship"
                    },
                    {
                      key: "Editor's Choice",
                      name: "Editor's Choice"
                    }
                  ],
                  area: 737,
                  address: "Kraj Sv. Duje 5, \nSplit, Croatia",
                  address_is_approximated: false,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: "",
                  description: {
                    text:
                      "The Cathedral of Saint Domnius, known locally as the Sveti Dujam or colloquially Sveti Duje, is the Catholic cathedral in  Split, Croatia.  The cathedral is the seat of the Archdiocese of Split-Makarska, headed by Archbishop Marin Barišić.  The Cathedral of St. Domnius is a complex of a church, formed from an Imperial Roman mausoleum, with a bell tower; strictly the church is dedicated to the Virgin Mary, and the bell tower to Saint Domnius. Together they form the Cathedral of St. Domnius.\n\nThe Cathedral of Saint Domnius, consecrated at the turn of the 7th century AD, is regarded as the oldest Catholic cathedral in the world that remains in use in its original structure, without near-complete renovation at a later date. The structure itself, built in AD 305 as the Mausoleum of Diocletian, is the second oldest structure used by any Christian Cathedral.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link:
                      "https://en.wikipedia.org/wiki/Cathedral_of_Saint_Domnius",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 2,
                  main_media: {
                    usage: {
                      square: "m:5798901",
                      video_preview: null,
                      portrait: "m:5798902",
                      landscape: "m:5798901"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 2592,
                          height: 1944
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3835373938393031",
                        created_at: "2015-08-29T21:28:13+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "55c07080986f8",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3835373938393031.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Split_-_old_city_(by_Pudelek).JPG",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Pudelek",
                          author: "Pudelek",
                          title: "Split, Croatia - old city. View from habour",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:5798901"
                      },
                      {
                        original: {
                          size: null,
                          width: 3072,
                          height: 2304
                        },
                        suitability: ["portrait"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3835373938393032",
                        created_at: "2015-08-29T21:28:34+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "55c07080986f8",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3835373938393032.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Turminneres_Kathedrale_Sveti_Duje_Split.jpg",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Stephan_Hense",
                          author: "Stephan Hense",
                          title:
                            "Inner View of the Tower of Saint Dmnius Cathedral in Split, Croatia",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:5798902"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1503866,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url:
                        "https://en.wikipedia.org/wiki/Cathedral_of_Saint_Domnius",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "en:Cathedral of Saint Domnius",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "Q1268475",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "way:272588434",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:35:01+00:00"
          }),
          poi: 8131,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:8267",
                  tags: [
                    {
                      key: "Heritage",
                      name: "Heritage"
                    },
                    {
                      key: "UNESCO",
                      name: "UNESCO"
                    },
                    {
                      key: "Archaeological Site",
                      name: "Archaeological Site"
                    },
                    {
                      key: "Game of Thrones",
                      name: "Game of Thrones"
                    },
                    {
                      key: "Filming Location",
                      name: "Filming Location"
                    },
                    {
                      key: "Editor's Choice",
                      name: "Editor's Choice"
                    }
                  ],
                  area: 33399,
                  address: "8 Krešimirova, Split 21000, Croatia",
                  address_is_approximated: true,
                  admission: "Free of charge.",
                  email: "",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "",
                  description: {
                    text:
                      "Diocletian's Palace is an ancient palace built for the Roman emperor Diocletian at the turn of the fourth century AD, which today forms about half the old town of Split, Croatia. While it is referred to as a \"palace\" because of its intended use as the retirement residence of Diocletian, the term can be misleading as the structure is massive and more resembles a large fortress: about half of it was for Diocletian's personal use, and the rest housed the military garrison.\n\nThe complex was built on a peninsula six kilometers southwest from Salona, the capital of Dalmatia. The terrain around Salona slopes gently seaward and is typical karst, consisting of low limestone ridges running east to west with marl in the clefts between them. Today the remains of the palace are part of the historic core of Split, which in 1979 was listed by UNESCO as a World Heritage Site.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Diocletian's_Palace",
                    is_translated: true
                  },
                  opening_hours_raw: "24/7",
                  media_count: 8,
                  main_media: {
                    usage: {
                      square: "m:72689",
                      video_preview: null,
                      portrait: "m:72689",
                      landscape: "m:72689"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 1705,
                          height: 1129
                        },
                        suitability: ["landscape", "portrait", "square"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383732363839",
                        created_at: "2015-03-17T16:04:06+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: null,
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383732363839.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "http://commons.wikimedia.org/wiki/File:Diocletian-palace.JPG",
                          license: "Public domain",
                          other: null,
                          author_url:
                            "http://en.wikipedia.org/wiki/User:Not_home",
                          author: "Not home",
                          title: "Diocletian's Palace viewed from the south",
                          license_url: null
                        },
                        location: null,
                        id: "m:72689"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 8434406,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Diocletian's_Palace",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 12194,
                      title: "Official website",
                      type: "link:official",
                      language_id: null,
                      url: "http://www.diocletianspalace.org/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 12193,
                      title: "More information on UNESCO's website",
                      type: "link:info",
                      language_id: null,
                      url: "http://whc.unesco.org/en/list/97",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "en:Diocletian's Palace",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "Q322287",
                      type: "wikidata",
                      language_id: null
                    },
                    {
                      id: "way:124205148",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:35:33+00:00"
          }),
          poi: 8267,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:51072",
                  tags: [
                    {
                      key: "Airport",
                      name: "Airport"
                    },
                    {
                      key: "Wheelchair Accessible",
                      name: "Wheelchair Accessible"
                    },
                    {
                      key: "International Airport",
                      name: "International Airport"
                    },
                    {
                      key: "Airport Terminal",
                      name: "Airport Terminal"
                    }
                  ],
                  area: 871014,
                  address: "Cesta dr. Franje Tuđmana 1270",
                  address_is_approximated: false,
                  admission: null,
                  email: "informacije@split-airport.hr",
                  opening_hours: null,
                  is_deleted: false,
                  phone: "+385 21 203555",
                  description: {
                    text:
                      "Split Airport, also known as Resnik Airport, is the international airport serving the city of Split, Croatia. It is located 19 km from Split, on the west side of Kaštela Bay, in the town of Kaštela, and extending into the adjacent town of Trogir.\n\nIn 2018 the airport was the second busiest in Croatia after Zagreb Airport handling around 3.12 million passengers. It is a major destination for leisure flights during the European summer holiday season and an important focus city for Croatia Airlines that offers flights to European cities such as Frankfurt, London and Paris.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Split_Airport",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 5,
                  main_media: {
                    usage: {
                      square: "m:17665805",
                      video_preview: null,
                      portrait: "m:17665805",
                      landscape: "m:17665805"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 1024,
                          height: 683
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383137363635383035",
                        created_at: "2016-04-04T06:33:12+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "4e71cb841f1cc",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383137363635383035.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:New_airport_ramp_-_lower_level,_Split_Airport.jpg",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Ballota",
                          author: "Ballota",
                          title:
                            "New airport ramp - lower level, Split Airport",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:17665805"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1564778,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Split_Airport",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 746193,
                      title: "Official Website",
                      type: "link:official",
                      language_id: null,
                      url: "http://www.split-airport.hr/",
                      supplier: null,
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    },
                    {
                      id: 14539756,
                      title: "About Split",
                      type: "guide",
                      language_id: "en",
                      url:
                        "https://guides.travel.sygic.com/production/en/Split",
                      supplier: "wikivoyage",
                      priority: 505,
                      currency: null,
                      price: null,
                      flags: ["destination_menu"]
                    }
                  ],
                  external_ids: [
                    {
                      id: "en:Split Airport",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "way:27361625",
                      type: "osm",
                      language_id: null
                    },
                    {
                      id: "SPU",
                      type: "iata",
                      language_id: null
                    },
                    {
                      id: "LDSP",
                      type: "icao",
                      language_id: null
                    },
                    {
                      id: "Q1125392",
                      type: "wikidata",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:36:13+00:00"
          }),
          poi: 51072,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:56629",
                  tags: [],
                  area: 0,
                  address: "7 Domagojeva obala, Split 21000, Croatia",
                  address_is_approximated: true,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: null,
                  description: {
                    text:
                      "The Port of Split is a port in the central Dalmatian city of  Split, Croatia. The port was originally a trading post originally established by Greek settlers from the island of Vis and subsequently taken over by the Romans. The port thrived through the Middle Ages, but it suffered a decline in the late 18th and early 19th centuries when the Port of Rijeka took over as the primary trading and shipping outlet of the region. The decline was also attributed to the decline of the Ottoman Empire, a traditional market for the Port of Split, and the growing domination of Austrian Empire.\n\nAs of 2017, the port ranks as the largest passenger port in Croatia, the largest passenger port in the Adriatic, and the 11th largest port in the Mediterranean, with annual passenger volume of approximately 5 million. By 2010, the Port of Split recorded 18,000 ship arrivals each year.",
                    provider: "wikipedia",
                    translation_provider: null,
                    link: "https://en.wikipedia.org/wiki/Port_of_Split",
                    is_translated: true
                  },
                  opening_hours_raw: null,
                  media_count: 2,
                  main_media: {
                    usage: {
                      square: "m:3807537",
                      video_preview: null,
                      portrait: "m:3807538",
                      landscape: "m:3807537"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 2592,
                          height: 1944
                        },
                        suitability: ["square", "landscape"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3833383037353337",
                        created_at: "2015-06-22T07:27:27+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "53d8a9428f8ff",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3833383037353337.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Luka-Split.jpg",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Macic7",
                          author: "Macic7",
                          title:
                            "Port of Split, Croatia with BlueLine ferry from Ancona.",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:3807537"
                      },
                      {
                        original: {
                          size: null,
                          width: 2048,
                          height: 1536
                        },
                        suitability: ["portrait"],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d3833383037353338",
                        created_at: "2015-06-22T07:27:15+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "53d8a9428f8ff",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d3833383037353338.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:Luka_Split07205.JPG",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url: null,
                          author:
                            '<a href="//commons.wikimedia.org/wiki/Quahadi" title="Quahadi"><font color="Red"><b>Quahadi</b></font></a> <a href="//commons.wikimedia.org/wiki/Quahadi" title="User Quahadi"><b><font color="Orange">Añtó</font></b></a> 54, 22 February 2013 (UTC)',
                          title: "Split",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:3807538"
                      }
                    ]
                  },
                  references: [
                    {
                      id: 1575507,
                      title: "Wikipedia",
                      type: "wiki",
                      language_id: "en",
                      url: "https://en.wikipedia.org/wiki/Port_of_Split",
                      supplier: "wiki",
                      priority: 0,
                      currency: null,
                      price: null,
                      flags: []
                    }
                  ],
                  external_ids: [
                    {
                      id: "en:Port of Split",
                      type: "wikipedia",
                      language_id: "en"
                    },
                    {
                      id: "Q7231268",
                      type: "wikidata",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:37:09+00:00"
          }),
          poi: 56629,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          result: JSON.stringify({
            status_code: 200,
            data: {
              places: [
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
                    "https://media-cdn.sygictraveldata.com/media/poi:15065797",
                  tags: [
                    {
                      key: "Train Station",
                      name: "Train Station"
                    }
                  ],
                  area: 667,
                  address: "Obala Kneza Domagoja 9, 21000 Split",
                  address_is_approximated: false,
                  admission: null,
                  email: null,
                  opening_hours: null,
                  is_deleted: false,
                  phone: null,
                  description: null,
                  opening_hours_raw: null,
                  media_count: 45,
                  main_media: {
                    usage: {
                      square: "m:34016324",
                      video_preview: null,
                      portrait: "m:34016360",
                      landscape: "m:34016324"
                    },
                    media: [
                      {
                        original: {
                          size: null,
                          width: 900,
                          height: 675
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383334303136333234",
                        created_at: "2017-01-30T21:09:46+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "588aa47608ce6",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383334303136333234.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:RivaSplit.jpg",
                          license: "CC BY-SA 1.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:Airin",
                          author: "Airin",
                          title: 'Promenade "Riva" of Split, Croatia.',
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/1.0"
                        },
                        location: null,
                        id: "m:34016324"
                      },
                      {
                        original: {
                          size: null,
                          width: 330,
                          height: 540
                        },
                        suitability: [],
                        url_template:
                          "https://media-cdn.sygictraveldata.com/media/{size}/612664395a40232133447d33247d383334303136333630",
                        created_at: "2017-01-30T21:28:08+0000",
                        source: {
                          provider: "wikipedia",
                          name: "Wikimedia Commons",
                          external_id: null
                        },
                        type: "photo",
                        created_by: "588aa47608ce6",
                        url:
                          "https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383334303136333630.jpg",
                        quadkey: null,
                        attribution: {
                          title_url:
                            "https://commons.wikimedia.org/wiki/File:SILVER_GATE,_DIOCLETIAN%27S_PLACE,_SPLIT,_CROATIA.jpg",
                          license: "CC BY-SA 3.0",
                          other: null,
                          author_url:
                            "http://commons.wikimedia.org/wiki/User:KLOTZ",
                          author: "JERRYE AND ROY KLOTZ MD",
                          title:
                            "SILVER GATE OR EAST GATE IS ONE OF FOUR GATES INTO THE PALACE COMPLEX.",
                          license_url:
                            "http://creativecommons.org/licenses/by-sa/3.0"
                        },
                        location: null,
                        id: "m:34016360"
                      }
                    ]
                  },
                  references: [],
                  external_ids: [
                    {
                      id: "way:71581330",
                      type: "osm",
                      language_id: null
                    }
                  ],
                  collection_count: 0,
                  satellite: null
                }
              ]
            },
            server_timestamp: "2019-08-24T19:37:54+00:00"
          }),
          poi: 15065797,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  }
};
