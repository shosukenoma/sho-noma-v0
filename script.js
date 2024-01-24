'use strict'
// import copy from "copy-to-clipboard";

const gmailBtn = document.querySelector('.gmail-btn')
console.log(gmailBtn);
gmailBtn?.addEventListener('click', function() {
  const copyText = "shosuke.noma@gmail.com";
  
  
  navigator.clipboard.writeText(copyText).then(() => {
    alert(`You have copied "${copyText}"`); 
  });
})