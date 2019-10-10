class Hero {
  constructor(name, faceLeft, faceRight, faceFront, leftValue) {
    this.name = name;
    this.leftValue = leftValue;
    this.faceLeft = faceLeft;
    this.faceRight = faceRight;
    this.faceFront = faceFront;
    this.topValue = 546;
    this.createHero();
  }

  createHero() {
    const bgId = document.getElementById('bg');
    this.heroDiv = document.createElement('div');
    this.heroDiv.className = this.name;
    this.heroDiv.style.top = this.topValue + 'px';
    this.heroDiv.style.left = this.leftValue + 'px';
    bgId.appendChild(this.heroDiv);
  }

  changePositionLeft() {
    this.heroDiv.style.backgroundPosition = this.faceLeft;
    if (this.leftValue > 0) {
      this.leftValue -= 10;
      this.heroDiv.style.left = this.leftValue + 'px';
    }
  }

  changePositionRight() {
    this.heroDiv.style.backgroundPosition = this.faceRight;
    if (this.leftValue < (800 - 37)) {
      this.leftValue += 10;
      this.heroDiv.style.left = this.leftValue + 'px';
    }
  }

  lookFront() {
    this.heroDiv.style.backgroundPosition = this.faceFront;
  }
}
