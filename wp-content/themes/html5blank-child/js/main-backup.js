(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		$('.mobile-menu').click(function(event){
			$("#mobile-menu").addClass('active');
			$('body').addClass('mobile-active');
		});

		$('.mobile-menu-close').click(function(event){
			$("#mobile-menu").removeClass('active');
			$('body').removeClass('mobile-active');
		});

		$('.desk-more-menu > ul > li.menu-item-has-children > a').each(function(event){
			$(this).after('<span><i class="fa fa-caret-down fa-active"></i><i class="fa fa-caret-up"></i></span>');
		});

		$('.desk-more-menu > ul > li.menu-item-has-children span').click(function(event){
			$(this).next().slideToggle("slow");
			$(this).children().toggleClass('fa-active');
		});

		$('#mobile-menu > ul > li.menu-item-has-children > a').each(function(event){
			$(this).after('<span><i class="fa fa-caret-down fa-active"></i><i class="fa fa-caret-up"></i></span>');
		});

		$('#mobile-menu > ul > li.menu-item-has-children span').click(function(event){
			$(this).next().slideToggle("slow");
			$(this).children().toggleClass('fa-active');
		});

		$(window).on('resize',function(e){

            if ($(this).width() > 768) {
                $('#mobile-menu').removeClass('active');
                $('body').removeClass('mobile-active');
            } 

        });
		
	});
	
	
	/* Modal pop up  */
	
	document.addEventListener( 'wpcf7invalid', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-danger');
	}, false );
	document.addEventListener( 'wpcf7spam', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-warning');
	}, false );
	document.addEventListener( 'wpcf7mailfailed', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-warning');
	}, false );
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		$('#sbmt-modal').fadeIn();
		$('.wpcf7-response-output').addClass('d-none');
	});
	
	$('.form-close').on('click', function(){
		$('#sbmt-modal').hide();
	})

	$(window).click(function(event){
		if (event.target.id == 'sbmt-modal') {
			$('#sbmt-modal').hide();
			
		  }
	})


	/* Calendar */
	let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 //JSON event data
 let eventData = {
    "events": [
        {
            "description": 'Arsenal v Southampton',
            "year": '2020',
            "month": 'Dec',
            "day": '26',
            "cat": 'football'
        },
        {
            "description": 'Southampton',
            "year": '2020',
            "month": 'Dec',
            "day": '23',
            "cat": 'soccer'
        },
        {
            "description": 'Arsenal',
            "year": '2020',
            "month": 'Dec',
            "day": '5',
            "cat": 'football'
        },
        {
            "description": 'Tottenham',
            "year": '2020',
            "month": 'Dec',
            "day": '12',
            "cat": 'soccer'
        }
    ]
 };

let headerMonths = document.getElementsByClassName('month')[0];
let headerYears = document.getElementsByClassName('year')[0];
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');

selectYear.value=currentYear;
selectMonth.value=currentMonth;

next.addEventListener('click', nextMonth);
prev.addEventListener('click', previousMonth);
selectYear.addEventListener('input', (event)=> {
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    } else {
        jump();
    }
})
selectMonth.addEventListener('change', jump);

showCalendar(currentMonth,currentYear);
// showEvents();
// showActiveEvents();

function showCalendar(month, year) { 

    let firstDay = (new Date(year, month)).getDay();

    let tbl = document.getElementsByClassName("calendar-days")[0]; // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    headerMonths.innerHTML = months[month];
    headerYears.innerHTML = year;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
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
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) { 
                    document.getElementById("event-date").innerHTML = `<span class="date">${today.getDate()} ${headerMonths.innerHTML} ${headerYears.innerHTML}</span>`;
                    cell.classList.add("active"); // color today's date
                    cell.classList.add("today");
                } 
                cell.classList.add('day');
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
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

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
	showEvents();
}

function daysInMonth (month, year) {
    return new Date(year, month+1, 0).getDate();
}

// Events

//https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript Event Delegation for new elements
document.addEventListener('click',function(e){
    if(!e.target.classList.contains('active') && e.target.classList.contains('day')){
        if(document.getElementsByClassName('active')[0] === undefined){
            e.target.classList.add('active');
        }
        document.getElementsByClassName('active')[0].classList.remove('active');
        if(document.getElementsByClassName('active')[0] === undefined){
            e.target.classList.add('active');
        }
        e.target.classList.add('active');
    } else if(e.target.classList.contains('active')===null && e.target.classList.contains('day')){
        e.target.classList.add('active');
    }
 });

let selectElement = document.querySelector('#cat');
let todaytd = document.getElementsByTagName('td')
selectElement.addEventListener('change', (e)=> {
    let days = document.getElementsByClassName('day');
    let noEvents = document.getElementsByClassName('no-Events')[0];
    let cat = `${e.target.value}`;
    let eventsDiv = document.querySelector('.events');
    let events = [];

    // [...eventData['events']].forEach((event)=>{
    //         [...days].forEach((day)=>{
    //             if(event['cat']===`${e.target.value}`) {
    //                 if(event['day']===day.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML){
    //                     day.classList.add('active-event');
    //                     day.classList.add(`${e.target.value}`);
    //                     document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}</span>`;
    //                     showEventText(event['description']);
                        
    //                     events.push(event)
    //                 } 
    //                 else if(event['day']===day.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML) {
    //                     day.classList.remove('active-event');
    //                     // clearEventText();
    //                     // noEvents.style.display='initial';
    //                     document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}</span>`;
    //                     noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}`;
    //                 }
    //             }
    //             else if(event['day']===day.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML && event['cat']!==`${e.target.value}`) {
    //                 day.classList.remove('active-event');
    //                 // clearEventText();
    //                 //     noEvents.style.display='initial';
    //                     document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}</span>`;
    //                     noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}`;
    //             }
                
    //         });
    // });
    // return events;
    [...eventData['events']].forEach((event)=>{
        
            [...days].forEach((day)=>{
            
                if(event['day']===day.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML){
                    if(event['cat']===`${e.target.value}`) {
                    day.classList.add('active-event');
                        if(day.classList.contains('active')){ 
                            showEventText(event['description']);
                            events.push(event)
                        }
                    } else {
                        day.classList.remove('active-event');
                        clearEventText();
                        // noEvents.style.display='initial';
                        // document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}</span>`;
                        // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}`;
                    }
                }
            });
        
    });
    return events;
});

