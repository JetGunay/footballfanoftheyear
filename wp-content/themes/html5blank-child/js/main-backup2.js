(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away


	/* Calendar */
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //JSON event data
    let eventData = {
        "events": [
            {
                "description": 'Sydney Thunder v Brisbane Heat',
                "year": '2020',
                "month": 'December',
                "day": '14',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '15',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '16',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '16',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Perth Scorchers v Melbourne Stars',
                "year": '2020',
                "month": 'December',
                "day": '16',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '17',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '17',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '18',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '18',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Ascot - Long Walk Hurdle ',
                "year": '2020',
                "month": 'December',
                "day": '19',
                "time": '14: 25',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '19',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '19',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Hobart Hurricanes v Renegades',
                "year": '2020',
                "month": 'December',
                "day": '19',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Boxing: Gennady Golovkin v Kamil Szeremeta',
                "year": '2020',
                "month": 'December',
                "day": '19',
                "time": '03: 00',
                "link": '',
                "cat": 'Other'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Sydney Sixers v Adelaide Strikers',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Boxing: Saul "Canelo" Alvarez v Callum Smith ',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '03: 00',
                "link": '',
                "cat": 'Other'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '21',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '22',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '22',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Sydney Thunder v Perth Scorchers',
                "year": '2020',
                "month": 'December',
                "day": '22',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '23',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '23',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Nets v Warriors',
                "year": '2020',
                "month": 'December',
                "day": '23',
                "time": '00: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Lakers v Clippers',
                "year": '2020',
                "month": 'December',
                "day": '23',
                "time": '00: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Brisbane Heat v Adelaide Strikers',
                "year": '2020',
                "month": 'December',
                "day": '23',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '13 NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '24',
                "time": '00: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Heat v Pelicans',
                "year": '2020',
                "month": 'December',
                "day": '25',
                "time": '17: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Bucks v Warriors',
                "year": '2020',
                "month": 'December',
                "day": '25',
                "time": '19: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Celtics v Nets',
                "year": '2020',
                "month": 'December',
                "day": '25',
                "time": '22: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Leopardstown - Racing Post Novice ',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '14: 25',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Chase, Limerick - Faugheen Novice Chase',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '14: 35',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Kempton - Ladbrokes King George VI Chase ',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '15: 00',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Lakers v Mavericks',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '01: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Nuggets v Clippers',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '03: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Grizzlies v Hawks',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '22: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Harlequins v Bristol',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '14: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Newcastle v Leicester',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '14: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Bath v London Irish',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '14: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Exeter v Gloucester',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '15: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Northampton v Worcester',
                "year": '2020',
                "month": 'December',
                "day": '26',
                "time": '16: 30',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Sydney Thunder v Renegades',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '07: 10',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Sydney Sixers v Melbourne Stars',
                "year": '2020',
                "month": 'December',
                "day": '20',
                "time": '10: 20',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Leopardstown - Future Champions Novice Hurdle',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '13: 45',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Chepstow - Coral Welsh Grand National',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '14: 50',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '10 NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Clippers v Mavericks',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '20: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Sale v Wasps',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '15: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Brisbane Heat v Hobart Hurricanes',
                "year": '2020',
                "month": 'December',
                "day": '27',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Leopardstown - Christmas Hurdle',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '13: 50',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Savills Steeplechase',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '15: 00',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Nine NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Perth Scorchers v Adelaide Strikers',
                "year": '2020',
                "month": 'December',
                "day": '28',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Leopardstown - Neville Hotels Novice Steeplechase',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '13: 50',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": 'Matheson Hurdle',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '14: 25',
                "link": '',
                "cat": 'Racing (Major Races)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Five NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Renegades v Sydney Sixers',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '07: 10',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Sydney Thunder v Melbourne Stars',
                "year": '2020',
                "month": 'December',
                "day": '29',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '30',
                "time": '12: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '2020/21 PDC World Darts Championship',
                "year": '2020',
                "month": 'December',
                "day": '30',
                "time": '18: 00',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '10 NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '30',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Hobart Hurricanes v Brisbane Heat',
                "year": '2020',
                "month": 'December',
                "day": '30',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Nine NBA matches from',
                "year": '2020',
                "month": 'December',
                "day": '31',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Pacers v Cavaliers',
                "year": '2020',
                "month": 'December',
                "day": '31',
                "time": '20: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Wizards v Bulls',
                "year": '2020',
                "month": 'December',
                "day": '31',
                "time": '22: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Magic v 76ers',
                "year": '2020',
                "month": 'December',
                "day": '31',
                "time": '23: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Adelaide Strikers v Perth Scorchers',
                "year": '2020',
                "month": 'December',
                "day": '31',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship quarter-finals',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": 'TBC',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Rockets v Kings',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '00: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Raptors v Knicks',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '00: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Thunder v Pelicans',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '01: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Jazz v Suns',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '02: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Worcester v Harlequins',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '19: 45',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Bristol v Newcastle',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '19: 45',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Renegades v Sydney Thunder',
                "year": '2021',
                "month": 'January',
                "day": '01',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship semi-finals',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": 'TBC',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": '10 NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Rockets v Kings',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '22: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Wasps v Exeter',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '14: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Gloucester v Sale',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '16: 30',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Hobart Hurricanes v Melbourne Stars',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '06: 05',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Brisbane Heat v Sydney Sixers',
                "year": '2021',
                "month": 'January',
                "day": '02',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '2020/21 PDC World Darts Championship final',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": 'TBC',
                "link": '',
                "cat": 'Darts'
            },
            {
                "description": 'Five NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '00: 00 onwards',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Pistons v Celtics',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '20: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Grizzlies v Lakers',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '23: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Nets v Wizards',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '23: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'London Irish v Northampton',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '14: 30',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Leicester  Bath',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '15: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Perth Scorchers v Renegades',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '05: 05',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Adelaide Strikers v Sydney Sixers',
                "year": '2021',
                "month": 'January',
                "day": '03',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Five NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '04',
                "time": '00: 00-01: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Melbourne Stars v Hobart Hurricanes',
                "year": '2021',
                "month": 'January',
                "day": '04',
                "time": '05: 05',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Brisbane Heat v Sydney Thunder ',
                "year": '2021',
                "month": 'January',
                "day": '04',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Nine NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '05',
                "time": '00: 30-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Renegades v Adelaide Strikers',
                "year": '2021',
                "month": 'January',
                "day": '05',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Five NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '06',
                "time": '00: 30-03: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Perth Scorchers v Sydney Sixers',
                "year": '2021',
                "month": 'January',
                "day": '06',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '11 NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '07',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Nuggets v Mavericks',
                "year": '2021',
                "month": 'January',
                "day": '07',
                "time": '18: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Hobart Hurricanes v Sydney Thunder ',
                "year": '2021',
                "month": 'January',
                "day": '07',
                "time": '07: 10',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Brisbane Heat v Melbourne Stars',
                "year": '2021',
                "month": 'January',
                "day": '07',
                "time": '10: 20',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Nets v 76ers',
                "year": '2021',
                "month": 'January',
                "day": '08',
                "time": '00: 30',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Grizzlies v Cavaliers',
                "year": '2021',
                "month": 'January',
                "day": '08',
                "time": '01: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Trail Blazers v Timberwolves ',
                "year": '2021',
                "month": 'January',
                "day": '08',
                "time": '03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Lakers v Spurs',
                "year": '2021',
                "month": 'January',
                "day": '08',
                "time": '03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Adelaide Strikers v Renegades',
                "year": '2021',
                "month": 'January',
                "day": '08',
                "time": '07: 10',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": '10 NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": '76ers v Nuggers',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '20: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Exeter v Bristol',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '14: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Newcastle v Gloucester',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '15: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Northampton v Leicester',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '16: 30',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Perth Scorchers v Sydney Thunder',
                "year": '2021',
                "month": 'January',
                "day": '09',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
            {
                "description": 'Seven NBA matches from',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '00: 00-03: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Pistons v Jazz',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '18: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Clippers v Bulls',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '21: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Knicks v Nuggets',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '23: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Nets v Thunder',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '23: 00',
                "link": '',
                "cat": 'NBA'
            },
            {
                "description": 'Harlequins v London Irish',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '15: 00',
                "link": '',
                "cat": 'Premiership Rugby'
            },
            {
                "description": 'Sydney Sixers v Brisbane Heat',
                "year": '2021',
                "month": 'January',
                "day": '10',
                "time": '08: 15',
                "link": '',
                "cat": 'Cricket (Big Bash League)'
            },
        ]
    };

    let headerMonths = document.getElementsByClassName('month')[0];
    let headerYears = document.getElementsByClassName('year')[0];
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    next.addEventListener('click', nextMonth);
    prev.addEventListener('click', previousMonth);
    
    showCalendar(currentMonth, currentYear);

    function showCalendar(month, year) {
        let firstDay = (new Date(year, month)).getDay();

        //body of calendar
        let tbl = document.getElementsByClassName("calendar-days")[0];

        //clearing all previous cells
        tbl.innerHTML = "";

        //filling data of month
        headerMonths.innerHTML = months[month];
        headerYears.innerHTML = year;

        //creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            //creates table row
            let row = document.createElement("tr");

            //creating individual cells with data
            for (let j = 0; j < 7; j++) {
                if(i === 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else if (date > daysInMonth(month, year)) {
                    break;
                }
                else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);
                    if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        document.getElementById("event-date").innerHTML = `<span class="date">${ordinal(today.getDate())} ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                        cell.classList.add('active') //class for active date
                        cell.classList.add('today');
                    }
                    cell.classList.add('day');
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row); //appending each row into calendar body
        }
    }

    function nextMonth() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
        showEvents();
    }

    function previousMonth() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
        showEvents();
    }

    function ordinal(number) {
        const english_ordinal_rules = new Intl.PluralRules("en", {
            type: "ordinal"
        });
        const suffixes = {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th"
        }
        const suffix = suffixes[english_ordinal_rules.select(number)];
        return (number + suffix);
    }

    function daysInMonth(month, year) {
        return new Date(year, month+1, 0).getDate();
    }

    //Events
    document.addEventListener('click', function(e) {
        if(!e.target.classList.contains('active') && e.target.classList.contains('day')) {
            if(document.getElementsByClassName('active')[0] === undefined) {
                e.target.classList.add('active');
            }
            document.getElementsByClassName('active')[0].classList.remove('active');
            if(document.getElementsByClassName('active')[0] === undefined) {
                e.target.classList.add('active');
            }
            e.target.classList.add('active');
        } 
        else if(e.target.classList.contains('active') === null && e.target.classList.contains('day')) {
            e.target.classList.add('active');
        }
    });

    //Sports Category
    let selectElement = document.querySelector('#cat');

    selectElement.addEventListener("change", (e) => {
        let days = document.getElementsByClassName('day');
        [].forEach.call(days, function (el) {
            el.classList.remove("active-event");
        });
        let noEvents = document.getElementsByClassName("no-Events")[0];
        let label = document.getElementById('label');
        let cat = `${e.target.value}`;
        let events = [];

        const newEvents = eventData?.events?.filter((e) => 
            e.cat === cat && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                .map((e) => {
                    [...days].forEach((day) => {
                        const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}`: day.innerHTML;

                        if (e.day === dayEvent) {
                            day.classList.add("active-event");
                            events.push(e);

                            // if( 
                            //     e.day === day.innerHTML && 
                            //     e.month === headerMonths.innerHTML &&
                            //     e.year === headerYears.innerHTML) {
                                    if(day.classList.contains("active") && e.cat === cat) {
                                        label.style.display = "block";
                                        showEventText(e.description, e.time);
                                        noEvents.style.display = "none";
                                        events.push(e);
                                    } else if (day.classList.contains("active") && e.cat !== cat){
                                        clearEventText();
                                        showEventText(e.description, e.time);
                                    } else {
                                        // clearEventText();
                                        noEvents.style.display='block';
                                        label.style.display='none';
                                        noEvents.innerHTML = 'There are no events';
                                    }
                                }
                        // }
                    });
                });
                return events;
    });
    
    // selectElement.addEventListener('change', (e) => {
    //     let days = document.getElementsByClassName('day');
    //     [].forEach.call(days, function (el) {
    //         el.classList.remove("active-event");
    //         el.classList.remove("active");
    //     });
    //     let noEvents = document.getElementsByClassName('no-Events')[0];
    //     let label = document.getElementById('label');
    //     // let text = document.getElementById('event-row');
    //     let cat = `${e.target.value}`;
    //     let events = [];

    //     const newEvents = eventData?.events?.filter((e) => e.cat === cat);


    //     newEvents.forEach((event) => {
    //         [...days].forEach((day) => {
    //             if(
    //                 event['day']===day.innerHTML && 
    //                 event['month']===headerMonths.innerHTML && 
    //                 event['year']===headerYears.innerHTML)
    //                 {
    //                     // console.log(event['year']);
    //                     day.classList.add("active-event");
    //                     events.push(event);

    //                     if(
    //                         event['day']===day.innerHTML && 
    //                         event['month']===headerMonths.innerHTML && 
    //                         event['year']===headerYears.innerHTML
    //                     ) {

    //                         if(event["cat"] === e.cat && day.classList.contains("active")) {
    //                             console.log(cat)
    //                             // if() {
    //                                 label.style.display='block';
    //                                 showEventText(event['description'], event['time']);
    //                                 // console.log(event['link'])
    //                                 // text.innerHTML = '<a href="'+(event['link'])+'"><span class="event-desc event-message">' + (event['description']) + '</span><span class="event-time event-message">' + (event['time']) + '</span></a>';
    //                                 noEvents.style.display='none';
    //                                 events.push(event)
    //                             }
    //                             else {
    //                                 clearEventText();
    //                                 noEvents.style.display='block';
    //                                 label.style.display='none';
    //                                 noEvents.innerHTML = 'There are no events';
    //                             }
    //                         }

    //             } 
    //         });
    //     });
    //     return events;
    // });

    //color the events on the calendar
    function showEvents () {
        let days = document.getElementsByClassName('day');
        [].forEach.call(days, function (el) {
            el.classList.remove("active-event");
            el.classList.remove("active");
        });
        let e = document.getElementById('cat');
        let cat = e.value;
        let events = [];
        [...eventData['events']].forEach((event)=>{
            [...days].forEach((day)=>{
                if(event['day']===day.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML){
                    if(event['cat'] === cat) {
                        day.classList.add('active-event');
                        events.push(event)
                    }
                } 
            });
        });
        return events;
    }

    //shows eventText
    function showEventText(desc, time) {

        let noEvents = document.getElementsByClassName('no-Events')[0];
        let eventsDescContainer = document.querySelector('#event-row');
        let eventsTimeContainer = document.querySelector('#event-row');

        //span element to put Event text into
        const spanText = document.createElement('span');
        const spanTime = document.createElement('span');
        let EventText = document.createTextNode(desc);
        let EventTime = document.createTextNode(time);

        //clear previous events message
        noEvents.classList.remove('show');
        noEvents.style.display='none';

        //append to container
        spanText.appendChild(EventText);
        spanTime.appendChild(EventTime);
        spanText.classList.add('event-desc', 'event-message');
        spanTime.classList.add('event-time', 'event-message');
        eventsDescContainer.appendChild(spanText);
        eventsTimeContainer.appendChild(spanTime);
    }

    //capitalization
    function capitalize(string) {
        return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    //Category selection
    let select = document.getElementById('cat');
    [...eventData['events']].forEach((event) => {
        select.innerHTML = select.innerHTML + '<option value="'+ event['cat'] + '" class="item">' + capitalize(event['cat']) + '</option>';
    });

    let events = []

    document.querySelectorAll('#cat > option').forEach((option) => {
        if (events.includes(option.value)) option.remove()
        else events.push(option.value)
    })

    //clears previous event
    function clearEventText() {
        if(document.getElementsByClassName('event-desc')) {
            [...document.getElementsByClassName('event-desc')].forEach((event) => {
                event.outerHTML='';
            });
        }
        if(document.getElementsByClassName('event-time')) {
            [...document.getElementsByClassName('event-time')].forEach((event) => {
                event.outerHTML='';
            });
        }
    }

    //compares eventData array values to date of day clicked on
    const checkEvents = (obj, date) => {
        let isInArray = eventData['events'].find(event => event[obj] === date)
        return isInArray;
    }

    document.addEventListener('click', (e)=> {
        let noEvents = document.getElementsByClassName('no-Events')[0];
        let el = document.getElementById('cat');
        let cat = el.value;

        const newEvents = eventData?.events?.filter((e) => e.cat=== cat);


        // console.log(`${e.target.innerHTML}`);
        
        if(e.target.classList.contains('day')){
            //Clear previous event Text
            clearEventText();
    
            if(eventData.events.length===0){
                // noEvents.style.display='initial';
                document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}</span>`;
                // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
            } else {
                newEvents.forEach((event)=>{
    
                        if(event['day']===e.target.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML){
                            if(event['cat']=== cat) {
                                //show event
                                document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                label.style.display='block';
                                showEventText(event['description'], event['time']);
                                // text.innerHTML = '<a href="'+(event['link'])+'"><span class="event-desc event-message">' + (event['description']) + '</span><span class="event-time event-message">' + (event['time']) + '</span></a>';
                                noEvents.style.display='none';
    
                            } else {
                                clearEventText();
                                // noEvents.style.display='block';
                                label.style.display='none';
                                // document.getElementById("event-date").innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                // noEvents.innerHTML = 'There are no events';
                            }
            
                        } else if(!checkEvents('year',headerYears.innerHTML) || !checkEvents('month', headerMonths.innerHTML) || !checkEvents('day', e.target.innerHTML))  {
                            clearEventText();
                                // noEvents.style.display='block';
                                label.style.display='none';
                                // document.getElementById("event-date").innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                // noEvents.innerHTML = 'There are no events';
                        }
                });
            }
        }
    });
});
    

})(jQuery, this);

