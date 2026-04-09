function lookieDiscount(){
    let budget=document.getElementById("budget").value;
    let yoDisc=budget * .2;

    // display thingy
    document.getElementById("dicount").innerHTML=`
     <div class="container p-3 col-sm-6 m-3 bg-dark rounded text-white">
        <h5>Recommended Brands:</h5>
            <button type="button"class="btn btn-outline-danger">Acer</button>
            <button type="button"class="btn btn-outline-primary">Asus</button>
            <button type="button"class="btn btn-outline-warning">Lenovo</button>
            <h5>Eligible Discount: <span class="badge bg-secondary">10000.00</span></h5>
    </div> `;

function lookieDiscount(){
    let budget=Number(document.getElementById("budget").value);
