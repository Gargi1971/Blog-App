export default function Post(){
    return(
        <div class="post">
        <div class="image">
        <img src="data:image/jpeg;base64,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"></img>
        </div>
        <div class= "texts"><h2>Jane Austen- Relevant though the years.</h2>
        <p class= "info">
          <a class="author">Gargi Singh</a>
          <time> 28-01-2023 10:54am</time>
        </p>
        <p class="summary">Jane Austen is very pertinent even today. She has written about people and their problems, their dysfunctional families, why, and even if, women should marry. Those issues were relevant then, and they're relevant now.</p></div>
      </div>
    );

}