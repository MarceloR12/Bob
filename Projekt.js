
let d = document

function split(left, links, x, rechts, right, up, oben, unten, down)
{  if (d.getElementById(x).src.match('R.png') && d.getElementById(rechts).src.match('i.png'))
  {
    this.move(links, x, rechts);
  }
  else if(d.getElementById(x).src.match('L.png') && d.getElementById(links).src.match('i.png'))
  {
    this.move(rechts, x, links);
  }
  else if (d.getElementById(x).src.match('O.png') && d.getElementById(oben).src.match('i.png'))
  {
    this.move(unten, x, oben);
  }
  else if (d.getElementById(x).src.match('U.png') && d.getElementById(unten).src.match('i.png'))
  {
    this.move(oben, x, unten);
  }
  else if (d.getElementById(x).src.match('RX.png') && d.getElementById(rechts).src.match('i.png'))
  {
    this.movethree(left, links, x, rechts);
  }
  else if (d.getElementById(x).src.match('LX.png') && d.getElementById(links).src.match('i.png'))
  {
    this.movethree(right, rechts, x, links);
  }
  else if (d.getElementById(x).src.match('OX.png') && d.getElementById(oben).src.match('i.png'))
  {
    this.movethree(down, unten, x, oben);
  }
  else if (d.getElementById(x).src.match('UX.png') && d.getElementById(unten).src.match('i.png'))
  {
    this.movethree(up, oben, x, unten);
  }
}
function move(x, y, z)
{
  d.getElementById(z).src = d.getElementById(y).src;
  d.getElementById(y).src = d.getElementById(x).src;
  d.getElementById(x).src = "Autos/i.png";
  this.sound();
}
function movethree(q, x, y, z)
{
  d.getElementById(z).src = d.getElementById(y).src;
  d.getElementById(y).src = d.getElementById(x).src;
  d.getElementById(x).src = d.getElementById(q).src;
  d.getElementById(q).src = "Autos/i.png";
  this.sound();
}
function sound()
{
  var motor = new Audio('motor.mp3');
      motor.play();
      setTimeout(function(){
      motor.pause();}, 500);
}

function win()
{
  if (d.getElementById('outtwo').src.match('R.png')) {
      window.alert("You have won!")
  }
}
function LevelLoad() {
  d.getElementById('eins').src = "Autos/i.png"
  d.getElementById('zwei').src = "Autos/i.png"
  d.getElementById('drei').src = "Autos/i.png"
  d.getElementById('vier').src = "Autos/i.png"
  d.getElementById('fünf').src = "Autos/i.png"
  d.getElementById('sechs').src = "Autos/i.png"
  d.getElementById('sieben').src = "Autos/i.png"
  d.getElementById('acht').src = "Autos/i.png"
  d.getElementById('neun').src = "Autos/i.png"
  d.getElementById('zehn').src = "Autos/i.png"
  d.getElementById('elf').src = "Autos/i.png"
  d.getElementById('zwölf').src = "Autos/i.png"
  d.getElementById('dreizehn').src = "Autos/i.png"
  d.getElementById('vierzehn').src = "Autos/i.png"
  d.getElementById('fünfzehn').src = "Autos/i.png"
  d.getElementById('sechszehn').src = "Autos/i.png"
  d.getElementById('siebzehn').src = "Autos/i.png"
  d.getElementById('achtzehn').src = "Autos/i.png"
  d.getElementById('neunzehn').src = "Autos/i.png"
  d.getElementById('zwanzig').src = "Autos/i.png"
  d.getElementById('einundzwanzig').src = "Autos/i.png"
  d.getElementById('zweiundzwanzig').src = "Autos/i.png"
  d.getElementById('dreiundzwanzig').src = "Autos/i.png"
  d.getElementById('vierundzwanzig').src = "Autos/i.png"
  d.getElementById('fünfundzwanzig').src = "Autos/i.png"
  d.getElementById('sechsundzwanzig').src = "Autos/i.png"
  d.getElementById('siebenundzwanzig').src = "Autos/i.png"
  d.getElementById('achtundzwanzig').src = "Autos/i.png"
  d.getElementById('neunundzwanzig').src = "Autos/i.png"
  d.getElementById('dreißig').src = "Autos/i.png"
  d.getElementById('einunddreißig').src = "Autos/i.png"
  d.getElementById('zweiunddreißig').src = "Autos/i.png"
  d.getElementById('dreiunddreißig').src = "Autos/i.png"
  d.getElementById('vierunddreißig').src = "Autos/i.png"
  d.getElementById('fünfunddreißig').src = "Autos/i.png"
  d.getElementById('sechsunddreißig').src = "Autos/i.png"
  d.getElementById('siebenunddreißig').src = "Autos/i.png"
  d.getElementById('achtunddreißig').src = "Autos/i.png"
  d.getElementById('neununddreißig').src = "Autos/i.png"
  d.getElementById('vierzig').src = "Autos/i.png"
  d.getElementById('einundvierzig').src = "Autos/i.png"
  d.getElementById('zweiundvierzig').src = "Autos/i.png"
  d.getElementById('dreiundvierzig').src = "Autos/i.png"
  d.getElementById('vierundvierzig').src = "Autos/i.png"
  d.getElementById('fünfundvierzig').src = "Autos/i.png"
  d.getElementById('sechsundvierzig').src = "Autos/i.png"
  d.getElementById('siebenundvierzig').src = "Autos/i.png"
  d.getElementById('achtundvierzig').src = "Autos/i.png"
  d.getElementById('neunundvierzig').src = "Autos/i.png"
  d.getElementById('outone').src = "Autos/i.png"
  d.getElementById('outtwo').src = "Autos/i.png"
}
function level()
{
    d.getElementById("eins").src = ".png";
}
function LevelCounter()
{


}
