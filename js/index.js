function showUser() { //增加boder之后，元素会移动，考虑一下元素为什么会移动以及怎么让他不移动
	var userInfo = document.getElementById('userinfo');
	var down = document.getElementById('top-nav-profile-dropdown');
	userInfo.onmouseover = function() {
		down.style.display = 'block';
		userInfo.style.background = '#095FB3';
		userInfo.style.borderLeft = '1px solid #0758a8';
		userInfo.style.borderRight = '1px solid #0758a8';
	}
	down.onmouseout = function() {
		var ali = down.getElementsByTagName('a');
		down.style.display = 'none';
		userInfo.style.background = 'none';
		userInfo.style.border = 'none';
	}
}

function clickInput() { //没有做动画,考虑一下怎么做动画
	var inputBox = document.getElementById('zh-top-search-input');

	inputBox.onfocus = function() {
		inputBox.style.background = '#fff';
	}

	inputBox.onblur = function() {
		inputBox.style.background = '#e1eaf2';
	}
}

window.onload = function() {
	clickInPut(225, 234, 242, 255, 255, 255);
}

function clickInPut(X, Y, Z, x, y, z) {
	var inputBox = document.getElementById('zh-top-search-input');
	var timer;
	inputBox.onfocus = function() {
		timer = setInterval(function() {
			if( x>X) {
				X--;
			} else if (x < X) {
				X++;
			} 
			if( y>Y) {
				Y--;
			} else if (y < Y) {
				Y++;
			} 
			if( z>Z) {
				Z--;
			} else if (z < Z) {
				Z++;
			} 
			inputBox.style.background = 'rgb(' + X + ',' + Y +',' +  Z + ')';
		}, 500)
		clearInterval(timer);
	}
}

addLoadEvent(showUser);
//addLoadEvent(clickInPut);
