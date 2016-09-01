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
		document.getElementById("temp2").innerHTML = "F";
	}
	else {
		document.getElementById("temp2").innerHTML = "C";
	}
}

function countLen() {
	var src_ind = document.getElementById('len1').selectedIndex;
	var dest_ind = document.getElementById('len2').selectedIndex;
	var q = document.getElementById("len-q").value;
	var src;
	var dest;
	var res;

    switch(src_ind) {
    	case 0:
    	    src = 1000000;
    	    break;
    	case 1:
    		src = 1000;
    		break;
    	case 2:
    		src = 914.4;
    		break;
    	case 3:
    		src = 304.8;
    		break;
    	case 4:
    		src = 25.4;
    		break;
    	case 5:
    		src = 10;
    		break;
    	default:
    		src = 1;
    }

    switch(dest_ind) {
    	case 0:
    	    dest = 1000000;
    	    break;
    	case 1:
    		dest = 1000;
    		break;
    	case 2:
    		dest = 914.4;
    		break;
    	case 3:
    		dest = 304.8;
    		break;
    	case 4:
    		dest = 25.4;
    		break;
    	case 5:
    		dest = 10;
    		break;
    	default:
    		dest = 1;
    }

    res = src * q / dest;

	document.getElementById('len').innerHTML = res;
}

function countW() {
	var src_ind = document.getElementById('w1').selectedIndex;
	var dest_ind = document.getElementById('w2').selectedIndex;
	var q = document.getElementById("w-q").value;
	var src;
	var dest;
	var res;

    switch(src_ind) {
    	case 0:
    	    src = 1000000;
    	    break;
    	case 1:
    		src = 1000;
    		break;
    	case 2:
    		src = 453.59;
    		break;
    	case 3:
    		src = 28.35;
    		break;
    	default:
    		src = 1;
    }

    switch(dest_ind) {
    	case 0:
    	    dest = 1000000;
    	    break;
    	case 1:
    		dest = 1000;
    		break;
    	case 2:
    		dest = 453.59;
    		break;
    	case 3:
    		dest = 28.35;
    		break;
    	default:
    		dest = 1;
    }

    res = src * q / dest;

	document.getElementById('w').innerHTML = res;
}