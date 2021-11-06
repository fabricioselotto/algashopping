import React from 'react';
import Checkbox from '../../shared/Checkbox';
import { Wrapper, Title, Array } from './ShoppingList.styles';

function ShoppingList({ title, products, onToggle }) {
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