# shopping_VueSequelizeSql3
# Tables - 
'''
Vendors, Products, Cart

Products should have vendorId foreignKey

1. Add Product Page
                We should be able to add products
                with the following values - 
                
                a) Product Name
                b) Product Vendor (select)
                c) Product Price

2. Product Listing Page
                Products should show up in form of cards
                with details and an 'add' button

                When we click on 'add', it should be added
                to cart (or, qty++)

                Note: We should be able to filter by vendor

3. Cart Page
                
                A table of all products on cart

                Product                Quantity              Rate       Amount
                mobile                  - 1+                        8000       8000
                laptop                   - 1+                        20000    20000
                xbox                      - 2 +                       30000    60000
                                                                TOTAL                   88000


NOTES:
- Video uses jQuery, you should try to use VueJS
- In video cart is in localStorage, you must save
               cart to Database


'''
