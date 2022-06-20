import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react'

const Home = () => {
const[name,setname]= useState('')
const[Price,setPrice]= useState('')
const[qty,setQty]= useState('')
const[brand,setbrand]= useState('')

const btnClick=()=>{
    console.log(
        name, Price,qty,brand
    )
}

  return (
    <>
    <div className='home'>
    <h1>Poduct Details</h1>
    <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name"  value={name}
    onChange={
        (e)=>{
            setname(e.target.value)
        }
    }
    />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="Number" placeholder="Price" value={Price}
    onChange={(e)=>{
        setPrice(e.target.value)

    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="Number" placeholder="Quantity" value={qty}
    onChange={(e)=>{
        setQty(e.target.value)
    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Brand</Form.Label>
    <Form.Control type="text" placeholder="Brand" value={brand}
    onChange={(e)=>{
        setbrand(e.target.value)

    }}
    />
  </Form.Group>

  <Button variant="primary" 
  onClick={btnClick}>
    Submit
  </Button>
</Form>
 

      
      </div>
    </>
    
  )
}

export default Home
