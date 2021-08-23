const express =require('express');

const app = express();

const { products } = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const{id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProduct)
})
// dummy solution
/*app.get('/api/products/1',(req,res)=>{
    const singleProd = products.find((product)=> product.id === 1)
    res.json(singleProd)
})*/
// dummy solution end
// routing params solution
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req);
    //console.log(req.params);
    const{productID}=req.params;
    const singleProd = products.find((product)=> product.id === Number(productID))
    if(!singleProd){
        res.status(404).send('Page not found')
    }
    res.json(singleProd)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
console.log(req.params);
res.send('testing')
})
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)

    const { searchs, limit } = req.query

    let sortedProducts = [...products]
   
    if(searchs){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(searchs)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
    //res.send('hello hello')
})
app.listen(5000,()=>{
    console.log('Server is listening on plort 5000')
}) 