import React from 'react';
import Checkbox from '../../shared/Checkbox';
import { Wrapper, Title, Array } from './ShoppingList.styles';
//import { useSelector } from 'react-redux';
//import { selectAllProducts } from '../../store/Products/Products.selectors';

function ShoppingList({ title, products, onToggle }) {
    //const productsFromRedux = useSelector(selectAllProducts);

    return (
        <Wrapper>
            <Title>{title} : </Title>

            <Array>
                {
                    products.map(product =>
                        <Checkbox
                            key={product.id}
                            title={product.name}
                            value={product.checked}
                            onClick={() => onToggle(product.id, product.checked, product.name)}
                        />
                    )
                }

            </Array>

        </Wrapper>
    )
}
export default ShoppingList;