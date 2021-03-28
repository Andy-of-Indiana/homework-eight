var home = `
<div class="home">
    <div class="homeContent">
        <h1>Welcome to Continent Buyer. net</h1>
        <h2>Browse and shop to your heart's content</h2>
    </div>
</div>
`;
var about = `
<div class="about">
    <div class="aboutContent">
        <h1>about us</h1>
        <div class="aboutWords">
            <p>We here at Continent Buyer. net is dedicated to satisifiying the needs and wants of our customers. The continents we sell are very real and maintained with intense care. We sell continents at a fine and affordable price, that you could almost say it is too good to be true. The end off lets us give you a virbrate selection of continents to browse and purchase.</p>
        </div>
    </div>
</div>
`;
var products = `
<div class="products">
    <div class="productsContent">
        <h1>Products</h1>
        <p>Welcome to our fine selection of continents. These amazing landmasses are vast and filled with breathtaking geographic locations. You are welcome to look through and purchase one or more continents at your lesiure. Please note that ContinentBuyer is not responsible for any damages with purchased continents.</p>
    </div>
    <div class="productsGallery">
        <div class="productsRow">
            <div class="productSection">
                <div class="productsImg img1">
                    <h2>Africa</h2>
                    <p>$18.99</p>
                </div>
            </div>
            <div class="productSection">
                <div class="productsImg img2">
                    <h2>Asia</h2>
                    <p>$12.99</p>
                </div>
            </div>
        </div>
        <div class="productsRow">
            <div class="productSection">
                <div class="productsImg img3">
                    <h2>Antarticia</h2>
                    <p>$1.99</p>
                </div>
            </div>
            <div class="productSection">
                <div class="productsImg img4">
                    <h2>Australia</h2>
                    <p>$8.99</p>
                </div>
            </div>
        </div>
        <div class="productsRow">
            <div class="productSection">
                <div class="productsImg img5">
                    <h2>North America</h2>
                    <p>$19.99</p>
                </div>
            </div>
            <div class="productSection">
                <div class="productsImg img6">
                    <h2>Europe</h2>
                    <p>$9.99</p>
                </div>
            </div>
        </div>
        <div class="productsRow">
            <div class="productSection">
                <div class="productsImg img7">
                    <h2>South America</h2>
                    <p>$14.99</p>
                </div>
            </div>
            <div class="productSection"></div>
        </div>
    </div>
</div>
`;
var contact = `
<div class="contact">
    <div class="contactContent">
        <h1>contact us</h1>
        <p>contact us @ ContinentBuyer412@hotmail.com or call us @ (111)-222-3333</p>
    </div>
</div>        
`;

function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID;

        $("#app").html(eval(contentID));
    });
}

$(document).ready(function () {
    init();
});