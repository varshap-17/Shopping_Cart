package Backend.Shopping_Cart.Controller;

import Backend.Shopping_Cart.model.shopping;
import Backend.Shopping_Cart.repository.shoppingRepo;
import Backend.Shopping_Cart.service.shoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/shopping")
@CrossOrigin(origins = "*")
public class ShoppingController {
    @Autowired
    private shoppingRepo shoppingRepo;

    private shoppingService shoppingService;

    @GetMapping
    public List<shopping> GetAllProducts(){
        return shoppingRepo.findAll();
    }

    @PostMapping
    public shopping AddProduct(@RequestBody shopping shopping) {
        return shoppingRepo.save(shopping);
    }

    @DeleteMapping("{product_id}")
    public shopping deleteByProductId(@PathVariable int product_id){
        return shoppingRepo.deleteById(product_id);
    }

    @PutMapping("{product_id}")
    public ResponseEntity<shopping> UpdateProduct(@PathVariable int product_id, @RequestBody shopping shoppingData){
        shopping updateProduct = shoppingRepo.findById(product_id).orElseThrow(()-> new RuntimeException("Product does not exists" +product_id));
        updateProduct.setName(shoppingData.getName());
        updateProduct.setPrice(shoppingData.getPrice());
        updateProduct.setDescription(shoppingData.getDescription());
        updateProduct.setCategory(shoppingData.getCategory());
        updateProduct.setStockQuantity(shoppingData.getStockQuantity());
        shoppingRepo.save(updateProduct);
        return ResponseEntity.ok(updateProduct);
    }

    @GetMapping("{product_id}")
    public Optional<shopping> GetProductByID(@PathVariable int product_id){
        return shoppingRepo.findById(product_id);
    }
}
