const API_ENDPOINT = "https://type.fit/api/quotes";
let quotes = [];

const init = async () => {
  try {
    const jsonRes = await fetch(API_ENDPOINT);
    quotes = await jsonRes.json();
    setMarkup();
  } catch (error) {
    quotation.innerHTML = error.message;
  }
};

const randomIndexGenerator = (len) => {
  return Math.floor(Math.random() * (len + 1));
};

init();

const setMarkup = () => {
  const { text, author } = quotes[randomIndexGenerator(quotes.length)];
  quotation.innerHTML = `
  <span>
  <header>
        <h1>Random Quote</h1>
    </header>     
  </span>
    <span class="quote">${text}</span>  
        <div class="footer">
            <div class="author">
                <span class="line"></span>&nbsp;
                <span>${author ? author : "Anonymous"}</span>
            </div>
            <span id="refresh" title="Refresh | click R">
                <i class="button"><span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>New Quote</i>
            </span>            
        </div>
        
    `;
  refresh.addEventListener("click", () => {
    setMarkup();
  });
};

document.onkeypress = (e) => {
  if (e.key === "r" || e.key === "R") setMarkup();
};