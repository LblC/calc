function countTime() {
	var src_ind = document.getElementById('time1').selectedIndex;
	var dest_ind = document.getElementById('time2').selectedIndex;
	var q = document.getElementById("time-q").value;
	var src;
	var dest;
	var res;

    switch(src_ind) {
    	case 0:
    	    src = 31536000;
    	    break;
    	case 1:
    		src = 604800;
    		break;
    	case 2:
    		src = 86400;
    		break;
    	case 3:
    		src = 3600;
    		break;
    	case 4:
    		src = 60;
    		break;
    	default:
    		src = 1;
    }

    switch(dest_ind) {
    	case 0:
    	    dest = 31536000;
    	    break;
    	case 1:
    		dest = 604800;
    		break;
    	case 2:
    		dest = 86400;
    		break;
    	case 3:
    		dest = 3600;
    		break;
    	case 4:
    		dest = 60;
    		break;
    	default:
    		dest = 1;
    }

    res = src * q / dest;

	document.getElementById('time').innerHTML = res;
}


function countTemp() {
	var src_ind = document.getElementById('temp1').selectedIndex;
	var dest_ind = document.getElementById('temp2').selectedIndex;
	var q = document.getElementById("temp-q").value;
	var src;
	var dest;
	var res;

	if (src_ind === 1) {
		res = 5 / 9 * (q - 32);}
	else{
		res = 9 / 5 * q + 32;
	}

	document.getElementById('temp').innerHTML = res;

}

function checkTemp() {
	if (document.getElementById("temp1").value == "C") {
		document.getElementById("temp2").value = "F";
	}
	else {
		document.getElementById("temp2").value = "C";
	}
}