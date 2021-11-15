<?php /* Template Name: Calendar Page Template */ ?>

<?php get_header(); ?>
<?php $settings = get_general_settings(); ?>

	<main role="main">

		<div class="main-wrapper qa">
	
			<!-- Banner -->
            <?php include("fullwidth-banner.php"); ?>
            
            <!-- section -->
            <section class="page-content qa-section">
                <div class="section-wrapper cal">
                    <div class="category">
                        <select name="cat" id="cat">
                            <option value="none" selected disabled>Choose your Sport</option>
                            <!-- <option value="all">All Sports</option> -->
                        </select>
                    </div>
                    <!-- Month view -->
                    <div class="calendar-container" id="month-view">
                        <div class="calendar">
                            <div class='date-header'>
                                <span id='prev' class='time-skip'><</span>
                                <div class='year-month'>
                                    <span class='month'></span>
                                    <span class='year'></span>
                                </div>
                                <span id='next' class='time-skip'>></span>
                            </div>
                            <table class='days-body'>
                                <thead>
                                    <tr class='days-row'>
                                        <th>Sunday</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                    </tr>
                                </thead>    
                                <tbody class='calendar-days'></tbody>
                            </table>
                            <form class='select-date'>
                                <label for='month'>Go To: </label>
                                <select name='month' id='month'>
                                    <option value=0>Jan</option>
                                    <option value=1>Feb</option>
                                    <option value=2>Mar</option>
                                    <option value=3>Apr</option>
                                    <option value=4>May</option>
                                    <option value=5>Jun</option>
                                    <option value=6>Jul</option>
                                    <option value=7>Aug</option>
                                    <option value=8>Sep</option>
                                    <option value=9>Oct</option>
                                    <option value=10>Nov</option>
                                    <option value=11>Dec</option>
                                </select>
                                <input type='number' min='1' id='year'>
                            </form>
                        </div>
                        <!-- Month view event section -->
                        <div class='event-container'>
                            <div class='events visible'>
                                <div id="event-date"></div>
                                <div id="eventDiv">
                                    <span class='no-Events event-message'>There are no events</span>
                                    <div id="label">
                                        <span class="label-desc">EVENT</span>
                                        <span class="label-time">TIME</span>
                                    </div>
                                    <div id="sportsCategory"></div>
                                    <div id="event-row"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Day View -->
                    <div id="day-view">
                        <!-- Day view event modal -->
                        <div id="dayModal" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <div id="dayContent">
                                    <div id="daySports"></div>
                                    <span>Select date</span><span class="close">Close</span>
                                    <div class="selectDate">
                                        <span id='prevDay' class='time-skip'><span class="chevron left"></span></span>
                                        <div class='date-con'>
                                            <span id='day'></span> 
                                            <span id='date'></span> 
                                            <span id='dateMonth'></span> 
                                            <span id='dateYear'></span>
                                        </div>
                                        <span id='nextDay' class='time-skip'><span class="chevron right"></span></span>
                                    </div>
                                    <!-- day view event -->
                                    <span class='no-dayEvents event-message'>There are no events</span>
                                    <div id="mob-label">
                                        <span class="label-desc">EVENT</span>
                                        <span class="label-time">TIME</span>
                                    </div>
                                    <div id="mob-event-row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	    </div>

        <style>
/***** Container- calendar- Events ******/

.section-wrapper.cal {
    max-width: 64%;
}
.cal .page-content {
    background-color: #f3f6fb;
    font-family: 'Lato-Regular'
}
.cal .calendar-container {
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    padding: 20px;
    align-items: stretch;
    justify-content: center;
}

.cal .calendar {
    align-self:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid black; */
    min-height: 425px;
    margin-right: 10px;
}

/***** Calender Header *****/

.cal .date-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #868686;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    height:2em;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16),
     0 3px 6px rgba(0,0,0,0.23);
     
}

.cal .date-header .time-skip{
    height:100%;
    line-height: 2em;
    padding: 0 1.2em 0 1.2em;
}

.cal .date-header .time-skip:hover {
    background-color: rgba(0,0,0,0.30);
    cursor: pointer;
}
.cal form {
    display: none;
}

