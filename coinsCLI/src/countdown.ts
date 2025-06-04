export default function startCountdown(seconds: number = 9): void {
  let count = seconds;

  const interval = setInterval(() => {
    process.stdout.write(`\rRefreshes in: ${count}  `);
    count--;

    if (count < 0) {
      clearInterval(interval);
      process.stdout.write("\n");
    }
  }, 1000);
}
