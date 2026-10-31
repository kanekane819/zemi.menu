export type MenuCategory = "donuts" | "toppings" | "drinks";

export type MenuProduct = {
  id: string;
  name: string;
  description: string;
};

export const menuCategories: {
  id: MenuCategory;
  label: string;
  englishLabel: string;
}[] = [
  { id: "donuts", label: "ドーナツ", englishLabel: "DONUTS" },
  { id: "toppings", label: "トッピング", englishLabel: "TOPPINGS" },
  { id: "drinks", label: "ドリンク", englishLabel: "DRINKS" },
];

export const menuProducts: Record<MenuCategory, MenuProduct[]> = {
  donuts: [
    { id: "chocolate", name: "チョコ", description: "ドーナツベース" },
    { id: "white", name: "ホワイト", description: "ドーナツベース" },
    { id: "strawberry", name: "ストロベリー", description: "ドーナツベース" },
    { id: "matcha", name: "抹茶", description: "ドーナツベース" },
    { id: "sugar", name: "シュガー", description: "ドーナツベース" },
  ],
  toppings: [
    { id: "oreo", name: "オレオ", description: "トッピング" },
    { id: "color-sprinkles", name: "カラースプレー", description: "トッピング" },
    { id: "mini-marshmallow", name: "ミニマシュマロ", description: "トッピング" },
    { id: "crunch", name: "クランチ", description: "トッピング" },
    { id: "dried-strawberry", name: "ドライいちご", description: "トッピング" },
    { id: "silver-balls", name: "アラザン", description: "トッピング" },
    { id: "caramel-sauce", name: "キャラメルソース", description: "トッピング" },
    { id: "chocolate-sauce", name: "チョコソース", description: "トッピング" },
    { id: "whipped-cream", name: "生クリーム", description: "トッピング" },
  ],
  drinks: [
    { id: "cocoa", name: "ココア", description: "ホット／アイス" },
    { id: "coffee", name: "コーヒー", description: "ホット／アイス" },
    { id: "cafe-au-lait", name: "カフェオレ", description: "ホット／アイス" },
    { id: "black-tea", name: "紅茶", description: "ホット／アイス" },
    { id: "calpis", name: "カルピス", description: "アイスのみ" },
    { id: "orange", name: "オレンジ", description: "アイスのみ" },
    { id: "apple", name: "リンゴ", description: "アイスのみ" },
    { id: "blue-hawaii", name: "ブルーハワイ", description: "アイスのみ" },
  ],
};

export const menuPricing = {
  donutBasePrice: null as number | null,
  drinkBasePrice: null as number | null,
  includedToppingCount: 2,
  additionalToppingPrice: 50,
  whippedCreamPrice: 50,
  whippedCreamDrinkIds: null as string[] | null,
};
