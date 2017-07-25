define(['angular'], function(angular) {
    'use strict';

    var financialNames = {

        profitloss: [
            { descr: 'Omzet', data: 'turnover', level: 1, prefix: 'EUR' },
            { descr: 'Inkoopwaarde van de omzet', data: 'cogs', level: 2, highGood: false, prefix: 'PRC' },
            { descr: 'Bruto winst / verlies', data: 'grosstradingprofitloss', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Salarissen & sociale lasten', data: 'salwage', level: 2, highGood: false, prefix: 'PRC' },
            { descr: 'Overige bedrijfskosten', data: 'othexp', level: 2, highGood: false, prefix: 'PRC' },
            { descr: 'Bedrijfsvoorzieningen', data: 'opprovisions', level: 2, highGood: false, prefix: 'PRC' },
            { descr: 'EBITDA', data: 'ebitda', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Afschrijvingen materiële & imm. activa', data: 'depreciation', level: 2, prefix: 'PRC' },
            { descr: 'EBIT', data: 'ebit', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Overige inkomsten', data: 'otropinc', level: 2, prefix: 'PRC' },
            { descr: 'Deelnemingen', data: 'groupcomplt', level: 2, prefix: 'PRC' },
            { descr: 'Bruto rentelasten', data: 'intexp', level: 2, highGood: false, prefix: 'PRC' },
            { descr: 'Totaal overige fin. baten/lasten', data: 'totalotrfinincexp', level: 2, prefix: 'PRC' },
            { descr: 'Resultaat na fin. baten/lasten', data: 'operatingprofitafterfinan', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Totaal bijzondere baten', data: 'totalextraordinarygains', level: 2, prefix: 'PRC' },
            { descr: 'Totaal bijzondere lasten', data: 'totalextraordinarylosses', level: 2, prefix: 'PRC' },
            { descr: 'Resultaat voor belasting & aandeel derden', data: 'profitbeforetaxandmi', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Belastingen', data: 'taxation', level: 2, prefix: 'PRC' },
            { descr: 'Aandeel derden', data: 'minintpl', level: 2, prefix: 'PRC' },
            { descr: 'Netto winst/verlies', data: 'netprofitloss', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Dividenden', data: 'dividends', level: 2, highGood: false, prefix: 'PRC' }
        ],

        balance: [
            { descr: 'Balanstotaal', data: 'totalassets', level: 1, prefix: 'EUR' },
            { descr: 'Totaal vaste activa', data: 'totalfixedassets', level: 1, prefix: 'PRC' },
            { descr: 'Materiele vaste activa', data: 'grossfixedassets', level: 2, prefix: 'PRC' },
            { descr: 'Netto materiele vaste activa', data: 'netfixedassets', level: 2, prefix: 'PRC' },
            { descr: 'Leningen u/g', data: 'ltloans', level: 2, prefix: 'PRC' },
            { descr: 'Meerderheidsdeelnemingen', data: 'invsubs', level: 2, prefix: 'PRC' },
            { descr: 'Minderheidsdeelnemingen > 20%', data: 'invassoc', level: 2, prefix: 'PRC' },
            { descr: 'Overige financiele activa', data: 'otfininv', level: 2, prefix: 'PRC' },
            { descr: 'Overige niet vlottende activa', data: 'otrnoncurast', level: 2, prefix: 'PRC' },
            { descr: 'Totaal vlottende activa', data: 'totalcurrentassets', level: 1, prefix: 'PRC' },
            { descr: 'Totale voorraad', data: 'totalinventory', level: 2, prefix: 'PRC' },
            { descr: 'Groepsmaatschappijen', data: 'grpcomca', level: 2, prefix: 'PRC' },
            { descr: 'Handelsdebiteuren', data: 'acctsrec', level: 2, prefix: 'PRC' },
            { descr: 'Overige debiteuren', data: 'othrec', level: 2, prefix: 'PRC' },
            { descr: 'Overige vlot. activa', data: 'othcurasset', level: 2, prefix: 'PRC' },
            { descr: 'Courante effecten', data: 'marksec', level: 2, prefix: 'PRC' },
            { descr: 'Kas, bank, giro', data: 'cashbkdep', level: 2, prefix: 'PRC' },
            { descr: 'Totaal gecorrigeerd groepsvermogen', data: 'totaloameans', level: 1, highGood: true, prefix: 'PRC' },
            { descr: 'Eigen vermogen', data: 'networth', level: 2, highGood: true, prefix: 'PRC' },
            { descr: 'Materieel eigen vermogen', data: 'tangiblenetworth', level: 2, highGood: true, prefix: 'PRC' },
            { descr: 'Achtergestelde leningen', data: 'subdebt', level: 2, prefix: 'PRC' },
            { descr: 'Aandeel derden', data: 'minint', level: 2, prefix: 'PRC' },
            { descr: 'Totaal lange termijn schulden', data: 'totalltliabilities', level: 1, highGood: false, prefix: 'PRC' },
            { descr: 'Groepsleningen o/g', data: 'assoc', level: 2, prefix: 'PRC' },
            { descr: 'Latente belastingen', data: 'deftax', level: 2, prefix: 'PRC' },
            { descr: 'Voorzieningen en overige verplichtingen', data: 'otrltliab', level: 2, prefix: 'PRC' },
            { descr: 'Schulden lange termijn rentedragend', data: 'ltdebt', level: 2, prefix: 'PRC' },
            { descr: 'Schulden lange termijn fin. inst.', data: 'ltbankdebt', level: 2, prefix: 'PRC' },
            { descr: 'Totaal korte termijn schulden', data: 'totalcurliabilities', level: 1, highGood: false, prefix: 'PRC' },
            { descr: 'Groepsmaatschappijen', data: 'groupcompcur', level: 2, prefix: 'PRC' },
            { descr: 'Handelscrediteuren', data: 'acctspay', level: 2, prefix: 'PRC' },
            { descr: 'Schulden korte termijn fin. inst.', data: 'stbankdebt', level: 2, prefix: 'PRC' },
            { descr: 'Overige kortlopende leningen', data: 'otrstdebt', level: 2, prefix: 'PRC' },
            { descr: 'Dividend', data: 'divpay', level: 2, prefix: 'PRC' },
            { descr: 'Aflossingsverplichting binnen 1 jaar', data: 'curmat', level: 2, prefix: 'PRC' },
            { descr: 'Netto onderhanden werk', data: 'networkinprogressliabili', level: 2, prefix: 'PRC' },
            { descr: 'Belasting sociale verzekeringen', data: 'otrcurliabs', level: 2, prefix: 'PRC' },
            { descr: 'Overige korte schulden', data: 'accruals', level: 2, prefix: 'PRC' }
        ],

        ratios: [
            { descr: 'Omlooptijd voorraden', data: 'ratios_3', level: 1, highGood: false, prefix: '' },
            { descr: 'Omlooptijd handelsdebiteuren', data: 'ratios_4', level: 1, highGood: false, prefix: '' },
            { descr: 'Omlooptijd handelscrediteuren', data: 'ratios_5', level: 1, highGood: false, prefix: '' },
            { descr: 'Totaal rentedragende schulden / EBITDA', data: 'ratios_6', level: 1, highGood: false, prefix: '' },
            { descr: 'Operationele kasstroom / Financieringslasten', data: 'ratios_17', level: 1, highGood: true, prefix: '' },
            { descr: 'Gecorr. groepsvermogen / Totaal activa', data: 'ratios_12', level: 1, highGood: true, prefix: '' },
            { descr: 'Current ratio', data: 'ratios_1', level: 2, highGood: true, prefix: '' },
            { descr: 'Quick ratio', data: 'ratios_2', level: 2, highGood: true, prefix: '' },
            { descr: 'Senior debt / EBITDA', data: 'ratios_7', level: 2, highGood: false, prefix: '' },
            { descr: 'Operationeel resultaat / Omzet', data: 'ratios_8', level: 2, highGood: true, prefix: '' },
            { descr: 'Operationele kasstroom / Schuldlasten', data: 'ratios_18', level: 2, highGood: true, prefix: '' },
            { descr: 'Cash uit winst / Financieringslasten', data: 'ratios_19', level: 2, highGood: true, prefix: '' },
            { descr: 'Eigen vermogen / Totaal activa', data: 'ratios_10', level: 2, highGood: true, prefix: '' },
            { descr: 'Materieel eigen vermogen / Totaal activa', data: 'ratios_11', level: 2, highGood: true, prefix: '' },
            { descr: 'Gearing', data: 'ratios_13', level: 2, highGood: true, prefix: '' },
            { descr: 'Interest coverage ratio', data: 'ratios_14', level: 2, highGood: true, prefix: '' },
            { descr: 'Rendement op geinvesteerd vermogen', data: 'ratios_15', level: 2, highGood: true, prefix: '' },
            { descr: 'Omzetgroei', data: 'ratios_16', level: 2, highGood: true, prefix: '' }
        ],

        ratings: [
            { descr: 'UCR', data: 'approved_RATING', level: 1, highGood: true, prefix: '' }
        ],

        remainders: [
            { descr: 'Bruto investeringen', data: 'grcapex', level: 1, highGood: true, prefix: 'EUR' },
            { descr: 'Vervangingsinvesteringen', data: 'mancaptexp', level: 1, highGood: true, prefix: 'EUR' },
            { descr: 'Aantal werknemers', data: 'numemployees', level: 1, prefix: '' },
            { descr: 'Verplichtingen buiten de balans', data: 'contliabs', level: 1, highGood: false, prefix: 'EUR' },
            { descr: 'Bruto onderhanden werk', data: 'grossworkinprogress', level: 2, prefix: 'EUR' },
            { descr: 'Totaal rentedragende schulden', data: 'totaldebt', level: 2, prefix: 'EUR' },
            { descr: 'Operationele leasebedragen / jaar', data: 'annoplsepay', level: 2, prefix: 'EUR' },
            { descr: 'Geactiveerde interest', data: 'capint', level: 2, prefix: 'EUR' },
            { descr: 'Niet contante betalingen', data: 'ncdeftax', level: 2, prefix: 'EUR' }
        ]
    };
    var financialTabs = [
        { selector: 'profitloss', display: 'Winst- en verliesrekening' },
        { selector: 'balance', display: 'Balans' },
        { selector: 'ratios', display: "Ratio's" },
        { selector: 'remainders', display: 'Overige' },
        { selector: 'ratings', display: 'Ratings' }
    ];
    var messages = {
        keepShort: 'Houd het kort en bondig, gebruik bullet points.',
        noApprover: 'Indien analist geen fiatteur. M.n. bij nee / hoog risico.',
        addRemark: 'Aanvullende opmerkingen.',
        searchPostcode: 'Zoek op postcode.',
        searchBcdbId: 'Zoek op BC nummer.',
        fiatError: 'LET OP! Deze analyse is niet afgerond. De fiatteur is verplicht alle advies velden in te vullen.',
        postcodeError: 'Geef de 4 cijfers van een Nederlandse postcode',
        sectorError: 'Selecteer een sector via het menu.',
        bcdbIdError: 'Dit BC nummer is niet bekend.',
        underConstruction: 'Deze pagina is nog in ontwikkeling. Er kunnen hierdoor onverwachte fouten optreden.',
        confirmAssessment: 'Weet u zeker dat u de analyse af wilt ronden?\nDeze is hierna niet meer te wijzigen.'
    };
    var dropdownOptions = {
        turnover: [0, 2.5e5, 5e5, 7.5e5, 1e6, 1.5e6, 2e6, 3e6, 4e6, 5e6, 6e6, 7.5e6, 1e7, 1.5e7, 2e7, 2.5e7, 3e7, 4e7, 5e7, 6e7, 7e7, 8e7, 9e7, 1e8, 1.25e8, 1.5e8, 1.75e8, 2e8, 2.5e8, 3e8],
        distance: [0, 1, 2, 5, 10, 15, 25, 50, 100, 150, 200, 250],
        years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        sos: ['ja', 'nee', 'n.v.t.'],
        fiat: ['L1a', 'L1b', 'L1c', 'L2', 'L3', 'L4', 'CCC'],
        ucr: ['1', '2+', '2','2-','3+','3','3-','4+','4','4-','5+','5','5-','6+','6','6-'],
        watchAdvice: ['Opheffen', 'Handhaven', 'Op wachtlijst', 'N.v.t.'],
        lgd: ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M', '1','n.b.'],
        lgdObsi: ['L', 'M', 'n.v.t.'],
        gsri: ['Laag', 'Gemiddeld', 'Hoog', 'N.b.', 'N.v.t.'],
        risc: ['Hoog', 'Gemiddeld', 'Laag'],
        strategy: ['Verhogen', 'Handhaven', 'Verminderen', 'N.b.'],
        agreement: ['Ja', 'Nee', 'N.v.t.'],
        rating: ['Hoog', 'Gemiddeld', 'Laag'],
        year: ['2017 ','2016', '2015', '2014','2017/2016','2016/2015','2015/2014','2014/2013'],
        watchPrefill: ['ja', 'nee']
    };
    var predictiveSectors = {
        automotive: {
            name: 'Voorspelde verkoop occassions',
            isAutomotive: true,
            yaxis: [],
            ylabel: 'Verkoop occasions (aantal * 1000)',
            factor: 0.001,
            filter: {
                age: ['≤ 15 jaar', '> 15 jaar'],
                price: ['≤ €10.000,00', '€10.000,00 - €21.000,00', '€21.000,00 - €32.000,00', '€32.000,00 - €40.000,00', '> €40.000,00']
            },
        },
        cre: {
            name: 'Voorspelde leegstand (%)',
            isCre: true,
            yaxis: [0, 1],
            ylabel: 'Leegstand (%)',
            factor: 100
        }
    };

    angular.module('rlab.constants', [])
        .constant('CONSTANT', {
            financialNames: financialNames,
            financialTabs: financialTabs,
            messages: messages,
            dropdownOptions: dropdownOptions,
            predictiveSectors: predictiveSectors
        });

});
