// document.getElementById('changeStyleButton').addEventListener('click', function() {
//  x
// });

document.getElementById('button1').addEventListener('click', function() {
    console.log('Button 1 clicked!');
    window.location.href = 'index.html';
});

//testo che diventa verde
function testoVerde() {
  var targetElement2 = document.getElementById('targetElement2');
  if (window.location.href.includes('eng.html')) {
      targetElement2.classList.add('greenStyle');
  }
};
testoVerde()

//titoli che diventano verdi
function titoliVerdi() {
  var targetTitoli = document.querySelectorAll('#targetTitolo');
  if (window.location.href.includes('eng.html')) {
      for (var i = 0; i < targetTitoli.length; i++) {
          targetTitoli[i].classList.add('greenStyle');
      }
  }
};
titoliVerdi()

//bottoni che diventano verdi a sinistra,1 e 2
function bottoniVerdi() {
  var target1 = document.getElementById('button1');
  if (window.location.href.includes('eng.html')) {
      target1.classList.add('greenStyle');
  }
};
bottoniVerdi()

function bottoni2Verdi() {
  var target2 = document.getElementById('button2');
  if (window.location.href.includes('eng.html')) {
      target2.classList.add('greenStyle');
  }
};
bottoni2Verdi()

//bottoni che diventano verdi a sinistra,5 e 6
function bottoni3Verdi() {
  var target5 = document.getElementById('button5');
  if (window.location.href.includes('eng.html')) {
      target5.classList.add('greenStyle');
  }
};
bottoni3Verdi()
function bottoni4Verdi() {
  var target6 = document.getElementById('button6');
  if (window.location.href.includes('eng.html')) {
      target6.classList.add('greenStyle');
  }
};
bottoni4Verdi()

document.getElementById('button2').addEventListener('click', function() {
    console.log('Button 2 clicked!');
    console.log('ciao')
    window.location.replace('eng.html');
});

//bottoni ig e fb
document.getElementById('button5').addEventListener('click', function() {
    console.log('Button 5 clicked!');
    window.location.href = 'https://www.instagram.com/edera.collective/';
});

document.getElementById('button6').addEventListener('click', function() {
    console.log('Button 6 clicked!');
    window.location.href = 'https://linktr.ee/edera.collective?utm_source=linktree_profile_share&ltsid=6bbde1fe-0080-4103-8a03-839a0d53d440';
});

  
  


