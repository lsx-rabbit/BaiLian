 
  var bigImg = document.querySelector('.big-img');
  var float = document.querySelector('.big-img .float');
  var img = document.querySelector('.big-img img');
  var fdj = document.querySelector('.fdj')
  
  bigImg.onmousemove = function (evt) {
      //取得光标位置
      //clientX/clientY
      //pageX/pageY
      //offsetX/offsetY
      var x = evt.offsetX;
      var y = evt.offsetY;
      x = x - float.offsetWidth / 2;
      y = y - float.offsetHeight / 2;

      if (x < 0) {
          x = 0;
      }

      if (y < 0) {
          y = 0;
      }

      if (x > img.offsetWidth - float.offsetWidth) {
          x = img.offsetWidth - float.offsetWidth
      }

      if (y > img.offsetHeight - float.offsetHeight) {
          y = img.offsetHeight - float.offsetHeight
      }

      float.style.left = x + 'px';
      float.style.top = y + 'px';

      fdj.style.backgroundPosition = `${-1 * x}px ${-1 * y}px`
  }
  bigImg.onmouseover = function () {
      float.style.display = 'block';
      fdj.style.display = 'block';
  }

  bigImg.onmouseout = function () {
      float.style.display = 'none';
      fdj.style.display = 'none';
  }
