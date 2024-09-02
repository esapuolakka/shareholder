--This is just a memo. H2 does not fetch this file automatically.



INSERT INTO henkilo (etunimi, sukunimi, sahkoposti, puhelin) VALUES 
('Matti', 'Meikäläinen', 'matti.meikalainen@example.com', '0501234567'),
('Maija', 'Mallikas', 'maija.mallikas@example.com', '0407654321'),
('Kalle', 'Kekkonen', 'kalle.kekkonen@example.com', '0509876543'),
('Liisa', 'Virtanen', 'liisa.virtanen@example.com', '0401122334'),
('Pekka', 'Peloton', 'pekka.peloton@example.com', '0507766554'),
('Sanna', 'Savolainen', 'sanna.savolainen@example.com', '0403344556'),
('Teemu', 'Teekkari', 'teemu.teekkari@example.com', '0506677889'),
('Johanna', 'Jokinen', 'johanna.jokinen@example.com', '0402233445'),
('Jussi', 'Järvinen', 'jussi.jarvinen@example.com', '0509988776'),
('Anneli', 'Aalto', 'anneli.aalto@example.com', '0406655443'),
('Timo', 'Tiilikainen', 'timo.tiilikainen@example.com', '0502233110'),
('Elina', 'Eriksson', 'elina.eriksson@example.com', '0401144553'),
('Jukka', 'Jutila', 'jukka.jutila@example.com', '0505566772'),
('Mari', 'Mustonen', 'mari.mustonen@example.com', '0401231234'),
('Arto', 'Alatalo', 'arto.alatalo@example.com', '0503344332');


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


