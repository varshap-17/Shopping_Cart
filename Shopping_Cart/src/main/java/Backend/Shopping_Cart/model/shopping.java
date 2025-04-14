package Backend.Shopping_Cart.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "shopping")
public class shopping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int product_id;
    @Column(name = "name")
    private String name;
    @Column(updatable = true, name= "price")
    private int price;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    private String category;
    @Column(updatable = true, name="stock_quantity")
    private int stockQuantity;

    public int getProduct_id(){
        return product_id;
    }
    public String getName(){
        return name;
    }
    public int getPrice(){
        return price;
    }
    public String getDescription(){
        return description;
    }
    public String getCategory(){
        return category;
    }
    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }
}
