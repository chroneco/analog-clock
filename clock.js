


function clock()
{
    /*
1hour = 360/12=30
1 minute = 360/60=6
1 sec = 6
*/
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();

    var hourRot = hour * 30;
    var minuteRot = minute * 6;
    var secondsRot = seconds * 6;

    //update visual
    rotate("#clockhour", hourRot);
    rotate("#clockminute", minuteRot);
    rotate("#clockseconds", secondsRot);
    setTimeout(() => {
        clock();
    }, 100);
}

function rotate(id, rotation)
{
    $(id).css(
        {
            'transform': 'rotate('+rotation+'deg)',
            '-webkit-transform': 'rotate('+rotation+'deg)',
            '-moz-transform': 'rotate('+rotation+'deg)',
            '-ms-transform': 'rotate('+rotation+'deg)',

        }
    );
}
