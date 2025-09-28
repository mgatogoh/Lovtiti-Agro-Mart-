// SPDX-License-Identifier: MIT

contract agro {
    // storage
    struct product {
        uint price;
        address owner;
        uint stock;
    }
    mapping(uint => product) public products; 
    mapping(address => uint[]) public farmer;
    uint nextid = 1;

    //events
    event productCreated(uint indexed productId, uint price, address farmer, uint amount);
    event farmerJoined(address farmer);
    event stockUpdated(uint amount, uint pid);
    event priceIncreased(uint price, uint pid);
    event productBought(uint indexed productId, address buyer, address farmer, uint amount);

    //functions
    function addProduct( uint price, uint amount) public {
        require(farmer[msg.sender].length != 0, "you are not a farmer");
        product memory newProduct = product(price, msg.sender, amount);
        require(products[nextid].owner == address(0), "product already exists");
        products[nextid] = (newProduct);
        farmer[msg.sender].push(nextid); // 0 placeholder for random generated number
        emit productCreated(nextid, price, msg.sender, amount);
        nextid++;
    }
    function increasePrice( uint price, uint pid) public {
        require(products[pid].owner == msg.sender, "you are not the owner of this product");
        products[pid].price = price;
        emit priceIncreased(price, pid);
    }
    function updateStock( uint stock, uint pid) public {
        require(products[pid].owner == msg.sender, "you are not the owner of this product");
        products[pid].stock = stock;
        emit stockUpdated(stock, pid);
    }
    function createFarmer() public {
        require(farmer[msg.sender].length == 0, "farmer already exists");
        farmer[msg.sender] = new uint[](0);
        emit farmerJoined(msg.sender);
        
    }
    function buyproduct(uint pid, uint amount) public payable {
        // Implement the logic for buying a product here
        require(products[pid].owner != address(0), "product does not exist");
        require(products[pid].owner != msg.sender, "you cannot buy your own product");
        require(products[pid].stock >= amount, "not enough stock");
        require((products[pid].price)*amount <= msg.value, "insufficient funds");
        products[pid].stock -= amount;
        (bool sent,) = products[pid].owner.call{value: msg.value}("");
        require(sent, "Payment failed");
        emit productBought(pid, msg.sender, products[pid].owner, amount);
    }

    //view functions
    function isFarmer(address user) public view returns (bool) {
        return farmer[user].length > 0;
    }
    function viewProducts(address _farmer) public view returns (product[] memory) {
        uint[] memory ids = farmer[_farmer];
        product[] memory items = new product[](ids.length);
        for (uint i = 0; i < ids.length; i++) {
            items[i] = products[ids[i]];
        }
        return items;
    }
}
