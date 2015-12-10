function runChecker() {
  chrome.tabs.executeScript({
    file: 'content.js'
  });
}

document.getElementById('grab').addEventListener('click', runChecker);