/***** Calendar Body *****/

.cal .days-body thead .days-row th {
    padding: 0.5em 1em;
    cursor: default;
    border: 2px solid #004696;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
}

/* .days-body thead .days-row th:hover{
    color:yellow;
    transition: .5s;
} */

.cal .days-row {
    background-color: #004696;
}

.calendar-days td {
    padding: .25em 2em 4em 4em;
    cursor: default;
    border: 2px solid #004696;
    text-align:center;
    transition: all 600ms;
    font-size: 15px;
    color: #000;
    font-weight: bold;
}

.calendar-days td:hover {
    background: #3F51B5;
}

.cal .day {
    position: relative
}

.cal #event-date {
    display: block;
    padding: 15px;
    width: 100%;
    text-align: center;
    background-color: #004696;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
}

/******** Category *********/
.cal .category {
    display: flex;
    justify-content: center;
}
.cal select#cat {
    padding: 15px 10px;
    width: 30%;
    color: #3f51b5;
    font-weight: bold;
    border-color: #d9d9d9;
    border-radius: 5px;
}
.cal select:focus,
.cal select:active {
    outline: none;
}
.cal select#cat option {
    padding: 15px;
}
.cal option:active {
    display: block;
    text-transform: capitalize;
}

/****** Events ********/

.cal .event-container{
    border-left:none;
    display: flex;
    width:433px;
    height: 425px;
    border: 2px solid black;
    overflow:hidden;
    overflow-y: auto;
    color: #000;
    font-weight: bold;
}

.cal .events{
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center; /*center children horizontally*/
    overflow-y: auto;
    justify-content: start;
    padding: 10px auto;
    width: 100%;
}

.cal .events .event-message{
    margin: 0 auto;
    padding: 5px 0px;
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    font-size: 15px;
}

.cal .label-desc,
.cal .label-time {
    margin: 0 auto;
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}

.cal .event-message {
    display: block;
}

.cal #eventDiv {
    display: block;
    width: 100%;
    font-size: 17px;
}

.cal #event-row {
    padding: 10px;
}
.cal #label {
    padding: 5px 10px;
}

.cal #event-row a {
    color: #000;
}

.cal .event-desc,
.cal .label-desc {
    /* align-self: flex-start; */
    word-wrap: break-word;
    flex-shrink: 0;
    /* order: -1; */
    font-weight: bold;
    position: relative;
    width: 69%;
    display: inline-block;
}

.cal .event-time {
    width: 31%;
    display: inline-block;
    text-align: center;
}

.cal .label-time {
    width: 28%;
    display: inline-block;
    text-align: center;
    font-weight: bold;
}

.cal .no-Events {
    padding: 15px 10px;
    text-align: center;
}

.cal .hasEvent {
    background: #dd9756;
}

.cal .active {
    background: blue;
}

.cal .today {
    /* background: #4CAF50 !important; */
    color: #4CAF50 !important;
}

.cal .active.day {
    background: #3F51B5;
    color: #fff !important;
}

.cal .active-event:before {
    /* background: pink; */
    content: attr(data-char);
    display: block;
    background: #6d6d6d;
    width: 25px;
    height: 25px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    margin: 0 auto;
    position: absolute;
    top: 25px;
    right: 35px;
}

/****animations*******/

.cal .hidden {
    height: 0; opacity: 0; width: 0;
    overflow: hidden;
    transition: height 0ms 400ms, opacity 200ms 0ms, width 0ms 0ms;
}

.cal .visible {
    height: 100%; opacity: 1; width: 100%;
    transition: height 200ms 0ms, opacity 600ms 200ms, width 0ms 0ms;
}

.cal .swingHide {
    opacity: 0;
    transform: rotateY(-90deg);
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}

.cal .show {
    opacity: 1;
    transform: none;
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}
#day-view {
    display: none;
}

