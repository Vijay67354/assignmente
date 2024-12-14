  // Function to increment counters with specific formats
  function incrementCounter(id, start, end, duration, format) {
    let current = start;
    const step = (end - start) / (duration / 50); // Increment per step
    const element = document.getElementById(id);

    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(interval);
        element.textContent = format(current);
      } else {
        element.textContent = format(Math.floor(current));
      }
    }, 50);
  }

  // Format counter for 'k' (round number like 1k, 2k, etc.)
  function formatK(value) {
    if (value >= 1000) {
      return `${Math.floor(value / 1000)}k+`; // Format as 1k, 2k, etc.
    }
    return value; // Keep the value as is for smaller numbers
  }

  // Format counter for '100+' (just add + after the number)
  function formatPlain(value) {
    return `${Math.floor(value)}+`; // Display number with a plus sign
  }

  // Format counter for percentage (show as 99% max)
  function formatPercent(value) {
    return `${Math.min(Math.floor(value), 99)}%`; // Max 99%
  }

  // Initialize the counters with specific formats
  window.onload = () => {
    incrementCounter("counter1", 0, 1000, 2000, formatK); // 1k
    incrementCounter("counter2", 0, 100, 2000, formatPlain); // 100+
    incrementCounter("counter3", 0, 99, 2000, formatPercent); // 99%
  };