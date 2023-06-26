import { useState } from "react";
import Product from "../components/Product";

const products = [
  {
    id: 1,
    name: "MacBook Air 15”",
    image: "/macbook_air_15.jpg",
    price: 26999999,
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
  },
  {
    id: 3,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
  },
  {
    id: 4,
    name: "Apple Vision Pro",
    image: "/apple_vision_pro.jpg",
    price: 66999999,
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
  },
  {
    id: 6,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
  },
  {
    id: 7,
    name: "MacBook Air 15”",
    image: "/macbook_air_15.jpg",
    price: 26999999,
  },
  {
    id: 8,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
  },
  {
    id: 9,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
  },
  {
    id: 10,
    name: "Apple Vision Pro",
    image: "/apple_vision_pro.jpg",
    price: 66999999,
  },
  {
    id: 11,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
  },
  {
    id: 12,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
  },
];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const filteredSortedProducts = products
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );

  return (
    <div className="products">
      <header>
        <label>
          Cari:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <section>
          Harga:
          <label>
            Minimal:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
          <label>
            Maksimal:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value || Infinity)}
            />
          </label>
        </section>
        <section>
          Urutkan:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">Normal</option>
            <option value="name">Nama</option>
            <option value="price">Harga</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Naik</option>
            <option value="desc">Turun</option>
          </select>
        </section>
      </header>
      <main>
        {filteredSortedProducts
          .filter((_product, i) => i < 4 * page && i >= 4 * page - 4)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </main>
      <footer>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Sebelumnya
        </button>
        <div>{page}</div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.round(filteredSortedProducts.length / 4)}
        >
          Selanjutnya
        </button>
      </footer>
    </div>
  );
}
