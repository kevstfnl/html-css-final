document.querySelectorAll('pre code').forEach((block) => {
    let lines = block.innerHTML.split('\n');
    let minIndent = Math.min(...lines.filter(line => line.trim().length > 0).map(line => line.match(/^\s*/)[0].length));
    block.innerHTML = lines.map(line => line.slice(minIndent)).join('\n'); 
    hljs.highlightBlock(block); 
});