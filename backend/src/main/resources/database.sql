--This is just a memo. H2 does not fetch this file automatically.


-- Person table test data
INSERT INTO henkilo (etunimi, sukunimi, sahkoposti, puhelin, osoite, postinumero, kotikunta, hetu, omistusosuus, osakkeiden_maara) VALUES
('Matti', 'Meikäläinen', 'matti.meikalainen@example.com', '0501234567', 'Esimerkkikatu 1', '00100', 'Helsinki', '010101-123N', 10.0, 100),
('Maija', 'Mallikas', 'maija.mallikas@example.com', '0407654321', 'Mallikatu 2', '00200', 'Espoo', '020202-234L', 15.5, 155),
('Kalle', 'Kekkonen', 'kalle.kekkonen@example.com', '0509876543', 'Kekkosentie 3', '00300', 'Vantaa', '030303-345M', 8.3, 83),
('Liisa', 'Virtanen', 'liisa.virtanen@example.com', '0401122334', 'Virtasentie 4', '00400', 'Tampere', '040404-456P', 12.0, 120),
('Pekka', 'Peloton', 'pekka.peloton@example.com', '0507766554', 'Pelotonkatu 5', '00500', 'Turku', '050505-567Q', 20.0, 200),
('Sanna', 'Savolainen', 'sanna.savolainen@example.com', '0403344556', 'Savolankatu 6', '00600', 'Oulu', '060606-678R', 7.2, 72),
('Teemu', 'Teekkari', 'teemu.teekkari@example.com', '0506677889', 'Teekkarintie 7', '00700', 'Jyväskylä', '070707-789S', 13.5, 135),
('Johanna', 'Jokinen', 'johanna.jokinen@example.com', '0402233445', 'Jokinentie 8', '00800', 'Kuopio', '080808-890T', 5.0, 50),
('Jussi', 'Järvinen', 'jussi.jarvinen@example.com', '0509988776', 'Järvikuja 9', '00900', 'Lahti', '090909-901U', 14.0, 140),
('Anneli', 'Aalto', 'anneli.aalto@example.com', '0406655443', 'Aaltokatu 10', '01000', 'Pori', '101010-012V', 16.5, 165),
('Timo', 'Tiilikainen', 'timo.tiilikainen@example.com', '0502233110', 'Tiilikaisentie 11', '01100', 'Lappeenranta', '111111-123W', 10.0, 100),
('Elina', 'Eriksson', 'elina.eriksson@example.com', '0401144553', 'Erikssonkatu 12', '01200', 'Vaasa', '121212-234X', 9.8, 98),
('Jukka', 'Jutila', 'jukka.jutila@example.com', '0505566772', 'Jutilantie 13', '01300', 'Rovaniemi', '131313-345Y', 11.7, 117),
('Mari', 'Mustonen', 'mari.mustonen@example.com', '0401231234', 'Mustonenkatu 14', '01400', 'Kajaani', '141414-456Z', 6.0, 60),
('Arto', 'Alatalo', 'arto.alatalo@example.com', '0503344332', 'Alatalontie 15', '01500', 'Seinäjoki', '151515-567A', 4.3, 43);




--Shateholders table test data

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
    "notes": "Osakekauppa tehty onnistuneesti"
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
    "notes": "Odotetaan maksua"
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
    "notes": "Kauppa vahvistettu"
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
    "notes": "Varainsiirtovero maksetaan myöhemmin"
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
    "notes": "Kaikki kunnossa"
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
    "notes": "Odotetaan vahvistusta"
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
    "notes": "Toimitus suoritettu"
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
    "notes": "Pieni viivästys"
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
    "notes": "Maksettu etuajassa"
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
    "notes": "Vielä odotellaan"
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
    "notes": "Kauppa valmis"
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
    "notes": "Seurataan tilannetta"
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
    "notes": "Kaikki selvä"
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
    "notes": "Pieni epäselvyys"
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
    "notes": "Odotetaan selvitystä"
  }
]
