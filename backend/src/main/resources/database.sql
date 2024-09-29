--This is just a memo. H2 does not fetch this file automatically.

--TEST DATA: SharePrices

  [
    { "price": 77.22 },
    { "price": 98.15 },
    { "price": 101.52 },
    { "price": 103.79 },
    { "price": 98.58 },
    { "price": 99.14 },
    { "price": 101.22 },
    { "price": 88.13 },
    { "price": 107.83 },
    { "price": 106.28 }
  ]



-- TEST DATA: Persons

[
  {
    "firstname": "Matti",
    "lastname": "Meikäläinen",
    "email": "matti.meikalainen@example.com",
    "phone": "0501234567",
    "address": "Esimerkkikatu 1",
    "postalCode": "00100",
    "city": "Helsinki",
    "ssn": "010101-123N",
    "numberOfShares": 100
  },
  {
    "firstname": "Maija",
    "lastname": "Mallikas",
    "email": "maija.mallikas@example.com",
    "phone": "0407654321",
    "address": "Mallikatu 2",
    "postalCode": "00200",
    "city": "Espoo",
    "ssn": "020202-234L",
    "numberOfShares": 155
  },
  {
    "firstname": "Kalle",
    "lastname": "Kekkonen",
    "email": "kalle.kekkonen@example.com",
    "phone": "0509876543",
    "address": "Kekkosentie 3",
    "postalCode": "00300",
    "city": "Vantaa",
    "ssn": "030303-345M",
    "numberOfShares": 83
  },
  {
    "firstname": "Liisa",
    "lastname": "Virtanen",
    "email": "liisa.virtanen@example.com",
    "phone": "0401122334",
    "address": "Virtasentie 4",
    "postalCode": "00400",
    "city": "Tampere",
    "ssn": "040404-456P",
    "numberOfShares": 120
  },
  {
    "firstname": "Pekka",
    "lastname": "Peloton",
    "email": "pekka.peloton@example.com",
    "phone": "0507766554",
    "address": "Pelotonkatu 5",
    "postalCode": "00500",
    "city": "Turku",
    "ssn": "050505-567Q",
    "numberOfShares": 200
  },
  {
    "firstname": "Sanna",
    "lastname": "Savolainen",
    "email": "sanna.savolainen@example.com",
    "phone": "0403344556",
    "address": "Savolankatu 6",
    "postalCode": "00600",
    "city": "Oulu",
    "ssn": "060606-678R",
    "numberOfShares": 72
  },
  {
    "firstname": "Teemu",
    "lastname": "Teekkari",
    "email": "teemu.teekkari@example.com",
    "phone": "0506677889",
    "address": "Teekkarintie 7",
    "postalCode": "00700",
    "city": "Jyväskylä",
    "ssn": "070707-789S",
    "numberOfShares": 135
  },
  {
    "firstname": "Johanna",
    "lastname": "Jokinen",
    "email": "johanna.jokinen@example.com",
    "phone": "0402233445",
    "address": "Jokinentie 8",
    "postalCode": "00800",
    "city": "Kuopio",
    "ssn": "080808-890T",
    "numberOfShares": 50
  },
  {
    "firstname": "Jussi",
    "lastname": "Järvinen",
    "email": "jussi.jarvinen@example.com",
    "phone": "0509988776",
    "address": "Järvikuja 9",
    "postalCode": "00900",
    "city": "Lahti",
    "ssn": "090909-901U",
    "numberOfShares": 140
  },
  {
    "firstname": "Anneli",
    "lastname": "Aalto",
    "email": "anneli.aalto@example.com",
    "phone": "0406655443",
    "address": "Aaltokatu 10",
    "postalCode": "01000",
    "city": "Pori",
    "ssn": "101010-012V",
    "numberOfShares": 165
  },
  {
    "firstname": "Timo",
    "lastname": "Tiilikainen",
    "email": "timo.tiilikainen@example.com",
    "phone": "0502233110",
    "address": "Tiilikaisentie 11",
    "postalCode": "01100",
    "city": "Lappeenranta",
    "ssn": "111111-123W",
    "numberOfShares": 100
  },
  {
    "firstname": "Elina",
    "lastname": "Eriksson",
    "email": "elina.eriksson@example.com",
    "phone": "0401144553",
    "address": "Erikssonkatu 12",
    "postalCode": "01200",
    "city": "Vaasa",
    "ssn": "121212-234X",
    "numberOfShares": 98
  },
  {
    "firstname": "Jukka",
    "lastname": "Jutila",
    "email": "jukka.jutila@example.com",
    "phone": "0505566772",
    "address": "Jutilantie 13",
    "postalCode": "01300",
    "city": "Rovaniemi",
    "ssn": "131313-345Y",
    "numberOfShares": 117
  },
  {
    "firstname": "Mari",
    "lastname": "Mustonen",
    "email": "mari.mustonen@example.com",
    "phone": "0401231234",
    "address": "Mustonenkatu 14",
    "postalCode": "01400",
    "city": "Kajaani",
    "ssn": "141414-456Z",
    "numberOfShares": 60
  },
  {
    "firstname": "Arto",
    "lastname": "Alatalo",
    "email": "arto.alatalo@example.com",
    "phone": "0503344332",
    "address": "Alatalontie 15",
    "postalCode": "01500",
    "city": "Seinäjoki",
    "ssn": "151515-567A",
    "numberOfShares": 43
  }
]


--TEST DATA: Shareholders

