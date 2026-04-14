const storyContent = document.querySelectorAll('.story-content');
const thumbnails = document.querySelectorAll('.story-thumbnail');

storyContent.forEach(content => {
  content.addEventListener('mouseenter', function() {
    const currentThumbnail = this.querySelector('.story-thumbnail');
    currentThumbnail.classList.add('hover');
  });

  content.addEventListener('mouseleave', function() {
    const currentThumbnail = this.querySelector('.story-thumbnail');
    currentThumbnail.classList.remove('hover');
  });
});

const inputValue = document.querySelector('.js-input-click');
const postSegemt = document.querySelector('.post-segment');
const whatYorMind = document.querySelector('.whats-on-your-mind');
const header = document.querySelector('.header');

inputValue.addEventListener('click', () => {
  postSegemt.classList.add('post');
});

const cancelBtn = document.querySelector('.js-cancel-btn');
cancelBtn.addEventListener('click', () => {
  postSegemt.classList.remove('post');
});

const makePost = document.querySelector('.js-make-post');
makePost.addEventListener('click', () =>{
  postSegemt.classList.add('post');
});

const createPostBtn = document.querySelector('.js-create-post-button');
const postArticleBlock = document.querySelector('.post-article-block');

createPostBtn.addEventListener('click', () => {
  if (postArticleBlock) {
    postArticleBlock.value = '';
    postArticleBlock.classList.remove('active');
  }

  createPostBtn.classList.add('active');
  if(createPostBtn.classList.contains('active')){
    createPostBtn.innerHTML = `<div class="loader-container">Creating post... <p class="loader"></p></div>`;

    setTimeout(() => {
      createPostBtn.classList.remove('clicked');
      createPostBtn.innerHTML = `Create A Post`;
    }, 2000);
  }
  setTimeout(() => {
    postSegemt.classList.remove('post');
  }, 2000);
});

if (postArticleBlock) {
  postArticleBlock.addEventListener('click', () => {
    postArticleBlock.classList.add('active');
  });
}

const activeLikeBtn = document.querySelectorAll('.active-like-btn');
activeLikeBtn.forEach(btn => {
  btn.addEventListener('click', () => { 
    btn.classList.toggle('active');
    if(btn.classList.contains('active')){
      btn.innerHTML = `<i class="fa-solid fa-thumbs-up liked-active"></i><span>Liked</span>`;
    } else{
      btn.innerHTML = `<i class="fa-regular fa-thumbs-up"></i><span>Like</span>`;
    }
  });
});

const container = document.getElementById("storyContainer");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function updateButtons() {
  if (container.scrollLeft <= 0) {
    leftBtn.classList.add("disabled");
  } else {
    leftBtn.classList.remove("disabled");
  }

  if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
    rightBtn.classList.add("disabled");
  } else {
    rightBtn.classList.remove("disabled");
  }
}

rightBtn.addEventListener("click", () => {
  container.scrollBy({ left: 200, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  container.scrollBy({ left: -200, behavior: "smooth" });
});

container.addEventListener("scroll", updateButtons);
updateButtons();