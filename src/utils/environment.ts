export function getShardIndex() {
    // Fallback to 0 if not set or invalid
    const index = parseInt(process.env.SHARD_INDEX || "0", 10);
    return isNaN(index) ? 0 : index;
}