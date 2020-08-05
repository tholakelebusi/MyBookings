// Import stylesheets
import './myBookings.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<title>Booking Flight</title>

</head>
<body>



<div id="us">
    <select>
        <option value="0">Find more about us</option>
        <option value="1">CONTACTS</option>
        <option value="2">FACEBOOK</option>
        <option value="3">EMAIL</option>
        <option value="4">TWITTER</option>
</select>
</div>


    <h1>PROVERB FLIGHTS</h1>

<center>

<div class="hhh">TRAVEL SAFE WITH US</div>
</center>

<center>
    <div class="time">
        <label>Booking Date</label>
<input type="datetime-local">
</div>
</center>

<center>
<div id="button">
<button>Booking</button>
<button>Staying</button>
<button>Few Days</button>
<button>Return</button>
</div>
</center>

</style>
<center>
<div class="comment">
comment: <textarea name="comment" rows="4" cols="30">
</textarea>
</div>
</center>`;