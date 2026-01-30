import BaseRepository from "./BaseRepository.js";

class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll("product", [
        "id",
        "name",
        "size",
        "price_in_cents",
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById(
        "product",
        ["id", "name", "size", "price_in_cents"],
        id,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductRepository;
