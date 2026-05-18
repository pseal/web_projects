// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});
function animRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animRing);
}
animRing();

// ── AIRPORT / CITY DATABASE ──
const airports = [
  { code:'LHR', city:'London', country:'United Kingdom', flag:'🇬🇧', name:'Heathrow Airport' },
  { code:'LGW', city:'London', country:'United Kingdom', flag:'🇬🇧', name:'Gatwick Airport' },
  { code:'CDG', city:'Paris', country:'France', flag:'🇫🇷', name:'Charles de Gaulle' },
  { code:'ORY', city:'Paris', country:'France', flag:'🇫🇷', name:'Orly Airport' },
  { code:'JFK', city:'New York', country:'USA', flag:'🇺🇸', name:'John F. Kennedy Intl' },
  { code:'EWR', city:'New York', country:'USA', flag:'🇺🇸', name:'Newark Liberty Intl' },
  { code:'LAX', city:'Los Angeles', country:'USA', flag:'🇺🇸', name:'Los Angeles Intl' },
  { code:'ORD', city:'Chicago', country:'USA', flag:'🇺🇸', name:"O'Hare Intl" },
  { code:'DXB', city:'Dubai', country:'UAE', flag:'🇦🇪', name:'Dubai Intl Airport' },
  { code:'AUH', city:'Abu Dhabi', country:'UAE', flag:'🇦🇪', name:'Zayed Intl Airport' },
  { code:'SIN', city:'Singapore', country:'Singapore', flag:'🇸🇬', name:'Changi Airport' },
  { code:'NRT', city:'Tokyo', country:'Japan', flag:'🇯🇵', name:'Narita Intl Airport' },
  { code:'HND', city:'Tokyo', country:'Japan', flag:'🇯🇵', name:'Haneda Airport' },
  { code:'BKK', city:'Bangkok', country:'Thailand', flag:'🇹🇭', name:'Suvarnabhumi Airport' },
  { code:'HKG', city:'Hong Kong', country:'China', flag:'🇭🇰', name:'Hong Kong Intl' },
  { code:'SYD', city:'Sydney', country:'Australia', flag:'🇦🇺', name:'Kingsford Smith Intl' },
  { code:'MEL', city:'Melbourne', country:'Australia', flag:'🇦🇺', name:'Tullamarine Airport' },
  { code:'GRU', city:'São Paulo', country:'Brazil', flag:'🇧🇷', name:'Guarulhos Intl' },
  { code:'GIG', city:'Rio de Janeiro', country:'Brazil', flag:'🇧🇷', name:'Galeão Intl Airport' },
  { code:'EZE', city:'Buenos Aires', country:'Argentina', flag:'🇦🇷', name:'Ezeiza Intl Airport' },
  { code:'CPT', city:'Cape Town', country:'South Africa', flag:'🇿🇦', name:'Cape Town Intl' },
  { code:'JNB', city:'Johannesburg', country:'South Africa', flag:'🇿🇦', name:'OR Tambo Intl' },
  { code:'FCO', city:'Rome', country:'Italy', flag:'🇮🇹', name:'Fiumicino Airport' },
  { code:'MXP', city:'Milan', country:'Italy', flag:'🇮🇹', name:'Malpensa Airport' },
  { code:'MAD', city:'Madrid', country:'Spain', flag:'🇪🇸', name:'Barajas Intl Airport' },
  { code:'BCN', city:'Barcelona', country:'Spain', flag:'🇪🇸', name:'El Prat Airport' },
  { code:'AMS', city:'Amsterdam', country:'Netherlands', flag:'🇳🇱', name:'Schiphol Airport' },
  { code:'FRA', city:'Frankfurt', country:'Germany', flag:'🇩🇪', name:'Frankfurt Airport' },
  { code:'MUC', city:'Munich', country:'Germany', flag:'🇩🇪', name:'Franz Josef Strauss' },
  { code:'ZRH', city:'Zurich', country:'Switzerland', flag:'🇨🇭', name:'Zurich Airport' },
  { code:'GVA', city:'Geneva', country:'Switzerland', flag:'🇨🇭', name:'Geneva Airport' },
  { code:'IST', city:'Istanbul', country:'Turkey', flag:'🇹🇷', name:'Istanbul Airport' },
  { code:'CAI', city:'Cairo', country:'Egypt', flag:'🇪🇬', name:'Cairo Intl Airport' },
  { code:'MUM', city:'Mumbai', country:'India', flag:'🇮🇳', name:'Chhatrapati Shivaji Intl' },
  { code:'DEL', city:'Delhi', country:'India', flag:'🇮🇳', name:'Indira Gandhi Intl' },
  { code:'BOM', city:'Mumbai', country:'India', flag:'🇮🇳', name:'Mumbai Intl Airport' },
  { code:'ICN', city:'Seoul', country:'South Korea', flag:'🇰🇷', name:'Incheon Intl Airport' },
  { code:'PEK', city:'Beijing', country:'China', flag:'🇨🇳', name:'Capital Intl Airport' },
  { code:'PVG', city:'Shanghai', country:'China', flag:'🇨🇳', name:'Pudong Intl Airport' },
  { code:'DPS', city:'Bali', country:'Indonesia', flag:'🇮🇩', name:'Ngurah Rai Intl' },
  { code:'KUL', city:'Kuala Lumpur', country:'Malaysia', flag:'🇲🇾', name:'KLIA Airport' },
  { code:'MEX', city:'Mexico City', country:'Mexico', flag:'🇲🇽', name:'Benito Juárez Intl' },
  { code:'YYZ', city:'Toronto', country:'Canada', flag:'🇨🇦', name:'Pearson Intl Airport' },
  { code:'YVR', city:'Vancouver', country:'Canada', flag:'🇨🇦', name:'Vancouver Intl Airport' },
  { code:'ATH', city:'Athens', country:'Greece', flag:'🇬🇷', name:'Eleftherios Venizelos' },
  { code:'LIS', city:'Lisbon', country:'Portugal', flag:'🇵🇹', name:'Humberto Delgado' },
  { code:'OSL', city:'Oslo', country:'Norway', flag:'🇳🇴', name:'Oslo Airport Gardermoen' },
  { code:'ARN', city:'Stockholm', country:'Sweden', flag:'🇸🇪', name:'Arlanda Airport' },
  { code:'CPH', city:'Copenhagen', country:'Denmark', flag:'🇩🇰', name:'Copenhagen Airport' },
  { code:'VIE', city:'Vienna', country:'Austria', flag:'🇦🇹', name:'Vienna Intl Airport' },
  { code:'PRG', city:'Prague', country:'Czech Republic', flag:'🇨🇿', name:'Václav Havel Airport' },
  { code:'WAW', city:'Warsaw', country:'Poland', flag:'🇵🇱', name:'Chopin Airport' },
  { code:'BUD', city:'Budapest', country:'Hungary', flag:'🇭🇺', name:'Budapest Airport' },
  { code:'DUB', city:'Dublin', country:'Ireland', flag:'🇮🇪', name:'Dublin Airport' },
  { code:'EDI', city:'Edinburgh', country:'Scotland', flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', name:'Edinburgh Airport' },
  { code:'MAN', city:'Manchester', country:'United Kingdom', flag:'🇬🇧', name:'Manchester Airport' },
  { code:'NBO', city:'Nairobi', country:'Kenya', flag:'🇰🇪', name:'Jomo Kenyatta Intl' },
  { code:'CMN', city:'Casablanca', country:'Morocco', flag:'🇲🇦', name:'Mohammed V Intl' },
  { code:'TLV', city:'Tel Aviv', country:'Israel', flag:'🇮🇱', name:'Ben Gurion Airport' },
  { code:'DOH', city:'Doha', country:'Qatar', flag:'🇶🇦', name:'Hamad Intl Airport' },
  { code:'RUH', city:'Riyadh', country:'Saudi Arabia', flag:'🇸🇦', name:'King Khalid Intl' },
  { code:'MIA', city:'Miami', country:'USA', flag:'🇺🇸', name:'Miami Intl Airport' },
  { code:'SFO', city:'San Francisco', country:'USA', flag:'🇺🇸', name:'SF Intl Airport' },
  { code:'BOS', city:'Boston', country:'USA', flag:'🇺🇸', name:'Logan Intl Airport' },
  { code:'DFW', city:'Dallas', country:'USA', flag:'🇺🇸', name:'Dallas Fort Worth Intl' },
  { code:'ATL', city:'Atlanta', country:'USA', flag:'🇺🇸', name:'Hartsfield-Jackson Intl' },
  { code:'HEL', city:'Helsinki', country:'Finland', flag:'🇫🇮', name:'Helsinki-Vantaa Airport' },
  { code: 'IAH', city: 'Houston', country: 'USA', flag: '🇺🇸', name: 'George Bush Intercontinental' },
  { code: 'LAS', city: 'Las Vegas', country: 'USA', flag: '🇺🇸', name: 'Harry Reid Intl Airport' },
  { code: 'MCO', city: 'Orlando', country: 'USA', flag: '🇺🇸', name: 'Orlando Intl Airport' },
  { code: 'CLT', city: 'Charlotte', country: 'USA', flag: '🇺🇸', name: 'Charlotte Douglas Intl' },
  { code: 'PHL', city: 'Philadelphia', country: 'USA', flag: '🇺🇸', name: 'Philadelphia Intl Airport' },
  { code: 'MSP', city: 'Minneapolis', country: 'USA', flag: '🇺🇸', name: 'Minneapolis–Saint Paul' },
  { code: 'DTW', city: 'Detroit', country: 'USA', flag: '🇺🇸', name: 'Detroit Metropolitan Airport' },
  { code: 'SLC', city: 'Salt Lake City', country: 'USA', flag: '🇺🇸', name: 'Salt Lake City Intl' },
  { code: 'SAN', city: 'San Diego', country: 'USA', flag: '🇺🇸', name: 'San Diego Intl Airport' },
  { code: 'YYC', city: 'Calgary', country: 'Canada', flag: '🇨🇦', name: 'Calgary Intl Airport' },
  { code: 'YEG', city: 'Edmonton', country: 'Canada', flag: '🇨🇦', name: 'Edmonton Intl Airport' },
  { code: 'CUN', city: 'Cancún', country: 'Mexico', flag: '🇲🇽', name: 'Cancún Intl Airport' },
  { code: 'GDL', city: 'Guadalajara', country: 'Mexico', flag: '🇲🇽', name: 'Miguel Hidalgo y Costilla' },
  { code: 'BER', city: 'Berlin', country: 'Germany', flag: '🇩🇪', name: 'Berlin Brandenburg Airport' },
  { code: 'BRU', city: 'Brussels', country: 'Belgium', flag: '🇧🇪', name: 'Brussels Airport' },
  { code: 'AGP', city: 'Málaga', country: 'Spain', flag: '🇪🇸', name: 'Málaga–Costa del Sol' },
  { code: 'OPO', city: 'Porto', country: 'Portugal', flag: '🇵🇹', name: 'Francisco Sá Carneiro' },
  { code: 'KEF', city: 'Reykjavik', country: 'Iceland', flag: '🇮🇸', name: 'Keflavik Intl Airport' },
  { code: 'LYS', city: 'Lyon', country: 'France', flag: '🇫🇷', name: 'Lyon–Saint-Exupéry' },
  { code: 'NCE', city: 'Nice', country: 'France', flag: '🇫🇷', name: 'Nice Côte d’Azur Airport' },
  { code: 'LIN', city: 'Milan', country: 'Italy', flag: '🇮🇹', name: 'Milan Linate Airport' },
  { code: 'VCE', city: 'Venice', country: 'Italy', flag: '🇮🇹', name: 'Marco Polo Airport' },
  { code: 'GOT', city: 'Gothenburg', country: 'Sweden', flag: '🇸🇪', name: 'Göteborg Landvetter' },
  { code: 'BHX', city: 'Birmingham', country: 'United Kingdom', flag: '🇬🇧', name: 'Birmingham Airport' },
  { code: 'KIX', city: 'Osaka', country: 'Japan', flag: '🇯🇵', name: 'Kansai Intl Airport' },
  { code: 'TPE', city: 'Taipei', country: 'Taiwan', flag: '🇹🇼', name: 'Taoyuan Intl Airport' },
  { code: 'MNL', city: 'Manila', country: 'Philippines', flag: '🇵🇭', name: 'Ninoy Aquino Intl' },
  { code: 'SGN', city: 'Ho Chi Minh City', country: 'Vietnam', flag: '🇻🇳', name: 'Tan Son Nhat Intl' },
  { code: 'HAN', city: 'Hanoi', country: 'Vietnam', flag: '🇻🇳', name: 'Noi Bai Intl Airport' },
  { code: 'CAN', city: 'Guangzhou', country: 'China', flag: '🇨🇳', name: 'Guangzhou Baiyun Intl' },
  { code: 'CTU', city: 'Chengdu', country: 'China', flag: '🇨🇳', name: 'Chengdu Tianfu Intl' },
  { code: 'BNE', city: 'Brisbane', country: 'Australia', flag: '🇦🇺', name: 'Brisbane Airport' },
  { code: 'PER', city: 'Perth', country: 'Australia', flag: '🇦🇺', name: 'Perth Airport' },
  { code: 'AKL', city: 'Auckland', country: 'New Zealand', flag: '🇳🇿', name: 'Auckland Airport' },
  { code: 'CHC', city: 'Christchurch', country: 'New Zealand', flag: '🇳🇿', name: 'Christchurch Intl' },
  { code: 'BLR', city: 'Bengaluru', country: 'India', flag: '🇮🇳', name: 'Kempegowda Intl Airport' },
  { code: 'CCU', city: 'Kolkata', country: 'India', flag: '🇮🇳', name: 'Netaji Subhash Chandra Bose Intl' },
  { code: 'MAA', city: 'Chennai', country: 'India', flag: '🇮🇳', name: 'Chennai Intl Airport' },
  { code: 'HYD', city: 'Hyderabad', country: 'India', flag: '🇮🇳', name: 'Rajiv Gandhi Intl Airport' },
  { code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', flag: '🇸🇦', name: 'King Abdulaziz Intl' },
  { code: 'MCT', city: 'Muscat', country: 'Oman', flag: '🇴🇲', name: 'Muscat Intl Airport' },
  { code: 'KWI', city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', name: 'Kuwait Intl Airport' },
  { code: 'BAH', city: 'Manama', country: 'Bahrain', flag: '🇧🇭', name: 'Bahrain Intl Airport' },
  { code: 'ADD', city: 'Addis Ababa', country: 'Ethiopia', flag: '🇪🇹', name: 'Bole Intl Airport' },
  { code: 'LOS', city: 'Lagos', country: 'Nigeria', flag: '🇳🇬', name: 'Murtala Muhammed Intl' },
  { code: 'ACC', city: 'Accra', country: 'Ghana', flag: '🇬🇭', name: 'Kotoka Intl Airport' },
  { code: 'BOG', city: 'Bogotá', country: 'Colombia', flag: '🇨🇴', name: 'El Dorado Intl Airport' },
  { code: 'SCL', city: 'Santiago', country: 'Chile', flag: '🇨🇱', name: 'Comodoro Arturo Merino Benítez' },
  { code: 'LIM', city: 'Lima', country: 'Peru', flag: '🇵🇪', name: 'Jorge Chávez Intl Airport' },
  { code: 'PTY', city: 'Panama City', country: 'Panama', flag: '🇵🇦', name: 'Tocumen Intl Airport' },
  { code: 'MVD', city: 'Montevideo', country: 'Uruguay', flag: '🇺🇾', name: 'Carrasco Intl Airport' },
  
  // Europe — expanded
  { code: 'STN', city: 'London', country: 'United Kingdom', flag: '🇬🇧', name: 'Stansted Airport' },
  { code: 'LTN', city: 'London', country: 'United Kingdom', flag: '🇬🇧', name: 'Luton Airport' },
  { code: 'HAM', city: 'Hamburg', country: 'Germany', flag: '🇩🇪', name: 'Hamburg Airport' },
  { code: 'DUS', city: 'Düsseldorf', country: 'Germany', flag: '🇩🇪', name: 'Düsseldorf Airport' },
  { code: 'CGN', city: 'Cologne', country: 'Germany', flag: '🇩🇪', name: 'Cologne Bonn Airport' },
  { code: 'NUE', city: 'Nuremberg', country: 'Germany', flag: '🇩🇪', name: 'Nuremberg Airport' },
  { code: 'STR', city: 'Stuttgart', country: 'Germany', flag: '🇩🇪', name: 'Stuttgart Airport' },
  { code: 'TXL', city: 'Berlin', country: 'Germany', flag: '🇩🇪', name: 'Berlin Tegel (historic)' },
  { code: 'MRS', city: 'Marseille', country: 'France', flag: '🇫🇷', name: 'Marseille Provence Airport' },
  { code: 'TLS', city: 'Toulouse', country: 'France', flag: '🇫🇷', name: 'Toulouse Blagnac Airport' },
  { code: 'BOD', city: 'Bordeaux', country: 'France', flag: '🇫🇷', name: 'Bordeaux–Mérignac Airport' },
  { code: 'NTE', city: 'Nantes', country: 'France', flag: '🇫🇷', name: 'Nantes Atlantique Airport' },
  { code: 'GVA', city: 'Geneva', country: 'Switzerland', flag: '🇨🇭', name: 'Geneva Airport' },
  { code: 'BSL', city: 'Basel', country: 'Switzerland', flag: '🇨🇭', name: 'EuroAirport Basel' },
  { code: 'FCO', city: 'Rome', country: 'Italy', flag: '🇮🇹', name: 'Fiumicino Airport' },
  { code: 'CIA', city: 'Rome', country: 'Italy', flag: '🇮🇹', name: 'Ciampino Airport' },
  { code: 'NAP', city: 'Naples', country: 'Italy', flag: '🇮🇹', name: 'Naples Intl Airport' },
  { code: 'PMO', city: 'Palermo', country: 'Italy', flag: '🇮🇹', name: 'Palermo Airport' },
  { code: 'CTA', city: 'Catania', country: 'Italy', flag: '🇮🇹', name: 'Catania-Fontanarossa' },
  { code: 'BRI', city: 'Bari', country: 'Italy', flag: '🇮🇹', name: 'Karol Wojtyła Airport' },
  { code: 'PSA', city: 'Pisa', country: 'Italy', flag: '🇮🇹', name: 'Galileo Galilei Airport' },
  { code: 'BLQ', city: 'Bologna', country: 'Italy', flag: '🇮🇹', name: 'Bologna Guglielmo Marconi' },
  { code: 'SVQ', city: 'Seville', country: 'Spain', flag: '🇪🇸', name: 'San Pablo Airport' },
  { code: 'VLC', city: 'Valencia', country: 'Spain', flag: '🇪🇸', name: 'Valencia Airport' },
  { code: 'PMI', city: 'Palma de Mallorca', country: 'Spain', flag: '🇪🇸', name: 'Palma de Mallorca Airport' },
  { code: 'IBZ', city: 'Ibiza', country: 'Spain', flag: '🇪🇸', name: 'Ibiza Airport' },
  { code: 'TFS', city: 'Tenerife', country: 'Spain', flag: '🇪🇸', name: 'Tenerife South Airport' },
  { code: 'LPA', city: 'Gran Canaria', country: 'Spain', flag: '🇪🇸', name: 'Gran Canaria Airport' },
  { code: 'FAO', city: 'Faro', country: 'Portugal', flag: '🇵🇹', name: 'Faro Airport' },
  { code: 'FNC', city: 'Funchal', country: 'Portugal', flag: '🇵🇹', name: 'Madeira Airport' },
  { code: 'SKG', city: 'Thessaloniki', country: 'Greece', flag: '🇬🇷', name: 'Macedonia Airport' },
  { code: 'HER', city: 'Heraklion', country: 'Greece', flag: '🇬🇷', name: 'Nikos Kazantzakis Airport' },
  { code: 'CFU', city: 'Corfu', country: 'Greece', flag: '🇬🇷', name: 'Ioannis Kapodistrias Airport' },
  { code: 'RHO', city: 'Rhodes', country: 'Greece', flag: '🇬🇷', name: 'Diagoras Airport' },
  { code: 'JMK', city: 'Mykonos', country: 'Greece', flag: '🇬🇷', name: 'Mykonos Airport' },
  { code: 'JSI', city: 'Skiathos', country: 'Greece', flag: '🇬🇷', name: 'Skiathos Airport' },
  { code: 'SAW', city: 'Istanbul', country: 'Turkey', flag: '🇹🇷', name: 'Sabiha Gökçen Airport' },
  { code: 'AYT', city: 'Antalya', country: 'Turkey', flag: '🇹🇷', name: 'Antalya Airport' },
  { code: 'ADB', city: 'Izmir', country: 'Turkey', flag: '🇹🇷', name: 'Adnan Menderes Airport' },
  { code: 'BJV', city: 'Bodrum', country: 'Turkey', flag: '🇹🇷', name: 'Milas–Bodrum Airport' },
  { code: 'SXF', city: 'Sofia', country: 'Bulgaria', flag: '🇧🇬', name: 'Sofia Airport' },
  { code: 'BEG', city: 'Belgrade', country: 'Serbia', flag: '🇷🇸', name: 'Nikola Tesla Airport' },
  { code: 'ZAG', city: 'Zagreb', country: 'Croatia', flag: '🇭🇷', name: 'Franjo Tuđman Airport' },
  { code: 'SPU', city: 'Split', country: 'Croatia', flag: '🇭🇷', name: 'Split Airport' },
  { code: 'DBV', city: 'Dubrovnik', country: 'Croatia', flag: '🇭🇷', name: 'Dubrovnik Airport' },
  { code: 'LJU', city: 'Ljubljana', country: 'Slovenia', flag: '🇸🇮', name: 'Jože Pučnik Airport' },
  { code: 'KRK', city: 'Krakow', country: 'Poland', flag: '🇵🇱', name: 'John Paul II Airport' },
  { code: 'GDN', city: 'Gdańsk', country: 'Poland', flag: '🇵🇱', name: 'Lech Wałęsa Airport' },
  { code: 'RIG', city: 'Riga', country: 'Latvia', flag: '🇱🇻', name: 'Riga Intl Airport' },
  { code: 'TLL', city: 'Tallinn', country: 'Estonia', flag: '🇪🇪', name: 'Lennart Meri Airport' },
  { code: 'VNO', city: 'Vilnius', country: 'Lithuania', flag: '🇱🇹', name: 'Vilnius Airport' },
  { code: 'HEL', city: 'Helsinki', country: 'Finland', flag: '🇫🇮', name: 'Helsinki-Vantaa Airport' },
  { code: 'TMP', city: 'Tampere', country: 'Finland', flag: '🇫🇮', name: 'Tampere-Pirkkala Airport' },
  { code: 'TRD', city: 'Trondheim', country: 'Norway', flag: '🇳🇴', name: 'Trondheim Airport Værnes' },
  { code: 'BGO', city: 'Bergen', country: 'Norway', flag: '🇳🇴', name: 'Bergen Airport Flesland' },
  { code: 'GOT', city: 'Gothenburg', country: 'Sweden', flag: '🇸🇪', name: 'Göteborg Landvetter' },
  { code: 'MMX', city: 'Malmö', country: 'Sweden', flag: '🇸🇪', name: 'Malmö Airport' },
  { code: 'BLL', city: 'Billund', country: 'Denmark', flag: '🇩🇰', name: 'Billund Airport' },
  { code: 'AAR', city: 'Aarhus', country: 'Denmark', flag: '🇩🇰', name: 'Aarhus Airport' },
  { code: 'RKV', city: 'Reykjavik', country: 'Iceland', flag: '🇮🇸', name: 'Reykjavik Domestic Airport' },
  { code: 'SNN', city: 'Shannon', country: 'Ireland', flag: '🇮🇪', name: 'Shannon Airport' },
  { code: 'ORK', city: 'Cork', country: 'Ireland', flag: '🇮🇪', name: 'Cork Airport' },
  { code: 'BFS', city: 'Belfast', country: 'United Kingdom', flag: '🇬🇧', name: 'Belfast Intl Airport' },
  { code: 'GLA', city: 'Glasgow', country: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', name: 'Glasgow Airport' },
  { code: 'ABZ', city: 'Aberdeen', country: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', name: 'Aberdeen Airport' },
  { code: 'LUX', city: 'Luxembourg City', country: 'Luxembourg', flag: '🇱🇺', name: 'Luxembourg Airport' },
  { code: 'MST', city: 'Maastricht', country: 'Netherlands', flag: '🇳🇱', name: 'Maastricht Aachen Airport' },
  { code: 'RTM', city: 'Rotterdam', country: 'Netherlands', flag: '🇳🇱', name: 'Rotterdam The Hague Airport' },
  { code: 'ANR', city: 'Antwerp', country: 'Belgium', flag: '🇧🇪', name: 'Antwerp Intl Airport' },
  { code: 'CRL', city: 'Brussels', country: 'Belgium', flag: '🇧🇪', name: 'Brussels South Charleroi' },
  { code: 'TXL', city: 'Malta', country: 'Malta', flag: '🇲🇹', name: 'Malta Intl Airport' },
  { code: 'MLA', city: 'Valletta', country: 'Malta', flag: '🇲🇹', name: 'Malta Intl Airport' },
  { code: 'TIA', city: 'Tirana', country: 'Albania', flag: '🇦🇱', name: 'Mother Teresa Airport' },
  { code: 'OHD', city: 'Ohrid', country: 'North Macedonia', flag: '🇲🇰', name: 'Ohrid Airport' },
  { code: 'SKP', city: 'Skopje', country: 'North Macedonia', flag: '🇲🇰', name: 'Alexander the Great Airport' },

  // Middle East — expanded
  { code: 'AMM', city: 'Amman', country: 'Jordan', flag: '🇯🇴', name: 'Queen Alia Intl Airport' },
  { code: 'BEY', city: 'Beirut', country: 'Lebanon', flag: '🇱🇧', name: 'Rafic Hariri Intl Airport' },
  { code: 'DWC', city: 'Dubai', country: 'UAE', flag: '🇦🇪', name: 'Al Maktoum Intl Airport' },
  { code: 'SHJ', city: 'Sharjah', country: 'UAE', flag: '🇦🇪', name: 'Sharjah Intl Airport' },
  { code: 'AAN', city: 'Al Ain', country: 'UAE', flag: '🇦🇪', name: 'Al Ain Intl Airport' },
  { code: 'KHI', city: 'Karachi', country: 'Pakistan', flag: '🇵🇰', name: 'Jinnah Intl Airport' },
  { code: 'LHE', city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', name: 'Allama Iqbal Intl Airport' },
  { code: 'ISB', city: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', name: 'Islamabad Intl Airport' },

  // Africa — expanded
  { code: 'DUR', city: 'Durban', country: 'South Africa', flag: '🇿🇦', name: 'King Shaka Intl Airport' },
  { code: 'PLZ', city: 'Port Elizabeth', country: 'South Africa', flag: '🇿🇦', name: 'Chief Dawid Stuurman Intl' },
  { code: 'HRE', city: 'Harare', country: 'Zimbabwe', flag: '🇿🇼', name: 'Robert Gabriel Mugabe Intl' },
  { code: 'LUN', city: 'Lusaka', country: 'Zambia', flag: '🇿🇲', name: 'Kenneth Kaunda Intl' },
  { code: 'DAR', city: 'Dar es Salaam', country: 'Tanzania', flag: '🇹🇿', name: 'Julius Nyerere Intl' },
  { code: 'JRO', city: 'Kilimanjaro', country: 'Tanzania', flag: '🇹🇿', name: 'Kilimanjaro Intl Airport' },
  { code: 'ZNZ', city: 'Zanzibar', country: 'Tanzania', flag: '🇹🇿', name: 'Abeid Amani Karume Intl' },
  { code: 'EBB', city: 'Kampala', country: 'Uganda', flag: '🇺🇬', name: 'Entebbe Intl Airport' },
  { code: 'MBA', city: 'Mombasa', country: 'Kenya', flag: '🇰🇪', name: 'Moi Intl Airport' },
  { code: 'DKR', city: 'Dakar', country: 'Senegal', flag: '🇸🇳', name: 'Blaise Diagne Intl Airport' },
  { code: 'ABJ', city: 'Abidjan', country: 'Ivory Coast', flag: '🇨🇮', name: 'Félix-Houphouët-Boigny Intl' },
  { code: 'CMR', city: 'Douala', country: 'Cameroon', flag: '🇨🇲', name: 'Douala Intl Airport' },
  { code: 'MRU', city: 'Mauritius', country: 'Mauritius', flag: '🇲🇺', name: 'Sir Seewoosagur Ramgoolam Intl' },
  { code: 'SEZ', city: 'Mahé', country: 'Seychelles', flag: '🇸🇨', name: 'Seychelles Intl Airport' },
  { code: 'RUN', city: 'Saint-Denis', country: 'Réunion', flag: '🇷🇪', name: 'Roland Garros Airport' },
  { code: 'TNR', city: 'Antananarivo', country: 'Madagascar', flag: '🇲🇬', name: 'Ivato Intl Airport' },
  { code: 'CMN', city: 'Casablanca', country: 'Morocco', flag: '🇲🇦', name: 'Mohammed V Intl Airport' },
  { code: 'RAK', city: 'Marrakech', country: 'Morocco', flag: '🇲🇦', name: 'Menara Airport' },
  { code: 'AGA', city: 'Agadir', country: 'Morocco', flag: '🇲🇦', name: 'Al Massira Airport' },
  { code: 'TUN', city: 'Tunis', country: 'Tunisia', flag: '🇹🇳', name: 'Tunis-Carthage Intl' },
  { code: 'ALG', city: 'Algiers', country: 'Algeria', flag: '🇩🇿', name: 'Houari Boumediene Airport' },

  // Asia — expanded
  { code: 'CGK', city: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', name: 'Soekarno–Hatta Intl' },
  { code: 'SUB', city: 'Surabaya', country: 'Indonesia', flag: '🇮🇩', name: 'Juanda Intl Airport' },
  { code: 'UPG', city: 'Makassar', country: 'Indonesia', flag: '🇮🇩', name: 'Sultan Hasanuddin Intl' },
  { code: 'LOP', city: 'Lombok', country: 'Indonesia', flag: '🇮🇩', name: 'Lombok Intl Airport' },
  { code: 'MDC', city: 'Manado', country: 'Indonesia', flag: '🇮🇩', name: 'Sam Ratulangi Intl' },
  { code: 'PNH', city: 'Phnom Penh', country: 'Cambodia', flag: '🇰🇭', name: 'Phnom Penh Intl Airport' },
  { code: 'REP', city: 'Siem Reap', country: 'Cambodia', flag: '🇰🇭', name: 'Angkor Intl Airport' },
  { code: 'VTE', city: 'Vientiane', country: 'Laos', flag: '🇱🇦', name: 'Wattay Intl Airport' },
  { code: 'LPQ', city: 'Luang Prabang', country: 'Laos', flag: '🇱🇦', name: 'Luang Prabang Intl' },
  { code: 'RGN', city: 'Yangon', country: 'Myanmar', flag: '🇲🇲', name: 'Yangon Intl Airport' },
  { code: 'MDL', city: 'Mandalay', country: 'Myanmar', flag: '🇲🇲', name: 'Mandalay Intl Airport' },
  { code: 'CMB', city: 'Colombo', country: 'Sri Lanka', flag: '🇱🇰', name: 'Bandaranaike Intl Airport' },
  { code: 'MLE', city: 'Malé', country: 'Maldives', flag: '🇲🇻', name: 'Velana Intl Airport' },
  { code: 'KTM', city: 'Kathmandu', country: 'Nepal', flag: '🇳🇵', name: 'Tribhuvan Intl Airport' },
  { code: 'DAC', city: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', name: 'Hazrat Shahjalal Intl' },
  { code: 'PBH', city: 'Paro', country: 'Bhutan', flag: '🇧🇹', name: 'Paro Airport' },
  { code: 'ULN', city: 'Ulaanbaatar', country: 'Mongolia', flag: '🇲🇳', name: 'Chinggis Khaan Intl' },
  { code: 'TAS', city: 'Tashkent', country: 'Uzbekistan', flag: '🇺🇿', name: 'Islam Karimov Intl Airport' },
  { code: 'ALA', city: 'Almaty', country: 'Kazakhstan', flag: '🇰🇿', name: 'Almaty Intl Airport' },
  { code: 'NQZ', city: 'Astana', country: 'Kazakhstan', flag: '🇰🇿', name: 'Nursultan Nazarbayev Intl' },
  { code: 'FRU', city: 'Bishkek', country: 'Kyrgyzstan', flag: '🇰🇬', name: 'Manas Intl Airport' },
  { code: 'GYD', city: 'Baku', country: 'Azerbaijan', flag: '🇦🇿', name: 'Heydar Aliyev Intl Airport' },
  { code: 'TBS', city: 'Tbilisi', country: 'Georgia', flag: '🇬🇪', name: 'Shota Rustaveli Intl' },
  { code: 'EVN', city: 'Yerevan', country: 'Armenia', flag: '🇦🇲', name: 'Zvartnots Intl Airport' },
  { code: 'XIY', city: 'Xi\'an', country: 'China', flag: '🇨🇳', name: 'Xi\'an Xianyang Intl' },
  { code: 'KMG', city: 'Kunming', country: 'China', flag: '🇨🇳', name: 'Kunming Changshui Intl' },
  { code: 'SZX', city: 'Shenzhen', country: 'China', flag: '🇨🇳', name: 'Bao\'an Intl Airport' },
  { code: 'HAK', city: 'Haikou', country: 'China', flag: '🇨🇳', name: 'Meilan Intl Airport' },
  { code: 'SYA', city: 'Sanya', country: 'China', flag: '🇨🇳', name: 'Phoenix Intl Airport' },
  { code: 'WUH', city: 'Wuhan', country: 'China', flag: '🇨🇳', name: 'Tianhe Intl Airport' },
  { code: 'CSX', city: 'Changsha', country: 'China', flag: '🇨🇳', name: 'Huanghua Intl Airport' },
  { code: 'HGH', city: 'Hangzhou', country: 'China', flag: '🇨🇳', name: 'Xiaoshan Intl Airport' },
  { code: 'XMN', city: 'Xiamen', country: 'China', flag: '🇨🇳', name: 'Gaoqi Intl Airport' },
  { code: 'PUS', city: 'Busan', country: 'South Korea', flag: '🇰🇷', name: 'Gimhae Intl Airport' },
  { code: 'CJU', city: 'Jeju', country: 'South Korea', flag: '🇰🇷', name: 'Jeju Intl Airport' },
  { code: 'OKA', city: 'Okinawa', country: 'Japan', flag: '🇯🇵', name: 'Naha Airport' },
  { code: 'NGO', city: 'Nagoya', country: 'Japan', flag: '🇯🇵', name: 'Chubu Centrair Intl' },
  { code: 'FUK', city: 'Fukuoka', country: 'Japan', flag: '🇯🇵', name: 'Fukuoka Airport' },
  { code: 'CTS', city: 'Sapporo', country: 'Japan', flag: '🇯🇵', name: 'New Chitose Airport' },
  { code: 'HIJ', city: 'Hiroshima', country: 'Japan', flag: '🇯🇵', name: 'Hiroshima Airport' },
  { code: 'ITM', city: 'Osaka', country: 'Japan', flag: '🇯🇵', name: 'Itami Airport' },
  { code: 'DVO', city: 'Davao', country: 'Philippines', flag: '🇵🇭', name: 'Francisco Bangoy Intl' },
  { code: 'CEB', city: 'Cebu', country: 'Philippines', flag: '🇵🇭', name: 'Mactan-Cebu Intl Airport' },
  { code: 'BKI', city: 'Kota Kinabalu', country: 'Malaysia', flag: '🇲🇾', name: 'Kota Kinabalu Intl' },
  { code: 'PEN', city: 'Penang', country: 'Malaysia', flag: '🇲🇾', name: 'Penang Intl Airport' },
  { code: 'JHB', city: 'Johor Bahru', country: 'Malaysia', flag: '🇲🇾', name: 'Senai Intl Airport' },
  { code: 'LGK', city: 'Langkawi', country: 'Malaysia', flag: '🇲🇾', name: 'Langkawi Intl Airport' },

  // North America — expanded
  { code: 'YUL', city: 'Montreal', country: 'Canada', flag: '🇨🇦', name: 'Pierre Elliott Trudeau Intl' },
  { code: 'YOW', city: 'Ottawa', country: 'Canada', flag: '🇨🇦', name: 'Ottawa Macdonald–Cartier Intl' },
  { code: 'YHZ', city: 'Halifax', country: 'Canada', flag: '🇨🇦', name: 'Halifax Stanfield Intl' },
  { code: 'YWG', city: 'Winnipeg', country: 'Canada', flag: '🇨🇦', name: 'Winnipeg James Armstrong Richardson Intl' },
  { code: 'YXE', city: 'Saskatoon', country: 'Canada', flag: '🇨🇦', name: 'John G. Diefenbaker Intl' },
  { code: 'YVR', city: 'Vancouver', country: 'Canada', flag: '🇨🇦', name: 'Vancouver Intl Airport' },
  { code: 'HNL', city: 'Honolulu', country: 'USA', flag: '🇺🇸', name: 'Daniel K. Inouye Intl' },
  { code: 'ANC', city: 'Anchorage', country: 'USA', flag: '🇺🇸', name: 'Ted Stevens Intl Airport' },
  { code: 'PDX', city: 'Portland', country: 'USA', flag: '🇺🇸', name: 'Portland Intl Airport' },
  { code: 'SEA', city: 'Seattle', country: 'USA', flag: '🇺🇸', name: 'Seattle-Tacoma Intl' },
  { code: 'DEN', city: 'Denver', country: 'USA', flag: '🇺🇸', name: 'Denver Intl Airport' },
  { code: 'PHX', city: 'Phoenix', country: 'USA', flag: '🇺🇸', name: 'Phoenix Sky Harbor Intl' },
  { code: 'TPA', city: 'Tampa', country: 'USA', flag: '🇺🇸', name: 'Tampa Intl Airport' },
  { code: 'MSY', city: 'New Orleans', country: 'USA', flag: '🇺🇸', name: 'Louis Armstrong Intl' },
  { code: 'AUS', city: 'Austin', country: 'USA', flag: '🇺🇸', name: 'Austin-Bergstrom Intl' },
  { code: 'BNA', city: 'Nashville', country: 'USA', flag: '🇺🇸', name: 'Nashville Intl Airport' },
  { code: 'RDU', city: 'Raleigh', country: 'USA', flag: '🇺🇸', name: 'Raleigh-Durham Intl' },
  { code: 'BWI', city: 'Baltimore', country: 'USA', flag: '🇺🇸', name: 'Baltimore Washington Intl' },
  { code: 'IAD', city: 'Washington DC', country: 'USA', flag: '🇺🇸', name: 'Dulles Intl Airport' },
  { code: 'DCA', city: 'Washington DC', country: 'USA', flag: '🇺🇸', name: 'Ronald Reagan National' },
  { code: 'LGA', city: 'New York', country: 'USA', flag: '🇺🇸', name: 'LaGuardia Airport' },
  { code: 'CLE', city: 'Cleveland', country: 'USA', flag: '🇺🇸', name: 'Cleveland Hopkins Intl' },
  { code: 'CMH', city: 'Columbus', country: 'USA', flag: '🇺🇸', name: 'John Glenn Columbus Intl' },
  { code: 'IND', city: 'Indianapolis', country: 'USA', flag: '🇺🇸', name: 'Indianapolis Intl Airport' },
  { code: 'MKE', city: 'Milwaukee', country: 'USA', flag: '🇺🇸', name: 'Mitchell Intl Airport' },
  { code: 'STL', city: 'St. Louis', country: 'USA', flag: '🇺🇸', name: 'Lambert–St. Louis Intl' },
  { code: 'MCI', city: 'Kansas City', country: 'USA', flag: '🇺🇸', name: 'Kansas City Intl Airport' },
  { code: 'OMA', city: 'Omaha', country: 'USA', flag: '🇺🇸', name: 'Eppley Airfield' },
  { code: 'ABQ', city: 'Albuquerque', country: 'USA', flag: '🇺🇸', name: 'Sunport Intl Airport' },
  { code: 'OKC', city: 'Oklahoma City', country: 'USA', flag: '🇺🇸', name: 'Will Rogers World Airport' },
  { code: 'TUL', city: 'Tulsa', country: 'USA', flag: '🇺🇸', name: 'Tulsa Intl Airport' },
  { code: 'MSN', city: 'Madison', country: 'USA', flag: '🇺🇸', name: 'Dane County Regional Airport' },
  { code: 'GJT', city: 'Grand Junction', country: 'USA', flag: '🇺🇸', name: 'Grand Junction Regional' },
  { code: 'BOI', city: 'Boise', country: 'USA', flag: '🇺🇸', name: 'Boise Airport' },
  { code: 'GEG', city: 'Spokane', country: 'USA', flag: '🇺🇸', name: 'Spokane Intl Airport' },

  // South & Central America — expanded
  { code: 'BSB', city: 'Brasília', country: 'Brazil', flag: '🇧🇷', name: 'Presidente Juscelino Kubitschek Intl' },
  { code: 'SSA', city: 'Salvador', country: 'Brazil', flag: '🇧🇷', name: 'Deputado Luís Eduardo Magalhães Intl' },
  { code: 'FOR', city: 'Fortaleza', country: 'Brazil', flag: '🇧🇷', name: 'Pinto Martins Intl Airport' },
  { code: 'REC', city: 'Recife', country: 'Brazil', flag: '🇧🇷', name: 'Guararapes–Gilberto Freyre Intl' },
  { code: 'MAN', city: 'Manaus', country: 'Brazil', flag: '🇧🇷', name: 'Eduardo Gomes Intl Airport' },
  { code: 'CWB', city: 'Curitiba', country: 'Brazil', flag: '🇧🇷', name: 'Afonso Pena Intl Airport' },
  { code: 'AEP', city: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', name: 'Jorge Newbery Airfield' },
  { code: 'COR', city: 'Córdoba', country: 'Argentina', flag: '🇦🇷', name: 'Ingeniero Aeronáutico Ambrosio' },
  { code: 'MDZ', city: 'Mendoza', country: 'Argentina', flag: '🇦🇷', name: 'El Plumerillo Airport' },
  { code: 'UIO', city: 'Quito', country: 'Ecuador', flag: '🇪🇨', name: 'Mariscal Sucre Intl Airport' },
  { code: 'GYE', city: 'Guayaquil', country: 'Ecuador', flag: '🇪🇨', name: 'José Joaquín de Olmedo Intl' },
  { code: 'VVI', city: 'Santa Cruz', country: 'Bolivia', flag: '🇧🇴', name: 'Viru Viru Intl Airport' },
  { code: 'LPB', city: 'La Paz', country: 'Bolivia', flag: '🇧🇴', name: 'El Alto Intl Airport' },
  { code: 'ASU', city: 'Asunción', country: 'Paraguay', flag: '🇵🇾', name: 'Silvio Pettirossi Intl' },
  { code: 'SDQ', city: 'Santo Domingo', country: 'Dominican Republic', flag: '🇩🇴', name: 'Las Américas Intl Airport' },
  { code: 'PUJ', city: 'Punta Cana', country: 'Dominican Republic', flag: '🇩🇴', name: 'Punta Cana Intl Airport' },
  { code: 'HAV', city: 'Havana', country: 'Cuba', flag: '🇨🇺', name: 'José Martí Intl Airport' },
  { code: 'NAS', city: 'Nassau', country: 'Bahamas', flag: '🇧🇸', name: 'Lynden Pindling Intl' },
  { code: 'KIN', city: 'Kingston', country: 'Jamaica', flag: '🇯🇲', name: 'Norman Manley Intl Airport' },
  { code: 'MBJ', city: 'Montego Bay', country: 'Jamaica', flag: '🇯🇲', name: 'Sangster Intl Airport' },
  { code: 'SJO', city: 'San José', country: 'Costa Rica', flag: '🇨🇷', name: 'Juan Santamaría Intl' },
  { code: 'SAP', city: 'San Pedro Sula', country: 'Honduras', flag: '🇭🇳', name: 'Ramón Villeda Morales Intl' },
  { code: 'GUA', city: 'Guatemala City', country: 'Guatemala', flag: '🇬🇹', name: 'La Aurora Intl Airport' },

  // Oceania — expanded
  { code: 'CBR', city: 'Canberra', country: 'Australia', flag: '🇦🇺', name: 'Canberra Airport' },
  { code: 'ADL', city: 'Adelaide', country: 'Australia', flag: '🇦🇺', name: 'Adelaide Airport' },
  { code: 'HBA', city: 'Hobart', country: 'Australia', flag: '🇦🇺', name: 'Hobart Airport' },
  { code: 'DRW', city: 'Darwin', country: 'Australia', flag: '🇦🇺', name: 'Darwin Intl Airport' },
  { code: 'OOL', city: 'Gold Coast', country: 'Australia', flag: '🇦🇺', name: 'Gold Coast Airport' },
  { code: 'CNS', city: 'Cairns', country: 'Australia', flag: '🇦🇺', name: 'Cairns Airport' },
  { code: 'WLG', city: 'Wellington', country: 'New Zealand', flag: '🇳🇿', name: 'Wellington Airport' },
  { code: 'ZQN', city: 'Queenstown', country: 'New Zealand', flag: '🇳🇿', name: 'Queenstown Airport' },
  { code: 'DUD', city: 'Dunedin', country: 'New Zealand', flag: '🇳🇿', name: 'Dunedin Airport' },
  { code: 'NAN', city: 'Nadi', country: 'Fiji', flag: '🇫🇯', name: 'Nadi Intl Airport' },
  { code: 'APW', city: 'Apia', country: 'Samoa', flag: '🇼🇸', name: 'Faleolo Intl Airport' },
  { code: 'PPT', city: 'Papeete', country: 'French Polynesia', flag: '🇵🇫', name: 'Faa\'a Intl Airport' },
  { code: 'GUM', city: 'Guam', country: 'Guam', flag: '🇬🇺', name: 'Antonio B. Won Pat Intl' },
  { code: 'ROR', city: 'Koror', country: 'Palau', flag: '🇵🇼', name: 'Roman Tmetuchl Intl Airport' },
  
  //Extra
  
  { code: 'VCP', city: 'Campinas', country: 'Brazil', flag: '🇧🇷', name: 'Viracopos Intl Airport' },
  { code: 'ABV', city: 'Abuja', country: 'Nigeria', flag: '🇳🇬', name: 'Nnamdi Azikiwe Intl' },
  { code: 'COK', city: 'Kochi', country: 'India', flag: '🇮🇳', name: 'Cochin Intl Airport' },
  { code: 'AMD', city: 'Ahmedabad', country: 'India', flag: '🇮🇳', name: 'Sardar Vallabhbhai Patel Intl' },
  { code: 'PNQ', city: 'Pune', country: 'India', flag: '🇮🇳', name: 'Pune Airport' },
  { code: 'GOI', city: 'Goa', country: 'India', flag: '🇮🇳', name: 'Manohar Intl Airport' },
  { code: 'DAD', city: 'Da Nang', country: 'Vietnam', flag: '🇻🇳', name: 'Da Nang Intl Airport' },
  { code: 'HKT', city: 'Phuket', country: 'Thailand', flag: '🇹🇭', name: 'Phuket Intl Airport' },
  { code: 'CNX', city: 'Chiang Mai', country: 'Thailand', flag: '🇹🇭', name: 'Chiang Mai Intl Airport' },
  { code: 'RVN', city: 'Rovaniemi', country: 'Finland', flag: '🇫🇮', name: 'Rovaniemi Airport' },
  { code: 'OUL', city: 'Oulu', country: 'Finland', flag: '🇫🇮', name: 'Oulu Airport' },
  { code: 'TKU', city: 'Turku', country: 'Finland', flag: '🇫🇮', name: 'Turku Airport' },
  { code: 'MHQ', city: 'Mariehamn', country: 'Finland', flag: '🇫🇮', name: 'Mariehamn Airport' },
  { code: 'SVG', city: 'Stavanger', country: 'Norway', flag: '🇳🇴', name: 'Stavanger Airport Sola' },
  { code: 'SZG', city: 'Salzburg', country: 'Austria', flag: '🇦🇹', name: 'Salzburg Airport W. A. Mozart' },
  { code: 'INN', city: 'Innsbruck', country: 'Austria', flag: '🇦🇹', name: 'Innsbruck Airport' },
  { code: 'HAJ', city: 'Hannover', country: 'Germany', flag: '🇩🇪', name: 'Hannover Airport' },
  { code: 'BIO', city: 'Bilbao', country: 'Spain', flag: '🇪🇸', name: 'Bilbao Airport' },
  { code: 'ALC', city: 'Alicante', country: 'Spain', flag: '🇪🇸', name: 'Alicante–Elche Miguel Hernández' },
  { code: 'FLR', city: 'Florence', country: 'Italy', flag: '🇮🇹', name: 'Florence Airport Amerigo Vespucci' },
  { code: 'TRN', city: 'Turin', country: 'Italy', flag: '🇮🇹', name: 'Turin Airport' },
  { code: 'LCA', city: 'Larnaca', country: 'Cyprus', flag: '🇨🇾', name: 'Larnaca Intl Airport' },
  { code: 'OTP', city: 'Bucharest', country: 'Romania', flag: '🇷🇴', name: 'Henri Coandă Intl Airport' },
  { code: 'KBP', city: 'Kyiv', country: 'Ukraine', flag: '🇺🇦', name: 'Boryspil Intl Airport' },
  { code: 'KIV', city: 'Chișinău', country: 'Moldova', flag: '🇲🇩', name: 'Chișinău Intl Airport' },
  { code: 'BTS', city: 'Bratislava', country: 'Slovakia', flag: '🇸🇰', name: 'M. R. Štefánik Airport' },
  { code: 'SJJ', city: 'Sarajevo', country: 'Bosnia and Herzegovina', flag: '🇧🇦', name: 'Sarajevo Intl Airport' },
  { code: 'TGD', city: 'Podgorica', country: 'Montenegro', flag: '🇲🇪', name: 'Podgorica Airport' },
  { code: 'SNA', city: 'Santa Ana', country: 'USA', flag: '🇺🇸', name: 'John Wayne Airport' },
  { code: 'OAK', city: 'Oakland', country: 'USA', flag: '🇺🇸', name: 'Oakland Intl Airport' },
  { code: 'SJC', city: 'San Jose', country: 'USA', flag: '🇺🇸', name: 'San Jose Intl Airport' },
  { code: 'SMF', city: 'Sacramento', country: 'USA', flag: '🇺🇸', name: 'Sacramento Intl' },
  { code: 'SAT', city: 'San Antonio', country: 'USA', flag: '🇺🇸', name: 'San Antonio Intl' },
  { code: 'RSW', city: 'Fort Myers', country: 'USA', flag: '🇺🇸', name: 'Southwest Florida Intl' },
  { code: 'PBI', city: 'West Palm Beach', country: 'USA', flag: '🇺🇸', name: 'Palm Beach Intl Airport' },
  { code: 'JAX', city: 'Jacksonville', country: 'USA', flag: '🇺🇸', name: 'Jacksonville Intl' },
  { code: 'PIT', city: 'Pittsburgh', country: 'USA', flag: '🇺🇸', name: 'Pittsburgh Intl Airport' },
  { code: 'CVG', city: 'Cincinnati', country: 'USA', flag: '🇺🇸', name: 'Cincinnati/Northern Kentucky' },
  { code: 'MTY', city: 'Monterrey', country: 'Mexico', flag: '🇲🇽', name: 'Monterrey Intl Airport' },
  { code: 'KHH', city: 'Kaohsiung', country: 'Taiwan', flag: '🇹🇼', name: 'Kaohsiung Intl Airport' },
  { code: 'KNO', city: 'Medan', country: 'Indonesia', flag: '🇮🇩', name: 'Kualanamu Intl Airport' },
  { code: 'KCH', city: 'Kuching', country: 'Malaysia', flag: '🇲🇾', name: 'Kuching Intl Airport' },
  { code: 'CRK', city: 'Angeles City', country: 'Philippines', flag: '🇵🇭', name: 'Clark Intl Airport' },
  { code: 'CXR', city: 'Nha Trang', country: 'Vietnam', flag: '🇻🇳', name: 'Cam Ranh Intl Airport' },
  { code: 'CGP', city: 'Chittagong', country: 'Bangladesh', flag: '🇧🇩', name: 'Shah Amanat Intl' },
  { code: 'LKO', city: 'Lucknow', country: 'India', flag: '🇮🇳', name: 'Chaudhary Charan Singh Intl' },
  { code: 'TRV', city: 'Thiruvananthapuram', country: 'India', flag: '🇮🇳', name: 'Trivandrum Intl Airport' },
  { code: 'CKG', city: 'Chongqing', country: 'China', flag: '🇨🇳', name: 'Chongqing Jiangbei Intl' },
  { code: 'CCS', city: 'Caracas', country: 'Venezuela', flag: '🇻🇪', name: 'Simón Bolívar Intl' }
];

// Autocomplete function - triggers on 3+ chars
function acSearch(input, dropdownId) {
  const dd = document.getElementById(dropdownId);
  const q = input.value.trim().toLowerCase();
  if (q.length < 3) { dd.classList.remove('open'); return; }
  const matches = airports.filter(a =>
    a.city.toLowerCase().includes(q) ||
    a.code.toLowerCase().includes(q) ||
    a.country.toLowerCase().includes(q) ||
    a.name.toLowerCase().includes(q)
  ).slice(0, 8);
  if (!matches.length) { dd.classList.remove('open'); return; }
  dd.innerHTML = matches.map(a => `
    <div class="ac-item" onclick="selectAirport('${input.id}','${dropdownId}','${a.city} (${a.code})','${a.code}')">
      <span class="ac-item-flag">${a.flag}</span>
      <div class="ac-item-info">
        <strong>${a.city}</strong>
        <small>${a.name} · ${a.country}</small>
      </div>
      <span class="ac-item-code">${a.code}</span>
    </div>
  `).join('');
  dd.classList.add('open');
}

function selectAirport(inputId, dropdownId, label, code) {
  document.getElementById(inputId).value = label;
  document.getElementById(inputId).dataset.code = code;
  document.getElementById(dropdownId).classList.remove('open');
}

// Close dropdowns on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.ac-wrap')) {
    document.querySelectorAll('.ac-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('slideDots');

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goSlide(i);
  dotsContainer.appendChild(dot);
});

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

setInterval(() => goSlide((currentSlide + 1) % slides.length), 5500);

// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Tab switching
function switchTab(name, el) {
  document.querySelectorAll('.booking-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.booking-form').forEach(f => f.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

// ── CITY HISTORY DATABASE ──
const cities = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    imgMain: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=85',
    quote: '"Paris is always a good idea." — Audrey Hepburn',
    p1: 'Paris, established as a Celtic settlement around 250 BC, became Lutetia under Roman rule before evolving into the cultural capital of Western civilisation. By the medieval period, the city\'s famous Île de la Cité held the magnificent Notre-Dame, begun in 1163.',
    p2: 'The French Revolution of 1789 irrevocably shaped its character. The Eiffel Tower, built for the 1889 World\'s Fair, was initially controversial but became the world\'s most visited monument. Haussmann\'s 19th-century redesign gave Paris its iconic wide boulevards and unified limestone façades.'
  },
  {
    id: 'london',
    name: 'London',
    country: 'England',
    imgMain: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=85',
    quote: '"When a man is tired of London, he is tired of life." — Samuel Johnson',
    p1: 'London\'s story began as Londinium, a Roman settlement founded around 50 AD on the north bank of the Thames. It grew into the empire\'s most important northern trading post. The Tower of London, built by William the Conqueror in 1078, stands as a monument to over a thousand years of history.',
    p2: 'The Great Fire of 1666 destroyed much of medieval London, but Christopher Wren\'s rebuilding — including St Paul\'s Cathedral — gave the city its enduring architectural grandeur. From the British Empire\'s seat of power to today\'s global financial hub, London remains one of the world\'s most dynamic and diverse cities.'
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'USA',
    imgMain: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=85',
    quote: '"New York is not a city — it\'s a world." — Vin Diesel',
    p1: 'The land of New York was inhabited by the Lenape people for thousands of years before Dutch colonists established New Amsterdam in 1624. The British renamed it New York in 1664. Its superb natural harbour made it the gateway for millions of immigrants arriving at Ellis Island from the 1890s onwards.',
    p2: 'The construction of the Brooklyn Bridge (1883), the Statue of Liberty (1886), and the Empire State Building (1931) defined eras of American ambition. Manhattan\'s grid street plan, conceived in 1811, shaped one of the world\'s most legendary urban landscapes — a city of ceaseless reinvention.'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    imgMain: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=85',
    quote: '"Tokyo is a city of contrasts — ancient shrines stand in the shadow of glass towers."',
    p1: 'Originally named Edo, Tokyo\'s history stretches to the 12th century when a minor lord built a castle at the mouth of the Sumida River. The Tokugawa shogunate transformed it into Japan\'s de facto capital in 1603, creating one of the world\'s largest cities before Western contact.',
    p2: 'The Meiji Restoration of 1868 renamed the city Tokyo, meaning "Eastern Capital." Despite devastating earthquakes in 1923 and Allied bombing in WWII, Tokyo rebuilt and hosted the 1964 Olympics, cementing its status as a global metropolis of extraordinary resilience.'
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    imgMain: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=85',
    quote: '"Sydney is one of the great cities of the world — a harbour of almost incomparable beauty."',
    p1: 'The Sydney basin has been inhabited by the Eora people for at least 30,000 years, making it one of the oldest continuously inhabited regions on Earth. European history began dramatically in 1788 when the First Fleet established a British penal colony at Port Jackson — the birth of modern Australia.',
    p2: 'The Sydney Harbour Bridge, opened in 1932, and the Opera House, completed in 1973 after a decade of construction, became global icons. Today, Sydney blends its colonial heritage with a vibrant multicultural identity as one of the Asia-Pacific\'s most prosperous and cosmopolitan cities.'
  },
  {
    id: 'rio',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    imgMain: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=85',
    quote: '"Rio is the city where God goes on holiday." — Brazilian saying',
    p1: 'Rio de Janeiro was founded by Portuguese colonists in 1565 and served as the capital of the Portuguese Empire from 1808, when the royal family fled Napoleon\'s invasion of Lisbon. This unique colonial history gave Rio a grandeur unmatched by other South American cities.',
    p2: 'The completion of the Christ the Redeemer statue atop Corcovado in 1931 gave Rio its eternal symbol. The city\'s Carnival, blending African, Indigenous, and European traditions, is the world\'s largest festival. Despite its social contrasts, Rio remains a city of extraordinary natural drama: mountains, jungle, and ocean at every turn.'
  },
  {
    id: 'capetown',
    name: 'Cape Town',
    country: 'South Africa',
    imgMain: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1474314881477-04c4aac40a0e?w=600&q=85',
    quote: '"Cape Town is not just beautiful — it is otherworldly." — Nelson Mandela',
    p1: 'Inhabited by the Khoikhoi and San peoples for millennia, Cape Town\'s modern history began in 1652 when the Dutch East India Company established a refreshment station at the foot of Table Mountain. The Cape of Good Hope had been a strategic waypoint for European explorers since Bartholomew Dias rounded it in 1488.',
    p2: 'British control from 1806 shaped the city\'s colonial character. Robben Island, visible from the Cape Town waterfront, held Nelson Mandela prisoner for 18 years — and became a symbol of the anti-apartheid struggle. Today, Cape Town is one of the world\'s most strikingly beautiful cities, where the Atlantic meets the slopes of Table Mountain.'
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    imgMain: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=85',
    quote: '"All roads lead to Rome." — Medieval proverb',
    p1: 'According to legend, Rome was founded in 753 BC by Romulus. Archaeological evidence confirms continuous settlement in the area since at least the 9th century BC. At its height, the Roman Empire stretched from Britain to Mesopotamia, shaping the legal, linguistic, and cultural foundations of Western civilisation.',
    p2: 'After the fall of the Western Empire in 476 AD, Rome became the seat of the Catholic Church — the spiritual centre of the medieval world. The Renaissance saw Michelangelo paint the Sistine Chapel and Raphael decorate the Vatican. Today, walking through Rome means moving through 28 centuries of human history in a single afternoon.'
  },
  {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    imgMain: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85',
    quote: '"Zurich is a place where the clock runs differently — slower, more deliberately, more beautifully."',
    p1: 'Zurich\'s origins trace back to the Neolithic lake-dwelling settlements of 4300 BC, making it one of Europe\'s oldest continuously inhabited sites. The Romans established a customs post called Turicum on the Limmat River around 15 BC, and medieval Zurich grew into one of the most prosperous free cities of the Holy Roman Empire.',
    p2: 'The Protestant Reformation ignited here in 1519, when Ulrich Zwingli preached at the Grossmünster cathedral — reshaping European religious history. Zurich became a global financial centre in the 20th century. Today it consistently ranks as one of the world\'s most liveable cities, where exceptional quality of life meets Alpine grandeur.'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    imgMain: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=85',
    quote: '"In Bali, every day is a ceremony — the sacred is woven into the ordinary."',
    p1: 'Bali\'s Hindu heritage stretches back over 2,000 years, shaped by Indian traders who arrived long before the 9th century. When the Islamic Majapahit empire swept through Java in the 15th century, Bali became the last refuge of the Hindu-Buddhist royal courts, preserving a civilisation that would have otherwise vanished.',
    p2: 'Dutch colonisation arrived in the late 19th century but Bali\'s cultural identity proved remarkably resilient. Independence in 1945 and the late 20th-century tourism boom brought the world to its shores, yet its thousand-year-old temple rituals continue every sunrise, unchanged.'
  },
  {
    id: 'helsinki',
    name: 'Helsinki',
    country: 'Finland',
    imgMain: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=85',
    quote: '"Helsinki is a city that earns your trust slowly — and keeps it forever."',
    p1: 'Helsinki was founded in 1550 by King Gustav Vasa of Sweden to rival the Hanseatic trading city of Tallinn across the Gulf of Finland. For centuries it remained a modest coastal town. When Russia defeated Sweden in the Finnish War of 1808–09, Finland became a Grand Duchy of the Russian Empire and Helsinki was elevated to capital in 1812.',
    p2: 'The city was redesigned in a neoclassical style to resemble St Petersburg, giving it the grand Senate Square and Cathedral that define its skyline today. Finland declared independence in 1917 and Helsinki evolved into one of the world\'s most liveable and design-forward capitals — famed for its saunas, islands, and the sweeping modernism of Alvar Aalto.'
  },
  {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    imgMain: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=600&q=85',
    quote: '"Berlin is poor but sexy." — Klaus Wowereit, former Mayor of Berlin',
    p1: 'Berlin traces its origins to twin medieval settlements — Cölln and Berlin — founded around 1237 on islands in the River Spree. It rose to prominence as the capital of Brandenburg-Prussia, and by the 18th century under Frederick the Great it had become a major European intellectual and cultural centre, home to Enlightenment philosophy and the Royal Prussian Academy.',
    p2: 'The 20th century tested Berlin like no other city: it was the capital of the Weimar Republic, the Nazi Third Reich, and then divided for 28 years by the Wall from 1961 to 1989. The fall of the Wall transformed it overnight. Reunified Berlin reinvented itself as Europe\'s creative capital — raw, experimental, and endlessly alive with art, music, and memory.'
  },
  {
    id: 'losangeles',
    name: 'Los Angeles',
    country: 'USA',
    imgMain: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=800&q=85',
    imgAccent: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=85',
    quote: '"Los Angeles is a constellation of possibilities." — Carolyn See',
    p1: 'The land of Los Angeles was home to the Tongva people for at least 8,000 years before Spanish missionaries established the pueblo of El Pueblo de Nuestra Señora la Reina de los Ángeles in 1781. It remained a quiet agricultural town until the arrival of the transcontinental railroad in 1876 triggered a land boom that would reshape the American West.',
    p2: 'The birth of Hollywood in the early 20th century turned Los Angeles into the global capital of entertainment and dreams. The 1932 and 1984 Olympics, the aerospace industry, and a tidal wave of cultural immigration made it one of the world\'s most diverse and influential metropolises — a city where the Pacific horizon feels like a promise.'
  }
];

let currentCity = 0;

function buildHistorySection() {
  const tabsEl = document.getElementById('historyTabs');
  const contentEl = document.getElementById('historyContent');
  tabsEl.innerHTML = cities.map((c, i) =>
    `<button class="history-tab${i===0?' active':''}" onclick="switchHistoryTab(${i},this)">${c.name}</button>`
  ).join('');
  renderHistoryCity(0);
}

function renderHistoryCity(idx) {
  const c = cities[idx];
  document.getElementById('histImgMain').style.backgroundImage = `url('${c.imgMain}')`;
  document.getElementById('histImgAccent').style.backgroundImage = `url('${c.imgAccent}')`;
  document.getElementById('historyContent').innerHTML = `
    <p style="font-size:0.78rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);margin-bottom:0.8rem">${c.country}</p>
    <p style="font-size:0.92rem;line-height:1.9;color:rgba(255,255,255,0.65);margin-bottom:1.2rem">${c.p1}</p>
    <div class="history-highlight">${c.quote}</div>
    <p style="font-size:0.92rem;line-height:1.9;color:rgba(255,255,255,0.65);margin-bottom:1.2rem">${c.p2}</p>
  `;
}

function switchHistoryTab(idx, el) {
  document.querySelectorAll('.history-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderHistoryCity(idx);
}

buildHistorySection();

// Booking modal
const modalData = {
  flights: {
    title: 'Search Flights',
    links: [
      { name: 'Skyscanner', desc: 'Compare 1000s of airlines', icon: '✈', url: 'https://www.skyscanner.com' },
      { name: 'Google Flights', desc: 'Price tracking & alerts', icon: '🔍', url: 'https://flights.google.com' },
      { name: 'Kayak', desc: 'Fare prediction AI', icon: '📊', url: 'https://www.kayak.com' },
      { name: 'Momondo', desc: 'Hidden city fares', icon: '💡', url: 'https://www.momondo.com' }
    ]
  },
  hotels: {
    title: 'Find Hotels & Stays',
    links: [
      { name: 'Booking.com', desc: 'Free cancellation deals', icon: '🏨', url: 'https://www.booking.com' },
      { name: 'Airbnb', desc: 'Unique local homes', icon: '🏠', url: 'https://www.airbnb.com' },
      { name: 'Hotels.com', desc: 'Earn free nights', icon: '🎖', url: 'https://www.hotels.com' },
      { name: 'Hostelworld', desc: 'Budget & social stays', icon: '🌍', url: 'https://www.hostelworld.com' }
    ]
  },
  cars: {
    title: 'Rent a Car',
    links: [
      { name: 'RentalCars.com', desc: 'Best price guarantee', icon: '🚗', url: 'https://www.rentalcars.com' },
      { name: 'Hertz', desc: 'Premium fleet worldwide', icon: '🏎', url: 'https://www.hertz.com' },
      { name: 'Enterprise', desc: 'Trusted global brand', icon: '🚙', url: 'https://www.enterprise.com' },
      { name: 'Sixt', desc: 'Luxury & electric cars', icon: '⚡', url: 'https://www.sixt.com' }
    ]
  },
  tours: {
    title: 'Book Tours & Experiences',
    links: [
      { name: 'Viator', desc: '300,000+ experiences', icon: '🗺', url: 'https://www.viator.com' },
      { name: 'GetYourGuide', desc: 'Skip-the-line tickets', icon: '🎟', url: 'https://www.getyourguide.com' },
      { name: 'Airbnb Exp.', desc: 'Hosted by locals', icon: '🤝', url: 'https://www.airbnb.com/experiences' },
      { name: 'Klook', desc: 'Asia & beyond', icon: '🏯', url: 'https://www.klook.com' }
    ]
  }
};

function openBookingModal(type) {
  const d = modalData[type];
  document.getElementById('modal-title').textContent = d.title;
  document.getElementById('modal-links').innerHTML = d.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link">
      <div class="modal-link-icon">${l.icon}</div>
      <div class="modal-link-info"><strong>${l.name}</strong><small>${l.desc}</small></div>
    </a>`
  ).join('');
  document.getElementById('modal').classList.add('open');
}
function closeModal(e) { if (e.target.id === 'modal') closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal').classList.remove('open'); }

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));