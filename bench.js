const { performance } = require('perf_hooks');

// Dummy mock for browser document
const document = {
  documentElement: {},
  getElementsByTagName: function(tag) {
    if (tag === 'html') return [this.documentElement];
    return [];
  }
};

const ITERATIONS = 100000000;

console.log("Measuring document.getElementsByTagName('html')[0]...");
const start1 = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  const element = document.getElementsByTagName('html')[0];
}
const end1 = performance.now();
const time1 = end1 - start1;
console.log(`Time: ${time1.toFixed(3)} ms`);

console.log("Measuring document.documentElement...");
const start2 = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  const element = document.documentElement;
}
const end2 = performance.now();
const time2 = end2 - start2;
console.log(`Time: ${time2.toFixed(3)} ms`);

console.log(`Improvement: ${((time1 - time2) / time1 * 100).toFixed(2)}%`);
