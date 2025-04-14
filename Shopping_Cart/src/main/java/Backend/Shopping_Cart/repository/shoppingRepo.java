package Backend.Shopping_Cart.repository;

import org.springframework.stereotype.Repository;


import Backend.Shopping_Cart.model.shopping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface shoppingRepo extends JpaRepository<shopping, Integer> {

    shopping deleteById(int product_id);
}
