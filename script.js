'use strict'
// import copy from "copy-to-clipboard";

const defaultRepoInfos = [
  {
    repoName: "stock-price-scraper",
    customHeading: null,
    description: "A stock market web scraper that outputs stock price data to a csv file. Built using Go and Colly.",
    language: "Go",
    updatedAt: "2023-09-27",
  },
  {
    repoName: "slack-note-v2",
    customHeading: "Slack Note",
    description: "A minimalistic note taking app built using React.js, inspired by Slack’s self-DM feature.",
    language: "JavaScript",
    updatedAt: "2024-10-04"
  },
  {
    repoName: "sho-noma-v1",
    customHeading: "Portfolio Website",
    description: "My portfolio website built using React.js, with a theme inspired by Paul Smith's signature stripe.",
    language: "JavaScript",
    updatedAt: "2024-01-24"
  },
]

const gmailBtn = document.querySelector('.gmail-btn')
console.log(gmailBtn);
gmailBtn?.addEventListener('click', function() {
  const copyText = "shosuke.noma@gmail.com";
  
  
  navigator.clipboard.writeText(copyText).then(() => {
    alert(`You have copied "${copyText}"`); 
  });
})