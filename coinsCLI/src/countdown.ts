export default function startCountdown(seconds: number = 20): void {
  let count = seconds;

  const interval = setInterval(() => {
    process.stdout.write(`\rRefreshes in: ${count}  `);
    count--;

    if (count < 1) {
      clearInterval(interval);
      console.clear()
      process.stdout.write("\n");
    }
  }, 1000);
}
