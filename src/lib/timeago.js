export function timeAgo(timestamp) {
  const currentDate = new Date();
  const previousDate = new Date(timestamp * 1000);

  const timeDifference = currentDate - previousDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 0) return months + "m ago";
  if (weeks > 0) return weeks + "w ago";
  if (days > 0) return days + "d ago";
  if (hours > 0) return hours + "hr ago";
  if (minutes > 0) return minutes + "m ago";
  if (seconds > 0) return seconds + "s ago";

  return "Just now";
}