--This is just a memo. H2 does not fetch this file automatically.



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



INSERT INTO osakas (saanto_pvm, maksu_pvm, myyja_id, ostaja_id, varainsiirtovero_maksettu, osakkeiden_lukumaara, osakkeen_hinta, hinta_yhteensa, huom)
VALUES
('2024-01-15', '2024-02-15', 1, 2, TRUE, 100, 10.50, 1050.00, 'Osakekauppa tehty onnistuneesti'),
('2024-01-20', '2024-02-20', 2, 3, FALSE, 150, 12.00, 1800.00, 'Odotetaan maksua'),
('2024-02-05', '2024-03-05', 3, 4, TRUE, 200, 15.00, 3000.00, 'Kauppa vahvistettu'),
('2024-02-15', '2024-03-15', 4, 5, FALSE, 120, 18.00, 2160.00, 'Varainsiirtovero maksetaan myöhemmin'),
('2024-03-01', '2024-04-01', 5, 6, TRUE, 180, 20.00, 3600.00, 'Kaikki kunnossa'),
('2024-03-10', '2024-04-10', 6, 7, FALSE, 220, 22.00, 4840.00, 'Odotetaan vahvistusta'),
('2024-04-01', '2024-05-01', 7, 8, TRUE, 140, 25.00, 3500.00, 'Toimitus suoritettu'),
('2024-04-20', '2024-05-20', 8, 9, FALSE, 160, 23.00, 3680.00, 'Pieni viivästys'),
('2024-05-05', '2024-06-05', 9, 10, TRUE, 170, 19.00, 3230.00, 'Maksettu etuajassa'),
('2024-05-15', '2024-06-15', 10, 11, FALSE, 200, 21.00, 4200.00, 'Vielä odotellaan'),
('2024-06-01', '2024-07-01', 11, 12, TRUE, 210, 24.00, 5040.00, 'Kauppa valmis'),
('2024-06-10', '2024-07-10', 12, 13, FALSE, 190, 26.00, 4940.00, 'Seurataan tilannetta'),
('2024-07-01', '2024-08-01', 13, 14, TRUE, 230, 28.00, 6440.00, 'Kaikki selvä'),
('2024-07-15', '2024-08-15', 14, 15, FALSE, 250, 30.00, 7500.00, 'Pieni epäselvyys'),
('2024-08-01', '2024-09-01', 15, 16, TRUE, 220, 32.00, 7040.00, 'Odotetaan selvitystä'),
('2024-08-20', '2024-09-20', 16, 17, FALSE, 240, 35.00, 8400.00, 'Selvitystilassa'),
('2024-09-01', '2024-10-01', 17, 18, TRUE, 260, 38.00, 9880.00, 'Vahvistettu ja maksettu'),
('2024-09-15', '2024-10-15', 18, 19, FALSE, 280, 40.00, 11200.00, 'Jäljellä oleva maksu'),
('2024-10-01', '2024-11-01', 19, 20, TRUE, 290, 42.00, 12180.00, 'Maksu vastaanotettu'),
('2024-10-20', '2024-11-20', 20, 21, FALSE, 300, 44.00, 13200.00, 'Odottava tilanne'),
('2024-11-01', '2024-12-01', 21, 22, TRUE, 310, 46.00, 14260.00, 'Lähetetty kirje'),
('2024-11-15', '2024-12-15', 22, 23, FALSE, 320, 48.00, 15360.00, 'Palautus maksettu'),
('2024-12-01', '2025-01-01', 23, 24, TRUE, 330, 50.00, 16500.00, 'Päätös saatu'),
('2024-12-15', '2025-01-15', 24, 25, FALSE, 340, 52.00, 17680.00, 'Maksettava vielä'),
('2025-01-01', '2025-02-01', 25, 26, TRUE, 350, 54.00, 18900.00, 'Kauppa voimassa'),
('2025-01-20', '2025-02-20', 26, 27, FALSE, 360, 56.00, 20160.00, 'Päivitetty'),
('2025-02-01', '2025-03-01', 27, 28, TRUE, 370, 58.00, 21460.00, 'Täysin valmis'),
('2025-02-15', '2025-03-15', 28, 29, FALSE, 380, 60.00, 22800.00, 'Pieni huomio'),
('2025-03-01', '2025-04-01', 29, 30, TRUE, 390, 62.00, 24180.00, 'Lopullinen kauppa'),
('2025-03-20', '2025-04-20', 30, 31, FALSE, 400, 64.00, 25600.00, 'Odottava maksusuoritus'),
('2025-04-01', '2025-05-01', 31, 32, TRUE, 410, 66.00, 27060.00, 'Maksettu etuajassa'),
('2025-04-20', '2025-05-20', 32, 33, FALSE, 420, 68.00, 28560.00, 'Vahvistettu ja maksettu'),
('2025-05-01', '2025-06-01', 33, 34, TRUE, 430, 70.00, 30100.00, 'Jäljellä oleva maksu'),
('2025-05-15', '2025-06-15', 34, 35, FALSE, 440, 72.00, 31680.00, 'Maksu vastaanotettu'),
('2025-06-01', '2025-07-01', 35, 36, TRUE, 450, 74.00, 33300.00, 'Odottava tilanne'),
('2025-06-20', '2025-07-20', 36, 37, FALSE, 460, 76.00, 34960.00, 'Lähetetty kirje'),
('2025-07-01', '2025-08-01', 37, 38, TRUE, 470, 78.00, 36660.00, 'Palautus maksettu'),
('2025-07-15', '2025-08-15', 38, 39, FALSE, 480, 80.00, 38400.00, 'Päätös saatu'),
('2025-08-01', '2025-09-01', 39, 40, TRUE, 490, 82.00, 40180.00, 'Maksettava vielä'),
('2025-08-20', '2025-09-20', 40, 41, FALSE, 500, 84.00, 42000.00, 'Kauppa voimassa');


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
