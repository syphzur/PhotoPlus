export class CountryCode {

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }

    static readonly codes = new Array<CountryCode>();

    static readonly HT = new CountryCode('HT', 'Haiti');
    static readonly HU = new CountryCode('HU', 'Hungary');
    static readonly YE = new CountryCode('YE', 'Yemen');
    static readonly ID = new CountryCode('ID', 'Indonesia');
    static readonly IE = new CountryCode('IE', 'Ireland');
    static readonly IL = new CountryCode('IL', 'Israel');
    static readonly IM = new CountryCode('IM', 'Isle of Man');
    static readonly IN = new CountryCode('IN', 'India');
    static readonly IO = new CountryCode('IO', 'British Indian Ocean Territory');
    static readonly IQ = new CountryCode('IQ', 'Iraq');
    static readonly IR = new CountryCode('IR', 'Iran');
    static readonly IS = new CountryCode('IS', 'Iceland');
    static readonly IT = new CountryCode('IT', 'Italy');
    static readonly YT = new CountryCode('YT', 'Mayotte');
    static readonly ZA = new CountryCode('ZA', 'South Africa');
    static readonly JE = new CountryCode('JE', 'Jersey');
    static readonly ZM = new CountryCode('ZM', 'Zambia');
    static readonly JM = new CountryCode('JM', 'Jamaica');
    static readonly JO = new CountryCode('JO', 'Jordan');
    static readonly JP = new CountryCode('JP', 'Japan');
    static readonly ZW = new CountryCode('ZW', 'Zimbabwe');
    static readonly KE = new CountryCode('KE', 'Kenya');
    static readonly KG = new CountryCode('KG', 'Kyrgyzstan');
    static readonly KH = new CountryCode('KH', 'Cambodia');
    static readonly KI = new CountryCode('KI', 'Kiribati');
    static readonly KM = new CountryCode('KM', 'Comoros');
    static readonly KN = new CountryCode('KN', 'St Kitts & Nevis');
    static readonly KP = new CountryCode('KP', 'North Korea');
    static readonly KR = new CountryCode('KR', 'South Korea');
    static readonly KW = new CountryCode('KW', 'Kuwait');
    static readonly KY = new CountryCode('KY', 'Cayman Islands');
    static readonly KZ = new CountryCode('KZ', 'Kazakhstan');
    static readonly LA = new CountryCode('LA', 'Laos');
    static readonly LB = new CountryCode('LB', 'Lebanon');
    static readonly LC = new CountryCode('LC', 'St Lucia');
    static readonly LI = new CountryCode('LI', 'Liechtenstein');
    static readonly LK = new CountryCode('LK', 'Sri Lanka');
    static readonly LR = new CountryCode('LR', 'Liberia');
    static readonly LS = new CountryCode('LS', 'Lesotho');
    static readonly LT = new CountryCode('LT', 'Lithuania');
    static readonly LU = new CountryCode('LU', 'Luxembourg');
    static readonly LV = new CountryCode('LV', 'Latvia');
    static readonly LY = new CountryCode('LY', 'Libya');
    static readonly MA = new CountryCode('MA', 'Morocco');
    static readonly MC = new CountryCode('MC', 'Monaco');
    static readonly MD = new CountryCode('MD', 'Moldova');
    static readonly ME = new CountryCode('ME', 'Montenegro');
    static readonly MF = new CountryCode('MF', 'St Martin');
    static readonly MG = new CountryCode('MG', 'Madagascar');
    static readonly MH = new CountryCode('MH', 'Marshall Islands');
    static readonly MK = new CountryCode('MK', 'Macedonia');
    static readonly ML = new CountryCode('ML', 'Mali');
    static readonly MM = new CountryCode('MM', 'Myanmar (Burma)');
    static readonly MN = new CountryCode('MN', 'Mongolia');
    static readonly MO = new CountryCode('MO', 'Macau SAR China');
    static readonly MP = new CountryCode('MP', 'Northern Mariana Islands');
    static readonly MQ = new CountryCode('MQ', 'Martinique');
    static readonly MR = new CountryCode('MR', 'Mauritania');
    static readonly MS = new CountryCode('MS', 'Montserrat');
    static readonly MT = new CountryCode('MT', 'Malta');
    static readonly MU = new CountryCode('MU', 'Mauritius');
    static readonly MV = new CountryCode('MV', 'Maldives');
    static readonly MW = new CountryCode('MW', 'Malawi');
    static readonly MX = new CountryCode('MX', 'Mexico');
    static readonly MY = new CountryCode('MY', 'Malaysia');
    static readonly MZ = new CountryCode('MZ', 'Mozambique');
    static readonly NA = new CountryCode('NA', 'Namibia');
    static readonly NC = new CountryCode('NC', 'New Caledonia');
    static readonly NE = new CountryCode('NE', 'Niger');
    static readonly NF = new CountryCode('NF', 'Norfolk Island');
    static readonly NG = new CountryCode('NG', 'Nigeria');
    static readonly NI = new CountryCode('NI', 'Nicaragua');
    static readonly NL = new CountryCode('NL', 'Netherlands');
    static readonly NO = new CountryCode('NO', 'Norway');
    static readonly NP = new CountryCode('NP', 'Nepal');
    static readonly NR = new CountryCode('NR', 'Nauru');
    static readonly NU = new CountryCode('NU', 'Niue');
    static readonly NZ = new CountryCode('NZ', 'New Zealand');
    static readonly OM = new CountryCode('OM', 'Oman');
    static readonly PA = new CountryCode('PA', 'Panama');
    static readonly PE = new CountryCode('PE', 'Peru');
    static readonly PF = new CountryCode('PF', 'French Polynesia');
    static readonly PG = new CountryCode('PG', 'Papua New Guinea');
    static readonly PH = new CountryCode('PH', 'Philippines');
    static readonly PK = new CountryCode('PK', 'Pakistan');
    static readonly PL = new CountryCode('PL', 'Poland');
    static readonly PM = new CountryCode('PM', 'St Pierre & Miquelon');
    static readonly PN = new CountryCode('PN', 'Pitcairn Islands');
    static readonly PR = new CountryCode('PR', 'Puerto Rico');
    static readonly PS = new CountryCode('PS', 'Palestinian Territories');
    static readonly PT = new CountryCode('PT', 'Portugal');
    static readonly PW = new CountryCode('PW', 'Palau');
    static readonly PY = new CountryCode('PY', 'Paraguay');
    static readonly QA = new CountryCode('QA', 'Qatar');
    static readonly AD = new CountryCode('AD', 'Andorra');
    static readonly AE = new CountryCode('AE', 'United Arab Emirates');
    static readonly AF = new CountryCode('AF', 'Afghanistan');
    static readonly AG = new CountryCode('AG', 'Antigua & Barbuda');
    static readonly AI = new CountryCode('AI', 'Anguilla');
    static readonly AL = new CountryCode('AL', 'Albania');
    static readonly AM = new CountryCode('AM', 'Armenia');
    static readonly AO = new CountryCode('AO', 'Angola');
    static readonly AQ = new CountryCode('AQ', 'Antarctica');
    static readonly AR = new CountryCode('AR', 'Argentina');
    static readonly AS = new CountryCode('AS', 'American Samoa');
    static readonly AT = new CountryCode('AT', 'Austria');
    static readonly AU = new CountryCode('AU', 'Australia');
    static readonly AW = new CountryCode('AW', 'Aruba');
    static readonly AX = new CountryCode('AX', 'Åland Islands');
    static readonly AZ = new CountryCode('AZ', 'Azerbaijan');
    static readonly BA = new CountryCode('BA', 'Bosnia & Herzegovina');
    static readonly BB = new CountryCode('BB', 'Barbados');
    static readonly RE = new CountryCode('RE', 'Réunion');
    static readonly BD = new CountryCode('BD', 'Bangladesh');
    static readonly BE = new CountryCode('BE', 'Belgium');
    static readonly BF = new CountryCode('BF', 'Burkina Faso');
    static readonly BG = new CountryCode('BG', 'Bulgaria');
    static readonly BH = new CountryCode('BH', 'Bahrain');
    static readonly BI = new CountryCode('BI', 'Burundi');
    static readonly BJ = new CountryCode('BJ', 'Benin');
    static readonly BL = new CountryCode('BL', 'St Barthélemy');
    static readonly BM = new CountryCode('BM', 'Bermuda');
    static readonly BN = new CountryCode('BN', 'Brunei');
    static readonly BO = new CountryCode('BO', 'Bolivia');
    static readonly RO = new CountryCode('RO', 'Romania');
    static readonly BQ = new CountryCode('BQ', 'Caribbean Netherlands');
    static readonly BR = new CountryCode('BR', 'Brazil');
    static readonly BS = new CountryCode('BS', 'Bahamas');
    static readonly BT = new CountryCode('BT', 'Bhutan');
    static readonly RS = new CountryCode('RS', 'Serbia');
    static readonly BV = new CountryCode('BV', 'Bouvet Island');
    static readonly BW = new CountryCode('BW', 'Botswana');
    static readonly RU = new CountryCode('RU', 'Russia');
    static readonly BY = new CountryCode('BY', 'Belarus');
    static readonly BZ = new CountryCode('BZ', 'Belize');
    static readonly RW = new CountryCode('RW', 'Rwanda');
    static readonly SA = new CountryCode('SA', 'Saudi Arabia');
    static readonly SB = new CountryCode('SB', 'Solomon Islands');
    static readonly CA = new CountryCode('CA', 'Canada');
    static readonly SC = new CountryCode('SC', 'Seychelles');
    static readonly CC = new CountryCode('CC', 'Cocos (Keeling) Islands');
    static readonly CD = new CountryCode('CD', 'Congo - Kinshasa');
    static readonly SD = new CountryCode('SD', 'Sudan');
    static readonly CF = new CountryCode('CF', 'Central African Republic');
    static readonly CG = new CountryCode('CG', 'Congo - Brazzaville');
    static readonly CH = new CountryCode('CH', 'Switzerland');
    static readonly CI = new CountryCode('CI', 'Côte d’Ivoire');
    static readonly SE = new CountryCode('SE', 'Sweden');
    static readonly CK = new CountryCode('CK', 'Cook Islands');
    static readonly CL = new CountryCode('CL', 'Chile');
    static readonly CM = new CountryCode('CM', 'Cameroon');
    static readonly CN = new CountryCode('CN', 'China');
    static readonly CO = new CountryCode('CO', 'Colombia');
    static readonly SG = new CountryCode('SG', 'Singapore');
    static readonly SH = new CountryCode('SH', 'St Helena');
    static readonly CR = new CountryCode('CR', 'Costa Rica');
    static readonly SI = new CountryCode('SI', 'Slovenia');
    static readonly SJ = new CountryCode('SJ', 'Svalbard & Jan Mayen');
    static readonly CU = new CountryCode('CU', 'Cuba');
    static readonly CV = new CountryCode('CV', 'Cape Verde');
    static readonly CW = new CountryCode('CW', 'Curaçao');
    static readonly CX = new CountryCode('CX', 'Christmas Island');
    static readonly CY = new CountryCode('CY', 'Cyprus');
    static readonly CZ = new CountryCode('CZ', 'Czechia');
    static readonly SK = new CountryCode('SK', 'Slovakia');
    static readonly SL = new CountryCode('SL', 'Sierra Leone');
    static readonly SM = new CountryCode('SM', 'San Marino');
    static readonly SN = new CountryCode('SN', 'Senegal');
    static readonly SO = new CountryCode('SO', 'Somalia');
    static readonly SR = new CountryCode('SR', 'Suriname');
    static readonly SS = new CountryCode('SS', 'South Sudan');
    static readonly ST = new CountryCode('ST', 'São Tomé & Príncipe');
    static readonly SV = new CountryCode('SV', 'El Salvador');
    static readonly DE = new CountryCode('DE', 'Germany');
    static readonly SX = new CountryCode('SX', 'Sint Maarten');
    static readonly SY = new CountryCode('SY', 'Syria');
    static readonly SZ = new CountryCode('SZ', 'Swaziland');
    static readonly TC = new CountryCode('TC', 'Turks & Caicos Islands');
    static readonly DJ = new CountryCode('DJ', 'Djibouti');
    static readonly DK = new CountryCode('DK', 'Denmark');
    static readonly TD = new CountryCode('TD', 'Chad');
    static readonly DM = new CountryCode('DM', 'Dominica');
    static readonly TF = new CountryCode('TF', 'French Southern Territories');
    static readonly DO = new CountryCode('DO', 'Dominican Republic');
    static readonly TG = new CountryCode('TG', 'Togo');
    static readonly TH = new CountryCode('TH', 'Thailand');
    static readonly TJ = new CountryCode('TJ', 'Tajikistan');
    static readonly TK = new CountryCode('TK', 'Tokelau');
    static readonly TL = new CountryCode('TL', 'Timor-Leste');
    static readonly TM = new CountryCode('TM', 'Turkmenistan');
    static readonly TN = new CountryCode('TN', 'Tunisia');
    static readonly TO = new CountryCode('TO', 'Tonga');
    static readonly TR = new CountryCode('TR', 'Turkey');
    static readonly TT = new CountryCode('TT', 'Trinidad & Tobago');
    static readonly DZ = new CountryCode('DZ', 'Algeria');
    static readonly TV = new CountryCode('TV', 'Tuvalu');
    static readonly TW = new CountryCode('TW', 'Taiwan');
    static readonly TZ = new CountryCode('TZ', 'Tanzania');
    static readonly UA = new CountryCode('UA', 'Ukraine');
    static readonly EC = new CountryCode('EC', 'Ecuador');
    static readonly EE = new CountryCode('EE', 'Estonia');
    static readonly UG = new CountryCode('UG', 'Uganda');
    static readonly EG = new CountryCode('EG', 'Egypt');
    static readonly EH = new CountryCode('EH', 'Western Sahara');
    static readonly UM = new CountryCode('UM', 'US Outlying Islands');
    static readonly US = new CountryCode('US', 'United States');
    static readonly ER = new CountryCode('ER', 'Eritrea');
    static readonly ES = new CountryCode('ES', 'Spain');
    static readonly ET = new CountryCode('ET', 'Ethiopia');
    static readonly UY = new CountryCode('UY', 'Uruguay');
    static readonly UZ = new CountryCode('UZ', 'Uzbekistan');
    static readonly VA = new CountryCode('VA', 'Vatican City');
    static readonly VC = new CountryCode('VC', 'St Vincent & Grenadines');
    static readonly VE = new CountryCode('VE', 'Venezuela');
    static readonly VG = new CountryCode('VG', 'British Virgin Islands');
    static readonly VI = new CountryCode('VI', 'US Virgin Islands');
    static readonly FI = new CountryCode('FI', 'Finland');
    static readonly FJ = new CountryCode('FJ', 'Fiji');
    static readonly FK = new CountryCode('FK', 'Falkland Islands');
    static readonly VN = new CountryCode('VN', 'Vietnam');
    static readonly FM = new CountryCode('FM', 'Micronesia');
    static readonly FO = new CountryCode('FO', 'Faroe Islands');
    static readonly FR = new CountryCode('FR', 'France');
    static readonly VU = new CountryCode('VU', 'Vanuatu');
    static readonly GA = new CountryCode('GA', 'Gabon');
    static readonly GB = new CountryCode('GB', 'United Kingdom');
    static readonly GD = new CountryCode('GD', 'Grenada');
    static readonly GE = new CountryCode('GE', 'Georgia');
    static readonly GF = new CountryCode('GF', 'French Guiana');
    static readonly GG = new CountryCode('GG', 'Guernsey');
    static readonly GH = new CountryCode('GH', 'Ghana');
    static readonly GI = new CountryCode('GI', 'Gibraltar');
    static readonly WF = new CountryCode('WF', 'Wallis & Futuna');
    static readonly GL = new CountryCode('GL', 'Greenland');
    static readonly GM = new CountryCode('GM', 'Gambia');
    static readonly GN = new CountryCode('GN', 'Guinea');
    static readonly GP = new CountryCode('GP', 'Guadeloupe');
    static readonly GQ = new CountryCode('GQ', 'Equatorial Guinea');
    static readonly GR = new CountryCode('GR', 'Greece');
    static readonly GS = new CountryCode('GS', 'South Georgia & South Sandwich Islands');
    static readonly GT = new CountryCode('GT', 'Guatemala');
    static readonly GU = new CountryCode('GU', 'Guam');
    static readonly WS = new CountryCode('WS', 'Samoa');
    static readonly GW = new CountryCode('GW', 'Guinea-Bissau');
    static readonly GY = new CountryCode('GY', 'Guyana');
    static readonly HK = new CountryCode('HK', 'Hong Kong SAR China');
    static readonly HM = new CountryCode('HM', 'Heard & McDonald Islands');
    static readonly HN = new CountryCode('HN', 'Honduras');
    static readonly HR = new CountryCode('HR', 'Croatia');

    key: string;
    value: string;

    static getCodes(): CountryCode[] {
      if (this.codes.length === 0) {
          this.addCodes(this.codes);
          this.codes.sort((a, b) => a.value.localeCompare(b.value));
      }
      return this.codes;
  }
    static addCodes(codes: CountryCode[]) {
        codes.unshift(this.GA);
        codes.unshift(this.GB);
        codes.unshift(this.GD);
        codes.unshift(this.GE);
        codes.unshift(this.GF);
        codes.unshift(this.GG);
        codes.unshift(this.GH);
        codes.unshift(this.GI);
        codes.unshift(this.WF);
        codes.unshift(this.GL);
        codes.unshift(this.GM);
        codes.unshift(this.GN);
        codes.unshift(this.GP);
        codes.unshift(this.GQ);
        codes.unshift(this.GR);
        codes.unshift(this.GS);
        codes.unshift(this.GT);
        codes.unshift(this.GU);
        codes.unshift(this.WS);
        codes.unshift(this.GW);
        codes.unshift(this.GY);
        codes.unshift(this.HK);
        codes.unshift(this.HM);
        codes.unshift(this.HN);
        codes.unshift(this.HR);
        codes.unshift(this.HT);
        codes.unshift(this.HU);
        codes.unshift(this.YE);
        codes.unshift(this.ID);
        codes.unshift(this.IE);
        codes.unshift(this.IL);
        codes.unshift(this.IM);
        codes.unshift(this.IN);
        codes.unshift(this.IO);
        codes.unshift(this.IQ);
        codes.unshift(this.IR);
        codes.unshift(this.IS);
        codes.unshift(this.IT);
        codes.unshift(this.YT);
        codes.unshift(this.ZA);
        codes.unshift(this.JE);
        codes.unshift(this.ZM);
        codes.unshift(this.JM);
        codes.unshift(this.JO);
        codes.unshift(this.JP);
        codes.unshift(this.ZW);
        codes.unshift(this.KE);
        codes.unshift(this.KG);
        codes.unshift(this.KH);
        codes.unshift(this.KI);
        codes.unshift(this.KM);
        codes.unshift(this.KN);
        codes.unshift(this.KP);
        codes.unshift(this.KR);
        codes.unshift(this.KW);
        codes.unshift(this.KY);
        codes.unshift(this.KZ);
        codes.unshift(this.LA);
        codes.unshift(this.LB);
        codes.unshift(this.LC);
        codes.unshift(this.LI);
        codes.unshift(this.LK);
        codes.unshift(this.LR);
        codes.unshift(this.LS);
        codes.unshift(this.LT);
        codes.unshift(this.LU);
        codes.unshift(this.LV);
        codes.unshift(this.LY);
        codes.unshift(this.MA);
        codes.unshift(this.MC);
        codes.unshift(this.MD);
        codes.unshift(this.ME);
        codes.unshift(this.MF);
        codes.unshift(this.MG);
        codes.unshift(this.MH);
        codes.unshift(this.MK);
        codes.unshift(this.ML);
        codes.unshift(this.MM);
        codes.unshift(this.MN);
        codes.unshift(this.MO);
        codes.unshift(this.MP);
        codes.unshift(this.MQ);
        codes.unshift(this.MR);
        codes.unshift(this.MS);
        codes.unshift(this.MT);
        codes.unshift(this.MU);
        codes.unshift(this.MV);
        codes.unshift(this.MW);
        codes.unshift(this.MX);
        codes.unshift(this.MY);
        codes.unshift(this.MZ);
        codes.unshift(this.NA);
        codes.unshift(this.NC);
        codes.unshift(this.NE);
        codes.unshift(this.NF);
        codes.unshift(this.NG);
        codes.unshift(this.NI);
        codes.unshift(this.NL);
        codes.unshift(this.NO);
        codes.unshift(this.NP);
        codes.unshift(this.NR);
        codes.unshift(this.NU);
        codes.unshift(this.NZ);
        codes.unshift(this.OM);
        codes.unshift(this.PA);
        codes.unshift(this.PE);
        codes.unshift(this.PF);
        codes.unshift(this.PG);
        codes.unshift(this.PH);
        codes.unshift(this.PK);
        codes.unshift(this.PL);
        codes.unshift(this.PM);
        codes.unshift(this.PN);
        codes.unshift(this.PR);
        codes.unshift(this.PS);
        codes.unshift(this.PT);
        codes.unshift(this.PW);
        codes.unshift(this.PY);
        codes.unshift(this.QA);
        codes.unshift(this.AD);
        codes.unshift(this.AE);
        codes.unshift(this.AF);
        codes.unshift(this.AG);
        codes.unshift(this.AI);
        codes.unshift(this.AL);
        codes.unshift(this.AM);
        codes.unshift(this.AO);
        codes.unshift(this.AQ);
        codes.unshift(this.AR);
        codes.unshift(this.AS);
        codes.unshift(this.AT);
        codes.unshift(this.AU);
        codes.unshift(this.AW);
        codes.unshift(this.AX);
        codes.unshift(this.AZ);
        codes.unshift(this.BA);
        codes.unshift(this.BB);
        codes.unshift(this.RE);
        codes.unshift(this.BD);
        codes.unshift(this.BE);
        codes.unshift(this.BF);
        codes.unshift(this.BG);
        codes.unshift(this.BH);
        codes.unshift(this.BI);
        codes.unshift(this.BJ);
        codes.unshift(this.BL);
        codes.unshift(this.BM);
        codes.unshift(this.BN);
        codes.unshift(this.BO);
        codes.unshift(this.RO);
        codes.unshift(this.BQ);
        codes.unshift(this.BR);
        codes.unshift(this.BS);
        codes.unshift(this.BT);
        codes.unshift(this.RS);
        codes.unshift(this.BV);
        codes.unshift(this.BW);
        codes.unshift(this.RU);
        codes.unshift(this.BY);
        codes.unshift(this.BZ);
        codes.unshift(this.RW);
        codes.unshift(this.SA);
        codes.unshift(this.SB);
        codes.unshift(this.CA);
        codes.unshift(this.SC);
        codes.unshift(this.CC);
        codes.unshift(this.CD);
        codes.unshift(this.SD);
        codes.unshift(this.CF);
        codes.unshift(this.CG);
        codes.unshift(this.CH);
        codes.unshift(this.CI);
        codes.unshift(this.SE);
        codes.unshift(this.CK);
        codes.unshift(this.CL);
        codes.unshift(this.CM);
        codes.unshift(this.CN);
        codes.unshift(this.CO);
        codes.unshift(this.SG);
        codes.unshift(this.SH);
        codes.unshift(this.CR);
        codes.unshift(this.SI);
        codes.unshift(this.SJ);
        codes.unshift(this.CU);
        codes.unshift(this.CV);
        codes.unshift(this.CW);
        codes.unshift(this.CX);
        codes.unshift(this.CY);
        codes.unshift(this.CZ);
        codes.unshift(this.SK);
        codes.unshift(this.SL);
        codes.unshift(this.SM);
        codes.unshift(this.SN);
        codes.unshift(this.SO);
        codes.unshift(this.SR);
        codes.unshift(this.SS);
        codes.unshift(this.ST);
        codes.unshift(this.SV);
        codes.unshift(this.DE);
        codes.unshift(this.SX);
        codes.unshift(this.SY);
        codes.unshift(this.SZ);
        codes.unshift(this.TC);
        codes.unshift(this.DJ);
        codes.unshift(this.DK);
        codes.unshift(this.TD);
        codes.unshift(this.DM);
        codes.unshift(this.TF);
        codes.unshift(this.DO);
        codes.unshift(this.TG);
        codes.unshift(this.TH);
        codes.unshift(this.TJ);
        codes.unshift(this.TK);
        codes.unshift(this.TL);
        codes.unshift(this.TM);
        codes.unshift(this.TN);
        codes.unshift(this.TO);
        codes.unshift(this.TR);
        codes.unshift(this.TT);
        codes.unshift(this.DZ);
        codes.unshift(this.TV);
        codes.unshift(this.TW);
        codes.unshift(this.TZ);
        codes.unshift(this.UA);
        codes.unshift(this.EC);
        codes.unshift(this.EE);
        codes.unshift(this.UG);
        codes.unshift(this.EG);
        codes.unshift(this.EH);
        codes.unshift(this.UM);
        codes.unshift(this.US);
        codes.unshift(this.ER);
        codes.unshift(this.ES);
        codes.unshift(this.ET);
        codes.unshift(this.UY);
        codes.unshift(this.UZ);
        codes.unshift(this.VA);
        codes.unshift(this.VC);
        codes.unshift(this.VE);
        codes.unshift(this.VG);
        codes.unshift(this.VI);
        codes.unshift(this.FI);
        codes.unshift(this.FJ);
        codes.unshift(this.FK);
        codes.unshift(this.VN);
        codes.unshift(this.FM);
        codes.unshift(this.FO);
        codes.unshift(this.FR);
        codes.unshift(this.VU);
    }
}
