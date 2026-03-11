const { performance } = require('perf_hooks');

const themeMap = {
  'default-light': { 'background-color': 'white', 'text-color': '#222', 'highlight-color': '#eee' },
  'default-dark': { 'background-color': '#222', 'text-color': 'white', 'highlight-color': '#2e2e2e' },
  'solarized-light': { 'background-color': '#fdf6e3', 'text-color': '#657b83', 'highlight-color': '#eee8d5' },
  'solarized-dark': { 'background-color': '#002b36', 'text-color': '#839496', 'highlight-color': '#073642' },
  'sepia-light': { 'background-color': '#f4ecd8', 'text-color': '#5b4636', 'highlight-color': '#e4d5b7' },
  'sepia-dark': { 'background-color': '#3e2c1c', 'text-color': '#d8c3a5', 'highlight-color': '#4b382a' }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Minimal stub for document
// We simulate that appending to the DOM is slow (causes reflow/repaint).
// Appending to a DocumentFragment is fast.
const document = {
  getElementById: function(id) {
    return {
      id: id,
      children: [],
      appendChild: function(child) {
        // Appending to the live DOM is slower
        // We simulate a reflow/repaint cost here
        if (child.isFragment) {
           for(let i=0; i<child.children.length; i++) {
               this.children.push(child.children[i]);
               this._simulateReflow();
           }
        } else {
           this.children.push(child);
           this._simulateReflow();
        }
      },
      _simulateReflow: function() {
        let x = 0;
        for (let i = 0; i < 500; i++) x += i; // Simulate work
        return x;
      }
    };
  },
  createElement: function(tag) {
    return {
      tag: tag,
      value: '',
      innerHTML: ''
    };
  },
  createDocumentFragment: function() {
    return {
      isFragment: true,
      children: [],
      appendChild: function(child) {
        // Fast path - no reflows simulated
        this.children.push(child);
      }
    };
  }
};

function benchmarkOld() {
  const start = performance.now();
  for (let i = 0; i < 50000; i++) {
    var themeSelector = document.getElementById('themeSelector');
    for (var themeName in themeMap) {
      var opt = document.createElement('option');
      opt.value = themeName;
      opt.innerHTML = capitalizeFirstLetter(themeName);
      themeSelector.appendChild(opt); // Triggers simulated reflow each time
    }
  }
  const end = performance.now();
  return end - start;
}

function benchmarkNewFragment() {
  const start = performance.now();
  for (let i = 0; i < 50000; i++) {
    var themeSelector = document.getElementById('themeSelector');
    var fragment = document.createDocumentFragment();
    for (var themeName in themeMap) {
      var opt = document.createElement('option');
      opt.value = themeName;
      opt.innerHTML = capitalizeFirstLetter(themeName);
      fragment.appendChild(opt); // Fast path
    }
    // Note: the mock document simulates reflow for each child when fragment is appended.
    // In reality, appending a DocumentFragment triggers only ONE reflow,
    // but the mock is configured to simulate the same work to demonstrate
    // we must fix the mock to accurately reflect reality: appending a fragment is 1 reflow.
  }
  const end = performance.now();
  return end - start;
}

// Let's adjust the MockDocument to reflect reality:
const realisticDocument = {
  getElementById: function(id) {
    return {
      id: id,
      children: [],
      appendChild: function(child) {
        if (child.isFragment) {
           // Batch append: ONLY ONE REFLOW
           for(let i=0; i<child.children.length; i++) {
               this.children.push(child.children[i]);
           }
           this._simulateReflow();
        } else {
           // Single append: ONE REFLOW PER ELEMENT
           this.children.push(child);
           this._simulateReflow();
        }
      },
      _simulateReflow: function() {
        let x = 0;
        for (let i = 0; i < 500; i++) x += i; // Simulate reflow work
        return x;
      }
    };
  },
  createElement: function(tag) {
    return { tag: tag, value: '', innerHTML: '' };
  },
  createDocumentFragment: function() {
    return {
      isFragment: true,
      children: [],
      appendChild: function(child) {
        this.children.push(child);
      }
    };
  }
};

function runBenchmarkOld() {
  const start = performance.now();
  for (let i = 0; i < 50000; i++) {
    var themeSelector = realisticDocument.getElementById('themeSelector');
    for (var themeName in themeMap) {
      var opt = realisticDocument.createElement('option');
      opt.value = themeName;
      opt.innerHTML = capitalizeFirstLetter(themeName);
      themeSelector.appendChild(opt); // 6 reflows per loop
    }
  }
  const end = performance.now();
  return end - start;
}

function runBenchmarkNewFragment() {
  const start = performance.now();
  for (let i = 0; i < 50000; i++) {
    var themeSelector = realisticDocument.getElementById('themeSelector');
    var fragment = realisticDocument.createDocumentFragment();
    for (var themeName in themeMap) {
      var opt = realisticDocument.createElement('option');
      opt.value = themeName;
      opt.innerHTML = capitalizeFirstLetter(themeName);
      fragment.appendChild(opt); // 0 reflows
    }
    themeSelector.appendChild(fragment); // 1 reflow per loop
  }
  const end = performance.now();
  return end - start;
}

const oldTime = runBenchmarkOld();
const fragTime = runBenchmarkNewFragment();

console.log(`Old time (appends in loop): ${oldTime.toFixed(2)}ms`);
console.log(`Fragment time: ${fragTime.toFixed(2)}ms`);

console.log(`Fragment improvement: ${((oldTime - fragTime) / oldTime * 100).toFixed(2)}%`);
