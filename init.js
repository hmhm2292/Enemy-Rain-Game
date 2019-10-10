const onlyHero = new Hero('hero', '-70px 0px', '-103px 0px', '0px 0px', 500);

const secondHero = new Hero('hero', '-70px 0px', '-103px 0px', '0px 0px', 300);


function eventListeners(leftKey, rightKey, heroName) {
  window.addEventListener('keydown', function (event) {
    if (event.key === leftKey) {
      heroName.changePositionLeft();
    } else if (event.key === rightKey) {
      heroName.changePositionRight();
    }
  });
  window.addEventListener('keyup', function () {
    heroName.lookFront();
  });
}

eventListeners('ArrowLeft', 'ArrowRight', onlyHero);
eventListeners('a', 'd', secondHero);

setTimeout(() => new Enemy('ghost', '-45px 0px'), 500)

function setIntervalX(delay, repetitions) {
  let x = 1;
  let intervalID = setInterval(function () {
    new Enemy('ghost', '-45px 0px');
    ++x
    if (x === repetitions) {
      clearInterval(intervalID);
    }
  }, delay);
}

setIntervalX(2500, 25);