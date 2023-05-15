module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="goat">🐐</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="T-Rex">🦖</span>`;
      } else {
        return `<span for="img" aria-label="Skunk">🦨</span>`;
      }
    },
  };
  