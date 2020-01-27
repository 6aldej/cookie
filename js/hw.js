///Какой у вас город ?
const butclear = document.getElementById('but');
const butclear2 = document.getElementById('but2')
const youcity = document.getElementById('youcity')
const textare = document.getElementById('area')

area.value = localStorage.getItem('area');

area.oninput = () => {
	localStorage.setItem('area', area.value)
};

butclear.onclick=() =>{
	localStorage.removeItem('area');
	area.value = '';
	textare.style.display ='block';
	YourCityOFF();
}

const YourCity = () => {
	youcity.innerHTML = 'Ваш город ' + area.value
}

const YourCityOFF = () => {
	youcity.style.display = 'none';
}

const YourCityOFFF = () => {
	if (area.value == '')
		youcity.style.display = 'none';
}

const AreaOFF = () => {
	if (area.value !== '')
		textare.style.display ='none';
}

YourCity()
AreaOFF()
YourCityOFFF()

///Чекбоксы

document.getElementById('box1').onclick = function() {
  if(document.getElementById('box1').checked) {
    localStorage.setItem('box1', "true");
  } else {
    localStorage.setItem('box1', "false");
  }
}
if (localStorage.getItem('box1') == "true") {
  document.getElementById("box1").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
}

document.getElementById('box2').onclick = function() {
  if(document.getElementById('box2').checked) {
    localStorage.setItem('box2', "true");
  } else {
    localStorage.setItem('box2', "false");
  }
}
if (localStorage.getItem('box2') == "true") {
  document.getElementById("box2").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
}

document.getElementById('box3').onclick = function() {
  if(document.getElementById('box3').checked) {
    localStorage.setItem('box3', "true");
  } else {
    localStorage.setItem('box3', "false");
  }
}
if (localStorage.getItem('box3') == "true") {
  document.getElementById("box3").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
	document.getElementById('cake').style.display='block';
	document.getElementById('check').style.display='none';
}

document.getElementById('box4').onclick = function() {
  if(document.getElementById('box4').checked) {
    localStorage.setItem('box4', "true");
  } else {
    localStorage.setItem('box4', "false");
  }
}
if (localStorage.getItem('box4') == "true") {
  document.getElementById("box4").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
}

document.getElementById('box5').onclick = function() {
  if(document.getElementById('box5').checked) {
    localStorage.setItem('box5', "true");
  } else {
    localStorage.setItem('box5', "false");
  }
}
if (localStorage.getItem('box5') == "true") {
  document.getElementById("box5").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
}

document.getElementById('box6').onclick = function() {
  if(document.getElementById('box6').checked) {
    localStorage.setItem('box6', "true");
  } else {
    localStorage.setItem('box6', "false");
  }
}
if (localStorage.getItem('box6') == "true") {
  document.getElementById("box6").setAttribute('checked','checked');
  document.getElementById('box1').disabled = true;
  document.getElementById('box2').disabled = true;
  document.getElementById('box3').disabled = true;
  document.getElementById('box4').disabled = true;
  document.getElementById('box5').disabled = true;
  document.getElementById('box6').disabled = true;
}

butclear2.onclick=() =>{
	localStorage.removeItem('box1');
	localStorage.removeItem('box2');
	localStorage.removeItem('box3');
	localStorage.removeItem('box4');
	localStorage.removeItem('box5');
	localStorage.removeItem('box6');
	document.getElementById("box1").removeAttribute('checked','checked')
	document.getElementById("box2").removeAttribute('checked','checked')
	document.getElementById("box3").removeAttribute('checked','checked')
	document.getElementById("box4").removeAttribute('checked','checked')
	document.getElementById("box5").removeAttribute('checked','checked')
	document.getElementById("box6").removeAttribute('checked','checked')
	document.getElementById('box1').disabled = false;
	document.getElementById('box2').disabled = false;
	document.getElementById('box3').disabled = false;
	document.getElementById('box4').disabled = false;
	document.getElementById('box5').disabled = false;
	document.getElementById('box6').disabled = false;
	document.getElementById('cake').style.display='none';
	document.getElementById('check').style.display='block';

}
