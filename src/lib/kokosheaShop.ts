export const kokosheaShopUrl = '/kokoshea#kokoshea-products';

const kokosheaProductShopUrls: Record<string, string> = {
  'face-scrub': kokosheaShopUrl,
  'turmeric-shea-butter': kokosheaShopUrl,
  'hand-body-butter': kokosheaShopUrl,
  'organic-coconut-shea-butter-soap': kokosheaShopUrl,
  'equa-derm-clay-mask': kokosheaShopUrl,
  'anti-aging-serum': kokosheaShopUrl,
  'natural-lux-soaps': kokosheaShopUrl,
  'luxury-lipsticks': kokosheaShopUrl,
};

export function getKokosheaShopUrl(productId?: string) {
  if (!productId) return kokosheaShopUrl;

  return kokosheaProductShopUrls[productId] ?? kokosheaShopUrl;
}
