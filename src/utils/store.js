import { create } from 'zustand';

const useProductStore = create((set, get) => ({
  products: [],
  likes: [],
  cart: [],

  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),

  addToLike: (product) => set((state) => {
    const exists = state.likes.find((p) => p.id === product.id);
    if (exists) {
      return { likes: state.likes.filter((p) => p.id !== product.id) };
    }
    return { likes: [...state.likes, product] };
  }),

  addToCart: (product) => set((state) => {
    const exists = state.cart.find((p) => p.id === product.id);
    if (exists) {
      return {
        cart: state.cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  editProduct: (id, updatedProduct) => set((state) => ({
    products: state.products.map((p) => (p.id === id ? updatedProduct : p)),
  })),

  removeProduct: (id) => set((state) => ({
    products: state.products.filter((p) => p.id !== id),
    cart: state.cart.filter((p) => p.id !== id),
    likes: state.likes.filter((p) => p.id !== id),
  })),

  getLikeCount: () => get().likes.length,
  getCartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
}));

export default useProductStore;