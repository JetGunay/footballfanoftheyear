(function ($, root, undefined) {

    $(function () {

        'use strict';

        // DOM ready, take it away
        /******************Fetch event json file*****************/
        fetch('../wp-content/themes/html5blank-child/js/event.json').then(function(response) {
            return response.json();
        }).then(function(obj) {
            // console.log(obj);
            let eventDatas = obj.events;
            return eventDatas.map(function(eventData) {
                // console.log(`${eventData.day} ${eventData.cat}`);
                window.onresize = setWidth;
                function setWidth() {
                    if (window.innerWidth >= 768) {
                        location.reload();
                    }
                };
                /* Calendar */
                /******************Variables*****************/
                let today = new Date();
                let days = document.getElementsByClassName('day');
                let noEvents = document.getElementsByClassName("no-Events")[0];
                let noDayEvents = document.getElementsByClassName("no-dayEvents")[0];
                let moblabel = document.getElementById('mob-label');
                let label = document.getElementById('label');
                label.style.display = "none";
                moblabel.style.display = "none";
                let events = [];
                /******************Ordinal*****************/
                function ordinal (number) {
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
                    /******************Capitalization*****************/
                function capitalize (string) {
                    return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
                };
                

                /******************Month view*****************/
                let currentMonth = today.getMonth();
                let currentYear = today.getFullYear();
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let headerMonths = document.getElementsByClassName('month')[0];
                let headerYears = document.getElementsByClassName('year')[0];
                let next = document.getElementById('next');
                let prev = document.getElementById('prev');
                next.addEventListener('click', nextMonth);
                prev.addEventListener('click', previousMonth);
                /***Show calendar***/
                showCalendar(currentMonth, currentYear);
                function showCalendar (month, year) {
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
                                    // document.getElementById("event-date").innerHTML = `<span class="date">${ordinal(today.getDate())} ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
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
                /***Next month***/
                function nextMonth () {
                    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
                    currentMonth = (currentMonth + 1) % 12;
                    showCalendar(currentMonth, currentYear);
                    getDayFunction();
                    showEvents();
                }
                /***Prev month***/
                function previousMonth () {
                    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
                    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
                    showCalendar(currentMonth, currentYear);
                    getDayFunction();
                    showEvents();
                }
                function daysInMonth (month, year) {
                    return new Date(year, month + 1, 0).getDate();
                }

                /******************Day view*****************/
                let nextDay = document.getElementById('nextDay');
                let prevDay = document.getElementById('prevDay');
                nextDay.addEventListener('click', funcTomorrow);
                prevDay.addEventListener('click', funcYesterday);
                /***Week days***/
                let weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
                /***DAY today text display***/
                let dayToday = weekday[today.getDay()];
                document.getElementById("day").innerHTML = dayToday;
                let dateToday = today.getDate();
                document.getElementById("date").innerHTML = ordinal(dateToday);
                let monthToday = today.toLocaleString('default', { month: 'long' });
                document.getElementById("dateMonth").innerHTML = monthToday;
                let yearToday = today.getFullYear();
                document.getElementById("dateYear").innerHTML = yearToday;
                /***DAY tomorrow function and text display***/
                function funcTomorrow () {
                    today.setDate(today.getDate() + 1);
                    let dayTomorrow = weekday[today.getDay()];
                    document.getElementById("day").innerHTML = dayTomorrow;
                    let dateTomorrow = today.getDate();
                    document.getElementById("date").innerHTML = ordinal(dateTomorrow);
                    let monthTomorrow = today.toLocaleString('default', { month: 'long' });
                    document.getElementById("dateMonth").innerHTML = monthTomorrow;
                    let yearTomorrow = today.getFullYear();
                    document.getElementById("dateYear").innerHTML = yearTomorrow;
                    showDayEvents();
                }
                /***DAY yesterday function and text display***/
                function funcYesterday () {
                    today.setDate(today.getDate() - 1);
                    let dayYesterday = weekday[today.getDay()];
                    document.getElementById("day").innerHTML = dayYesterday;
                    let dateYesterday = today.getDate();
                    document.getElementById("date").innerHTML = ordinal(dateYesterday);
                    let monthYesterday = today.toLocaleString('default', { month: 'long' });
                    document.getElementById("dateMonth").innerHTML = monthYesterday;
                    let yearYesterday = today.getFullYear();
                    document.getElementById("dateYear").innerHTML = yearYesterday;
                    showDayEvents();
                }

                /******************Mobile Date*****************/
                var x = document.querySelector(".active").innerHTML
                document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${x}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;


                /******************SELECT Category*****************/
                let select = document.getElementById('cat');
                select.innerHTML = select.innerHTML + '<option value="' + `${eventData.cat}` + '" class="item">' + capitalize(`${eventData.cat}`) + '</option>';
                /******************SELECT Category removing duplicates*****************/
                document.querySelectorAll('#cat > option').forEach((option) => {
                    if (events.includes(option.value)) option.remove()
                    else events.push(option.value)
                });
                /******************Clear text*****************/
                function clearEventText () {
                    if (document.getElementsByClassName('event-link')) {
                        [...document.getElementsByClassName('event-link')].forEach((event) => {
                            event.outerHTML = '';
                        });
                    }
                    if (document.getElementsByClassName('event-cat')) {
                        [...document.getElementsByClassName('event-cat')].forEach((event) => {
                            event.outerHTML = '';
                        });
                    }
                }

                /******************Sports Category on change*****************/
                let selectElement = document.querySelector('#cat');
                selectElement.addEventListener("change", (e) => {
                    [].forEach.call(days, function (el) {
                        el.classList.remove("active-event");
                        clearEventText();
                        label.style.display = "none";
                        noEvents.style.display = "block";
                    });
                    let cat = `${e.target.value}`;
                    document.getElementById('daySports').innerHTML = cat;
                    /***Modal on mobile***/
                    if (window.innerWidth <= 768) {
                        var modal = document.getElementById("dayModal");
                        var span = document.getElementsByClassName("close")[0];
                        modal.style.display = "block";
                        span.addEventListener('click', (e) => {
                            modal.style.display = "none";
                        });
                    }

                    /***MONTH show events for all sports***/
                    // const allSports = obj.events?.filter((e) =>
                    //     e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                    //     .map((e) => {
                    //         [...days].forEach((day) => {
                    //             const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}` : day.innerHTML;
                    //             if (e.day === dayEvent && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML) {
                    //                 day.classList.add("active-event");
                    //                 events.push(e);
                    //                 if (day.classList.contains("active") && cat === "all") {
                    //                     document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${day.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                    //                     // document.getElementById('sportsCategory').innerHTML = e.cat;
                    //                     label.style.display = "block";
                    //                     showEventText(e.link, e.description, e.time);
                    //                     noEvents.style.display = "none";
                    //                     events.push(e);
                    //                 }
                    //             }
                    //         });
                    // });

                    /***MONTH show events on category change***/
                    const newEvents = obj.events?.filter((e) =>
                        e.cat === cat && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                        .map((e) => {
                            [...days].forEach((day) => {
                                const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}` : day.innerHTML;
                                if (e.day === dayEvent && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML) {
                                    day.classList.add("active-event");
                                    events.push(e);
                                    if (day.classList.contains("active") && e.cat === cat) {
                                        document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${day.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                        label.style.display = "block";
                                        showEventText(e.link, e.description, e.time);
                                        noEvents.style.display = "none";
                                        events.push(e);
                                    }
                                }
                            });
                    });

                    /***DAY show events on category change***/
                    let dateOnly = date.innerHTML.slice(0, -2);
                    if (obj.events.length === 0) {
                        moblabel.style.display = "none";
                        noDayEvents.style.display = "block";
                        document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                        // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
                    } else {
                        const datenewEvents = obj.events?.filter((e) =>
                        e.cat === cat && e.day === dateOnly && e.month === dateMonth.innerHTML && e.year === dateYear.innerHTML)
                        .map((e) => {
                            const dateEvent = dateOnly.length < 2 ? `0${dateOnly}` : dateOnly;
                            if (e.day === dateEvent && e.month === dateMonth.innerHTML && e.year === dateYear.innerHTML) {
                                // dateCon.classList.add("active-event");
                                moblabel.style.display = "block";
                                showDayEventText(e.link, e.description, e.time);
                                noDayEvents.style.display = "none";
                                events.push(e);
                            }
                        });
                    }
                    return events;
                });

                /******************Show active event indicator on next/prev month*****************/
                function showEvents () {
                    let days = document.getElementsByClassName('day');
                    [].forEach.call(days, function (el) {
                        el.classList.remove("active-event");
                    });
                    let ecat = document.getElementById('cat');
                    let cat = ecat.value;
                    /***MONTH show events on category change***/
                    const newEvents = obj.events?.filter((e) =>
                        e.cat === cat && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                        .map((e) => {
                            [...days].forEach((day) => {
                                day.classList.remove("active");
                                const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}` : day.innerHTML;
                                if (e.day === dayEvent && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML) {
                                    day.classList.add("active-event");
                                    events.push(e);
                                }
                            });
                    });
                    /***MONTH show events for all sports***/
                    // const allSports = obj.events?.filter((e) =>
                    //     cat === "all" && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                    //     .map((e) => {
                    //         [...days].forEach((day) => {
                    //             day.classList.remove("active");
                    //             const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}` : day.innerHTML;
                    //             if (e.day === dayEvent && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML) {
                    //                 day.classList.add("active-event");
                    //                 events.push(e);
                    //             }
                    //         });
                    // });
                    return events;
                }

                /******************Show events on next/prev day*****************/
                function showDayEvents () {
                    [].forEach.call(days, function (el) {
                        el.classList.remove("active-event");
                        clearEventText();
                        moblabel.style.display = "none";
                        noDayEvents.style.display = "block";
                    });
                    let ecat = document.getElementById('cat');
                    let cat = ecat.value;
                    document.getElementById('daySports').innerHTML = cat;
                        let dateOnly = date.innerHTML.slice(0, -2);
                        const datenewEvents = obj.events?.filter((e) =>
                        e.cat === cat && e.day === dateOnly && e.month === dateMonth.innerHTML && e.year === dateYear.innerHTML)
                        .map((e) => {
                                const dateEvent = dateOnly.length < 2 ? `0${dateOnly}` : dateOnly;
                                if (e.day === dateEvent && e.month === dateMonth.innerHTML && e.year === dateYear.innerHTML) {
                                    // dateCon.classList.add("active-event");
                                    moblabel.style.display = "block";
                                    showDayEventText(e.link, e.description, e.time);
                                    noDayEvents.style.display = "none";
                                    events.push(e);
                                }
                        });
                    return events;
                }

                /******************MONTH Event text*****************/
                function showEventText (link, desc, time) {
                    let eventsLinkContainer = document.querySelector('#event-row');
                    //a element to put Event text into
                    const aLink = document.createElement('a');
                    let EventLink = document.createTextNode(link);
                    //clear previous events message
                    noEvents.classList.remove('show');
                    noEvents.style.display = 'none';
                    //append to container
                    aLink.appendChild(EventLink);
                    aLink.target = '_blank';
                    aLink.href = link;
                    aLink.innerHTML = '<span class="event-desc event-message">' + desc + '</span><span class="event-time event-message">' + time + '</span>';
                    aLink.classList.add('event-link', 'event-message');
                    eventsLinkContainer.appendChild(aLink);
                }
                /******************MONTH Category Event text*****************/
                // function showCatEventText (cat) {
                //     let eventsCatContainer = document.querySelector('#event-row');
                //     //a element to put Event text into
                //     const category = document.createElement('span');
                //     let catText = document.createTextNode(cat);
                //     //clear previous events message
                //     noEvents.classList.remove('show');
                //     noEvents.style.display = 'none';
                //     //append to container
                //     category.append(catText);
                //     category.id = cat;
                //     category.innerHTML = cat;
                //     category.classList.add('event-cat');
                //     eventsCatContainer.appendChild(category);
                // }
                /******************DAY Event text*****************/
                function showDayEventText (link, desc, time) {
                    let mobEventsLinkContainer = document.querySelector('#mob-event-row');
                    //a element to put Event text into
                    const aLink = document.createElement('a');
                    let EventLink = document.createTextNode(link);
                    //clear previous events message
                    noEvents.classList.remove('show');
                    noEvents.style.display = 'none';
                    //append to container
                    aLink.appendChild(EventLink);
                    aLink.target = '_blank';
                    aLink.href = link;
                    aLink.innerHTML = '<span class="event-desc event-message">' + desc + '</span><span class="event-time event-message">' + time + '</span>';
                    aLink.classList.add('event-link', 'event-message');
                    mobEventsLinkContainer.appendChild(aLink);
                }

                

                /******************MONTH date on click*****************/
                let dateSelect = document.getElementsByClassName('day');
                const getDayFunction = () => {
                    Array.from(dateSelect).forEach(element => {
                        element.addEventListener('click', (e) => {
                            [].forEach.call(days, function (el) {
                                clearEventText();
                                label.style.display = "none";
                                noEvents.style.display = "block";
                            });
                            let el = document.getElementById('cat');
                            let cat = el.value;
                            /***MONTH add active class***/
                            if (!e.target.classList.contains('active') && e.target.classList.contains('day')) {
                                if (document.getElementsByClassName('active')[0] === undefined) {
                                    e.target.classList.add('active');
                                }
                                document.getElementsByClassName('active')[0].classList.remove('active');
                                if (document.getElementsByClassName('active')[0] === undefined) {
                                    e.target.classList.add('active');
                                }
                                e.target.classList.add('active');
                            } else if (e.target.classList.contains('active') === null && e.target.classList.contains('day')) {
                                e.target.classList.add('active');
                            }
                            /***MONTH date on event container***/
                            document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                            /***MONTH show event text on date clicked***/
                            if (e.target.classList.contains('day')) {
                                //Clear previous event Text
                                clearEventText();
                                if (obj.events.length === 0) {
                                    noEvents.style.display = "block";
                                    document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                    // noEvents.innerHTML = `There are no events on ${headerMonths.innerHTML} ${e.target.innerHTML} ${headerYears.innerHTML}`;
                                } else {
                                    const newEvents = obj.events?.filter((eDay) =>
                                        eDay.cat === cat && eDay.month === headerMonths.innerHTML && eDay.year === headerYears.innerHTML)
                                        .map((eDay) => {
                                            const dayEvent = e.target.innerHTML.length < 2 ? `0${e.target.innerHTML}` : e.target.innerHTML;
                                            if (eDay.day === dayEvent &&
                                                eDay.month === headerMonths.innerHTML &&
                                                eDay.year === headerYears.innerHTML) {
                                                if (eDay.cat === cat) {
                                                    label.style.display = 'block';
                                                    showEventText(eDay.link, eDay.description, eDay.time);
                                                    // e.target.classList.add('active');
                                                    document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${e.target.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                                    events.push(e);
                                            }
                                        }
                                    });

                                    // const allSports = obj.events?.filter((e) =>
                                    //     e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML)
                                    //     .map((e) => {
                                    //         [...days].forEach((day) => {
                                    //             const dayEvent = day.innerHTML.length < 2 ? `0${day.innerHTML}` : day.innerHTML;
                                    //             if (e.day === dayEvent && e.month === headerMonths.innerHTML && e.year === headerYears.innerHTML) {
                                    //                 day.classList.add("active-event");
                                    //                 events.push(e);
                                    //                 if (day.classList.contains("active") && cat === "all") {
                                    //                     console.log(e.cat);
                                    //                     // document.getElementById('sportsCategory').innerHTML = e.cat;
                                    //                     document.getElementById('event-date').innerHTML = `<span class="date">` + ordinal(`${day.innerHTML}`) + ` ${headerMonths.innerHTML.slice(0, 3)} ${headerYears.innerHTML}</span>`;
                                    //                     label.style.display = "block";
                                    //                     // showCatEventText(e.cat);
                                    //                     showEventText(e.link, e.description, e.time);
                                    //                     noEvents.style.display = "none";
                                    //                     events.push(e);
                                    //                 }
                                    //             }
                                    //         });
                                    // });
                                }
                            }
                        });
                    });
                };
                getDayFunction();
            })
        }).catch(function(error) {
            console.log('Error!');
            console.log(error);
        });
    });

})(jQuery, this);