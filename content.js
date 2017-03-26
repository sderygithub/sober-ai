var synonyms = ["clever use of statistics", "machine learning", "multinomial logistic regression", "fully connected neural networks"];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function htmlreplace(a, b, element) {    
    if (!element) element = document.body;    
    var nodes = element.childNodes;
    for (var n=0; n<nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            var r = new RegExp(a, 'gi');
            nodes[n].textContent = nodes[n].textContent.split(a).join(synonyms[Math.floor(Math.random() * synonyms.length)]); 
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}

htmlreplace('AI', 'machine learning');
htmlreplace('A.I.', 'machine learning');
htmlreplace('A.I', 'machine learning');
htmlreplace('Artificial Intelligence', 'machine learning');
