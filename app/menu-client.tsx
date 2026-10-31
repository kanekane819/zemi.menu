"use client";

import { useState } from "react";
import Link from "next/link";
import {
  menuCategories,
  menuProducts,
  menuPricing,
  type MenuCategory,
} from "@/lib/menu-data";

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("donuts");
  const products = menuProducts[activeCategory];
  const category = menuCategories.find((item) => item.id === activeCategory);
  const basePrice =
    activeCategory === "donuts"
      ? menuPricing.donutBasePrice
      : menuPricing.drinkBasePrice;

  return (
    <main className="menu-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="ANAゼミ メニューのトップ">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-name">
            <strong>ANAゼミ</strong>
            <span>FESTIVAL MENU</span>
          </span>
        </Link>
        <span className="open-badge">WEB MENU</span>
      </header>

      <section className="catalog" aria-label="商品一覧">
        <div className="section-heading">
          <div>
            <h2>メニュー</h2>
          </div>
          <span className="catalog-count">{products.length} ITEMS</span>
        </div>

        <div className="category-tabs" role="tablist" aria-label="商品カテゴリ">
          {menuCategories.map((item) => (
            <button
              key={item.id}
              className={`category-tab${activeCategory === item.id ? " is-active" : ""}`}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === item.id}
              aria-controls="product-list"
              onClick={() => setActiveCategory(item.id)}
            >
              <span>{item.label}</span>
              <span className="tab-count">{menuProducts[item.id].length}</span>
            </button>
          ))}
        </div>

        <div
          className="product-grid"
          id="product-list"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
        >
          {products.map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className={`product-art art-${activeCategory}`} aria-hidden="true">
                <span className="art-sparkle">{index % 2 === 0 ? "✦" : "✧"}</span>
                <span className="art-label">{category?.englishLabel}</span>
                <span className="image-placeholder">PHOTO COMING SOON</span>
              </div>
              <div className="product-details">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <span className="product-price">
                  {activeCategory === "toppings"
                    ? "選択数に応じて計算"
                    : basePrice === null
                      ? "価格未設定"
                      : `${basePrice}円〜`}
                </span>
              </div>
            </article>
          ))}
        </div>

        {activeCategory === "donuts" && (
          <p className="price-note">
            ドーナツの価格は現在準備中です。
          </p>
        )}
        {activeCategory === "toppings" && (
          <p className="price-note">
            トッピングは{menuPricing.includedToppingCount}種類まで無料、
            {menuPricing.includedToppingCount + 1}種類目から1種類につき
            {menuPricing.additionalToppingPrice}円です。
          </p>
        )}
        {activeCategory === "drinks" && (
          <p className="price-note">
            ドリンクの価格とホイップ対象商品は現在準備中です。
          </p>
        )}
      </section>

      <footer className="page-footer">
        <span>ANA SEMINAR</span>
        <span>THANK YOU FOR VISITING</span>
      </footer>

      <div className="cart-bar">
        <div className="cart-summary">
          <span className="cart-icon" aria-hidden="true">
            0
          </span>
          <span>
            <strong>カートを見る</strong>
            <small>カート機能は準備中です</small>
          </span>
        </div>
        <button className="cart-button" type="button" disabled>
          次のステップで追加
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  );
}
