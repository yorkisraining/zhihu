function addLoadEvent(func) {
	var oldload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (Parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " " + value;
		element.className = newClassName;
	}
}

function getChild(parent) {
	var B = document.getElementById(parent);
	var A = B.childNodes;
	var childs = [];
	for (var i=0; i<A.length; i++) {
		if(A[i].nodeType != 3) {
			childs.push(A[i]);
		}
	}
	return childs;
}

function getTargetChild(parent, target) {
	var B = document.getElementById(parent);
	var A = B.childNodes;
	var childs = [];
	for (var i=0; i<A.length; i++) {
		if(A[i].nodeName != target) {
			childs.push(A[i]);
		}
	}
	return childs;
}
