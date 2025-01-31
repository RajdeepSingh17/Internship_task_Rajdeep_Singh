const articlesPerPage = 4;
let currentPage = 1;

const articles = [
    {
      title: "Breaking News: Tech Innovation",
      description: "Tech companies are revolutionizing AI with new models.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Sports Update: Championship Final",
      description: "The championship final ended with an incredible finish!",
      imageUrl: ""
    },
    {
      title: "Health: New Research on Nutrition",
      description: "Experts say that a balanced diet boosts productivity.",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    },
    {
      title: "Entertainment: Movie Release",
      description: "The most anticipated movie of the year is finally here!",
      imageUrl: "https://images.unsplash.com/photo-1505238680356-667803448bb6"
    }
  ];
  
  

function toggleArticleForm() {
  const formContainer = document.getElementById("article-form-container");
  formContainer.classList.toggle("d-none");
}

function submitArticle(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const imageUrl = document.getElementById("image-url").value.trim();

  if (!title || !description) {
    alert("Title and description are required!");
    return;
  }

  // Add article to the array
  articles.unshift({ title, description, imageUrl });

  // Reset form and hide it
  document.getElementById("article-form").reset();
  toggleArticleForm();

  renderArticles();
}

function renderArticles() {
    const newsFeed = document.getElementById("news-feed");
    newsFeed.innerHTML = "";
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage);
  
    paginatedArticles.forEach(article => {
      const defaultImage = "https://via.placeholder.com/300"; // Fallback Image
      const imageUrl = article.imageUrl ? article.imageUrl : defaultImage;
  
      const articleCard = document.createElement("div");
      articleCard.classList.add("col-md-6");
      articleCard.innerHTML = `
        <div class="card">
          <img src="${imageUrl}" class="card-img-top" alt="Article Image" 
               onerror="this.onerror=null; this.src='${defaultImage}'">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
          </div>
        </div>
      `;
      newsFeed.appendChild(articleCard);
    });
  
    updatePagination();
  }
  

function updatePagination() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const prevPageBtn = document.getElementById("prev-page");
  const nextPageBtn = document.getElementById("next-page");
  const pageNumbers = document.getElementById("page-numbers");

  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

  pageNumbers.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.innerHTML += `<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-secondary'} mx-1" onclick="goToPage(${i})">${i}</button>`;
  }
}

function goToPage(page) {
  currentPage = page;
  renderArticles();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderArticles();
  }
}

function nextPage() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderArticles();
  }
}

// Load Default Articles on Page Load
renderArticles();
