function getgoodsScroll1(evt) {
    if (evt) {
        document.querySelector('#one').scrollIntoView({ behavior: "smooth", block: "start"  });
    }
}
function getgoodsScroll2(evt) {
    if (evt) {
        document.querySelector('#two').scrollIntoView({ behavior: "smooth", block: "start"  });
    }
}
function getgoodsScroll3(evt) {
    if (evt) {
        document.querySelector('#three').scrollIntoView({ behavior: "smooth", block: "start"  });
    }
}
function getgoodsScroll4(evt) {
    if (evt) {
        document.querySelector('#four').scrollIntoView({ behavior: "smooth", block: "start"  });
    }
}
function getgoodsScroll5(evt) {
	if (evt) {
			document.querySelector('#five').scrollIntoView({ behavior: "smooth", block: "start"  });
	}
}
export {getgoodsScroll1, getgoodsScroll2, getgoodsScroll3, getgoodsScroll4, getgoodsScroll5}
