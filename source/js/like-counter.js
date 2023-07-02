const likeCounters = document.querySelectorAll('.like-counter');

likeCounters.forEach((counter) => {
  const likeButton = counter.querySelector('.like-counter_like-button');
  const likeNumber = counter.querySelector('.like-counter_like-number');

  let isLiked = false;

  likeButton.addEventListener('click', () => {
    if (!isLiked) {
      let currentLikes = parseInt(likeNumber.textContent);
      currentLikes += 1;
      likeNumber.textContent = currentLikes;
      likeButton.classList.add('liked');
    } else {
      let currentLikes = parseInt(likeNumber.textContent);
      currentLikes -= 1;
      likeNumber.textContent = currentLikes;
      likeButton.classList.remove('liked');
    }

    isLiked = !isLiked;
  });
});
