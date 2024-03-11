import {useEffect, useState} from 'react'

const baseUrl = 'https://v1.slashapi.com/team-15/google-sheets/3imK1w06aB/';
const headers = {'Content-Type': 'application/json'}

export async function fetchRequest (finalUrl, method, body) {
  const url = `${baseUrl + finalUrl}`
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    })
    const responseJson = await response.json();
    return responseJson.data;
  }
  catch (error) {
    console.error(error);
  }
}

export function useProducts(url = '') {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await fetch(`${baseUrl}${url}`);
      const responseJson = await response.json();
      setProducts(responseJson.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message)
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading }
}