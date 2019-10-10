class Enemy {
  constructor(name, deadPic) {
    this.name = name;
    this.randomTopPosition = Math.floor(Math.random() * (755 + 1));
    this.leftValue = this.randomTopPosition;
    this.topValue = 0;
    this.deadPic = deadPic;
    this.createEnemy();
    this.move();
  }

  createEnemy() {
    const bgId = document.getElementById('bg');
    this.enemyDiv = document.createElement('div');
    this.enemyDiv.className = this.name;
    this.enemyDiv.style.left = this.randomTopPosition + 'px';
    bgId.appendChild(this.enemyDiv);
  }

  move() {
    setInterval(() => {
      if (this.topValue < 547) {
        this.topValue += 13;
        this.enemyDiv.style.top = this.topValue + 'px';
      }
      if (this.topValue > 546) {
        setTimeout(() => {
          this.enemyDiv.remove();
        }, 100);
      }
      if (this.topValue > 530 && this.topValue < 546) {
        myHeroes.forEach((element) => {
          if ((element.leftValue < this.leftValue + 15 && element.leftValue > this.leftValue - 15)) {
            this.enemyDiv.style.backgroundPosition = this.deadPic;
            setTimeout(() => {
              this.enemyDiv.remove(this.enemyDiv)
            }, 200)
          }
        });
      }
    }, 300);
  }
}
