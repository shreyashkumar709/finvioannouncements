window.addEventListener("load", (e) => {
    e.preventDefault();
    function addNews(heading, text) {
        var newsContainer = document.querySelector('.news-container');

        var newsContentHTML = `
          <div class="news-content">
            <span class="news-heading">${heading}</span>
            <br>
            <span class="news-text">${text}</span>
          </div>
        `;

        newsContainer.innerHTML += newsContentHTML;
    }

    // Example usage:
    addNews('What FinVio Does?', "FinVio, an AI-powered app, revolutionizes financial management. It automates expense tracking, offers personalized budgets and real-time insights, and provides intelligent savings and investment strategies, empowering users to make informed decisions and plan for a better financial future.");
    addNews("Why FinVio?", "In today's AI-driven world, managing finances requires advanced tools like FinVio. Its automation, insights, and personalized recommendations enable individuals to navigate complex financial landscapes and make informed decisions for a secure future.")

})