export default function startCountdown() {
  let count = 9;

  const interval = setInterval(() => {
    process.stdout.write(`\rRefreshes in: ${count}  `);
    count--;

    if (count < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
