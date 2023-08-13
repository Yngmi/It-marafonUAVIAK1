const circles = document.querySelectorAll('.circle');

const paragraphs = document.querySelectorAll('.paragraphs p');


paragraphs.forEach((paragraph, index) => {
  paragraph.addEventListener('mouseenter', () => {
    
    circles[index].classList.add('active');
  });

  paragraph.addEventListener('mouseleave', () => {
    
    circles[index].classList.remove('active');
  });
});