[
  {
    "collectionDate": "2024-01-15",
    "term": "2024-02-15",
    "seller": {
      "id": 1
    },
    "buyer": {
      "id": 2
    },
    "transferTaxPaid": true,
    "numberOfShares": 100,
    "pricePerShare": 10.50,
    "notes": "Osakekauppa tehty onnistuneesti",
    "status": "approved"
  },
  {
    "collectionDate": "2024-01-20",
    "term": "2024-02-20",
    "seller": {
      "id": 2
    },
    "buyer": {
      "id": 3
    },
    "transferTaxPaid": false,
    "numberOfShares": 150,
    "pricePerShare": 12.00,
    "notes": "Odotetaan maksua",
    "status": "approved"
  },
  {
    "collectionDate": "2024-02-05",
    "term": "2024-03-05",
    "seller": {
      "id": 3
    },
    "buyer": {
      "id": 4
    },
    "transferTaxPaid": true,
    "numberOfShares": 200,
    "pricePerShare": 15.00,
    "notes": "Kauppa vahvistettu",
    "status": "approved"
  },
  {
    "collectionDate": "2024-02-15",
    "term": "2024-03-15",
    "seller": {
      "id": 4
    },
    "buyer": {
      "id": 5
    },
    "transferTaxPaid": false,
    "numberOfShares": 120,
    "pricePerShare": 18.00,
    "notes": "Varainsiirtovero maksetaan myöhemmin",
    "status": "rejected"
  },
  {
    "collectionDate": "2024-03-01",
    "term": "2024-04-01",
    "seller": {
      "id": 5
    },
    "buyer": {
      "id": 6
    },
    "transferTaxPaid": true,
    "numberOfShares": 180,
    "pricePerShare": 20.00,
    "notes": "Kaikki kunnossa",
    "status": "approved"
  },
  {
    "collectionDate": "2024-03-10",
    "term": "2024-04-10",
    "seller": {
      "id": 6
    },
    "buyer": {
      "id": 7
    },
    "transferTaxPaid": false,
    "numberOfShares": 220,
    "pricePerShare": 22.00,
    "notes": "Odotetaan vahvistusta",
    "status": "pending"
  },
  {
    "collectionDate": "2024-04-01",
    "term": "2024-05-01",
    "seller": {
      "id": 7
    },
    "buyer": {
      "id": 8
    },
    "transferTaxPaid": true,
    "numberOfShares": 140,
    "pricePerShare": 25.00,
    "notes": "Toimitus suoritettu",
    "status": "approved"
  },
  {
    "collectionDate": "2024-04-20",
    "term": "2024-05-20",
    "seller": {
      "id": 8
    },
    "buyer": {
      "id": 9
    },
    "transferTaxPaid": false,
    "numberOfShares": 160,
    "pricePerShare": 23.00,
    "notes": "Pieni viivästys",
    "status": "pending"
  },
  {
    "collectionDate": "2024-05-05",
    "term": "2024-06-05",
    "seller": {
      "id": 9
    },
    "buyer": {
      "id": 10
    },
    "transferTaxPaid": true,
    "numberOfShares": 170,
    "pricePerShare": 19.00,
    "notes": "Maksettu etuajassa",
    "status": "approved"
  },
  {
    "collectionDate": "2024-05-15",
    "term": "2024-06-15",
    "seller": {
      "id": 10
    },
    "buyer": {
      "id": 11
    },
    "transferTaxPaid": false,
    "numberOfShares": 200,
    "pricePerShare": 21.00,
    "notes": "Vielä odotellaan",
    "status": "pending"
  },
  {
    "collectionDate": "2024-06-01",
    "term": "2024-07-01",
    "seller": {
      "id": 11
    },
    "buyer": {
      "id": 12
    },
    "transferTaxPaid": true,
    "numberOfShares": 210,
    "pricePerShare": 24.00,
    "notes": "Kauppa valmis",
    "status": "approved"
  },
  {
    "collectionDate": "2024-06-10",
    "term": "2024-07-10",
    "seller": {
      "id": 12
    },
    "buyer": {
      "id": 13
    },
    "transferTaxPaid": false,
    "numberOfShares": 190,
    "pricePerShare": 26.00,
    "notes": "Seurataan tilannetta",
    "status": "pending"
  },
  {
    "collectionDate": "2024-07-01",
    "term": "2024-08-01",
    "seller": {
      "id": 13
    },
    "buyer": {
      "id": 14
    },
    "transferTaxPaid": true,
    "numberOfShares": 230,
    "pricePerShare": 28.00,
    "notes": "Kaikki selvä",
    "status": "approved"
  },
  {
    "collectionDate": "2024-07-15",
    "term": "2024-08-15",
    "seller": {
      "id": 14
    },
    "buyer": {
      "id": 15
    },
    "transferTaxPaid": false,
    "numberOfShares": 250,
    "pricePerShare": 30.00,
    "notes": "Pieni epäselvyys",
    "status": "approved"
  },
  {
    "collectionDate": "2024-08-01",
    "term": "2024-09-01",
    "seller": {
      "id": 15
    },
    "buyer": {
      "id": 1
    },
    "transferTaxPaid": true,
    "numberOfShares": 220,
    "pricePerShare": 32.00,
    "notes": "Odotetaan selvitystä",
    "status": "pending"
  },
  {
    "collectionDate": "2024-01-15",
    "term": "2024-02-15",
    "seller": {
      "id": 3
    },
    "buyer": {
      "id": 6
    },
    "transferTaxPaid": true,
    "numberOfShares": 76,
    "pricePerShare": 12.50,
    "notes": "Osakekauppa tehty onnistuneesti",
    "status": "approved"
  },
  {
    "collectionDate": "2024-01-15",
    "term": "2024-02-15",
    "seller": {
      "id": 6
    },
    "buyer": {
      "id": 7
    },
    "transferTaxPaid": true,
    "numberOfShares": 1000,
    "pricePerShare": 11.50,
    "notes": "Osakekauppa tehty onnistuneesti",
    "status": "approved"
  }
]
