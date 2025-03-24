// import React, { useState } from "react";
// import './AddProduct.css'
// import upload_area from '../../assets/upload.png'
// const AddProduct =()=>{
//     const [image,setImage]=useState(false)
//     const [productDetails,setProductDetails] =useState({
//         name: "",
//         image:"",
//         category:"women",
//         new_price:"",
//         old_price :""
//     })

//     const imageHandler =(e)=>{
// setImage(e.target.files[0]);
//     }
// const changeHandler =(e)=>{
//     setProductDetails ({...productDetails,[e.target.name]:e.target.value})

// }

// const Add_Product =async ()=>{
//     console.log(productDetails)
//     let responseData;
//     let product = productDetails;

//     let formData = new FormData();
//     formData.append('product',image);

//     await fetch('https://shopify-backend-0l0w.onrender.com/upload',{
//         method :"POST",
//         headers:{
//             Accept :'application/json',
//         },
//         body:formData,
//     }).then((resp)=>resp.json()).then((data)=>{responseData =data});

//     if(responseData.success){
//         product.image =responseData.image_url;
//         console.log(product)
//         await fetch('https://shopify-backend-0l0w.onrender.com/addproduct',{
//             method:"POST",
//             headers:{
//                 Accept:"application/json",
//                 'Content-Type' :"application/json",
//             },
//             body:JSON.stringify(product),

//         }).then((resp)=>resp.json()).then((data)=>{
//             data.success?alert("Product Added?"):alert("Failed")
//         })

//     }
// }

//   return(
//     <div className="add-product">
// <div className="addproduct-itemfield">
//     <p>Product title</p>
//     <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here"></input>
// </div>
// <div className="addproduct-price">
//     <div className="addproduct-itemfield">
//         <p>Price</p>
//         <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type Here"></input>
//     </div>
//     <div className="addproduct-itemfield">
//         <p>Offer Price</p>
//         <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type Here"></input>
//     </div>
// </div>
// <div className="addproduct-itemfield">
//     <p>Product Category</p>
//     <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
//         <option value="women" >Women</option>
//         <option value="men" >Men</option>
//         <option value="kid" >Kid</option>
//     </select>
// </div>
// <div className="addproduct-itemfield">
//     <label htmlFor="file-input">
//         <img className="addproduct-thumnail-img" src={image?URL.createObjectURL(image):upload_area}></img>
//     </label>
//     <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
// </div>
// <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>
//     </div>
//   )
// }

// export default AddProduct


//new code


import React, { useState } from "react";
import './AddProduct.css';
import upload_area from '../../assets/upload.png';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        if (!image || !productDetails.name || !productDetails.new_price || !productDetails.old_price) {
            alert("Please fill in all fields and upload an image.");
            return;
        }

        let responseData;
        let product = { ...productDetails };

        let formData = new FormData();
        formData.append("product", image);

        try {
            // Upload Image First
            const uploadResponse = await fetch("https://shopify-backend-0l0w.onrender.com/upload", {
                method: "POST",
                body: formData,
            });

            responseData = await uploadResponse.json();

            if (!responseData.success || !responseData.image_url) {
                alert("Image upload failed.");
                return;
            }

            product.image = responseData.image_url;

            // Now Add Product with Image URL
            const addProductResponse = await fetch("https://shopify-backend-0l0w.onrender.com/addproduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            const addProductData = await addProductResponse.json();

            if (addProductData.success) {
                alert("Product Added Successfully!");
                setProductDetails({ name: "", image: "", category: "women", new_price: "", old_price: "" });
                setImage(null);
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the product.");
        }
    };

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type Here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type Here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img className="addproduct-thumbnail-img" src={image ? URL.createObjectURL(image) : upload_area} alt="Upload" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">ADD</button>
        </div>
    );
};

export default AddProduct;
