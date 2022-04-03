import { useEffect, useState } from "react"

const useTShirt = () => {
  const [tShirt, setTShirt] = useState([]);
  useEffect(() => {
    fetch('tshirt.json')
    .then(res => res.json())
    .then(data => setTShirt(data));
  },[]);
  return [tShirt, useTShirt]
};
export default useTShirt;