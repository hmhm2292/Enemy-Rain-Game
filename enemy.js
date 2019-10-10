class Enemy {
  constructor(name, deadPic) {
    this.name = name;
    this.randomTopPosition = Math.floor(Math.random() * (755 + 1));
    this.leftValue = this.randomTopPosition;
    this.topValue = 0;
    this.deadPic = deadPic;
    this.createEnemy();
    this.move(onlyHero);
    this.move(secondHero);
  }

  createEnemy() {
    const bgId = document.getElementById('bg');
    this.enemyDiv = document.createElement('div');
    this.enemyDiv.className = this.name;
    this.enemyDiv.style.left = this.randomTopPosition + 'px';
    bgId.appendChild(this.enemyDiv);
  }

  move(heroName) {
    setInterval(() => {
      if (this.topValue < 546) {
        this.topValue += 13;
        this.enemyDiv.style.top = this.topValue + 'px';
      } else if ((this.topValue + 2 === heroName.topValue + 2) && (heroName.leftValue < this.leftValue + 11 && heroName.leftValue > this.leftValue - 11)) {
        this.enemyDiv.style.backgroundPosition = this.deadPic;
        setTimeout(() => {
          this.enemyDiv.remove(this.enemyDiv)
        }, 500);
      } else if (this.topValue >= 546) {
        setTimeout(() => {
          this.enemyDiv.remove()
        }, 750);
      }
    }, 300);
  }
}
