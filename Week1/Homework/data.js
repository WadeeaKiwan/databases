'use strict';

// Array of insert queries into the country table
const countries = [
  "INSERT INTO country VALUES ('ABW', 'Aruba', 'North America', 193.00, 103000)",
  "INSERT INTO country VALUES ('AFG', 'Afghanistan', 'Asia', 652090.00, 22720000)",
  "INSERT INTO country VALUES ('AGO', 'Angola', 'Africa', 1246700.00, 12878000)",
  "INSERT INTO country VALUES ('AIA', 'Anguilla', 'North America', 96.00, 8000)",
  "INSERT INTO country VALUES ('ALB', 'Albania', 'Europe', 28748.00, 3401200)",
  "INSERT INTO country VALUES ('AND', 'Andorra', 'Europe', 468.00, 78000)",
  "INSERT INTO country VALUES ('ARE', 'United Arab Emirates', 'Asia', 83600.00, 2441000)",
  "INSERT INTO country VALUES ('ARG', 'Argentina', 'South America', 2780400.00, 37032000)",
  "INSERT INTO country VALUES ('ARM', 'Armenia', 'Asia',29800.00, 3520000)",
  "INSERT INTO country VALUES ('ASM', 'American Samoa','Oceania', 199.00, 68000)",
  "INSERT INTO country VALUES ('ATG', 'Antigua and Barbuda', 'North America', 442.00, 68000)",
  "INSERT INTO country VALUES ('COD', 'Congo, The Democratic Republic of the', 'Africa', 2344858.00, 51654000)",
  "INSERT INTO country VALUES ('DEU', 'Germany', 'Europe', 357022.00, 82164700)",
  "INSERT INTO country VALUES ('EGY', 'Egypt', 'Africa', 1001449.00, 68470000)",
  "INSERT INTO country VALUES ('FRA', 'France', 'Europe', 551500.00, 59225700)",
  "INSERT INTO country VALUES ('GRC', 'Greece', 'Europe', 131626.00, 10545700)",
  "INSERT INTO country VALUES ('HRV', 'Croatia', 'Europe', 56538.00, 4473000)",
  "INSERT INTO country VALUES ('ITA', 'Italy', 'Europe',  301316.00, 57680000)",
  "INSERT INTO country VALUES ('NLD', 'Netherlands', 'Europe',  41526.00, 15864000)",
  "INSERT INTO country VALUES ('SYR', 'Syria', 'Asia',  185180.00, 16125000)",
  "INSERT INTO country VALUES ('TUR', 'Turkey', 'Asia',  774815.00, 66591000)",
];

// Array of insert queries into the city table
const cities = [
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Amsterdam', 'NLD', 'Noord-Holland', 731200)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Rotterdam', 'NLD', 'Zuid-Holland', 593321)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Haag', 'NLD', 'Zuid-Holland', 440900)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Utrecht', 'NLD', 'Utrecht', 234323)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Eindhoven', 'NLD', 'Noord-Brabant', 201843)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Tilburg', 'NLD', 'Noord-Brabant', 193238)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Groningen', 'NLD', 'Groningen', 172701)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Breda', 'NLD', 'Noord-Brabant', 160398)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Apeldoorn', 'NLD', 'Gelderland', 153491)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Nijmegen', 'NLD', 'Gelderland', 152463)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Enschede', 'NLD', 'Overijssel', 149544)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Haarlem', 'NLD', 'Noord-Holland', 148772)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Almere', 'NLD', 'Flevoland', 142465)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Arnhem', 'NLD','Gelderland', 138020)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Zaanstad', 'NLD', 'Noord-Holland', 135621)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('`s-Hertogenbosch', 'NLD', 'Noord-Brabant', 129170)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Amersfoort', 'NLD', 'Utrecht', 126270)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Maastricht', 'NLD', 'Limburg', 122087)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Dordrecht', 'NLD', 'Zuid-Holland', 119811)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Leiden', 'NLD', 'Zuid-Holland', 117196)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Haarlemmermeer', 'NLD', 'Noord-Holland', 110722)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Zoetermeer', 'NLD', 'Zuid-Holland', 110214)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Emmen', 'NLD', 'Drenthe', 105853)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Zwolle', 'NLD', 'Overijssel', 105819)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Ede', 'NLD', 'Gelderland', 101574)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Delft', 'NLD', 'Zuid-Holland', 95268)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Heerlen', 'NLD', 'Limburg', 95052)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Alkmaar', 'NLD', 'Noord-Holland', 92713)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Damascus', 'SYR', 'Damascus', 1347000)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Aleppo', 'SYR', 'Aleppo', 1261983)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Hims', 'SYR', 'Hims', 507404)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Hama', 'SYR', 'Hama', 343361)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Latakia', 'SYR', 'Latakia', 264563)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('al-Qamishliya', 'SYR', 'al-Hasaka', 144286)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Dayr al-Zawr', 'SYR', 'Dayr al-Zawr', 140459)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Jaramana', 'SYR', 'Damascus', 138469)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Duma', 'SYR', 'Damascus', 131158)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('al-Raqqa', 'SYR', 'al-Raqqa', 108020)",
  "INSERT INTO city(`Name`, CountryCode, District, Population) VALUES ('Idlib', 'SYR', 'Idlib', 91081)",
];

module.exports = {
  countries,
  cities,
};
