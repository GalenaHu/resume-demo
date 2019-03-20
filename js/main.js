/*
* @Author: Galena
* @Date:   2019-03-19 20:10:42
* @Last Modified by:   Galena
* @Last Modified time: 2019-03-20 16:05:31
*/
P1.onclick = function() {
	PBar.className = 'status-1'
}
P2.onclick = function() {
	PBar.className = 'status-2'
}
P3.onclick = function() {
	PBar.className = 'status-3'
}



let secondMenuContentArr =  document.getElementsByClassName('secondMenuContent')
for (let sMC of secondMenuContentArr) {

	sMC.onmouseenter = function() {
		var i = 0;
		while ( sMC.childNodes[i].tagName !== 'UL') {
			i++
		}
		sMC.childNodes[i].style.display = 'block'
	}
	sMC.onmouseleave = function() {
		var i = 0;
		while ( sMC.childNodes[i].tagName !== 'UL') {
			i++
		}
		sMC.childNodes[i].style.display = 'none'
	}
}

let navLis = document.getElementsByClassName('navLi')
let elementHeight
for (let navLi of navLis) {
	navLi.onmouseover = function() {
		navLi.classList.add('liActive')
	}
	navLi.onmouseout = function() {
		navLi.classList.remove('liActive')
	}
	navLi.onclick = function(e) {
		e.preventDefault()
		var currentHref = e.target.getAttribute('href')
		elementHeight = document.getElementById(currentHref.slice(1)).offsetTop
		window.scrollTo(0, elementHeight-160)
	}
}

window.onscroll = function() {
	if (window.scrollY > 0) {
		document.getElementById('topNavBar').classList.add('sticky')

	} else {
		document.getElementById('topNavBar').classList.remove('sticky')
	}
}


