import { normalizeReviewStatus } from "./review-status.js";

const DEFAULT_DISCLAIMER = [
  "This dossier is a structured technical evidence artifact prepared to support advisory work.",
  "It does not constitute legal advice, a legal opinion, valuation advice, investment advice, a compliance certification, or an audit opinion.",
  "This artifact surfaces conditions. Counsel names the law."
].join(" ");

export function buildPartnerMetadata({ product, intake, reference, options = {} }) {
  const partner = intake.partner && typeof intake.partner === "object" ? intake.partner : {};
  const metadata = options.metadata && typeof options.metadata === "object" ? options.metadata : {};

  return {
    partnerFirmName: firstDefined(
      metadata.partnerFirmName,
      options.partnerFirmName,
      intake.partnerFirmName,
      partner.firmName,
      "[PARTNER FIRM NAME]"
    ),
    partnerLogoPlaceholder: firstDefined(
      metadata.partnerLogoPlaceholder,
      options.partnerLogoPlaceholder,
      intake.partnerLogoPlaceholder,
      partner.logoPlaceholder,
      "[PARTNER LOGO PLACEHOLDER]"
    ),
    preparedFor: firstDefined(
      metadata.preparedFor,
      options.preparedFor,
      intake.preparedFor,
      "[PREPARED FOR]"
    ),
    productName: firstDefined(
      metadata.productName,
      options.productName,
      options.title,
      product.title
    ),
    dateBasis: firstDefined(
      metadata.dateBasis,
      options.dateBasis,
      intake.dateBasis,
      intake.date,
      new Date().toISOString().slice(0, 10)
    ),
    referenceId: firstDefined(
      metadata.referenceId,
      options.referenceId,
      reference
    ),
    reviewStatus: normalizeReviewStatus(firstDefined(
      metadata.reviewStatus,
      options.reviewStatus,
      options.status,
      intake.reviewStatus,
      "draft"
    )),
    disclaimerBlock: firstDefined(
      metadata.disclaimerBlock,
      options.disclaimerBlock,
      intake.disclaimerBlock,
      DEFAULT_DISCLAIMER
    )
  };
}

function firstDefined(...values) {
  return values.find((value) => value !== undefined && value !== null && `${value}`.trim() !== "");
}