//category
let select = document.getElementById('cat');
// let events = [];
[...eventData['events']].forEach((event)=>{
    // let option = document.createElement('option');
    select.innerHTML = select.innerHTML + 
        '<option value="' + event['cat'] + '">' + event['cat'] + '</option>';
        
});


//clears previous event Text
function clearEventText() {
    if(document.getElementsByClassName('event-desc')){
        [...document.getElementsByClassName('event-desc')].forEach((event)=>{
            event.outerHTML='';
        });
    }
}


    //show event
    // function showEventText(desc) {
    //     let noEvents = document.getElementsByClassName('no-Events')[0];
    //     let eventsDescContainer = document.querySelector('#eventDiv');

    //     //span element for event text
    //     const span = document.createElement('span');
    //     let EventText = document.createTextNode(desc);

    //     //clear previous events message
    //     noEvents.classList.remove('show');
    //     noEvents.style.display = 'none';

    //     //append to container
    //     span.appendChild(EventText);
    //     // span.appendChild(remove);
    //     span.classList.add('event-desc', 'event-message');
    //     eventsDescContainer.appendChild(span);
    // }

    // //show event
    // function showEventTime(time) {
    //     let noEvents = document.getElementsByClassName('no-Events')[0];
    //     let eventsTimeContainer = document.querySelector('#eventDiv');

    //     //span element for event text
    //     const span = document.createElement('span');
    //     let EventText = document.createTextNode(time);

    //     //clear previous events message
    //     noEvents.classList.remove('show');
    //     noEvents.style.display = 'none';

    //     //append to container
    //     span.appendChild(EventText);
    //     // span.appendChild(remove);
    //     span.classList.add('event-time', 'event-message');
    //     eventsTimeContainer.appendChild(span);
    // }


//shows eventText
function showEventText(desc) {

    let e = document.getElementById('cat');
    let cat = e.value;

    let noEvents = document.getElementsByClassName('no-Events')[0];
    let eventsDescContainer = document.querySelector('.events');

    // let activeTD = document.querySelectorAll('td.active') !== null;

        //span element to put Event text into
        const span = document.createElement('span');
        let EventText = document.createTextNode(desc);

        //delete button for span
        const remove = document.createElement('div');
        let x = document.createTextNode('x');
        remove.appendChild(x);
        remove.classList.add('remove');

        //clear previous events message
        noEvents.classList.remove('show');
        noEvents.style.display='none';

        //append to container
        span.appendChild(EventText)
        span.appendChild(remove);
        span.classList.add('event-desc', 'event-message', cat);
        eventsDescContainer.appendChild(span);

        
}

// const hideShowEventsDiv = ()=> {
//     let eventsDiv = document.querySelector('.events');

//     if(eventsDiv.classList.contains('hidden')){
//         //show Events
//        eventsDiv.classList.remove('hidden');
//        eventsDiv.classList.add('visible');
//        showEvents();
//     } else {
//         //show new Event Form
//        eventsDiv.classList.remove('visible');
//        eventsDiv.classList.add('hidden');
//     }   
// }

//compares eventData array values to date of day clicked on 
const checkEvents = (obj, date)=>{
    let isInArray = eventData['events'].find(event => event[obj]===date)
    return isInArray;
}

// //handler to show text from eventData array
document.addEventListener('click', (e)=> {
    let noEvents = document.getElementsByClassName('no-Events')[0];
    let el = document.getElementById('cat');
    let cat = el.value;
	
    if(e.target.classList.contains('day')){
        //Clear previous event Text
        clearEventText();

        if(eventData.events.length===0){
            // noEvents.style.display='initial';
            document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}</span>`;
            // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
        } else {
            [...eventData['events']].forEach((event)=>{

                    if(event['day']===e.target.innerHTML && event['month']===headerMonths.innerHTML && event['year']===headerYears.innerHTML){
                        if(event['cat']=== cat) {
                            //show event Text
                            document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}</span>`;
                            showEventText(event['description']);

                        } else {
                            clearEventText();
                            // noEvents.style.display='initial';
                            document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}</span>`;
                            // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
                        }
        
                    } else if(!checkEvents('year',headerYears.innerHTML) || !checkEvents('month', headerMonths.innerHTML) || !checkEvents('day', e.target.innerHTML))  {
                        clearEventText();
                        // noEvents.style.display='initial';
                        document.getElementById("event-date").innerHTML = `<span class="date">${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}</span>`;
                        // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
                    }
            });
        }
    }
});
	
})(jQuery, this);