/****chevron*******/
.chevron::before {
	border-style: solid;
	border-width: 0.15em 0.15em 0 0;
	content: '';
	display: inline-block;
	height: 0.70em;
	left: 0.15em;
	position: relative;
	top: 0.20em;
	transform: rotate(-45deg);
	vertical-align: top;
    width: 0.70em;
    color: #8f8f8f;
}
.chevron.right:before {
	left: 0;
	transform: rotate(45deg);
}
.chevron.left:before {
	left: 0.25em;
	transform: rotate(-135deg);
}
#prevDay .chevron.left {
    position: absolute;
    left: 5px;
}
#nextDay .chevron.right {
    position: absolute;
    right: 5px;
}


/****modal*******/
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 15px;
    border: 1px solid #888;
    width: 90%;
    border-radius: 10px;
}
/* The Close Button */
.close {
    color: #000;
    float: right;
    font-size: 12px;
}
.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
#dayModal {
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: #000;
}
/* #dayContent {
    padding: 20px 0;
} */
.selectDate {
    display: flex;
    justify-content: center;
    padding: 25px 0;
    position: relative;
}
#mob-label {
    padding: 15px 10px;
}
#mob-event-row {
    padding: 0 10px;
}
#mob-event-row a {
    color: #000;
    font-weight: bold;
    padding: 5px 0;
}
.no-dayEvents {
    text-align: center;
    font-weight: bold;
    padding: 10px 0;
}
#daySports {
    text-transform: uppercase;
    text-align: center;
    padding: 10px 0 20px;
}

@media only screen and (max-width: 1024px){
    /* #day-view {
        display: block;
    } */
    /* #month-view {
        display: none;
    } */
    .section-wrapper.cal {
        max-width: 85%;
    }
    .cal select#cat {
        width: 55%;
    }
    .cal .calendar-container {
        padding: 0;
        /* display: block; */
    }
    .cal .calendar {
        /* display: block; */
        margin-bottom: 15px;
        width: 100%;
        min-height: auto;
    }
    .cal .date-header {
        width: 96%;
        font-size: 17px;
    }
    .cal .days-body thead .days-row th {
        padding: 0.5em 1em;
        font-size: 10px;
    }
    .cal .calendar-days td {
        padding: 0.25em 1em 3em 3.5em;
        font-size: 13px;
    }
    .cal .active-event:before {
        top: 25px;
        right: 25px;
        width: 18px;
        height: 18px;
    }
    .cal .event-container {
        width: 45%;
        height: auto;
    }
    .cal #event-date {
        padding: 10px;
        font-size: 13px;
    }
    .cal .events .event-message {
        font-size: 13px;
    }
    .cal select#cat option {
        padding: 15px;
        font-size: 15px;
    }
    .cal #label {
        font-size: 15px;
    }
}

@media only screen and (max-width: 768px){
    /* #day-view {
        display: block;
    } */
    /* #month-view {
        display: none;
    } */
    .section-wrapper.cal {
        max-width: 100%;
    }
    .cal .calendar-container {
        padding: 0;
        /* display: block; */
    }
    .cal .date-header {
        width: 97.2%;
    }
    .cal .calendar-days td {
        padding: 0.25em 1em 3em 2em;
        font-size: 13px;
    }
    .cal .event-container {
        width: 45%;
        height: auto;
    }
    .cal select#cat option {
        padding: 15px;
        font-size: 13px;
    }
}

@media only screen and (max-width: 375px){
    .cal .section-wrapper.cal {
        max-width: 100%;
    }
    .cal select#cat {
        width: 100%;
    }
    .cal .calendar-container {
        padding: 0;
        display: block;
    }
    .cal .calendar {
        display: block;
        margin-bottom: 15px;
    }
    .cal .date-header {
        width: 100%;
    }
    .cal .days-body thead .days-row th {
        padding: 0.5em 0.47em;
        font-size: 8px;
    }
    .cal .calendar-days td {
        padding: 0.25em 0em 2em 0em;
    }
    .cal .active-event:before {
        top: 25px;
        right: 20px;
        width: 15px;
        height: 15px;
    }
    .cal .event-container {
        width: 100%;
        height: auto;
    }
    .section-wrapper.cal {
    max-width: 90%;
    }
}
        </style>

	</main>

<?php get_footer(); ?>
