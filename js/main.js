/*
* @Author: Galena
* @Date:   2019-03-19 20:10:42
* @Last Modified by:   Galena
* @Last Modified time: 2019-03-20 20:17:21
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


function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
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
		elementHeight = document.getElementById(currentHref.slice(1)).offsetTop-160 //目标页面滚动高度
		let currentScrollTop = window.scrollY  //当前页面滚动高度	
		// let n = 40 //滚动n次
		// let duration = 400/n //400毫秒内每次滚动时长
		// let scrollPerTime = (elementHeight-currentScrollTop)/n  //每次滚动距离
		// let i = 0  //次数
		// var id = setInterval(() => {
		// 	if (i === n) {
		// 		window.clearInterval()
		// 		return
		// 	}
		// 	window.scrollTo(0, currentScrollTop + scrollPerTime * i)
		// 	i = i + 1
		// }, duration)

		var begin = {y:currentScrollTop}
		var tween = new TWEEN.Tween(begin).to({y:elementHeight}, 400).easing(TWEEN.Easing.Quartic.Out).onUpdate(function() {window.scrollTo(0,begin.y)}).start()
	}
}


let allMainTags = document.querySelectorAll('[data-page]')
window.onscroll = function() {
	if (window.scrollY > 0) {
		document.getElementById('topNavBar').classList.add('sticky')

	} else {
		document.getElementById('topNavBar').classList.remove('sticky')
	}

	let minIndex = 0
	for (let i=1; i<allMainTags.length; i++) {
		if (Math.abs(allMainTags[i].offsetTop - window.scrollY) < Math.abs(allMainTags[minIndex].offsetTop-window.scrollY)) {
			minIndex = i
		}
	}
	for (let navLi of navLis) {
		navLi.classList.remove('liActiveAll')
		if (allMainTags[minIndex].id === navLi.firstChild.getAttribute('href').slice(1)) {
			navLi.classList.add('liActiveAll')
		}
	}
}


