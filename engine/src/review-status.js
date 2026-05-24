export const REVIEW_STATUSES = ["draft", "reviewed", "partner-ready"];

export function normalizeReviewStatus(value) {
  const status = value || "draft";

  if (!REVIEW_STATUSES.includes(status)) {
    throw new Error(`Invalid review status "${status}". Allowed values: ${REVIEW_STATUSES.join(", ")}`);
  }

  return status;
}

export function listReviewStatuses() {
  return [...REVIEW_STATUSES];
}
