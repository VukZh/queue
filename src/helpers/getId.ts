function getId() {
  const timestamp = Date.now();
  return timestamp.toString(36).slice(-4);
}

export default getId;
