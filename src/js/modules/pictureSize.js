
const pictureSize = () => {

  const pictures = document.querySelectorAll('.sizes-block');

  const showPicture = (block) => {
    const picture = block.querySelector('img');
    let src = picture.getAttribute('src');
    picture.src = src.slice(0, -4) + '-1' + src.slice(-4);
    block.querySelectorAll('p:not(.sizes-hit)').forEach(item => item.style.display = 'none');
  }

  const hidePicture = (block) => {
    const picture = block.querySelector('img');
    let src = picture.getAttribute('src');
    picture.src = src.slice(0, -6) + src.slice(-4);
    block.querySelectorAll('p').forEach(item => item.style.display = 'block');
  }

  pictures.forEach(picture => {
    picture.addEventListener('mouseenter', () => {
      showPicture(picture);
    })
    picture.addEventListener('mouseleave', () => {
      hidePicture(picture);
    })
  })

}

export default pictureSize;